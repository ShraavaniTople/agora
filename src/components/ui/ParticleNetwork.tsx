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

interface Cube {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  rotY: number; vrotY: number;  // horizontal rotation (affects isometric skew)
  color: string;
  alpha: number;
}

interface Cross {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  alpha: number;
}

type Point2D = { x: number; y: number };

function drawIsoCube(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number,
  s: number,
  rotY: number,   // 0–1 continuous spin
  color: string,
  alpha: number,
) {
  const a = rotY * Math.PI * 2;
  const cosA = Math.cos(a);
  const sinA = Math.sin(a);

  // Isometric projection of a 3D point into screen coords
  const iso = (x: number, y: number, z: number): Point2D => ({
    x: cx + (x * cosA - z * sinA) * 0.82,
    y: cy + (x * sinA + z * cosA) * 0.42 - y * 0.9,
  });

  // 8 vertices of a cube ±s
  const v: Point2D[] = [
    iso(-s, -s, -s), iso( s, -s, -s), iso( s, -s,  s), iso(-s, -s,  s),
    iso(-s,  s, -s), iso( s,  s, -s), iso( s,  s,  s), iso(-s,  s,  s),
  ];

  const face = (pts: Point2D[], fillOpacity: number, strokeOpacity: number) => {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.closePath();
    ctx.fillStyle   = `rgba(${color},${fillOpacity})`;
    ctx.strokeStyle = `rgba(${color},${strokeOpacity})`;
    ctx.lineWidth   = 1.1;
    ctx.fill();
    ctx.stroke();
  };

  // Top face (brightest)
  face([v[0], v[1], v[2], v[3]], alpha * 0.28, alpha);
  // Right face
  face([v[1], v[5], v[6], v[2]], alpha * 0.14, alpha * 0.85);
  // Front face (darkest)
  face([v[2], v[6], v[7], v[3]], alpha * 0.07, alpha * 0.7);

  // Bright top-edge highlight
  ctx.strokeStyle = `rgba(${color},${Math.min(1, alpha * 1.5)})`;
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  ctx.moveTo(v[0].x, v[0].y);
  ctx.lineTo(v[1].x, v[1].y);
  ctx.lineTo(v[2].x, v[2].y);
  ctx.lineTo(v[3].x, v[3].y);
  ctx.closePath();
  ctx.stroke();
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 480) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DOT_COUNT   = 40;
    const CUBE_COUNT  = window.innerWidth > 1024 ? 9 : 6;
    const CROSS_COUNT = 10;
    const LINK_DIST   = 175;

    let dots:    Dot[]   = [];
    let cubes:   Cube[]  = [];
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

      cubes = Array.from({ length: CUBE_COUNT }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.15,
        vy:    (Math.random() - 0.5) * 0.15,
        size:  Math.random() * 42 + 22,
        rotY:  Math.random(),
        vrotY: (Math.random() - 0.5) * 0.0012,
        color: Math.random() < 0.55 ? PURPLE : TEAL,
        alpha: Math.random() * 0.22 + 0.30,  // 0.30 – 0.52: clearly visible
      }));

      crosses = Array.from({ length: CROSS_COUNT }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.22,
        vy:    (Math.random() - 0.5) * 0.22,
        size:  Math.random() * 9 + 6,
        alpha: Math.random() * 0.3 + 0.25,  // 0.25 – 0.55: clearly visible
      }));
    };

    const wrap = (v: number, max: number, margin: number) =>
      v < -margin ? max + margin : v > max + margin ? -margin : v;

    const tick = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      /* ── Isometric 3D cubes ───────────────────────── */
      for (const b of cubes) {
        b.x    = wrap(b.x + b.vx, W, b.size * 2);
        b.y    = wrap(b.y + b.vy, H, b.size * 2);
        b.rotY = (b.rotY + b.vrotY + 1) % 1;
        drawIsoCube(ctx, b.x, b.y, b.size, b.rotY, b.color, b.alpha);
      }

      /* ── Cross marks ──────────────────────────────── */
      for (const c of crosses) {
        c.x = wrap(c.x + c.vx, W, c.size);
        c.y = wrap(c.y + c.vy, H, c.size);

        ctx.strokeStyle = `rgba(${TEAL},${c.alpha})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(c.x - c.size, c.y);
        ctx.lineTo(c.x + c.size, c.y);
        ctx.moveTo(c.x, c.y - c.size);
        ctx.lineTo(c.x, c.y + c.size);
        ctx.stroke();

        // Centre dot on cross
        ctx.beginPath();
        ctx.arc(c.x, c.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${TEAL},${c.alpha * 1.4})`;
        ctx.fill();
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
