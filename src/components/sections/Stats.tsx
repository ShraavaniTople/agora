"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({
  target,
  prefix = "",
  suffix = "",
  inView,
  duration = 1.6,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, target, duration]);
  return <>{prefix}{value}{suffix}</>;
}

function SideCard({
  label,
  number,
  subLabel,
  description,
  color,
  glowColor,
  borderColor,
  delay,
  icon,
}: {
  label: string;
  number: React.ReactNode;
  subLabel: string;
  description: string;
  color: string;
  glowColor: string;
  borderColor: string;
  delay: number;
  icon: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-7 lg:p-8 overflow-hidden flex flex-col cursor-default"
      style={{
        minHeight: 320,
        background: "linear-gradient(145deg, #151020 0%, #0F0C1A 50%, #0A0810 100%)",
        border: `1px solid ${hovered ? borderColor : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered
          ? `0 24px 64px ${glowColor}, 0 0 0 1px ${borderColor}`
          : "0 4px 32px rgba(0,0,0,0.6)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease, border-color 0.32s ease",
      }}
    >
      {/* Colored top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${color} 35%, ${color} 65%, transparent)`,
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* Top bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${glowColor} 0%, transparent 60%)`,
          opacity: hovered ? 0.9 : 0.35,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Label */}
      <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/35 relative z-10">
        {label}
      </p>

      {/* Number */}
      <div className="flex-1 flex flex-col justify-center py-6 relative z-10">
        <div
          className="font-black text-white tracking-[-0.05em] leading-none tabular-nums"
          style={{ fontSize: "clamp(60px, 7.5vw, 84px)" }}
        >
          {number}
        </div>
        <p className="mt-2 font-semibold tracking-wide text-[14px]" style={{ color }}>
          {subLabel}
        </p>
      </div>

      {/* Bottom: description (hover reveal) + icon */}
      <div
        className="mt-auto relative z-10"
        style={{
          borderTop: `1px solid ${hovered ? `${color}25` : "rgba(255,255,255,0.06)"}`,
          paddingTop: "20px",
          transition: "border-color 0.3s ease",
        }}
      >
        {/* Description, revealed on hover */}
        <div
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            marginBottom: hovered ? "14px" : "0",
            maxHeight: hovered ? "60px" : "0",
            overflow: "hidden",
            transitionProperty: "opacity, transform, max-height, margin-bottom",
            transitionDuration: "0.35s",
            transitionTimingFunction: "ease",
          }}
        >
          <p className="text-[12px] text-white/40 leading-relaxed">{description}</p>
        </div>

        {/* Icon */}
        <div
          style={{
            opacity: hovered ? 1 : 0.45,
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "#0D0A0C" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.6), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-[11px] font-black tracking-[0.28em] uppercase text-[#6321EE] mb-4">
            By The Numbers
          </p>
          <h2
            className="font-black text-white tracking-[-0.03em] leading-none"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            The numbers{" "}
            <span className="gradient-text">don&apos;t lie</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch">

          {/* Card 1: Time Eliminated */}
          <SideCard
            label="Time Eliminated"
            number={<Counter target={6} suffix="+" inView={inView} />}
            subLabel="months ramp time"
            description="Typical SDR ramp eliminated. AGORA agents deploy in days, not months."
            color="#6321EE"
            glowColor="rgba(99,33,238,0.28)"
            borderColor="rgba(99,33,238,0.5)"
            delay={0}
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6321EE" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            }
          />

          {/* Card 2: Cost Avoided (featured) */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative rounded-2xl p-7 lg:p-8 overflow-hidden flex flex-col cursor-default"
            style={{ minHeight: 340, background: "#07040F", border: "1px solid rgba(127,255,212,0.3)" }}
          >
            {/* Animated mesh gradient blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div className="stats-mesh-blob stats-mesh-blob-1" />
              <div className="stats-mesh-blob stats-mesh-blob-2" />
              <div className="stats-mesh-blob stats-mesh-blob-3" />
              <div className="absolute inset-0" style={{ background: "rgba(7,4,15,0.38)" }} />
            </div>

            {/* Label */}
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50 relative z-10">
              Cost Avoided
            </p>

            {/* Number */}
            <div className="flex-1 flex flex-col justify-center py-6 relative z-10">
              <div
                className="font-black text-white tracking-[-0.05em] leading-none tabular-nums"
                style={{ fontSize: "clamp(60px, 7.5vw, 84px)" }}
              >
                $<Counter target={150} suffix="K" inView={inView} duration={2} />
              </div>
              <p className="mt-2 font-semibold tracking-wide text-[14px]" style={{ color: "#7FFFD4" }}>
                per head / year
              </p>
            </div>

            {/* Bottom: always visible */}
            <div
              className="mt-auto pt-5 relative z-10"
              style={{ borderTop: "1px solid rgba(127,255,212,0.15)" }}
            >
              <p className="text-[12px] text-white/50 leading-relaxed mb-4">
                Salary, benefits, tools, mgmt overhead — replaced with variable pods aligned to outcomes.
              </p>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(127,255,212,0.65)" strokeWidth="1.5" strokeLinecap="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
          </motion.div>

          {/* Card 3: Revenue Impact */}
          <SideCard
            label="Revenue Impact"
            number={<>+<Counter target={2} suffix="%" inView={inView} duration={1.4} /></>}
            subLabel="conversion lift"
            description="2% lift on a $10M pipeline = $200K added revenue. At scale, marginal gains compound fast."
            color="#7ACCC8"
            glowColor="rgba(122,204,200,0.22)"
            borderColor="rgba(122,204,200,0.5)"
            delay={0.2}
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7ACCC8" strokeWidth="1.5" strokeLinecap="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
            }
          />

        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.2), transparent)" }}
      />
    </section>
  );
}
