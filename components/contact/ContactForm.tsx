"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SERVICIOS = [
  "Tienda nueva desde cero",
  "Rediseño de tienda existente", 
  "Migración a Shopify",
  "Shopify Plus",
  "Optimización y CRO",
  "Otro",
];

type Fields = {
  nombre: string;
  email: string;
  whatsapp: string;
  negocio: string;
  servicio: string;
  mensaje: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.nombre.trim() || fields.nombre.trim().length < 2)
    errors.nombre = "Ingresa tu nombre (mínimo 2 caracteres).";
  if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Ingresa un correo válido.";
  if (!fields.servicio)
    errors.servicio = "Selecciona el servicio que necesitas.";
  return errors;
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    nombre: "",
    email: "",
    whatsapp: "",
    negocio: "",
    servicio: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Fields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(fields);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-200 bg-white px-8 py-16 text-center shadow-sm"
      >
        <CheckCircle className="h-12 w-12 text-[#402178]" strokeWidth={1.5} />
        <h2 className="text-xl font-bold text-zinc-900">¡Mensaje recibido!</h2>
        <p className="max-w-xs text-zinc-500">
          Gracias por escribirnos. Te contactaremos en menos de 24 horas.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      noValidate
      className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8 shadow-sm"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Nombre */}
        <Field label="Nombre *" error={errors.nombre}>
          <input
            type="text"
            name="nombre"
            value={fields.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={inputClass(!!errors.nombre)}
          />
        </Field>

        {/* Email */}
        <Field label="Correo electrónico *" error={errors.email}>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
            className={inputClass(!!errors.email)}
          />
        </Field>

        {/* WhatsApp */}
        <Field label="WhatsApp / Teléfono">
          <input
            type="tel"
            name="whatsapp"
            value={fields.whatsapp}
            onChange={handleChange}
            placeholder="+52 55 0000 0000"
            className={inputClass(false)}
          />
        </Field>

        {/* Negocio */}
        <Field label="Nombre de tu negocio">
          <input
            type="text"
            name="negocio"
            value={fields.negocio}
            onChange={handleChange}
            placeholder="¿Cómo se llama tu marca?"
            className={inputClass(false)}
          />
        </Field>

        {/* Servicio */}
        <Field label="¿En qué te podemos ayudar? *" error={errors.servicio} className="sm:col-span-2">
          <select
            name="servicio"
            value={fields.servicio}
            onChange={handleChange}
            className={inputClass(!!errors.servicio) + " cursor-pointer"}
          >
            <option value="">Selecciona una opción</option>
            {SERVICIOS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        {/* Mensaje */}
        <Field label="Cuéntanos más" className="sm:col-span-2">
          <textarea
            name="mensaje"
            value={fields.mensaje}
            onChange={handleChange}
            rows={4}
            placeholder="Descríbenos tu proyecto, presupuesto aproximado, plazos..."
            className={inputClass(false) + " resize-none"}
          />
        </Field>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-sm text-red-500"
          >
            Ocurrió un error al enviar. Intenta de nuevo o escríbenos directo a mhuryy22@gmail.com
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#402178] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-800 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-violet-300"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar mensaje
            <span className="inline-block transition group-hover:translate-x-0.5">→</span>
          </>
        )}
      </button>
    </motion.form>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400",
    "outline-none transition focus:ring-2",
    hasError
      ? "border-red-300 focus:ring-red-200"
      : "border-zinc-200 focus:ring-violet-200 focus:border-violet-300",
  ].join(" ");
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-zinc-700">{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1 text-xs text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
