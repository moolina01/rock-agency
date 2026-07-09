"use client";

import Reveal from "@/components/ui/Reveal";
import SectionMarker from "@/components/ui/SectionMarker";

function IconEmptyCart() {
  return (
    <div className="relative flex h-24 items-center justify-center border-b border-line bg-paper-dim">
      <div className="absolute h-16 w-16 animate-ringpulse rounded-full border-[1.5px] border-indigo opacity-40" />
      <svg viewBox="0 0 90 68" fill="none" className="relative z-[1] w-16">
        <path
          d="M8 8 H16 L24 46 H70 L78 20 H26"
          stroke="var(--color-indigo)"
          strokeWidth={4.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={32} cy={58} r={6.5} stroke="var(--color-indigo)" strokeWidth={4.5} />
        <circle cx={62} cy={58} r={6.5} stroke="var(--color-indigo)" strokeWidth={4.5} />
      </svg>
      <span className="absolute top-2 right-[calc(50%-40px)] z-[2] flex h-[22px] w-[22px] animate-plusbounce items-center justify-center rounded-full bg-lime font-heading text-sm font-bold text-green">
        +
      </span>
    </div>
  );
}

function IconSlowBrowser() {
  return (
    <div className="relative flex h-24 items-center justify-center border-b border-line bg-paper-dim">
      <div className="relative h-14 w-19 overflow-hidden rounded-lg border-[1.5px] border-line bg-paper-2">
        <div className="flex gap-1 border-b border-line px-1.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-ink opacity-20" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink opacity-20" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink opacity-20" />
        </div>
        <div className="flex h-[calc(100%-17px)] items-center justify-center">
          <div className="h-5 w-5 animate-spin rounded-full border-[3px] border-paper-dim border-t-indigo [animation-duration:0.9s]" />
        </div>
      </div>
      <span className="absolute -right-1.5 -bottom-2 animate-blink2 rounded-full bg-[#FBE6E3] px-2 py-0.75 font-mono text-[9.5px] font-semibold text-[#C7402F]">
        lento…
      </span>
    </div>
  );
}

function IconNotebook() {
  return (
    <div className="relative flex h-24 items-center justify-center border-b border-line bg-paper-dim">
      <div className="flex h-16 w-13 flex-col gap-2 rounded-md border-[1.5px] border-line bg-paper-2 px-2.5 py-2.75">
        <div className="h-[3px] rounded bg-line" />
        <div className="h-[3px] w-[55%] rounded bg-line" />
        <div className="h-[3px] rounded bg-line" />
      </div>
      <div className="absolute top-2.5 left-[calc(50%+18px)] animate-pencilwrite">
        <div className="relative h-5 w-[3px] rotate-[38deg] rounded-t-[2px] bg-indigo">
          <span className="absolute -bottom-1 -left-[2.5px] h-0 w-0 border-x-[3.5px] border-t-[5px] border-x-transparent border-t-ink" />
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    letter: "A",
    icon: <IconEmptyCart />,
    title: "Todavía no vendes online",
    body: "Partimos con tus productos esenciales, tu gente sigue trabajando igual y del reparto se encarga Fium. En pocas semanas estás recibiendo pedidos.",
  },
  {
    letter: "B",
    icon: <IconSlowBrowser />,
    title: "Tienes página, pero no vende",
    body: "Te mostramos gratis por qué no vende — velocidad, catálogo, medios de pago — y la reconstruimos sin que pierdas tus clientes ni tu posición en Google.",
  },
  {
    letter: "C",
    icon: <IconNotebook />,
    title: "Vendes, pero todo a mano",
    body: "Integramos tu caja y tu bodega a la página: el stock se actualiza solo, los pedidos llegan ordenados y nadie digita dos veces.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-paper-2 py-24">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal>
          <SectionMarker num="02" label="Servicios" />
        </Reveal>

        <Reveal delay={1} className="mb-13 max-w-[700px]">
          <h2 className="mb-4.5 text-[30px] leading-[1.03] font-extrabold sm:text-4xl lg:text-[50px]">
            ¿Partiendo de cero o con una página que no vende?
          </h2>
          <p className="text-[17px] text-ink-soft">
            Da lo mismo dónde estés parado hoy. Estos son los tres caminos con
            que llevamos tu supermercado a vender online en serio.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-paper md:grid-cols-3">
          {services.map((svc, i) => (
            <Reveal
              key={svc.letter}
              delay={i as 0 | 1 | 2}
              className={`transition hover:-translate-y-1 ${
                i < services.length - 1
                  ? "border-b border-line md:border-r md:border-b-0"
                  : ""
              }`}
            >
              {svc.icon}
              <div className="px-7.5 pt-5.5 pb-1.5">
                <div className="mb-3.5 font-mono text-xs font-bold text-indigo">
                  {svc.letter}
                </div>
                <h3 className="mb-2.5 text-xl font-bold">{svc.title}</h3>
                <p className="pb-7.5 text-[14.5px] text-ink-soft">{svc.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
