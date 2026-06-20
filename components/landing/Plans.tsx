"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Plan = {
  name: string;
  price: string;
  tagline: string;
  /** Plazo de entrega estimado (confirmar según capacidad real del equipo) */
  delivery: string;
  accent: string;
  ctaLabel: string;
  /** Nombre del plan inmediatamente inferior (para el "todo lo de X, más:") */
  inheritsFrom?: string;
  /** Diferenciadores con foco en valor (sin baseline repetido) */
  highlights: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Launch",
    price: "$1.500.000",
    tagline: "E-commerce funcional listo para operar",
    delivery: "~2–3 semanas",
    accent: "#3B82F6",
    ctaLabel: "Empezar con Launch",
    highlights: [
      "Implementación Shopify estándar",
      "Configuración de theme base",
      "Carga inicial de productos (hasta 100 SKU)",
      "Estructura básica de tienda",
    ],
  },
  {
    name: "Growth",
    price: "$2.500.000",
    tagline: "E-commerce estructurado y escalable",
    delivery: "~4–5 semanas",
    accent: "#402178",
    ctaLabel: "Empezar con Growth",
    inheritsFrom: "Launch",
    featured: true,
    highlights: [
      "Diseño y personalización de theme",
      "Configuración avanzada de catálogo (hasta 500 SKU)",
      "Estructura de navegación optimizada",
      "Integración de apps de operación",
      "Configuración de procesos internos de tienda",
      "Configuración de correos corporativos",
      "Capacitación de uso",
      "Acceso a Fium™ — entregas en menos de 60 min",
    ],
  },
  {
    name: "Scale Pro",
    price: "$3.500.000",
    tagline: "Arquitectura e-commerce avanzada",
    delivery: "~6–8 semanas",
    accent: "#E11D48",
    ctaLabel: "Empezar con Scale Pro",
    inheritsFrom: "Growth",
    highlights: [
      "Desarrollo Shopify avanzado / Shopify Plus ready",
      "Arquitectura de catálogo compleja (hasta 1.000+ SKU)",
      "Estructura avanzada de navegación y colecciones",
      "Funcionalidades a medida dentro de Shopify",
      "Flujos operativos avanzados",
      "Soporte e implementación prioritarios",
      "Acceso prioritario a Fium™",
    ],
  },
];

