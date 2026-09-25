"use client";
import { useEffect, useRef } from "react";

/* ── Colour palette ───────────────────────────────── */
const TEAL   = "127,255,212";
const PURPLE = "99,33,238";
const AQUA   = "122,204,200";

/* ── Wireframe shape definitions (unit radius) ────── */
const SHAPES = {
  cube: {
    v: [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]] as [number,number,number][],
    e: [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],
  },
  octa: {
    v: [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]] as [number,number,number][],
    e: [[0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],[2,4],[2,5],[3,4],[3,5]],
  },
  tetra: {
    v: [[1,1,1],[1,-1,-1],[-1,1,-1],[-1,-1,1]] as [number,number,number][],
    e: [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],
  },
} as const;
type ShapeKey = keyof typeof SHAPES;

/* ── Rotation helper ──────────────────────────────── */
function rot(
  x: number, y: number, z: number,
  rx: number, ry: number,
): [number, number] {
  // Y-axis rotation
  const x1 =  x * Math.cos(ry) + z * Math.sin(ry);
  const z1 = -x * Math.sin(ry) + z * Math.cos(ry);
  // X-axis rotation
  const y2 = y * Math.cos(rx) - z1 * Math.sin(rx);
  return [x1, y2];
}

/* ── Types ────────────────────────────────────────── */
interface FNode { x: number; y: number; vx: number; vy: number; r: number; rgb: string; a: number }
interface FShape {
  cx: number; cy: number; vx: number; vy: number;
  rx: number; ry: number; vrx: number; vry: number;
  r: number; kind: ShapeKey; rgb: string; a: number;
}

export default function GlobalBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let nodes:  FNode[]  = [];
    let shapes: FShape[] = [];
    const LINK = 165;
    const keys: ShapeKey[] = ["cube", "octa", "tetra"];

    const init = () => {
      const W = canvas.width  = window.innerWidth;
      const H = canvas.height = window.innerHeight;
      const N = Math.min(70, Math.floor(W * H / 13000));

      nodes = Array.from({ length: N }, () => ({
        x:   Math.random() * W,
        y:   Math.random() * H,
        vx:  (Math.random() - 0.5) * 0.40,
        vy:  (Math.random() - 0.5) * 0.40,
        r:   Math.random() * 2.0 + 1.0,
        rgb: Math.random() < 0.55 ? TEAL : Math.random() < 0.55 ? PURPLE : AQUA,
        a:   Math.random() * 0.45 + 0.30,
      }));

      shapes = Array.from({ length: 12 }, () => ({
        cx:  Math.random() * W,
        cy:  Math.random() * H,
        vx:  (Math.random() - 0.5) * 0.24,
        vy:  (Math.random() - 0.5) * 0.24,
        rx:  Math.random() * Math.PI * 2,
        ry:  Math.random() * Math.PI * 2,
        vrx: (Math.random() - 0.5) * 0.009,
        vry: (Math.random() - 0.5) * 0.011,
        r:   Math.random() * 40 + 22,
        kind: keys[Math.floor(Math.random() * keys.length)],
        rgb: Math.random() < 0.52 ? PURPLE : TEAL,
        a:   Math.random() * 0.24 + 0.10,
      }));
    };

    const drawShape = (s: FShape) => {
      const def = SHAPES[s.kind];
      ctx.strokeStyle = `rgba(${s.rgb},${s.a})`;
      ctx.lineWidth   = 0.9;
      for (const [i, j] of def.e) {
        const [ax, ay] = rot(...def.v[i], s.rx, s.ry);
        const [bx, by] = rot(...def.v[j], s.rx, s.ry);
        ctx.beginPath();
        ctx.moveTo(s.cx + ax * s.r, s.cy + ay * s.r);
        ctx.lineTo(s.cx + bx * s.r, s.cy + by * s.r);
        ctx.stroke();
      }
    };

    const tick = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      /* shapes */
      for (const s of shapes) {
        s.cx = (s.cx + s.vx + W) % W;
        s.cy = (s.cy + s.vy + H) % H;
        s.rx += s.vrx; s.ry += s.vry;
        drawShape(s);
      }

      /* node movement */
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      /* connecting lines */
      ctx.lineWidth = 0.65;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${TEAL},${(1 - d / LINK) * 0.28})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      /* glowing nodes */
      for (const n of nodes) {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4.5);
        g.addColorStop(0, `rgba(${n.rgb},${n.a * 0.35})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 4.5, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();

        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.rgb},${n.a})`; ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    init();
    tick();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", init); };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}
