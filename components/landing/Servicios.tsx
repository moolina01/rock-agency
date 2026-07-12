"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ShoppingCart, Store, Package, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionMarker from "@/components/ui/SectionMarker";

const services = [
  {
    icon: <ShoppingCart size={22} />,
    image: "/Supermercados-Online.png",
    title: "Supermercados Online",
    body: "Soluciones robustas para catálogos grandes, múltiples sucursales y alta demanda.",
  },
  {
    icon: <Store size={22} />,
    image: "/minimarkets.png",
    title: "Minimarkets",
    body: "Tiendas ágiles, fáciles de administrar y adaptadas a tu comunidad.",
  },
  {
    icon: <Package size={22} />,
    image: "/cajas.png",
    title: "Distribuidoras Mayoristas",
    body: "Catálogos B2B, precios por volumen, cotizaciones y compras personalizadas.",
  },
];

export default function Servicios() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiped, setSwiped] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = cardRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function scrollToIndex(i: number) {
    const card = cardRefs.current[i];
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  return (
    <section id="servicios" className="bg-paper-2 py-24">
      <div className="mx-auto max-w-[1220px] px-6 sm:px-10">
        <Reveal>
          <SectionMarker num="02" label="Soluciones para cada tipo de negocio" />
        </Reveal>

        <Reveal delay={1} className="mb-13 max-w-[700px]">
          <h2 className="mb-4.5 text-[30px] leading-[1.03] font-extrabold sm:text-4xl lg:text-[50px]">
            Plataformas diseñadas para tu industria
          </h2>
          <p className="text-[17px] text-ink-soft">
            Un supermercado no vende igual que un minimarket ni que una
            distribuidora, por eso construimos tu tienda según cómo trabajas
            tú.
          </p>
        </Reveal>

        <div className="relative">
          <div
            ref={trackRef}
            onScroll={() => setSwiped(true)}
            className="-mx-6 flex snap-x snap-mandatory gap-5.5 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:-mx-10 sm:px-10 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 md:snap-none [&::-webkit-scrollbar]:hidden"
          >
            {services.map((svc, i) =>
              svc.image ? (
                <Reveal
                  key={svc.title}
                  ref={(el) => {
                    cardRefs.current[i] = el as HTMLDivElement | null;
                  }}
                  delay={i as 0 | 1 | 2}
                  className="flex w-[82%] max-w-[300px] flex-shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-[#16151a] transition hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-22px_rgba(22,21,26,0.35)] md:w-auto md:max-w-none"
                >
                  <div className="relative h-[190px] w-full flex-shrink-0">
                    <Image
                      src={svc.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 82vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16151a] via-[#16151a]/15 to-transparent" />
                  </div>
                  <div className="relative -mt-8 flex flex-1 flex-col px-7.5 pb-7.5">
                    <span className="mb-5 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-lime text-green">
                      {svc.icon}
                    </span>
                    <h3 className="mb-2.5 text-xl font-bold text-white">{svc.title}</h3>
                    <p className="mb-5.5 flex-grow text-[14.5px] text-[#B4B2BE]">{svc.body}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime"
                    >
                      Ver solución
                      <span>→</span>
                    </Link>
                  </div>
                </Reveal>
              ) : (
                <Reveal
                  key={svc.title}
                  ref={(el) => {
                    cardRefs.current[i] = el as HTMLDivElement | null;
                  }}
                  delay={i as 0 | 1 | 2}
                  className="flex w-[82%] max-w-[300px] flex-shrink-0 snap-start flex-col rounded-2xl border border-line bg-paper p-7.5 transition hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-22px_rgba(22,21,26,0.35)] md:w-auto md:max-w-none"
                >
                  <span className="mb-5 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-lime text-green">
                    {svc.icon}
                  </span>
                  <h3 className="mb-2.5 text-xl font-bold">{svc.title}</h3>
                  <p className="mb-5.5 flex-grow text-[14.5px] text-ink-soft">{svc.body}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo"
                  >
                    Ver solución
                    <span>→</span>
                  </Link>
                </Reveal>
              )
            )}
          </div>

          {!swiped && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 animate-swipe-hint items-center justify-center rounded-full bg-ink/80 text-white md:hidden"
            >
              <ChevronRight size={18} />
            </div>
          )}
        </div>

        <div className="mt-5 flex justify-center gap-2 md:hidden">
          {services.map((svc, i) => (
            <button
              key={svc.title}
              type="button"
              aria-label={`Ir a ${svc.title}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-5 bg-indigo" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