const sharedBenefits = [
  "Tienda Shopify lista para vender",
  "Configuración de pagos",
  "Configuración logística inicial",
  "Herramientas de medición y analítica",
  "Centro de FAQ (Preguntas Frecuentes)",
  "Correos corporativos profesionales",
  "Capacitación inicial",
  "Acompañamiento de lanzamiento",
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 10.5l3.2 3.2L15 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureItem({
  label,
  featured,
}: {
  label: string;
  featured?: boolean;
}) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <span
        className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
          featured ? "bg-white/15 text-white" : "bg-violet-100 text-[#402178]"
        }`}
      >
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
      <span className={featured ? "text-violet-50" : "text-zinc-600"}>
        {label}
      </span>
    </li>
  );
}

export default function Plans() {
  const [openPlans, setOpenPlans] = useState<Record<string, boolean>>({});

  const toggle = (name: string) =>
    setOpenPlans((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <section id="planes" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#402178]" />
            Planes • Shopify • Transparencia
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900">
            Planes con los que trabajamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Cada proyecto requiere un nivel distinto de arquitectura e-commerce.
            Elige el plan según la{" "}
            <span className="font-semibold text-zinc-900">
              complejidad de tu operación
            </span>
            , no por el tamaño de tu empresa.
          </p>
          <p className="mx-auto mt-3 text-sm text-zinc-400">
            Valores de proyecto, pago único + IVA.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="grid items-stretch gap-8 lg:grid-cols-3"
        >
          {plans.map((plan) => {
            const isOpen = !!openPlans[plan.name];
            return (
              <motion.div
                key={plan.name}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease }}
                className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                  plan.featured
                    ? "border-transparent bg-[#402178] text-white ring-2 ring-[#402178] lg:-mt-4 lg:mb-4"
                    : "border-zinc-200 bg-white text-zinc-900"
                }`}
              >
                {/* Top accent bar */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ background: plan.featured ? "#FBBF24" : plan.accent }}
                />

                {plan.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-zinc-900 shadow-sm">
                    ⭐ Más popular
                  </span>
                )}

                {/* Title + tagline */}
                <h3
                  className={`text-xl font-bold ${
                    plan.featured ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 min-h-[2.5rem] text-sm ${
                    plan.featured ? "text-violet-100" : "text-zinc-500"
                  }`}
                >
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mt-6">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span
                    className={`mt-1 block text-xs ${
                      plan.featured ? "text-violet-200" : "text-zinc-400"
                    }`}
                  >
                    Pago único • + IVA
                  </span>
                </div>

                {/* Plazo de entrega */}
                <div
                  className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                    plan.featured
                      ? "bg-white/15 text-white"
                      : "bg-zinc-100 text-zinc-600"
                  }`}
                >
                  <span aria-hidden="true">⏱</span>
                  Entrega estimada {plan.delivery}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 ${
                    plan.featured
                      ? "bg-white text-[#402178] hover:bg-violet-50 focus:ring-white/50"
                      : "bg-[#402178] text-white hover:bg-violet-800 focus:ring-violet-300"
                  }`}
                >
                  {plan.ctaLabel}
                  <span className="ml-2">→</span>
                </Link>

                {/* Divider */}
                <div
                  className={`my-7 h-px w-full ${
                    plan.featured ? "bg-white/20" : "bg-zinc-200"
                  }`}
                />

                {/* "Todo lo de X, más:" */}
                {plan.inheritsFrom && (
                  <p
                    className={`mb-4 text-sm font-semibold ${
                      plan.featured ? "text-violet-100" : "text-zinc-700"
                    }`}
                  >
                    Todo lo de {plan.inheritsFrom}, y además:
                  </p>
                )}

                {/* Highlights */}
                <ul className="flex flex-col gap-3">
                  {plan.highlights.map((feature) => (
                    <FeatureItem
                      key={feature}
                      label={feature}
                      featured={plan.featured}
                    />
                  ))}
                </ul>

                {/* Base común (expandible) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="shared"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`mt-5 border-t pt-5 ${
                          plan.featured ? "border-white/20" : "border-zinc-200"
                        }`}
                      >
                        <p
                          className={`mb-3 text-xs font-semibold uppercase tracking-wide ${
                            plan.featured ? "text-violet-200" : "text-zinc-400"
                          }`}
                        >
                          También incluye, como todos los planes
                        </p>
                        <ul className="flex flex-col gap-3">
                          {sharedBenefits.map((benefit) => (
                            <FeatureItem
                              key={benefit}
                              label={benefit}
                              featured={plan.featured}
                            />
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Toggle */}
                <button
                  type="button"
                  onClick={() => toggle(plan.name)}
                  aria-expanded={isOpen}
                  className={`mt-6 inline-flex items-center justify-center gap-1 text-sm font-semibold transition ${
                    plan.featured
                      ? "text-white hover:text-violet-100"
                      : "text-[#402178] hover:text-violet-800"
                  }`}
                >
                  {isOpen ? "Ver menos" : "Ver todo lo incluido"}
                  <span
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA a medida */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl bg-[#402178] p-8 text-center md:flex-row md:text-left"
        >
          <div>
            <h3 className="text-xl font-bold text-white">
              ¿Tu proyecto no encaja en un plan?
            </h3>
            <p className="mt-1 text-sm text-violet-100">
              Diseñamos una propuesta a medida según tus objetivos y catálogo.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex flex-none items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#402178] shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Hablemos
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
