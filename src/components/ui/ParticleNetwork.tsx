"use client";

import { useEffect, useRef } from "react";

const TEAL   = "127,255,212";
const AQUA   = "122,204,200";
const PURPLE = "99,33,238";

function pickColor(): string {
  const r = Math.random();
  if (r < 0.70) return TEAL;
  if (r < 0.90) return AQUA;
  return PURPLE;
}

interface Dot {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  color: string;
  alpha: number;
}

const COUNT     = 45;
const LINK_DIST = 180;
const SPEED     = 0.38;

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Mobile: no animation
    if (window.matchMedia("(max-width: 640px)").matches) return;

    let dots: Dot[] = [];
    let rafId      = 0;
    let started    = false;

    const spawn = (w: number, h: number) => {
      dots = Array.from({ length: COUNT }, () => ({
        x:     Math.random() * w,
        y:     Math.random() * h,
        vx:    (Math.random() - 0.5) * SPEED,
        vy:    (Math.random() - 0.5) * SPEED,
        r:     Math.random() * 4 + 2,
        color: pickColor(),
        alpha: Math.random() * 0.5 + 0.45,
      }));
    };

    const tick = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Move
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
      }

      // Lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx   = dots[i].x - dots[j].x;
          const dy   = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.lineWidth   = 0.9;
            ctx.strokeStyle = `rgba(${TEAL},${(1 - dist / LINK_DIST) * 0.42})`;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots with soft glow
      for (const d of dots) {
        // Outer glow ring
        const grd = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 4);
        grd.addColorStop(0, `rgba(${d.color},${d.alpha * 0.4})`);
        grd.addColorStop(1, `rgba(${d.color},0)`);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${d.color},${d.alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    // ResizeObserver gives us the real rendered dimensions at every layout change
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width === 0 || height === 0) return;

      canvas.width  = width;
      canvas.height = height;
      spawn(width, height);   // recreate dots scaled to new size

      if (!started) {
        started = true;
        tick();               // start the loop once, on first valid size
      }
    });

    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2 }}
    />
  );
}
