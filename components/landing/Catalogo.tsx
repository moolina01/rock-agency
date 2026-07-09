"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Annotation from "@/components/ui/Annotation";
import SectionMarker from "@/components/ui/SectionMarker";

const PRODUCTS = [
  { key: "manzanas", price: "$1.290/kg", swatch: "bg-[radial-gradient(circle_at_32%_30%,#F6D27A,#E8A23A)]" },
  { key: "leche", price: "$990 c/u", swatch: "bg-[linear-gradient(160deg,#FBF9F3,#D8D2C4)]" },
  { key: "pan", price: "$2.490/kg", swatch: "bg-[linear-gradient(160deg,#DDA164,#B87738)]" },
  { key: "detergente", price: "$4.990 c/u", swatch: "bg-[linear-gradient(160deg,#6FA0C6,#3E6C93)]" },
  { key: "palta", price: "$3.490/kg", swatch: "bg-[linear-gradient(160deg,#8FBF6B,#4E7C3A)]" },
  { key: "carne", price: "$7.990/kg", swatch: "bg-[linear-gradient(160deg,#E8908A,#C65C54)]" },
] as const;

function CatalogAnimation() {
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.push(id);
    };

    function runCycle() {
      setVisibleCount(0);
      setReady(false);

      PRODUCTS.forEach((_, idx) => {
        schedule(() => setVisibleCount((v) => Math.max(v, idx + 1)), 300 + idx * 180);
      });

      const readyAt = 300 + PRODUCTS.length * 180 + 350;
      schedule(() => setReady(true), readyAt);
      schedule(runCycle, readyAt + 2200);
    }

    runCycle();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion]);

  const effectiveVisibleCount = reduceMotion ? PRODUCTS.length : visibleCount;
  const effectiveReady = reduceMotion ? true : ready;

  return (
    <Reveal className="relative rounded-2xl border border-line bg-paper-2 p-6 sm:p-7">
      <div
        className={`absolute -top-3.5 right-6 rounded-full bg-lime px-4 py-2 font-heading text-sm font-extrabold text-green shadow-[0_10px_20px_-8px_rgba(22,21,26,0.3)] transition-[opacity,transform] duration-[400ms] ease-[cubic-bezier(.34,1.4,.4,1)] ${
          effectiveReady ? `scale-100 opacity-100 ${reduceMotion ? "" : "animate-pop"}` : "scale-75 opacity-0"
        }`}
      >
        ✓ Catálogo listo
      </div>

      <div className="grid grid-cols-3 gap-3">
        {PRODUCTS.map((p, idx) => {
          const visible = idx < effectiveVisibleCount;
          return (
            <div
              key={p.key}
              className={`flex flex-col items-center gap-2.5 rounded-xl border border-line bg-paper p-3.5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.34,1.4,.4,1)] ${
                visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              <div className={`h-11 w-11 rounded-lg ${p.swatch}`} />
              <span className="font-mono text-[11px] font-semibold text-ink">{p.price}</span>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}

const features = [
  {
    n: "01",
    title: "Carga masiva, sin trabajo manual",
    body: "Subimos tu catálogo completo: nombre, fotos, categorías y variantes. Tú no cargas nada a mano.",
  },
  {
    n: "02",
    title: "Precio como realmente vendes",
    body: "Por kilo, por unidad o por pack — cada producto respeta el formato real de tu local, no el de una plantilla genérica.",
  },
  {
    n: "03",
    title: "Bodega y tienda, sincronizadas",
    body: "Un solo stock para el local y la página. Se descuenta automático con cada venta, en ambos lados.",
  },
  {
    n: "04",
    title: "Buscador y categorías desde el día uno",
    body: "Tus clientes filtran por categoría, marca o precio y encuentran lo que buscan en segundos.",
  },
];

export default function Catalogo() {
  return (
    <section id="catalogo" className="bg-paper py-24">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal>
          <SectionMarker num="03" label="Catálogo & stock" />
        </Reveal>

        <Reveal delay={1} className="mb-13 max-w-[700px]">
          <h2 className="mb-4.5 text-[30px] leading-[1.03] font-extrabold sm:text-4xl lg:text-[50px]">
            Tu catálogo completo, <Annotation type="underline">listo para vender</Annotation>
          </h2>
          <p className="text-[17px] text-ink-soft">
            Subimos y conectamos todos tus productos — con foto, precio por
            kilo o por unidad y stock real. Nada de cargar todo a mano ni
            digitar dos veces.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <CatalogAnimation />

          <div className="flex flex-col justify-center">
            {features.map((f, i) => (
              <Reveal
                key={f.n}
                delay={i as 0 | 1 | 2 | 3}
                className={`flex gap-4.5 py-5 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <span className="flex-shrink-0 pt-0.75 font-mono text-xs font-bold text-indigo">
                  {f.n}
                </span>
                <div>
                  <h4 className="mb-1 text-[17px] font-semibold">{f.title}</h4>
                  <p className="text-[13.5px] text-ink-soft">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
