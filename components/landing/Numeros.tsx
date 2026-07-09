"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionMarker from "@/components/ui/SectionMarker";

const cells = [
  {
    tone: "bg-indigo text-white row-span-2",
    kicker: "text-[#C9BCFF]",
    k: "Comisión por pedido",
    v: "$0",
    vs: "Tu tienda, tus clientes, tu margen completo — cada peso que vendes es tuyo.",
    delay: 0 as const,
  },
  {
    tone: "bg-lime text-green",
    kicker: "text-green opacity-70",
    k: "Reparto con Fium",
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
    tone: "bg-[#16151a] text-white",
    kicker: "text-[#9C9AA6]",
    k: "Productos",
    v: "20K+",
    vs: "Con precio por kilo y por unidad.",
    delay: 1 as const,
  },
  {
    tone: "border border-line bg-paper-2 text-ink",
    kicker: "text-ink-faint",
    k: "Formas de pago",
    v: "7+",
    vs: "Tarjeta, transferencia y billeteras.",
    delay: 2 as const,
  },
];

export default function Numeros() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal>
          <SectionMarker num="06" label="Por qué confiar en nosotros" />
        </Reveal>

        <Reveal delay={0} className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper-2 py-1.5 pr-4 pl-1.5 font-mono text-xs font-semibold text-ink">
            <Image
              src="/Shopify-Logo.jpg"
              alt=""
              width={26}
              height={26}
              className="h-6.5 w-6.5 rounded-[6px] object-cover"
            />
            Shopify Partners · Chile &amp; Argentina
          </span>
        </Reveal>

        <div className="-mx-6 flex snap-x snap-mandatory gap-4.5 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:-mx-10 sm:px-10 lg:mx-0 lg:grid lg:grid-cols-[1.3fr_1fr_1fr] lg:auto-rows-[190px] lg:overflow-visible lg:px-0 lg:pb-0 lg:snap-none [&::-webkit-scrollbar]:hidden">
          {cells.map((cell) => (
            <Reveal
              key={cell.k}
              delay={cell.delay}
              className={`flex w-[70%] max-w-[240px] flex-shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl p-6.5 lg:w-auto lg:max-w-none ${cell.tone}`}
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
