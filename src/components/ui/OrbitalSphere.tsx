"use client";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────
   Orbital Sphere — premium hero background
   • Glowing 3D sphere (purple / teal gradient + rim light)
   • 3 gyroscope rings at different tilt angles
   • Animated glowing nodes with glow trails on each ring
   • Scroll-reactive phase shift
───────────────────────────────────────────────────────────────── */

const PURPLE = "99,33,238";
const TEAL   = "127,255,212";
const AQUA   = "122,204,200";

interface Ring {
  R: number;       // orbit radius (updated in tick)
  tilt: number;    // tilt from horizontal (radians)
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

    /* ── Three orbital rings (gyroscope effect) ─────────── */
    const rings: Ring[] = [
      {
        R: 0, tilt: Math.PI * 0.15,
        rgb: PURPLE, alpha: 0.55,
        nodes: [
          { phase: 0.00, spd: 0.0090, size: 5.5 },
          { phase: 0.50, spd: 0.0090, size: 4.0 },
        ],
      },
      {
        R: 0, tilt: Math.PI * 0.40,
        rgb: TEAL, alpha: 0.48,
        nodes: [
          { phase: 0.12, spd: 0.0065, size: 6.5 },
          { phase: 0.62, spd: 0.0065, size: 4.5 },
          { phase: 0.37, spd: 0.0065, size: 3.5 },
        ],
      },
      {
        R: 0, tilt: Math.PI * 0.60,
        rgb: AQUA, alpha: 0.40,
        nodes: [
          { phase: 0.25, spd: 0.0050, size: 5.0 },
          { phase: 0.75, spd: 0.0050, size: 4.0 },
        ],
      },
    ];

    /* ── Helpers ─────────────────────────────────────────── */

    // Project a point on the tilted orbit ring to screen coords
    const orbitPt = (
      angle: number, R: number, tilt: number,
      cx: number, cy: number,
    ) => ({
      sx:    cx + Math.cos(angle) * R,
      sy:    cy + Math.sin(angle) * R * Math.cos(tilt),
      depth: Math.sin(angle) * R * Math.sin(tilt), // >0 = behind sphere
    });

    /* ── Sphere ──────────────────────────────────────────── */
    const drawSphere = (cx: number, cy: number, R: number) => {
      // Wide ambient halo
      const halo = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 4.2);
      halo.addColorStop(0,    `rgba(${PURPLE},0.28)`);
      halo.addColorStop(0.35, `rgba(${PURPLE},0.09)`);
      halo.addColorStop(0.70, `rgba(${TEAL},0.03)`);
      halo.addColorStop(1,    "rgba(0,0,0,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R * 4.2, 0, Math.PI * 2);
      ctx.fillStyle = halo; ctx.fill();

      // Sphere body gradient — dark core → purple mid → bright highlight
      const body = ctx.createRadialGradient(
        cx - R * 0.28, cy - R * 0.28, R * 0.05,
        cx, cy, R,
      );
      body.addColorStop(0,    "rgba(160, 85, 255, 0.95)");
      body.addColorStop(0.22, "rgba(110, 40, 220, 0.90)");
      body.addColorStop(0.58, "rgba(30, 10, 75, 0.96)");
      body.addColorStop(1,    "rgba(6, 2, 18, 0.98)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = body; ctx.fill();

      // Teal specular top-left
      const spec = ctx.createRadialGradient(
        cx - R * 0.32, cy - R * 0.32, 0,
        cx - R * 0.15, cy - R * 0.15, R * 0.60,
      );
      spec.addColorStop(0,   `rgba(${TEAL},0.42)`);
      spec.addColorStop(0.4, `rgba(${TEAL},0.10)`);
      spec.addColorStop(1,   `rgba(${TEAL},0)`);
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = spec; ctx.fill();

      // Purple rim light
      const rim = ctx.createRadialGradient(cx, cy, R * 0.68, cx, cy, R);
      rim.addColorStop(0, "rgba(160,90,255,0)");
      rim.addColorStop(1, "rgba(160,90,255,0.52)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = rim; ctx.fill();

      // Sphere border stroke
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(175,100,255,0.60)";
      ctx.lineWidth   = 1.5; ctx.stroke();

      // Latitude grid lines
      ctx.lineWidth = 0.45;
      ctx.strokeStyle = `rgba(${PURPLE},0.18)`;
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

      // Longitude grid lines
      ctx.strokeStyle = `rgba(${PURPLE},0.12)`;
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

    /* ── One orbital ring + its nodes ────────────────────── */
    const drawRing = (ring: Ring, cx: number, cy: number) => {
      const { R, tilt, rgb, alpha } = ring;
      const semiX = R;
      const semiY = R * Math.abs(Math.cos(tilt));

      // Back half (dashed)
      ctx.save();
      ctx.strokeStyle = `rgba(${rgb},${alpha * 0.38})`;
      ctx.lineWidth   = 0.9;
      ctx.setLineDash([5, 9]);
      ctx.beginPath();
      ctx.ellipse(cx, cy, semiX, semiY, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Front half — solid, brighter (drawn as clip mask below sphere)
      ctx.strokeStyle = `rgba(${rgb},${alpha})`;
      ctx.lineWidth   = 1.3;
      // Draw only the front arc (depth < 0 when sin(a)*sin(tilt) < 0)
      // Since we can't easily clip, just redraw full ring at higher opacity
      // and rely on sphere drawing on top to naturally cover back half
      ctx.beginPath();
      ctx.ellipse(cx, cy, semiX, semiY, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Nodes
      const scrollPhase = scrollY * 0.00028;
      for (const node of ring.nodes) {
        const a     = ((node.phase + frame * node.spd + scrollPhase) % 1) * Math.PI * 2;
        const pt    = orbitPt(a, R, tilt, cx, cy);
        const front = pt.depth <= 0;
        const nAlpha = front ? 0.95 : 0.35;
        const nr    = node.size * (front ? 1.0 : 0.60);

        // Glow halo
        const glowR = nr * 5.5;
        const g = ctx.createRadialGradient(pt.sx, pt.sy, 0, pt.sx, pt.sy, glowR);
        g.addColorStop(0,    `rgba(${rgb},${nAlpha * 0.60})`);
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

    /* ── Tick ─────────────────────────────────────────────── */
    const tick = () => {
      frame++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const cx = W * 0.50;
      const cy = H * 0.52;
      const sphereR = Math.min(W, H) * 0.145;

      // Set ring radii relative to sphere
      rings[0].R = sphereR * 1.60;
      rings[1].R = sphereR * 2.25;
      rings[2].R = sphereR * 2.85;

      // Draw rings behind sphere first
      for (const ring of rings) drawRing(ring, cx, cy);

      // Sphere renders on top (covers back-half ring segments naturally)
      drawSphere(cx, cy, sphereR);

      // Redraw nodes that are in FRONT of sphere on top of it
      const scrollPhase = scrollY * 0.00028;
      for (const ring of rings) {
        for (const node of ring.nodes) {
          const a  = ((node.phase + frame * node.spd + scrollPhase) % 1) * Math.PI * 2;
          const pt = orbitPt(a, ring.R, ring.tilt, cx, cy);
          if (pt.depth > 0) continue; // skip back nodes

          const glowR = node.size * 5.5;
          const g = ctx.createRadialGradient(pt.sx, pt.sy, 0, pt.sx, pt.sy, glowR);
          g.addColorStop(0,    `rgba(${ring.rgb},0.60)`);
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
        width: "100%", height: "100%",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}
