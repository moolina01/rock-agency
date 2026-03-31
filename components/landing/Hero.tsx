"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
// o si prefieres: const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7fb]">
      {/* Fondo pro: glow + grid sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-indigo-300/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(24,24,27,0.10) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#402178]" />
            Shopify Experts • Diseño + Conversión
          </motion.div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-900 md:text-6xl">
            Construimos{" "}
            <span className="relative text-[#402178]">
              Tiendas Shopify
              <span className="absolute inset-x-0 -bottom-1 h-[10px] rounded-full bg-[#402178]/10" />
            </span>
            <br />
            Que Venden
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            E-commerce hecho con precisión, velocidad y pasión. Expertos en Shopify
            obsesionados con el crecimiento.
          </p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full bg-[#402178] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              Comienza ahora
              <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-7 py-3 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-200"
            >
              Ver servicios
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Performance & SEO
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              UX / CRO
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Shopify Plus listo
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 mx-auto max-w-[520px] rounded-3xl border border-zinc-200 bg-white/60 shadow-sm backdrop-blur" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto max-w-[520px] p-6"
          >
            <Image
              src="/imagen11.png"
              alt="Ilustración ecommerce"
              width={520}
              height={420}
              priority
              className="mx-auto select-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
