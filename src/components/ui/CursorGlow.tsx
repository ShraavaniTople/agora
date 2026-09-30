"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cx = -400, cy = -400;
    let tx = -400, ty = -400;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      if (ref.current) {
        ref.current.style.transform = `translate(${cx - 300}px, ${cy - 300}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 600,
        height: 600,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(99,33,238,0.07) 0%, rgba(99,33,238,0.02) 45%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 2,
        willChange: "transform",
        mixBlendMode: "screen",
      }}
    />
  );
}
