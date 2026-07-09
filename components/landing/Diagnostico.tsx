"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Annotation from "@/components/ui/Annotation";
import SectionMarker from "@/components/ui/SectionMarker";

function CommissionCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState("-30%");

  useEffect(() => {
    if (!inView || reduceMotion) return;
    let n = 30;
    const interval = setInterval(() => {
      n -= 1;
      if (n <= 0) {
        clearInterval(interval);
        setValue("$0");
        return;
      }
      setValue(`-${n}%`);
    }, 50);
    return () => clearInterval(interval);
  }, [inView, reduceMotion]);

  const display = inView && reduceMotion ? "$0" : value;

  return (
    <div ref={ref} className="font-mono text-[34px] font-bold text-lime">
      {display}
    </div>
  );
}

const tiles = [
  {
    scene: (
      <div className="flex h-full flex-col items-center justify-center gap-1.5 bg-ink text-white">
        <CommissionCounter />
        <div className="font-mono text-[10.5px] text-[#9C9AA6]">
          comisión por pedido en tu tienda
        </div>
      </div>
    ),
    title: "Tu margen queda contigo",
    body: "Las apps de reparto cobran hasta un 30% por pedido. En tu propia tienda online, cada peso que vendes es tuyo.",
  },
  {
    scene: (
      <div className="flex h-full items-center justify-center bg-indigo">
        <div className="animate-pop rounded-xl bg-lime px-5 py-3 font-heading text-[19px] font-extrabold text-green">
          Llega hoy
        </div>
      </div>
    ),
    title: "Reparto sin contratar motoboy",
    body: "Nada de sueldo fijo, moto ni reemplazos. Con Fium, un repartidor de Uber retira el pedido y lo entrega en menos de 60 minutos. Pagas solo cuando vendes.",
  },
  {
    scene: (
      <div className="relative h-full overflow-hidden bg-paper-dim">
        {[24, 70, 116].map((top) => (
          <div key={top} className="absolute right-0 left-0 flex gap-1.5 px-4" style={{ top }}>
            <span className="h-9 flex-1 rounded-[5px] bg-indigo opacity-15" />
            <span className="h-9 flex-1 rounded-[5px] bg-indigo opacity-15" />
            <span className="h-9 flex-1 rounded-[5px] bg-indigo opacity-15" />
          </div>
        ))}
        <div className="absolute inset-x-0 h-10 animate-scan bg-[linear-gradient(180deg,transparent,rgba(75,43,224,0.25),transparent)]" />
      </div>
    ),
    title: "La página nunca vende lo que no tienes",
    body: "Conectamos tu tienda con la caja y la bodega: si se acabó en el local, se acabó en la página. Sin reclamos ni devoluciones.",
  },
];

export default function Diagnostico() {
  return (
    <section id="diagnostico" className="bg-paper py-24">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal>
          <SectionMarker num="01" label="Hagamos las cuentas" />
        </Reveal>

        <Reveal delay={1} className="mb-13 max-w-[700px]">
          <h2 className="mb-4.5 text-[30px] leading-[1.03] font-extrabold sm:text-4xl lg:text-[50px]">
            Vender por apps de reparto{" "}
            <Annotation type="circle">te sale caro</Annotation>
          </h2>
          <p className="text-[17px] text-ink-soft">
            Si vendes $1.000.000 al mes por una app de reparto, hasta $300.000 se
            van en comisiones. Con tu propia tienda, esa plata queda en tu caja.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-3">
          {tiles.map((tile, i) => (
            <Reveal
              key={tile.title}
              delay={i as 0 | 1 | 2}
              className="overflow-hidden rounded-2xl border border-line bg-paper-2 transition hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-22px_rgba(22,21,26,0.35)]"
            >
              <div className="h-[170px] border-b border-line">{tile.scene}</div>
              <div className="p-5.5 pt-5">
                <h3 className="mb-2 text-[19px] font-bold">{tile.title}</h3>
                <p className="text-sm text-ink-soft">{tile.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
