"use client";

import Marquee from "@/components/ui/Marquee";

const marqueeItems = [
  <>
    <b className="font-semibold text-ink">$0 comisión</b> por pedido
  </>,
  <>
    Delivery <b className="font-semibold text-ink">&lt;60 min</b> con Fium
  </>,
  "Webpay · Mercado Pago · Fintoc",
  "Stock conectado a tu bodega",
];

export default function HeroMarquee() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
}
