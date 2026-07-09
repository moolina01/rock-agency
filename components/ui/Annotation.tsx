"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type AnnotationProps = {
  children: ReactNode;
  type?: "underline" | "circle";
  className?: string;
};

const drawEase: [number, number, number, number] = [0.6, 0, 0.4, 1];

export default function Annotation({
  children,
  type = "underline",
  className = "",
}: AnnotationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      {children}
      {type === "underline" ? (
        <svg
          viewBox="0 0 200 20"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -bottom-3.5 -left-[6%] h-5 w-[112%] overflow-visible"
          aria-hidden="true"
        >
          <motion.path
            d="M4 13 C 50 18, 120 4, 196 11"
            fill="none"
            stroke="var(--color-indigo)"
            strokeWidth={5}
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0 }}
            whileInView={reduceMotion ? undefined : { pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: drawEase }}
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 260 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute -top-[22%] -left-[6%] h-[150%] w-[112%] overflow-visible"
          aria-hidden="true"
        >
          <motion.path
            d="M130 6 C 210 4, 258 18, 250 32 C 242 48, 150 56, 90 54 C 20 52, 4 40, 10 26 C 16 12, 70 6, 130 6 Z"
            fill="none"
            stroke="var(--color-lime)"
            strokeWidth={4}
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0 }}
            whileInView={reduceMotion ? undefined : { pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: drawEase }}
          />
        </svg>
      )}
    </span>
  );
}
