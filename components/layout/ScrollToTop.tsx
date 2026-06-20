"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Histéresis: umbrales distintos para mostrar/ocultar y así evitar
    // el parpadeo cuando el scroll oscila alrededor de un único punto.
    const SHOW_AT = 500;
    const HIDE_AT = 300;

    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setVisible((prev) => (y > SHOW_AT ? true : y < HIDE_AT ? false : prev));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.button
      type="button"
      onClick={scrollUp}
      aria-label="Volver arriba"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 16,
        scale: visible ? 1 : 0.9,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#402178] text-white shadow-lg transition-colors hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-300 ${
        visible ? "" : "pointer-events-none"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-5 w-5 transition-transform group-hover:-translate-y-0.5"
      >
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}
