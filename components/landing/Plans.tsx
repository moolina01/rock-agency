"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionMarker from "@/components/ui/SectionMarker";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  eta: string;
  items: string[];
  ctaLabel: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Launch",
    tagline: "Para el minimarket que quiere partir a vender online",
    price: "$1.500.000",
    eta: "⏱ Vendiendo en ~2–4 semanas",
    items: [
      "Tu tienda online lista para recibir pedidos",
      "Hasta 300 productos cargados",
      "Pago con tarjeta (Webpay)",
      "Precio por unidad y por kilo",
    ],
    ctaLabel: "Empezar con Launch →",
  },
  {
    name: "Growth",
    tagline: "Para el supermercado que quiere vender en serio",
    price: "$2.500.000",
    eta: "⏱ Vendiendo en ~4–6 semanas",
    items: [
      "Todo lo de Launch, y además:",
      "Hasta 2.000 productos cargados",
      "Varias formas de pago (tarjeta, transferencia)",
      "Pedidos ordenados para tu equipo en sala",
      "Reparto con Fium — entregas en <60 min",
    ],
    ctaLabel: "Empezar con Growth →",
    featured: true,
  },
  {
    name: "Scale Pro",
    tagline: "Para la cadena regional con más de una sucursal",
    price: "$3.500.000",
    eta: "⏱ Vendiendo en ~6–8 semanas",
    items: [
      "Todo lo de Growth, y además:",
      "Catálogo grande: 5.000+ productos",
      "Conexión con tu caja y tu bodega",
      "Stock que se actualiza solo",
      "Prioridad en el reparto con Fium",
    ],
    ctaLabel: "Empezar con Scale Pro →",
  },
];

export default function Plans() {
  return (
    <section id="planes" className="bg-paper-2 py-24">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal>
          <SectionMarker num="07" label="Planes" />
        </Reveal>

        <Reveal delay={1} className="mb-13 max-w-[700px]">
          <h2 className="mb-4.5 text-[30px] leading-[1.03] font-extrabold sm:text-4xl lg:text-[50px]">
            Un plan según el tamaño de tu local
          </h2>
          <p className="text-[17px] text-ink-soft">
            Pago único, sin mensualidades escondidas ni comisiones por venta.
            Lo que vendas por tu tienda es tuyo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i as 0 | 1 | 2}
              className={`relative flex flex-col rounded-[18px] border-[1.5px] bg-paper-2 p-8.5 pt-9 transition hover:-translate-y-1.5 ${
                plan.featured
                  ? "border-indigo hover:border-indigo"
                  : "border-line hover:border-ink"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-7.5 rounded-full bg-indigo px-3.5 py-1.5 font-mono text-[11px] font-bold text-white">
                  ★ Más elegido
                </span>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mb-5 text-[13.5px] text-ink-soft">{plan.tagline}</p>

              <div className="font-heading text-3xl font-extrabold tracking-[-0.02em]">
                {plan.price}
              </div>
              <div className="mb-1.5 text-xs text-ink-faint">
                Pago único + IVA · sin comisión por venta
              </div>
              <div className="mb-5.5 text-[12.5px] font-semibold text-green">{plan.eta}</div>

              <ul className="mb-6.5 flex-grow">
                {plan.items.map((item, idx) => (
                  <li
                    key={item}
                    className={`py-2.25 text-[13.5px] ${
                      idx === 0
                        ? "font-medium text-ink"
                        : "border-t border-dashed border-line text-ink-soft"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`rounded-full py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 ${
                  plan.featured ? "bg-indigo" : "bg-ink"
                }`}
              >
                {plan.ctaLabel}
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center text-[15px] text-ink-soft">
          ¿Más de 20.000 productos o varias sucursales?{" "}
          <Link href="/contact" className="border-b-[1.5px] border-indigo font-semibold text-indigo">
            Armamos una propuesta a tu medida →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
