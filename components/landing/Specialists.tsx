"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Specialists() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="nosotros" className="relative bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">
        {/* LEFT: Illustration */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="relative"
        >
          {/* “Card” sutil detrás (coherente con Hero) */}
          <div className="pointer-events-none absolute inset-0 mx-auto max-w-[560px] rounded-3xl border border-zinc-200 bg-white/60 shadow-sm backdrop-blur" />

          <div className="relative mx-auto max-w-[560px] p-6">
            <Image
              src="/especializastas.png"
              alt="Ilustración de ecommerce"
              width={560}
              height={420}
              className="mx-auto select-none"
              priority={false}
            />
          </div>
        </motion.div>

        {/* RIGHT: Copy */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
        >
          {/* Pill consistente con Hero */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#402178]" />
            Equipo experto • Shopify • Conversión
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
            Especialistas en Shopify <br className="hidden md:block" />
            a tu alcance.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 md:text-base">
            Transformamos ideas originales en experiencias de venta emocionantes a
            través de Shopify, la plataforma líder que impulsa millones de
            negocios globales. Hacemos que vender online sea simple, innovador y
            altamente rentable.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contacto"
              className="group inline-flex items-center justify-center rounded-full bg-[#402178] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              Acerca de nosotros
              <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <Link
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-7 py-3 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-200"
            >
              Ver servicios
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
