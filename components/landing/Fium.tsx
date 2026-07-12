"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAnimationFrame, useReducedMotion } from "framer-motion";
import { ShoppingBag, Boxes, PackageSearch, Truck, Plug, BarChart3 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionMarker from "@/components/ui/SectionMarker";

const ROUTE_D = "M 60 300 C 160 220, 220 320, 320 240 S 480 120, 540 90";

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function TrackingMap() {
  const pathRef = useRef<SVGPathElement>(null);
  const courierRef = useRef<SVGGElement>(null);
  const startRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  useAnimationFrame((time) => {
    if (reduceMotion) return;
    const path = pathRef.current;
    const courier = courierRef.current;
    if (!path || !courier) return;

    if (startRef.current === null) startRef.current = time;
    const cycle = 5000;
    const elapsed = (time - startRef.current) % cycle;
    const progress = Math.min(elapsed / (cycle * 0.55), 1);
    const eased = easeInOutQuad(progress);
    const length = path.getTotalLength();
    const point = path.getPointAtLength(eased * length);
    courier.setAttribute("transform", `translate(${point.x} ${point.y})`);
  });

  return (
    <Reveal className="relative min-h-[350px] overflow-hidden rounded-2xl border border-[#2A2933] bg-[#0E0D12]">
      <div className="absolute top-3.5 left-3.5 z-[5] flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-2.5 py-1.5 font-mono text-[10.5px] text-white backdrop-blur-md">
        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-[#ff4b4b]" />
        FIUM · EN VIVO
      </div>

      <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full">
        <path
          ref={pathRef}
          d={ROUTE_D}
          fill="none"
          stroke="#26252E"
          strokeWidth={3}
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
        <path
          d={ROUTE_D}
          fill="none"
          stroke="var(--color-lime)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={600}
          strokeDashoffset={reduceMotion ? 0 : 600}
          className={reduceMotion ? "" : "animate-route-draw"}
        />
        <g>
          <circle cx={60} cy={300} r={9} fill="#fff" />
          <circle cx={60} cy={300} r={4} fill="var(--color-ink)" />
        </g>
        <g>
          <circle cx={540} cy={90} r={9} fill="var(--color-indigo)" />
          <circle cx={540} cy={90} r={4} fill="#fff" />
        </g>
        <g ref={courierRef} transform="translate(60 300)">
          <circle r={11} fill="var(--color-lime)" />
          <circle r={5} fill="var(--color-ink)" />
        </g>
      </svg>
    </Reveal>
  );
}

const steps = [
  {
    n: "01",
    title: "Tu cliente compra y paga en tu página",
    body: "Con Webpay, transferencia o como prefiera. La plata llega directo a ti, sin intermediarios.",
  },
  {
    n: "02",
    title: "Tu gente arma el pedido",
    body: "Mientras tanto, Fium ya llamó al repartidor solo. Nadie tiene que coordinar nada por teléfono.",
  },
  {
    n: "03",
    title: "Un repartidor de Uber lo retira",
    body: "Lo pasa a buscar al local y lo entrega en menos de 60 minutos. Tú y tu cliente lo ven en el mapa, en vivo.",
  },
  {
    n: "04",
    title: "El cliente vuelve la próxima semana",
    body: "La compra de supermercado se repite: un buen delivery hoy es la venta del próximo lunes, y esa venta es 100% tuya.",
  },
];

const capabilities = [
  { icon: <ShoppingBag size={18} />, label: "Pedidos" },
  { icon: <Boxes size={18} />, label: "Inventarios" },
  { icon: <PackageSearch size={18} />, label: "Picking" },
  { icon: <Truck size={18} />, label: "Despachos" },
  { icon: <Plug size={18} />, label: "Integración con Uber Direct" },
  { icon: <BarChart3 size={18} />, label: "Reportes" },
];

export default function Fium() {
  return (
    <section id="fium" className="bg-[#16151a] py-24 text-white">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal>
          <SectionMarker num="04" label="App propia · entrega same-day" dark />
        </Reveal>

        <Reveal className="mb-5">
          <a
            href="https://apps.shopify.com/fium"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#2A2933] bg-white/5 py-1.5 pr-4 pl-1.5 transition hover:border-lime/40 hover:bg-white/10"
          >
            <Image src="/fium-icono.svg" alt="" width={26} height={26} className="h-6.5 w-6.5 rounded-[6px]" />
            <span className="font-mono text-xs text-[#B4B2BE]">
              Ver Fium en Shopify App Store
            </span>
            <span className="text-lime transition-transform group-hover:translate-x-0.75">→</span>
          </a>
        </Reveal>

        <Reveal delay={1} className="mb-13 max-w-[700px]">
          <h2 className="mb-4.5 text-[30px] leading-[1.03] font-extrabold sm:text-4xl lg:text-[50px]">
            Fium: tu delivery, sin contratar a nadie
          </h2>
          <p className="text-[17px] text-[#B4B2BE]">
            Un motoboy propio cuesta sueldo, moto, bencina y dolores de cabeza,
            venda o no venda. Con Fium, nuestra app propia, un repartidor de
            Uber retira cada pedido y lo entrega en menos de 60 minutos. Pagas
            por entrega, no por tener a alguien esperando.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
          <TrackingMap />

          <div className="flex flex-col justify-center">
            {steps.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i as 0 | 1 | 2 | 3}
                className={`flex gap-4.5 py-5 ${i > 0 ? "border-t border-[#2A2933]" : ""}`}
              >
                <span className="flex-shrink-0 pt-0.75 font-mono text-xs font-bold text-lime">
                  {step.n}
                </span>
                <div>
                  <h4 className="mb-1 text-[17px] font-semibold">{step.title}</h4>
                  <p className="text-[13.5px] text-[#A9A7B3]">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={2} className="mt-14 border-t border-[#2A2933] pt-10">
          <p className="mb-6 font-mono text-xs tracking-[0.06em] text-[#8b8994] uppercase">
            Fium: la plataforma que conecta toda tu operación
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-5 lg:grid-cols-6">
            {capabilities.map((c) => (
              <div key={c.label} className="flex items-center gap-1.5 sm:gap-2.5">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-lime sm:h-8 sm:w-8">
                  <span className="[&>svg]:h-3 [&>svg]:w-3 sm:[&>svg]:h-[18px] sm:[&>svg]:w-[18px]">
                    {c.icon}
                  </span>
                </span>
                <span className="text-[10.5px] leading-tight font-medium text-white sm:text-[13.5px]">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
