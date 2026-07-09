"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Annotation from "@/components/ui/Annotation";
import Marquee from "@/components/ui/Marquee";

const lineEase: [number, number, number, number] = [0.2, 0.75, 0.2, 1];

const CART_ITEMS = [
  {
    key: "fruit",
    top: 96,
    left: 88,
    rot: -8,
    className:
      "h-[30px] w-[30px] rounded-full bg-[radial-gradient(circle_at_32%_30%,#F6D27A,#E8A23A)] shadow-[inset_-3px_-3px_0_rgba(0,0,0,0.08)]",
  },
  {
    key: "milk",
    top: 84,
    left: 128,
    rot: 5,
    className:
      "h-[34px] w-[26px] rounded-t-[4px] rounded-b-[6px] border-2 border-line bg-[linear-gradient(180deg,#FBF9F3_0%,#FBF9F3_62%,var(--color-indigo)_62%,var(--color-indigo)_100%)]",
  },
  {
    key: "bread",
    top: 76,
    left: 72,
    rot: -4,
    className:
      "h-[22px] w-[38px] rounded-[14px] bg-[linear-gradient(160deg,#DDA164,#B87738)] shadow-[inset_-3px_-3px_0_rgba(0,0,0,0.1)]",
  },
  {
    key: "clean",
    top: 64,
    left: 152,
    rot: 7,
    className:
      "h-[34px] w-[24px] rounded-[5px] bg-[linear-gradient(160deg,#6FA0C6,#3E6C93)] before:absolute before:-top-1.5 before:left-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-[2px] before:bg-inherit",
  },
] as const;

const marqueeItems = [
  <>
    <b className="font-semibold text-ink">$0 comisión</b> por pedido
  </>,
  <>
    Reparto <b className="font-semibold text-ink">&lt;60 min</b> con Fium
  </>,
  "Sin contratar motoboy",
  "Webpay · Mercado Pago · Fintoc",
  "Precio por kilo y por unidad",
  "Stock conectado a tu bodega",
];

