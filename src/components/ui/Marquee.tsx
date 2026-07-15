"use client";

import type { ReactNode } from "react";
import { useState } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function Marquee({ children, speed = 30, className = "" }: MarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-current to-transparent opacity-100" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-current to-transparent opacity-100" />

      <div
        className="flex"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        <div className="flex flex-shrink-0 gap-8 pr-8">{children}</div>
        <div className="flex flex-shrink-0 gap-8 pr-8" aria-hidden>
          {children}
        </div>
        <div className="flex flex-shrink-0 gap-8 pr-8" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
