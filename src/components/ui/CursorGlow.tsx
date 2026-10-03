"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cx = -600, cy = -600;
    let ix = -600, iy = -600;
    let tx = -600, ty = -600;
    let raf = 0;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      cx += (tx - cx) * 0.055;
      cy += (ty - cy) * 0.055;
      ix += (tx - ix) * 0.22;
      iy += (ty - iy) * 0.22;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${cx - 350}px, ${cy - 350}px)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${ix - 60}px, ${iy - 60}px)`;
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
    <>
      {/* Large soft bloom */}
      <div
        ref={outerRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 700, height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,33,238,0.11) 0%, rgba(99,33,238,0.04) 45%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />
      {/* Small precise inner glow */}
      <div
        ref={innerRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 120, height: 120,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(127,255,212,0.18) 0%, rgba(99,33,238,0.12) 40%, transparent 72%)",
          pointerEvents: "none",
          zIndex: 2,
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
