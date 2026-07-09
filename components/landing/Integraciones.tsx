"use client";

import Reveal from "@/components/ui/Reveal";
import Annotation from "@/components/ui/Annotation";
import SectionMarker from "@/components/ui/SectionMarker";

function Chip({
  color,
  label,
  small,
}: {
  color: string;
  label: string;
  small?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-xl border border-line bg-paper-2 px-5 py-3.5 font-heading text-[15px] font-semibold transition hover:-translate-y-0.75 hover:border-indigo">
      <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ background: color }} />
      {label}
      {small && <small className="font-mono text-[10px] font-normal text-ink-faint">{small}</small>}
    </span>
  );
}

const paymentChips = [
  { color: "#4B2BE0", label: "Webpay", small: "Transbank" },
  { color: "#00AEEF", label: "Mercado Pago" },
  { color: "#1F4C39", label: "Fintoc", small: "transferencia" },
  { color: "#E24B4A", label: "Flow" },
  { color: "#7F77DD", label: "Khipu" },
  { color: "#C9F03C", label: "MACH" },
  { color: "#888780", label: "Getnet" },
];

const logisticsChips = [
  { color: "#16151A", label: "Fium", small: "Uber Direct" },
  { color: "#EF9F27", label: "Chilexpress" },
  { color: "#378ADD", label: "Blue Express" },
  { color: "#D85A30", label: "Starken" },
  { color: "#639922", label: "POS en sala" },
  { color: "#534AB7", label: "ERP / bodega" },
  { color: "#888780", label: "+ a medida" },
];

export default function Integraciones() {
  return (
    <section id="integraciones" className="bg-indigo-tint py-24">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal>
          <SectionMarker num="05" label="Integraciones" />
        </Reveal>

        <div className="mb-11 grid grid-cols-1 items-end gap-5 md:grid-cols-2 md:gap-11">
          <Reveal>
            <h2 className="text-[30px] leading-[1.03] font-extrabold sm:text-4xl lg:text-[50px]">
              Tus clientes pagan <Annotation type="underline">como ya pagan</Annotation>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-base text-ink-soft">
              Tarjeta, transferencia o billetera digital — conectamos tu tienda
              con los medios de pago que tus clientes usan todos los días, y con
              las herramientas que ya mueven tu local.
            </p>
          </Reveal>
        </div>

        <Reveal delay={1} className="mb-8.5">
          <div className="mb-4 flex items-center gap-2.5 font-mono text-xs tracking-[0.06em] text-ink-soft uppercase">
            Medios de pago
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="flex flex-wrap gap-3">
            {paymentChips.map((chip) => (
              <Chip key={chip.label} {...chip} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="mb-4 flex items-center gap-2.5 font-mono text-xs tracking-[0.06em] text-ink-soft uppercase">
            Operación y logística
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="flex flex-wrap gap-3">
            {logisticsChips.map((chip) => (
              <Chip key={chip.label} {...chip} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