function CartAnimation() {
  const reduceMotion = useReducedMotion();

  const [visibleCount, setVisibleCount] = useState(0);
  const [count, setCount] = useState(0);
  const [bumping, setBumping] = useState(false);
  const [trackPhase, setTrackPhase] = useState<"home" | "dash" | "hidden">("home");
  const [showStreaks, setShowStreaks] = useState(false);
  const [showFium, setShowFium] = useState(false);
  const [caption, setCaption] = useState("Armando tu pedido…");

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
      setCount(0);
      setTrackPhase("home");
      setShowStreaks(false);
      setShowFium(false);
      setCaption("Armando tu pedido…");

      CART_ITEMS.forEach((_, idx) => {
        schedule(() => {
          setVisibleCount((v) => Math.max(v, idx + 1));
          schedule(() => {
            setCount((c) => c + 1);
            setBumping(true);
            schedule(() => setBumping(false), 400);
          }, 420);
        }, 350 + idx * 760);
      });

      const dashStart = 350 + CART_ITEMS.length * 760 + 350;
      schedule(() => {
        setCaption("Pedido listo, despachando…");
        setTrackPhase("dash");
        setShowStreaks(true);
      }, dashStart);

      schedule(() => {
        setTrackPhase("hidden");
        setShowStreaks(false);
        setShowFium(true);
        setCaption("En camino con Fium");
      }, dashStart + 680);

      schedule(runCycle, dashStart + 680 + 2000);
    }

    runCycle();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion]);

  const effectiveVisibleCount = reduceMotion ? CART_ITEMS.length : visibleCount;
  const effectiveCount = reduceMotion ? CART_ITEMS.length : count;
  const effectiveTrackPhase = reduceMotion ? "hidden" : trackPhase;
  const effectiveShowFium = reduceMotion ? true : showFium;
  const effectiveCaption = reduceMotion ? "En camino con Fium" : caption;

  const isDash = effectiveTrackPhase === "dash";
  const isHidden = effectiveTrackPhase === "hidden";

  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[380px]">
      {/* shadow */}
      <div
        className={`absolute bottom-16 left-1/2 h-5 rounded-full bg-[rgba(22,21,26,0.14)] blur-[5px] transition-[transform,opacity,width] duration-[680ms] ease-[cubic-bezier(.5,0,.4,1)] ${
          isDash
            ? "w-[90px] translate-x-[calc(-50%+300px)] opacity-50"
            : isHidden
              ? "w-[90px] translate-x-[calc(-50%+300px)] opacity-0"
              : "w-[150px] -translate-x-1/2 opacity-100"
        }`}
      />

      {/* streaks */}
      <div
        className={`absolute bottom-24 left-[6%] flex flex-col gap-2.5 transition-opacity duration-200 ${
          showStreaks ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="block h-[3px] w-[34px] animate-streakflow rounded-[3px] bg-indigo opacity-65" />
        <span className="ml-[-10px] block h-[3px] w-[52px] animate-streakflow rounded-[3px] bg-indigo opacity-40 [animation-delay:60ms]" />
        <span className="ml-3.5 block h-[3px] w-6 animate-streakflow rounded-[3px] bg-indigo opacity-55 [animation-delay:120ms]" />
      </div>

      {/* cart track */}
      <div
        className={`absolute bottom-[78px] left-1/2 transition-[transform,opacity] duration-[680ms] ease-[cubic-bezier(.5,0,.4,1)] ${
          isDash
            ? "translate-x-[calc(-50%+300px)] rotate-[-2deg]"
            : isHidden
              ? "translate-x-[calc(-50%+300px)] rotate-[-2deg] opacity-0"
              : "-translate-x-1/2 animate-idlebob"
        }`}
      >
        <svg
          viewBox="0 0 220 175"
          fill="none"
          className="block h-[175px] w-[220px] overflow-visible drop-shadow-[0_10px_14px_rgba(75,43,224,0.12)]"
        >
          <path
            d="M16 16 H39 L62 114 H177 L200 47 H60"
            fill="none"
            stroke="var(--color-indigo)"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g
            className={isDash ? "origin-center animate-spin-cart" : ""}
            style={{ transformBox: "fill-box" }}
          >
            <circle cx={81} cy={151} r={17} fill="var(--color-paper)" stroke="var(--color-indigo)" strokeWidth={8} />
            <circle cx={81} cy={151} r={4} fill="var(--color-indigo)" />
          </g>
          <g
            className={isDash ? "origin-center animate-spin-cart" : ""}
            style={{ transformBox: "fill-box" }}
          >
            <circle cx={159} cy={151} r={17} fill="var(--color-paper)" stroke="var(--color-indigo)" strokeWidth={8} />
            <circle cx={159} cy={151} r={4} fill="var(--color-indigo)" />
          </g>
        </svg>

        {/* count badge */}
        <div
          className={`absolute -top-1.5 right-1.5 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-indigo font-mono text-sm font-bold text-white shadow-[0_6px_14px_-4px_rgba(75,43,224,0.5)] ${
            bumping ? "animate-bump" : ""
          }`}
        >
          {effectiveCount}
        </div>

        {/* items */}
        {CART_ITEMS.map((item, idx) => {
          const dropped = idx < effectiveVisibleCount;
          return (
            <div
              key={item.key}
              className={`absolute transition-[top,opacity,transform] duration-[550ms] ease-[cubic-bezier(.34,1.4,.4,1)] ${item.className} ${
                dropped ? "opacity-100 scale-100" : "opacity-0 scale-[0.7]"
              }`}
              style={{
                left: `${item.left}px`,
                top: dropped ? `${item.top}px` : "-30px",
                transform: dropped
                  ? `scale(1) rotate(${item.rot}deg)`
                  : "scale(0.7) rotate(0deg)",
              }}
            />
          );
        })}
      </div>

      {/* fium slide card */}
      <div
        className={`absolute top-[38%] transition-[right,opacity,transform] duration-[550ms] ease-[cubic-bezier(.34,1.35,.4,1)] ${
          effectiveShowFium
            ? "right-[2%] -translate-y-1/2 scale-100 opacity-100"
            : "right-[-4%] -translate-y-1/2 scale-[0.7] opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-[0_20px_40px_-18px_rgba(22,21,26,0.35)]">
          <span className="relative h-2.5 w-2.5 flex-shrink-0 rounded-full bg-lime">
            <span className="absolute -inset-1.5 animate-ping-soft rounded-full border-[1.5px] border-lime" />
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="font-heading text-base font-extrabold text-ink">Fium</span>
            <span className="font-mono text-[10.5px] text-ink-soft">En camino · &lt; 60 min</span>
          </div>
        </div>
      </div>

      {/* caption */}
      <div className="absolute inset-x-0 bottom-0 text-center font-mono text-xs tracking-[0.03em] text-ink-soft">
        {effectiveCaption}
      </div>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-[76px] pb-11">
      {/* animated bg */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className={`absolute -inset-10 opacity-50 ${reduceMotion ? "" : "animate-drift"}`}
          style={{
            backgroundImage: "radial-gradient(var(--color-line) 1.4px, transparent 1.4px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div
          className={`absolute -top-[90px] right-[8%] h-[340px] w-[340px] rounded-full bg-indigo opacity-30 blur-[70px] ${reduceMotion ? "" : "animate-float1"}`}
        />
        <div
          className={`absolute -bottom-[120px] left-[2%] h-[260px] w-[260px] rounded-full bg-lime opacity-30 blur-[70px] ${reduceMotion ? "" : "animate-float2"}`}
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-[1220px] px-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-11 md:grid-cols-[1.08fr_0.92fr] md:gap-14">
          <div>
            <div className="inline-flex items-center gap-2.5 font-mono text-xs font-medium tracking-[0.05em] text-green uppercase">
              <span className="relative h-[7px] w-[7px] rounded-full bg-green">
                <span className="absolute -inset-1 animate-ping-soft rounded-full border-[1.5px] border-green" />
              </span>
              E-commerce para supermercados y minimarkets · Chile
            </div>

            <h1 className="mt-5 mb-6 text-[34px] leading-[1.04] font-extrabold sm:text-5xl lg:text-[58px]">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: lineEase }}
                >
                  Tu supermercado,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: lineEase, delay: 0.12 }}
                >
                  vendiendo <span className="text-indigo">online</span>
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-5">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: lineEase, delay: 0.24 }}
                >
                  <Annotation type="underline">en serio.</Annotation>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8 max-w-[500px] text-lg text-ink-soft"
            >
              Sin comisión por pedido, como en las apps de reparto. Y sin motoboy que
              contratar: del reparto se encarga Fium.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65 }}
              className="flex flex-wrap gap-3.5"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-indigo px-7 py-4 text-[15px] font-semibold text-white shadow-[0_6px_0_var(--color-indigo-dark)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_0_var(--color-indigo-dark)]"
              >
                Diagnóstico gratis
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-ink px-7 py-4 text-[15px] font-semibold text-ink transition hover:bg-ink hover:text-paper"
              >
                Ver cómo funciona
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.4 }}
            className="flex min-h-[360px] items-center justify-center"
          >
            <CartAnimation />
          </motion.div>
        </div>

        <div className="mt-14">
          <Marquee items={marqueeItems} />
        </div>
      </div>
    </section>
  );
}
