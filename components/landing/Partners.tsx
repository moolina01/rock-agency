"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const partners = [
  { name: "Shopify", src: "/Shopify-Logo.jpg" },
  { name: "Fintoc", src: "/fintoc.png" },
  { name: "Shipit", src: "/shipit.webp" },
  { name: "Zoho", src: "/zohologoficial.jpg" },
  { name: "Flow", src: "/flowlogo.png" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Partners() {
  const reduceMotion = useReducedMotion();
  // Repetimos lo suficiente para un loop continuo sin huecos en pantallas anchas
  const track = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="relative overflow-hidden bg-white pb-20">
      {/* Fade en bordes (look premium) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#402178]" />
            Partners e integraciones
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
            Nuestros Partners
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-500 md:text-base">
            Unidos por una búsqueda constante de la perfección y un propósito
            común.
          </p>
        </motion.div>

        {/* Logos */}
        <div className="mt-12">
          {reduceMotion ? (
            // Accesible: sin animación
            <div className="flex flex-wrap items-center justify-center gap-6">
              {partners.map((p, i) => (
                <Logo key={i} name={p.name} src={p.src} />
              ))}
            </div>
          ) : (
            <div className="relative">
              <motion.div
                className="flex w-max items-center gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              >
                {track.map((p, i) => (
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
    <div className="flex h-[88px] w-[180px] flex-none items-center justify-center rounded-2xl border border-zinc-200 bg-white px-6 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
      <Image
        src={src}
        alt={name}
        width={160}
        height={48}
        className="max-h-9 w-auto max-w-[120px] object-contain"
      />
    </div>
  );
}
