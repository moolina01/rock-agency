"use client";

import Reveal from "@/components/ui/Reveal";
import SectionMarker from "@/components/ui/SectionMarker";

const cells = [
  {
    tone: "bg-indigo text-white row-span-2",
    kicker: "text-[#C9BCFF]",
    k: "Comisión por pedido",
    v: "$0",
    vs: "Nada de comisiones escondidas: cada peso que vendes es tuyo.",
    delay: 0 as const,
  },
  {
    tone: "bg-lime text-green",
    kicker: "text-green opacity-70",
    k: "Delivery con Fium",
    v: (
      <>
        &lt;60<span className="text-xl">min</span>
      </>
    ),
    vs: "Sin contratar motoboy.",
    delay: 1 as const,
  },
  {
    tone: "border border-line bg-paper-2 text-ink",
    kicker: "text-ink-faint",
    k: "Tu tienda lista en",
    v: (
      <>
        4<span className="text-xl">sem</span>
      </>
    ),
    vs: "Recibiendo pedidos reales.",
    delay: 2 as const,
  },
  {
    tone: "bg-[#16151a] text-white col-span-2",
    kicker: "text-[#9C9AA6]",
    k: "Soporte",
    v: "24/7",
    vs: "Siempre disponible cuando lo necesitas.",
    delay: 1 as const,
  },
];

export default function Numeros() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal>
          <SectionMarker num="06" label="Por qué confiar en nosotros" />
        </Reveal>

        <div className="grid grid-cols-2 auto-rows-[150px] gap-3.5 sm:auto-rows-[170px] sm:gap-4.5 lg:grid-cols-[1.3fr_1fr_1fr] lg:auto-rows-[190px]">
          {cells.map((cell) => (
            <Reveal
              key={cell.k}
              delay={cell.delay}
              className={`flex flex-col justify-between overflow-hidden rounded-2xl p-5 sm:p-6.5 ${cell.tone}`}
            >
              <span className={`font-mono text-xs tracking-[0.06em] uppercase ${cell.kicker}`}>
                {cell.k}
              </span>
              <div>
                <div className="font-heading text-[clamp(30px,3.6vw,48px)] leading-none font-extrabold tracking-[-0.03em]">
                  {cell.v}
                </div>
                <div className="mt-2 text-[13.5px] font-medium">{cell.vs}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
