"use client";

import { useEffect, useRef } from "react";

const TEAL   = "127,255,212";
const AQUA   = "122,204,200";
const PURPLE = "99,33,238";

interface Dot {
  x: number; y: number;
  vx: number; vy: number;
  r: number; color: string; alpha: number;
}

interface Block {
  x: number; y: number;
  vx: number; vy: number;
  w: number; h: number;
  angle: number; va: number;
  color: string; alpha: number;
}

interface Cross {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  alpha: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 640) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DOT_COUNT   = 40;
    const BLOCK_COUNT = 11;
    const CROSS_COUNT = 9;
    const LINK_DIST   = 175;

    let dots:   Dot[]   = [];
    let blocks: Block[] = [];
    let crosses: Cross[] = [];
    let raf = 0;

    const resize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;

      dots = Array.from({ length: DOT_COUNT }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.38,
        vy:    (Math.random() - 0.5) * 0.38,
        r:     Math.random() * 3.5 + 1.8,
        color: Math.random() < 0.68 ? TEAL : Math.random() < 0.65 ? AQUA : PURPLE,
        alpha: Math.random() * 0.45 + 0.4,
      }));

      blocks = Array.from({ length: BLOCK_COUNT }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.18,
        vy:    (Math.random() - 0.5) * 0.18,
        w:     Math.random() * 110 + 65,
        h:     Math.random() * 60  + 32,
        angle: Math.random() * Math.PI * 2,
        va:    (Math.random() - 0.5) * 0.0025,
        color: Math.random() < 0.55 ? PURPLE : TEAL,
        alpha: Math.random() * 0.07 + 0.06,
      }));

      crosses = Array.from({ length: CROSS_COUNT }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.22,
        vy:    (Math.random() - 0.5) * 0.22,
        size:  Math.random() * 7 + 5,
        alpha: Math.random() * 0.18 + 0.10,
      }));
    };

    // Wrap a value into [0, max] with margin
    const wrap = (v: number, max: number, margin: number) =>
      v < -margin ? max + margin : v > max + margin ? -margin : v;

    const tick = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      /* ── Wireframe blocks ─────────────────────────── */
      for (const b of blocks) {
        b.x = wrap(b.x + b.vx, W, b.w);
        b.y = wrap(b.y + b.vy, H, b.h);
        b.angle += b.va;

        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.angle);

        // Subtle inner fill
        ctx.fillStyle = `rgba(${b.color},${b.alpha * 0.3})`;
        ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);

        // Border
        ctx.strokeStyle = `rgba(${b.color},${b.alpha})`;
        ctx.lineWidth   = 0.65;
        ctx.strokeRect(-b.w / 2, -b.h / 2, b.w, b.h);

        // Top highlight line inside (single accent line at top)
        ctx.strokeStyle = `rgba(${b.color},${b.alpha * 1.8})`;
        ctx.lineWidth   = 0.5;
        ctx.beginPath();
        ctx.moveTo(-b.w / 2 + 4, -b.h / 2 + 1);
        ctx.lineTo( b.w / 2 - 4, -b.h / 2 + 1);
        ctx.stroke();

        ctx.restore();
      }

      /* ── Cross marks ──────────────────────────────── */
      ctx.lineWidth = 0.8;
      for (const c of crosses) {
        c.x = wrap(c.x + c.vx, W, c.size);
        c.y = wrap(c.y + c.vy, H, c.size);

        ctx.strokeStyle = `rgba(${TEAL},${c.alpha})`;
        ctx.beginPath();
        ctx.moveTo(c.x - c.size, c.y);
        ctx.lineTo(c.x + c.size, c.y);
        ctx.moveTo(c.x, c.y - c.size);
        ctx.lineTo(c.x, c.y + c.size);
        ctx.stroke();
      }

      /* ── Dot movement ─────────────────────────────── */
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;
      }

      /* ── Connecting lines ─────────────────────────── */
      ctx.lineWidth = 0.8;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx   = dots[i].x - dots[j].x;
          const dy   = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(${TEAL},${(1 - dist / LINK_DIST) * 0.38})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      /* ── Dots with glow ───────────────────────────── */
      for (const d of dots) {
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 4);
        g.addColorStop(0, `rgba(${d.color},${d.alpha * 0.32})`);
        g.addColorStop(1, `rgba(${d.color},0)`);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${d.color},${d.alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 2,
      }}
    />
  );
}
