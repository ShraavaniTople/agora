"use client";
import { useEffect, useRef } from "react";

const PURPLE = "99,33,238";
const TEAL   = "127,255,212";
const AQUA   = "122,204,200";

interface Ring {
  R: number;
  tilt: number;
  rgb: string;
  alpha: number;
  nodes: { phase: number; spd: number; size: number }[];
}

export default function OrbitalSphere() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let frame = 0;
    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const rings: Ring[] = [
      {
        R: 0, tilt: Math.PI * 0.15,
        rgb: PURPLE, alpha: 0.72,
        nodes: [
          { phase: 0.00, spd: 0.0090, size: 5.5 },
          { phase: 0.50, spd: 0.0090, size: 4.0 },
        ],
      },
      {
        R: 0, tilt: Math.PI * 0.40,
        rgb: TEAL, alpha: 0.60,
        nodes: [
          { phase: 0.12, spd: 0.0065, size: 6.5 },
          { phase: 0.62, spd: 0.0065, size: 4.5 },
          { phase: 0.37, spd: 0.0065, size: 3.5 },
        ],
      },
      {
        R: 0, tilt: Math.PI * 0.60,
        rgb: AQUA, alpha: 0.45,
        nodes: [
          { phase: 0.25, spd: 0.0050, size: 5.0 },
          { phase: 0.75, spd: 0.0050, size: 4.0 },
        ],
      },
    ];

    const orbitPt = (
      angle: number, R: number, tilt: number,
      cx: number, cy: number,
    ) => ({
      sx:    cx + Math.cos(angle) * R,
      sy:    cy + Math.sin(angle) * R * Math.cos(tilt),
      depth: Math.sin(angle) * R * Math.sin(tilt),
    });

    const drawSphere = (cx: number, cy: number, R: number) => {
      // ── Atmospheric halo (starts outside sphere, no sphere bleaching) ──
      const halo = ctx.createRadialGradient(cx, cy, R * 0.95, cx, cy, R * 3.2);
      halo.addColorStop(0,    `rgba(${PURPLE},0.38)`);
      halo.addColorStop(0.35, `rgba(${PURPLE},0.12)`);
      halo.addColorStop(0.70, `rgba(${TEAL},0.04)`);
      halo.addColorStop(1,    "rgba(0,0,0,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R * 3.2, 0, Math.PI * 2);
      ctx.fillStyle = halo; ctx.fill();

      // ── Dark base (sphere silhouette) ──
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(4,1,14,0.98)";
      ctx.fill();

      // ── Main directional lighting (top-left source → bottom-right shadow) ──
      const lit = ctx.createRadialGradient(
        cx - R * 0.28, cy - R * 0.28, R * 0.02,
        cx + R * 0.18, cy + R * 0.22, R * 1.12,
      );
      lit.addColorStop(0,    "rgba(185,110,255,0.92)");
      lit.addColorStop(0.18, "rgba(120,42,230,0.82)");
      lit.addColorStop(0.48, "rgba(52,14,125,0.68)");
      lit.addColorStop(0.78, "rgba(12,4,38,0.35)");
      lit.addColorStop(1.0,  "rgba(0,0,0,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = lit; ctx.fill();

      // ── Sharp specular highlight (small bright spot, top-left) ──
      const spec = ctx.createRadialGradient(
        cx - R * 0.33, cy - R * 0.33, 0,
        cx - R * 0.20, cy - R * 0.20, R * 0.24,
      );
      spec.addColorStop(0,   "rgba(230,195,255,0.80)");
      spec.addColorStop(0.45, "rgba(200,145,255,0.22)");
      spec.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = spec; ctx.fill();

      // ── Teal secondary highlight (upper-left edge) ──
      const tealSpec = ctx.createRadialGradient(
        cx - R * 0.30, cy - R * 0.10, 0,
        cx - R * 0.15, cy - R * 0.05, R * 0.18,
      );
      tealSpec.addColorStop(0,   `rgba(${TEAL},0.45)`);
      tealSpec.addColorStop(0.5, `rgba(${TEAL},0.08)`);
      tealSpec.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = tealSpec; ctx.fill();

      // ── Purple rim light (edge glow) ──
      const rim = ctx.createRadialGradient(cx, cy, R * 0.70, cx, cy, R);
      rim.addColorStop(0,   "rgba(130,55,255,0)");
      rim.addColorStop(0.65, "rgba(130,55,255,0.18)");
      rim.addColorStop(1,   "rgba(130,55,255,0.62)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = rim; ctx.fill();

      // ── Sphere border ──
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(160,80,255,0.55)";
      ctx.lineWidth = 1.5; ctx.stroke();

      // ── Latitude grid lines ──
      ctx.lineWidth = 0.4;
      ctx.strokeStyle = `rgba(${PURPLE},0.14)`;
      for (let i = -3; i <= 3; i++) {
        if (i === 0) continue;
        const latA = (i / 4) * Math.PI * 0.65;
        const latR = R * Math.cos(latA);
        const latY = cy + R * Math.sin(latA);
        if (latR > 3) {
          ctx.beginPath();
          ctx.ellipse(cx, latY, latR, latR * 0.18, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // ── Longitude grid lines ──
      ctx.strokeStyle = `rgba(${PURPLE},0.10)`;
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(a);
        ctx.beginPath();
        ctx.ellipse(0, 0, R * 0.18, R, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    };

    const drawRing = (ring: Ring, cx: number, cy: number) => {
      const { R, tilt, rgb, alpha } = ring;
      const semiX = R;
      const semiY = R * Math.abs(Math.cos(tilt));

      // Back half — dashed, dimmer
      ctx.save();
      ctx.strokeStyle = `rgba(${rgb},${alpha * 0.35})`;
      ctx.lineWidth   = 1.0;
      ctx.setLineDash([5, 9]);
      ctx.beginPath();
      ctx.ellipse(cx, cy, semiX, semiY, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Full ring — solid
      ctx.strokeStyle = `rgba(${rgb},${alpha})`;
      ctx.lineWidth   = 1.4;
      ctx.beginPath();
      ctx.ellipse(cx, cy, semiX, semiY, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Nodes
      const scrollPhase = scrollY * 0.00028;
      for (const node of ring.nodes) {
        const a  = ((node.phase + frame * node.spd + scrollPhase) % 1) * Math.PI * 2;
        const pt = orbitPt(a, R, tilt, cx, cy);
        const front  = pt.depth <= 0;
        const nAlpha = front ? 0.95 : 0.30;
        const nr     = node.size * (front ? 1.0 : 0.55);

        // Glow halo
        const glowR = nr * 5.5;
        const g = ctx.createRadialGradient(pt.sx, pt.sy, 0, pt.sx, pt.sy, glowR);
        g.addColorStop(0,    `rgba(${rgb},${nAlpha * 0.65})`);
        g.addColorStop(0.30, `rgba(${rgb},0.14)`);
        g.addColorStop(1,    "rgba(0,0,0,0)");
        ctx.beginPath(); ctx.arc(pt.sx, pt.sy, glowR, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();

        // Core dot
        ctx.beginPath(); ctx.arc(pt.sx, pt.sy, nr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${nAlpha})`;
        ctx.fill();

        // Motion trail
        const trailLen = 0.06;
        const a2  = ((node.phase + frame * node.spd + scrollPhase - trailLen + 1) % 1) * Math.PI * 2;
        const pt2 = orbitPt(a2, R, tilt, cx, cy);
        const grad = ctx.createLinearGradient(pt2.sx, pt2.sy, pt.sx, pt.sy);
        grad.addColorStop(0, `rgba(${rgb},0)`);
        grad.addColorStop(1, `rgba(${rgb},${nAlpha * 0.35})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = nr * 0.7;
        ctx.beginPath();
        ctx.moveTo(pt2.sx, pt2.sy);
        ctx.lineTo(pt.sx, pt.sy);
        ctx.stroke();
      }
    };

    const tick = () => {
      frame++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const cx      = W * 0.50;
      const cy      = H * 0.50;
      const sphereR = Math.min(W, H) * 0.20;

      rings[0].R = sphereR * 1.55;
      rings[1].R = sphereR * 2.20;
      rings[2].R = sphereR * 2.80;

      for (const ring of rings) drawRing(ring, cx, cy);
      drawSphere(cx, cy, sphereR);

      // Front-half nodes redrawn on top of sphere
      const scrollPhase = scrollY * 0.00028;
      for (const ring of rings) {
        for (const node of ring.nodes) {
          const a  = ((node.phase + frame * node.spd + scrollPhase) % 1) * Math.PI * 2;
          const pt = orbitPt(a, ring.R, ring.tilt, cx, cy);
          if (pt.depth > 0) continue;

          const glowR = node.size * 5.5;
          const g = ctx.createRadialGradient(pt.sx, pt.sy, 0, pt.sx, pt.sy, glowR);
          g.addColorStop(0,    `rgba(${ring.rgb},0.65)`);
          g.addColorStop(0.30, `rgba(${ring.rgb},0.14)`);
          g.addColorStop(1,    "rgba(0,0,0,0)");
          ctx.beginPath(); ctx.arc(pt.sx, pt.sy, glowR, 0, Math.PI * 2);
          ctx.fillStyle = g; ctx.fill();

          ctx.beginPath(); ctx.arc(pt.sx, pt.sy, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ring.rgb},0.95)`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute", top: 0, left: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}
