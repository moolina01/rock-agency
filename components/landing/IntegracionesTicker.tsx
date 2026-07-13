"use client";

import { useRef, useState } from "react";
import { Truck, ShieldCheck, Gauge, ChevronRight } from "lucide-react";

const features = [
  {
    icon: <Truck size={14} />,
    text: (
      <>
        Despachos más
        <br />
        rápidos
      </>
    ),
  },
  {
    icon: <ShieldCheck size={14} />,
    text: (
      <>
        Experiencia de entrega
        <br />
        superior
      </>
    ),
  },
  {
    icon: <Gauge size={14} />,
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [swiped, setSwiped] = useState(false);

  return (
    <section className="bg-paper py-3">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <div className="relative">
          <div
            ref={trackRef}
            onScroll={() => setSwiped(true)}
            className="overflow-hidden overflow-x-auto touch-pan-x rounded-2xl border border-white/10 bg-[#0d0d10] [scrollbar-width:none] md:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex snap-x snap-proximity divide-x divide-white/10 md:snap-none">
              <div className="flex w-[108px] max-w-[108px] flex-shrink-0 snap-start items-center px-3.5 py-3.5 font-mono text-[11px] leading-snug text-[#8b8994] md:w-auto md:max-w-none md:flex-1 md:px-5 md:py-4 md:text-xs">
                Integraciones
                <br />
                estratégicas
              </div>

              <div className="flex w-[118px] max-w-[118px] flex-shrink-0 snap-start items-center gap-1.5 px-3.5 py-3.5 md:w-auto md:max-w-none md:flex-1 md:px-5 md:py-4">
                <span className="font-heading text-lg font-extrabold leading-none text-white md:text-xl">
                  Uber
                </span>
                <span className="text-xs text-[#8b8994] md:text-sm">Direct</span>
              </div>

              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex w-[112px] max-w-[112px] flex-shrink-0 snap-start items-center gap-2 px-3.5 py-3.5 md:w-auto md:max-w-none md:flex-1 md:gap-2.5 md:px-5 md:py-4"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-lime md:h-7 md:w-7">
                    {f.icon}
                  </span>
                  <span className="text-[11px] leading-snug text-white md:text-[13px]">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {!swiped && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 animate-swipe-hint items-center justify-center rounded-full bg-white text-[#0d0d10] shadow-[0_6px_16px_-4px_rgba(0,0,0,0.4)] md:hidden"
            >
              <ChevronRight size={18} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
