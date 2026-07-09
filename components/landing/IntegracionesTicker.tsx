"use client";

import { Truck, ShieldCheck, Gauge } from "lucide-react";

const features = [
  {
    icon: <Truck size={17} />,
    text: (
      <>
        Despachos más
        <br />
        rápidos
      </>
    ),
  },
  {
    icon: <ShieldCheck size={17} />,
    text: (
      <>
        Experiencia de entrega
        <br />
        superior
      </>
    ),
  },
  {
    icon: <Gauge size={17} />,
    text: (
      <>
        Más control y visibilidad
        <br />
        en tiempo real
      </>
    ),
  },
];

export default function IntegracionesTicker() {
  return (
    <section className="bg-paper py-3">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d10]">
          <div className="flex snap-x snap-mandatory divide-x divide-white/10 overflow-x-auto [scrollbar-width:none] md:overflow-visible md:snap-none [&::-webkit-scrollbar]:hidden">
            <div className="flex w-[46%] max-w-[190px] flex-shrink-0 snap-start items-center px-5 py-4 font-mono text-xs leading-snug text-[#8b8994] md:w-auto md:max-w-none md:flex-1">
              Integraciones
              <br />
              estratégicas
            </div>

            <div className="flex w-[56%] max-w-[220px] flex-shrink-0 snap-start items-center gap-1.5 px-5 py-4 md:w-auto md:max-w-none md:flex-1">
              <span className="font-heading text-xl font-extrabold leading-none text-white">
                Uber
              </span>
              <span className="text-sm text-[#8b8994]">Direct</span>
            </div>

            {features.map((f, i) => (
              <div
                key={i}
                className="flex w-[62%] max-w-[240px] flex-shrink-0 snap-start items-center gap-2.5 px-5 py-4 md:w-auto md:max-w-none md:flex-1"
              >
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-lime">
                  {f.icon}
                </span>
                <span className="text-[13px] leading-snug text-white">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
