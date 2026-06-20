"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Fium() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="fium" className="relative overflow-hidden bg-white py-24">
      {/* Glow sutil */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 h-[420px] w-[420px] rounded-full bg-violet-300/25 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        {/* LEFT: Copy */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          {/* Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#402178]" />
            App exclusiva • powered by Rock Agency
          </div>

          {/* Logo Fium */}
          <Image
            src="/fium-logo.svg"
            alt="Fium"
            width={150}
            height={47}
            className="mb-5 h-10 w-auto"
          />

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-4xl">
            La app que hace que tu tienda entregue en{" "}
            <span className="relative whitespace-nowrap text-[#402178]">
              menos de 60 min
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1 h-2.5 rounded-full bg-[#C9F03C]/60"
              />
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 md:text-base">
            Desarrollada por Rock Agency e integrada nativamente a tu tienda
            Shopify. Conecta con Uber Direct y despacha cada pedido el mismo día,
            de forma automática.
          </p>

          {/* Badges de producto */}
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 shadow-sm">
              <Image
                src="/shopify.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              Integrada con Shopify
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-[#402178] shadow-sm">
              ⭐ Exclusiva para clientes Rock Agency
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full bg-[#402178] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              Quiero Fium en mi tienda
              <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <span className="text-sm font-medium text-zinc-500">
              Incluida en Growth y Scale Pro
            </span>
          </div>
        </motion.div>

        {/* RIGHT: Mockup de la app */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease, delay: 0.05 }}
          className="relative flex justify-center"
        >
          {/* Halo de marca */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-3xl"
          />

          <div className="relative w-[280px] rounded-[2.5rem] border-[6px] border-zinc-900 bg-zinc-900 shadow-2xl">
            {/* Notch */}
            <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-zinc-900" />

            {/* Pantalla */}
            <div className="overflow-hidden rounded-[2rem] bg-white">
              {/* Header app */}
              <div className="flex items-center justify-between bg-[#4B2BE0] px-5 pb-4 pt-7">
                <Image
                  src="/fium-icono.svg"
                  alt="Fium"
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white">
                  <Image
                    src="/shopify.png"
                    alt=""
                    width={12}
                    height={12}
                    className="h-3 w-3 object-contain"
                  />
                  Conectado
                </span>
              </div>

              {/* Body */}
              <div className="px-5 py-6">
                <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-400">
                  Pedido #1043 • En reparto
                </p>

                <div className="mt-3 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-zinc-900">
                    55
                  </span>
                  <span className="mb-1.5 text-lg font-bold text-zinc-400">
                    min
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-500">
                  Llega vía Uber Direct
                </p>

                {/* Barra de progreso */}
                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-3/4 rounded-full bg-[#C9F03C]" />
                </div>

                {/* Estados */}
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center gap-2.5 text-zinc-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4B2BE0] text-[11px] text-white">
                      ✓
                    </span>
                    Pedido confirmado en Shopify
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4B2BE0] text-[11px] text-white">
                      ✓
                    </span>
                    Courier en camino
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-400">
                    <span className="h-5 w-5 rounded-full border-2 border-dashed border-zinc-300" />
                    Entregado al cliente
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
