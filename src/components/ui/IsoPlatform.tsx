"use client";
import { useEffect, useRef } from "react";

export default function IsoPlatform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
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

    // Isometric projection: world (x=right, y=depth, z=up) → screen
    const proj = (x: number, y: number, z: number, cx: number, cy: number) => ({
      sx: cx + (x - y) * 0.866,
      sy: cy + (x + y) * 0.5 - z,
    });

    type P2 = { sx: number; sy: number };
    const polyPath = (pts: P2[]) => {
      ctx.beginPath();
      ctx.moveTo(pts[0].sx, pts[0].sy);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].sx, pts[i].sy);
      ctx.closePath();
    };

    // Draw one slab of the platform
    const drawSlab = (
      cx: number, cy: number,
      hw: number, hd: number,
      zBot: number, zTop: number,
      isTop: boolean,
    ) => {
      const p = (x: number, y: number, z: number) => proj(x, y, z, cx, cy);

      // ── right face (+x wall) ─────────────────────────
      const rf = [p(hw,-hd,zBot), p(hw,hd,zBot), p(hw,hd,zTop), p(hw,-hd,zTop)];
      polyPath(rf);
      ctx.fillStyle   = "rgba(14,7,38,0.97)"; ctx.fill();
      ctx.strokeStyle = "rgba(99,33,238,0.70)"; ctx.lineWidth = 1.4; ctx.stroke();

      // ── front face (+y wall) ─────────────────────────
      const ff = [p(-hw,hd,zBot), p(hw,hd,zBot), p(hw,hd,zTop), p(-hw,hd,zTop)];
      polyPath(ff);
      ctx.fillStyle   = "rgba(18,9,46,0.96)"; ctx.fill();
      ctx.strokeStyle = "rgba(99,33,238,0.55)"; ctx.lineWidth = 1.4; ctx.stroke();

      // ── top face ────────────────────────────────────
      const tf = [p(-hw,-hd,zTop), p(hw,-hd,zTop), p(hw,hd,zTop), p(-hw,hd,zTop)];
      polyPath(tf);
      ctx.fillStyle = "rgba(16,8,40,0.97)"; ctx.fill();

      if (isTop) {
        // Large purple radial glow — visible even on dark bg
        const ctr = p(0, 0, zTop);
        const gr = ctx.createRadialGradient(ctr.sx, ctr.sy, 0, ctr.sx, ctr.sy, hw * 1.3);
        gr.addColorStop(0,    "rgba(160,70,255,0.72)");
        gr.addColorStop(0.22, "rgba(120,45,230,0.42)");
        gr.addColorStop(0.55, "rgba(70,22,160,0.18)");
        gr.addColorStop(1,    "rgba(0,0,0,0)");
        polyPath(tf); ctx.fillStyle = gr; ctx.fill();

        // Grid lines
        ctx.lineWidth = 0.6; ctx.strokeStyle = "rgba(130,60,255,0.22)";
        const G = 8;
        for (let i = -G; i <= G; i++) {
          const fx = (i / G) * hw;
          const a = p(fx,-hd,zTop), b = p(fx,hd,zTop);
          ctx.beginPath(); ctx.moveTo(a.sx,a.sy); ctx.lineTo(b.sx,b.sy); ctx.stroke();
        }
        for (let j = -G; j <= G; j++) {
          const fy = (j / G) * hd;
          const a = p(-hw,fy,zTop), b = p(hw,fy,zTop);
          ctx.beginPath(); ctx.moveTo(a.sx,a.sy); ctx.lineTo(b.sx,b.sy); ctx.stroke();
        }

        // Bright top-face edge
        polyPath(tf);
        ctx.strokeStyle = "rgba(155,75,255,0.75)"; ctx.lineWidth = 1.8; ctx.stroke();

        // Central orb
        const orbR = hw * 0.38;
        const orb = ctx.createRadialGradient(ctr.sx,ctr.sy,0, ctr.sx,ctr.sy,orbR);
        orb.addColorStop(0,   "rgba(200,120,255,0.55)");
        orb.addColorStop(0.4, "rgba(150,70,255,0.22)");
        orb.addColorStop(1,   "rgba(0,0,0,0)");
        ctx.beginPath(); ctx.arc(ctr.sx,ctr.sy,orbR,0,Math.PI*2);
        ctx.fillStyle = orb; ctx.fill();

        // Extra glow halo beyond the platform edges
        const halo = ctx.createRadialGradient(ctr.sx,ctr.sy,hw*0.6, ctr.sx,ctr.sy,hw*2.2);
        halo.addColorStop(0,   "rgba(110,40,220,0.18)");
        halo.addColorStop(0.5, "rgba(80,20,160,0.07)");
        halo.addColorStop(1,   "rgba(0,0,0,0)");
        ctx.beginPath(); ctx.arc(ctr.sx,ctr.sy,hw*2.2,0,Math.PI*2);
        ctx.fillStyle = halo; ctx.fill();

      } else {
        // Lower slabs — visible edges
        polyPath(tf);
        ctx.strokeStyle = "rgba(99,33,238,0.45)"; ctx.lineWidth = 1.0; ctx.stroke();
      }
    };

    // ── Orbit dots ──────────────────────────────────────
    const N = 16;
    const dots = Array.from({ length: N }, (_, i) => ({
      phase: i / N,
      baseR: 3.0 + Math.random() * 4.5,
      spd:   0.50 + Math.random() * 0.65,
      rgb:   i % 5 === 0 ? "160,220,255"
           : i % 3 === 0 ? "127,255,212"
           :               "108,196,196",
    }));

    const drawDots = (cx: number, cy: number, S: number) => {
      const ORX = 510 * S;
      const ORY = 215 * S;
      const ORZ = 255 * S;
      const BASE_Z = 95 * S;

      // Faint orbit trail
      ctx.beginPath();
      for (let i = 0; i <= 72; i++) {
        const a = (i / 72) * Math.PI * 2;
        const pt = proj(Math.cos(a)*ORX, Math.sin(a)*ORY, BASE_Z + Math.sin(a)*ORZ, cx, cy);
        i === 0 ? ctx.moveTo(pt.sx,pt.sy) : ctx.lineTo(pt.sx,pt.sy);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(127,255,212,0.07)"; ctx.lineWidth = 0.7; ctx.stroke();

      const scrollPhase = scrollY * 0.00058;
      const timePhase   = frame * 0.006;

      const rendered = dots.map(d => {
        const angle = ((d.phase + timePhase * d.spd + scrollPhase) % 1) * Math.PI * 2;
        const wx = Math.cos(angle) * ORX;
        const wy = Math.sin(angle) * ORY;
        const wz = BASE_Z + Math.sin(angle) * ORZ;
        const pt = proj(wx, wy, wz, cx, cy);
        const depth = (Math.sin(angle) + 1) / 2;
        return { pt, depth, r: d.baseR * (0.35 + 0.75 * depth), rgb: d.rgb, wy };
      });
      rendered.sort((a, b) => a.wy - b.wy);

      for (const { pt, depth, r, rgb } of rendered) {
        const gr = r * 5.5;
        const g = ctx.createRadialGradient(pt.sx,pt.sy,0, pt.sx,pt.sy,gr);
        g.addColorStop(0,    `rgba(${rgb},${0.60 + depth * 0.25})`);
        g.addColorStop(0.30, `rgba(${rgb},0.18)`);
        g.addColorStop(1,    `rgba(${rgb},0)`);
        ctx.beginPath(); ctx.arc(pt.sx,pt.sy,gr,0,Math.PI*2);
        ctx.fillStyle = g; ctx.fill();

        ctx.beginPath(); ctx.arc(pt.sx,pt.sy,r,0,Math.PI*2);
        ctx.fillStyle = `rgba(${rgb},${0.82 + depth * 0.15})`;
        ctx.fill();
      }
    };

    const tick = () => {
      frame++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H * 0.56;        // slightly above center so platform sits mid-hero
      const S  = Math.min(1, W / 1280);

      const baseW = 310 * S, baseD = 192 * S;
      const sH = 22 * S, gap = 6 * S;

      // Draw slabs bottom-to-top (painter's algorithm)
      for (let i = 0; i < 3; i++) {
        const extra = (2 - i) * 0.14;  // bottom slab widest
        const zBot  = i * (sH + gap);
        const zTop  = zBot + sH;
        drawSlab(cx, cy, baseW*(1+extra), baseD*(1+extra), zBot, zTop, i === 2);
      }

      drawDots(cx, cy, S);
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
      ref={canvasRef}
      style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none",
        zIndex: 3,
      }}
    />
  );
}
