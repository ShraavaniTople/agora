"use client";
import { useRef, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function TiltCard({ children, className = "", style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)", willChange: "transform" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
