"use client";

import { useEffect, useRef } from "react";

const TEAL   = "127,255,212";
const AQUA   = "122,204,200";
const PURPLE = "99,33,238";

function pickColor(): string {
  const r = Math.random();
  if (r < 0.68) return TEAL;
  if (r < 0.88) return AQUA;
  return PURPLE;
}

interface Dot {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  color: string;
  alpha: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const COUNT     = isMobile ? 0 : 42;
    const LINK_DIST = 175;
    const SPEED     = 0.32;

    let dots: Dot[] = [];
    let rafId = 0;

    const setup = () => {
      // Fall back to window dimensions if the canvas hasn't been laid out yet
      const w = canvas.offsetWidth  > 0 ? canvas.offsetWidth  : window.innerWidth;
      const h = canvas.offsetHeight > 0 ? canvas.offsetHeight : window.innerHeight;
      canvas.width  = w;
      canvas.height = h;
      dots = Array.from({ length: COUNT }, () => ({
        x:     Math.random() * w,
        y:     Math.random() * h,
        vx:    (Math.random() - 0.5) * SPEED,
        vy:    (Math.random() - 0.5) * SPEED,
        r:     Math.random() * 3.8 + 1.4,
        color: pickColor(),
        alpha: Math.random() * 0.45 + 0.28,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      }

      // Connecting lines — alpha fades with distance
      ctx.lineWidth = 0.7;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx   = dots[i].x - dots[j].x;
          const dy   = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const a = (1 - dist / LINK_DIST) * 0.30;
            ctx.strokeStyle = `rgba(${TEAL},${a})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${d.color},${d.alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    // Defer to next frame so the canvas has been laid out and has real dimensions
    const initId = requestAnimationFrame(() => {
      setup();
      tick();
    });

    const ro = new ResizeObserver(setup);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(initId);
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
