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

    // Low-angle isometric projection — makes platform appear large and dramatic
    // X axis: horizontal spread; Y axis: very flat (low viewer angle); Z: height
    const proj = (
      x: number, y: number, z: number,
      cx: number, cy: number,
    ) => ({
      sx: cx + (x - y) * 0.90,
      sy: cy + (x + y) * 0.26 - z,
    });

    type P2 = { sx: number; sy: number };
    const polyPath = (pts: P2[]) => {
      ctx.beginPath();
      ctx.moveTo(pts[0].sx, pts[0].sy);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].sx, pts[i].sy);
      ctx.closePath();
    };

    const drawSlab = (
      cx: number, cy: number,
      hw: number, hd: number,
      zBot: number, zTop: number,
      isTop: boolean,
    ) => {
      const p = (x: number, y: number, z: number) => proj(x, y, z, cx, cy);

      // ── right face ──────────────────────────────────
      const rf = [p(hw,-hd,zBot), p(hw,hd,zBot), p(hw,hd,zTop), p(hw,-hd,zTop)];
      polyPath(rf);
      ctx.fillStyle   = "rgba(8,4,22,0.97)";
      ctx.fill();
      ctx.strokeStyle = "rgba(99,33,238,0.65)";
      ctx.lineWidth   = 1.5;
      ctx.stroke();

      // Subtle gradient on right face
      const rfGrad = ctx.createLinearGradient(rf[0].sx, rf[0].sy, rf[3].sx, rf[3].sy);
      rfGrad.addColorStop(0, "rgba(99,33,238,0.0)");
      rfGrad.addColorStop(1, "rgba(99,33,238,0.12)");
      polyPath(rf); ctx.fillStyle = rfGrad; ctx.fill();

      // ── front face ──────────────────────────────────
      const ff = [p(-hw,hd,zBot), p(hw,hd,zBot), p(hw,hd,zTop), p(-hw,hd,zTop)];
      polyPath(ff);
      ctx.fillStyle   = "rgba(12,5,30,0.97)";
      ctx.fill();
      ctx.strokeStyle = "rgba(99,33,238,0.50)";
      ctx.lineWidth   = 1.5;
      ctx.stroke();

      // ── top face ────────────────────────────────────
      const tf = [p(-hw,-hd,zTop), p(hw,-hd,zTop), p(hw,hd,zTop), p(-hw,hd,zTop)];
      polyPath(tf);
      ctx.fillStyle = "rgba(10,5,26,0.97)";
      ctx.fill();

      if (isTop) {
        const ctr = p(0, 0, zTop);

        // Large purple glow — dominant visual
        const glow = ctx.createRadialGradient(ctr.sx, ctr.sy, 0, ctr.sx, ctr.sy, hw * 1.4);
        glow.addColorStop(0,    "rgba(170,80,255,0.75)");
        glow.addColorStop(0.18, "rgba(140,55,240,0.50)");
        glow.addColorStop(0.42, "rgba(90,28,190,0.22)");
        glow.addColorStop(0.72, "rgba(50,12,120,0.08)");
        glow.addColorStop(1,    "rgba(0,0,0,0)");
        polyPath(tf); ctx.fillStyle = glow; ctx.fill();

        // Grid lines
        ctx.strokeStyle = "rgba(140,60,255,0.20)";
        ctx.lineWidth   = 0.6;
        const G = 10;
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

        // Bright top edge
        polyPath(tf);
        ctx.strokeStyle = "rgba(165,85,255,0.80)";
        ctx.lineWidth   = 2.0;
        ctx.stroke();

        // Central bright orb
        const orbR = hw * 0.32;
        const orb  = ctx.createRadialGradient(ctr.sx,ctr.sy,0, ctr.sx,ctr.sy,orbR);
        orb.addColorStop(0,   "rgba(215,140,255,0.65)");
        orb.addColorStop(0.4, "rgba(170,80,255,0.28)");
        orb.addColorStop(1,   "rgba(0,0,0,0)");
        ctx.beginPath(); ctx.arc(ctr.sx,ctr.sy,orbR,0,Math.PI*2);
        ctx.fillStyle = orb; ctx.fill();

        // Wide ambient halo beyond edges
        const halo = ctx.createRadialGradient(ctr.sx,ctr.sy,hw*0.5, ctr.sx,ctr.sy,hw*2.5);
        halo.addColorStop(0,   "rgba(120,45,230,0.20)");
        halo.addColorStop(0.5, "rgba(80,20,160,0.08)");
        halo.addColorStop(1,   "rgba(0,0,0,0)");
        ctx.beginPath(); ctx.arc(ctr.sx,ctr.sy,hw*2.5,0,Math.PI*2);
        ctx.fillStyle = halo; ctx.fill();

      } else {
        // Lower slabs — visible edges only
        polyPath(tf);
        ctx.strokeStyle = "rgba(99,33,238,0.42)";
        ctx.lineWidth   = 1.2;
        ctx.stroke();
      }
    };

    // ── Orbit dots ──────────────────────────────────────────────────────────
    const N_DOTS = 18;
    interface OrbDot { phase: number; baseR: number; spd: number; rgb: string }
    const dots: OrbDot[] = Array.from({ length: N_DOTS }, (_, i) => ({
      phase: i / N_DOTS,
      baseR: 4.0 + Math.random() * 5.5,
      spd:   0.45 + Math.random() * 0.70,
      rgb:   i % 6 === 0 ? "160,220,255"
           : i % 3 === 0 ? "127,255,212"
           :               "100,210,200",
    }));

    // A few large "pill" dots like the reference (right side)
    interface PillDot { phase: number; spd: number }
    const pillDots: PillDot[] = Array.from({ length: 2 }, (_, i) => ({
      phase: 0.6 + i * 0.15,
      spd:   0.30 + i * 0.10,
    }));

    const drawDots = (cx: number, cy: number, W: number) => {
      // Orbit ellipse — wide and flat to match low-angle projection
      const ORX    = W * 0.32;
      const ORY    = W * 0.13;
      const ORZ    = W * 0.14;
      const BASE_Z = W * 0.05;

      const scrollPhase = scrollY * 0.00060;
      const timePhase   = frame  * 0.006;

      // Render back-to-front
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
        // Glow
        const gr = r * 5.5;
        const g  = ctx.createRadialGradient(pt.sx,pt.sy,0, pt.sx,pt.sy,gr);
        g.addColorStop(0,    `rgba(${rgb},${0.55 + depth * 0.25})`);
        g.addColorStop(0.30, `rgba(${rgb},0.18)`);
        g.addColorStop(1,    `rgba(${rgb},0)`);
        ctx.beginPath(); ctx.arc(pt.sx,pt.sy,gr,0,Math.PI*2);
        ctx.fillStyle = g; ctx.fill();
        // Core
        ctx.beginPath(); ctx.arc(pt.sx,pt.sy,r,0,Math.PI*2);
        ctx.fillStyle = `rgba(${rgb},0.92)`;
        ctx.fill();
      }

      // Large pill/sphere dots — like the reference bottom-right
      for (const pd of pillDots) {
        const angle = ((pd.phase + timePhase * pd.spd * 0.5 + scrollPhase) % 1) * Math.PI * 2;
        const wx = Math.cos(angle) * ORX * 1.1;
        const wy = Math.sin(angle) * ORY * 1.1;
        const wz = BASE_Z * 0.5;
        const pt = proj(wx, wy, wz, cx, cy);
        const depth = (Math.sin(angle) + 1) / 2;
        const r = 18 + depth * 14;

        const pg = ctx.createRadialGradient(pt.sx,pt.sy,0, pt.sx,pt.sy,r*2);
        pg.addColorStop(0,   "rgba(180,195,210,0.55)");
        pg.addColorStop(0.5, "rgba(140,160,175,0.20)");
        pg.addColorStop(1,   "rgba(0,0,0,0)");
        ctx.beginPath(); ctx.arc(pt.sx,pt.sy,r*2,0,Math.PI*2);
        ctx.fillStyle = pg; ctx.fill();

        ctx.beginPath(); ctx.arc(pt.sx,pt.sy,r,0,Math.PI*2);
        ctx.fillStyle = "rgba(160,180,195,0.70)";
        ctx.fill();
        ctx.strokeStyle = "rgba(200,215,225,0.50)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const tick = () => {
      frame++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Platform — centered, pulled up slightly so it sits mid-hero
      const cx = W * 0.50;
      const cy = H * 0.65;
      const S  = Math.max(0.45, Math.min(0.85, W / 1280));

      // Three stacked slabs — bottom widest, refined size
      const baseW = 370 * S;
      const baseD = 228 * S;
      const sH    = 20 * S;
      const gap   = 6  * S;

      for (let i = 0; i < 3; i++) {
        const extra = (2 - i) * 0.14;
        const zBot  = i * (sH + gap);
        const zTop  = zBot + sH;
        drawSlab(cx, cy, baseW*(1+extra), baseD*(1+extra), zBot, zTop, i === 2);
      }

      drawDots(cx, cy, W);
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
