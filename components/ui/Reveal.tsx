"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const revealEase: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

type RevealProps = HTMLMotionProps<"div"> & {
  /** Stagger step, mirrors the mockup's .d1/.d2/.d3 delay classes */
  delay?: 0 | 1 | 2 | 3;
};

const delaySeconds = { 0: 0, 1: 0.08, 2: 0.16, 3: 0.24 } as const;

export default function Reveal({
  delay = 0,
  children,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: revealEase, delay: delaySeconds[delay] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
