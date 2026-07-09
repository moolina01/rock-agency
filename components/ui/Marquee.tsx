"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function Marquee({ items, dark = false }: { items: ReactNode[]; dark?: boolean }) {
  const reduceMotion = useReducedMotion();
  const track = [...items, ...items];

  return (
    <div className={`overflow-hidden border-t border-b py-4 ${dark ? "border-white/10" : "border-line"}`}>
      <div
        className={`flex w-max gap-13 whitespace-nowrap ${
          reduceMotion ? "" : "animate-marquee"
        } [animation-play-state:running] hover:[animation-play-state:paused]`}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-2.5 font-mono text-[13px] font-medium ${
              dark ? "text-[#B4B2BE]" : "text-ink-soft"
            }`}
          >
            <span className={dark ? "text-lime" : "text-indigo"}>✦</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
