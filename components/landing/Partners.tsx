"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const partners = [
  { name: "Shopify", src: "/shopify.webp" },
  { name: "Shopify", src: "/fintoc.png" },
  { name: "Shopify", src: "/shipit.webp" },
  { name: "Shopify", src: "/zoho.png" },
   { name: "Shopify", src: "/flow.png" },
  // { name: "Shopify", src: "/partner-shopify.svg" },
  // { name: "Shopify", src: "/partner-shopify.svg" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Partners() {
  const reduceMotion = useReducedMotion();
  const row = [...partners, ...partners]; // duplicamos para loop limpio

  return (
    <section className="relative overflow-hidden bg-white pb-20">
      {/* Fade en bordes (look premium) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
            Nuestros Partners
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-500 md:text-base">
            Unidos por una búsqueda constante de la perfección y un propósito común.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="mt-12">
          {reduceMotion ? (
            // ✅ Accesible: sin animación
            <div className="flex flex-wrap items-center justify-center gap-10">
              {partners.map((p, i) => (
                <Logo key={i} name={p.name} src={p.src} />
              ))}
            </div>
          ) : (
            <div className="relative">
              <motion.div
                className="flex w-max items-center gap-12"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 18,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {row.map((p, i) => (
                  <Logo key={i} name={p.name} src={p.src} />
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Logo({ name, src }: { name: string; src: string }) {
  return (
    <div className="group flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Image
        src={src}
        alt={name}
        width={96}
        height={32}
        className="h-8 w-auto opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
      />
    </div>
  );
}
