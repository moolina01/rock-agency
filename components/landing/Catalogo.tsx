"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Apple, Beef, FileSpreadsheet, Leaf, Milk, SprayCan, Wheat } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Annotation from "@/components/ui/Annotation";
import SectionMarker from "@/components/ui/SectionMarker";

const PRODUCTS = [
  { key: "manzanas", price: "$1.290/kg", icon: <Apple size={20} /> },
  { key: "leche", price: "$990 c/u", icon: <Milk size={20} /> },
  { key: "pan", price: "$2.490/kg", icon: <Wheat size={20} /> },
  { key: "detergente", price: "$4.990 c/u", icon: <SprayCan size={20} /> },
  { key: "palta", price: "$3.490/kg", icon: <Leaf size={20} /> },
  { key: "carne", price: "$7.990/kg", icon: <Beef size={20} /> },
];

const RAW_ROWS = [
  { w1: "w-24", w2: "w-10" },
  { w1: "w-16", w2: "w-14" },
  { w1: "w-20", w2: "w-8" },
  { w1: "w-14", w2: "w-16" },
] as const;

function CatalogAnimation() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<"raw" | "clean">("raw");
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
      setPhase("raw");
      setVisibleCount(0);
      setReady(false);

      const cleanAt = 1200;
      schedule(() => setPhase("clean"), cleanAt);

      PRODUCTS.forEach((_, idx) => {
        schedule(() => setVisibleCount((v) => Math.max(v, idx + 1)), cleanAt + 250 + idx * 150);
      });

      const readyAt = cleanAt + 250 + PRODUCTS.length * 150 + 300;
      schedule(() => setReady(true), readyAt);
      schedule(runCycle, readyAt + 2400);
    }

    runCycle();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion]);

  const effectivePhase = reduceMotion ? "clean" : phase;
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

      <div className="relative h-[230px] overflow-hidden">
        <div
          className={`absolute inset-0 flex flex-col justify-center gap-2.5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.34,1.4,.4,1)] ${
            effectivePhase === "raw" ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
          }`}
        >
          <span className="mb-1 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-ink-soft">
            <FileSpreadsheet size={13} /> catalogo.xlsx
          </span>
          {RAW_ROWS.map((row, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-lg border border-line bg-paper px-3 py-2.5"
            >
              <div className="h-6 w-6 flex-shrink-0 rounded bg-line/60" />
              <div className={`h-2 rounded-full bg-line ${row.w1}`} />
              <div className={`h-2 rounded-full bg-line/60 ${row.w2}`} />
            </div>
          ))}
        </div>

        <div
          className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-500 ${
            effectivePhase === "clean" ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <span className="mb-2.5 font-mono text-[11px] font-semibold text-indigo">
            Tu catálogo online
          </span>
          <div className="grid grid-cols-3 gap-3">
            {PRODUCTS.map((p, idx) => {
              const visible = effectivePhase === "clean" && idx < effectiveVisibleCount;
              return (
                <div
                  key={p.key}
                  className={`flex flex-col items-center gap-2.5 rounded-xl border border-line bg-paper p-3.5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.34,1.4,.4,1)] ${
                    visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo/10 text-indigo">
                    {p.icon}
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-ink">{p.price}</span>
                </div>
              );
            })}
          </div>
        </div>
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
    body: "Por kilo, por unidad o por pack: cada producto respeta el formato real de tu local, no el de una plantilla genérica.",
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
            Subimos y conectamos todos tus productos, con foto, precio por
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
