"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Annotation from "@/components/ui/Annotation";
import { useIsDark } from "@/components/ui/ThemeToggle";

const lineEase: [number, number, number, number] = [0.2, 0.75, 0.2, 1];

const TYPE_WORDS = ["minimarkets.", "mayoristas."];

function useTypewriterLoop() {
  const reduceMotion = useReducedMotion();
  const [word, setWord] = useState(TYPE_WORDS[0]);
  const [line3, setLine3] = useState(() => (reduceMotion ? TYPE_WORDS[0] : ""));
  const [typing, setTyping] = useState(false);
  const [showUnderline, setShowUnderline] = useState(() => !!reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    let index = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.push(id);
    };

    function runCycle() {
      const current = TYPE_WORDS[index];
      setWord(current);
      setLine3("");
      setShowUnderline(false);
      setTyping(true);

      const typeSpeed = 32;
      const eraseSpeed = 22;
      let t = 900;

      for (let i = 1; i <= current.length; i++) {
        schedule(() => setLine3(current.slice(0, i)), t);
        t += typeSpeed;
      }

      schedule(() => {
        setTyping(false);
        setShowUnderline(true);
      }, t);

      t += 2600;

      schedule(() => {
        setShowUnderline(false);
        setTyping(true);
      }, t);
      for (let i = current.length - 1; i >= 0; i--) {
        schedule(() => setLine3(current.slice(0, i)), t);
        t += eraseSpeed;
      }

      t += 600;
      index = (index + 1) % TYPE_WORDS.length;
      schedule(runCycle, t);
    }

    runCycle();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion]);

  return { line3, typing, showUnderline, word };
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const isDark = useIsDark();

  const { line3, typing, showUnderline, word } = useTypewriterLoop();

  function handlePlanesClick(e: React.MouseEvent) {
    e.preventDefault();
    const el = document.getElementById("planes");
    if (!el) return;

    const navOffset = 88;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden pt-12 pb-11">
      {/* animated bg */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className={`absolute -inset-10 opacity-50 dark:hidden ${reduceMotion ? "" : "animate-drift"}`}
          style={{
            backgroundImage: "radial-gradient(var(--color-line) 1.4px, transparent 1.4px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div
          className={`absolute -top-[90px] right-[8%] h-[340px] w-[340px] rounded-full bg-indigo opacity-30 blur-[70px] dark:bg-indigo-dark dark:opacity-45 ${reduceMotion ? "" : "animate-float1"}`}
        />
        <div
          className={`absolute -bottom-[120px] left-[2%] h-[260px] w-[260px] rounded-full bg-lime opacity-30 blur-[70px] dark:bg-green dark:opacity-40 ${reduceMotion ? "" : "animate-float2"}`}
        />
      </div>

      {/* dark mode: mockup bleeds off the right edge of the section and dissolves into the background */}
      {isDark && (
        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: lineEase }}
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[52%] max-w-[720px] md:block"
        >
          <div className="relative h-full w-full">
            <Image
              src="/computador.png"
              alt=""
              fill
              sizes="52vw"
              priority
              className="object-contain object-right [mask-image:radial-gradient(ellipse_62%_58%_at_58%_48%,black_42%,transparent_88%)] [-webkit-mask-image:radial-gradient(ellipse_62%_58%_at_58%_48%,black_42%,transparent_88%)]"
            />
          </div>
        </motion.div>
      )}

      <div className="relative mx-auto max-w-[1220px] px-6 sm:px-10">
        <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1.08fr_0.92fr] md:gap-12">
          <div className="relative z-[2]">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs font-medium tracking-[0.05em] text-green uppercase dark:text-lime">
              <span className="relative h-[7px] w-[7px] rounded-full bg-green dark:bg-lime">
                <span className="absolute -inset-1 animate-ping-soft rounded-full border-[1.5px] border-green dark:border-lime" />
              </span>
              Agencia Shopify Partners · Supermercados, distribuidoras y mayoristas en Chile
            </div>

            <h1 className="mt-5 mb-5 text-[36px] leading-[1.05] font-extrabold sm:text-5xl lg:text-[58px]">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: lineEase }}
                >
                  Expertos en <span className="text-indigo">eCommerce</span>
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: lineEase, delay: 0.12 }}
                >
                  para supermercados,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: lineEase, delay: 0.2 }}
                >
                  distribuidoras y
                </motion.span>
              </span>
              <span className="block min-h-[1.3em] pb-3 whitespace-nowrap">
                {showUnderline ? (
                  <Annotation type="underline">{word}</Annotation>
                ) : (
                  <>
                    {line3}
                    {typing && !reduceMotion && (
                      <span className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.12em] animate-blink bg-ink align-middle" />
                    )}
                  </>
                )}
              </span>
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-6 max-w-[500px] text-lg text-ink-soft"
            >
              Diseñamos, desarrollamos y optimizamos tiendas Shopify de alto
              rendimiento para supermercados, distribuidoras y mayoristas que
              venden más y operan de forma más eficiente.
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
                Hablemos de tu proyecto
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#planes"
                onClick={handlePlanesClick}
                className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-ink px-7 py-4 text-[15px] font-semibold text-ink transition hover:bg-ink hover:text-paper"
              >
                Ver planes
              </Link>
            </motion.div>
          </div>

          {/* mobile: contained image below the copy */}
          <div className="relative md:min-h-[400px]">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative mx-auto aspect-[3/2] w-full max-w-[440px] overflow-hidden rounded-2xl shadow-[0_20px_50px_-24px_rgba(22,21,26,0.4)] md:hidden"
            >
              <Image
                src="/computador.png"
                alt="Tienda Shopify de Rock Agency con seguimiento de entrega Fium, vista en laptop y celular"
                fill
                sizes="(min-width: 640px) 440px, 92vw"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* light mode only: image card, bound to this row (never reaches the header), leaning slightly into the copy column and past the container edge */}
            {!isDark && (
              <motion.div
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, delay: 0.4, ease: lineEase }}
                className="pointer-events-none absolute inset-y-0 -right-6 -left-10 z-[1] hidden md:block lg:-right-10"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#0d0d10] shadow-[0_30px_70px_-28px_rgba(22,21,26,0.4)]">
                  <Image
                    src="/computador.png"
                    alt=""
                    fill
                    sizes="45vw"
                    priority
                    className="object-contain"
                  />
                </div>
              </motion.div>
            )}

            {/* floating trust badge, overlapping the lower edge of the mockup image */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="absolute inset-x-0 bottom-4 z-[3] flex justify-center px-6 sm:bottom-6"
            >
              <div className="flex items-center gap-3.5 rounded-2xl border border-line bg-white px-4 py-2.5 shadow-[0_16px_38px_-16px_rgba(22,21,26,0.45)] sm:gap-4 sm:px-5 sm:py-3">
                <Image
                  src="/shopify-partner.png"
                  alt="Shopify Partners"
                  width={719}
                  height={121}
                  className="h-4 w-auto sm:h-5"
                />
                <span className="h-5 w-px bg-line sm:h-6" />
                <Image
                  src="/shopifyexpertslogo.png"
                  alt="Shopify Experts"
                  width={430}
                  height={80}
                  className="h-5 w-auto sm:h-6"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
