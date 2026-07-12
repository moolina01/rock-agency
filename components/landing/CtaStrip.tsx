"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CtaStrip() {
  return (
    <section id="contacto" className="bg-paper pb-24">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal className="rounded-3xl bg-green px-6 py-16 text-center text-[#f4f1ea] sm:px-12">
          <h2 className="mb-4 text-[28px] font-extrabold sm:text-4xl lg:text-[44px]">
            Juntemos los números
          </h2>
          <p className="mx-auto mb-8 max-w-[520px] text-[17px] text-[#BFD4C7]">
            Gratis y sin compromiso, te mostramos cuánta plata estás dejando
            sobre la mesa: por comisiones, por una tienda que no convierte, o
            por no tener tienda todavía. 30 minutos, con tus números reales —
            no con promedios de internet.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 text-[15px] font-semibold text-green shadow-[0_6px_0_#a3c72c] transition hover:-translate-y-0.5 hover:shadow-[0_8px_0_#a3c72c]"
          >
            Quiero mi diagnóstico gratis →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
