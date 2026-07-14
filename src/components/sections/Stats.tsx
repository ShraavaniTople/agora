"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({
  target,
  prefix = "",
  suffix = "",
  inView,
  duration = 1.8,
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
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return (
    <span>
      {prefix}
      {value}
      {suffix}
    </span>
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
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,33,238,0.6), transparent)",
        }}
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

        {/* Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch"
        >
          {/* ── Card 1: Time Eliminated ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            className="relative rounded-2xl p-7 lg:p-8 overflow-hidden flex flex-col min-h-[340px]"
            style={{
              background:
                "linear-gradient(145deg, #18121E 0%, #110D17 60%, #0C0910 100%)",
              border: "1px solid rgba(99,33,238,0.22)",
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Top colored border */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #6321EE 35%, #6321EE 65%, transparent)",
              }}
            />
            {/* Top glow bloom */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(99,33,238,0.2) 0%, transparent 65%)",
              }}
            />

            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/35 relative z-10">
              Time Eliminated
            </p>

            <div className="flex-1 flex flex-col justify-center my-6 relative z-10">
              <div
                className="font-black text-white tracking-[-0.05em] leading-none tabular-nums"
                style={{ fontSize: "clamp(64px, 8vw, 88px)" }}
              >
                <Counter target={6} suffix="+" inView={inView} />
              </div>
              <p
                className="mt-2 font-semibold tracking-wide"
                style={{ fontSize: 15, color: "#6321EE" }}
              >
                months ramp time
              </p>
            </div>

            <div
              className="mt-auto pt-5 flex items-end justify-between relative z-10"
              style={{ borderTop: "1px solid rgba(99,33,238,0.14)" }}
            >
              <p className="text-[12px] text-white/35 leading-relaxed max-w-[170px]">
                Typical SDR ramp eliminated. Agents deploy in days.
              </p>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(99,33,238,0.55)"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
          </motion.div>

          {/* ── Card 2: Cost Avoided — FEATURED with mesh gradient ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="relative rounded-2xl p-7 lg:p-8 overflow-hidden flex flex-col min-h-[360px]"
            style={{
              background: "#080510",
              border: "1px solid rgba(127,255,212,0.28)",
              boxShadow: "0 8px 60px rgba(0,0,0,0.8)",
            }}
          >
            {/* Animated mesh gradient blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div className="stats-mesh-blob stats-mesh-blob-1" />
              <div className="stats-mesh-blob stats-mesh-blob-2" />
              <div className="stats-mesh-blob stats-mesh-blob-3" />
              {/* Dark overlay so text stays legible */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(8,5,16,0.42)" }}
              />
            </div>

            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 relative z-10">
              Cost Avoided
            </p>

            <div className="flex-1 flex flex-col justify-center my-6 relative z-10">
              <div
                className="font-black text-white tracking-[-0.05em] leading-none tabular-nums"
                style={{ fontSize: "clamp(64px, 8vw, 88px)" }}
              >
                $<Counter target={150} suffix="K" inView={inView} duration={2} />
              </div>
              <p
                className="mt-2 font-semibold tracking-wide"
                style={{ fontSize: 15, color: "#7FFFD4" }}
              >
                per head / year
              </p>
            </div>

            <div
              className="mt-auto pt-5 flex items-end justify-between relative z-10"
              style={{ borderTop: "1px solid rgba(127,255,212,0.15)" }}
            >
              <p className="text-[12px] text-white/50 leading-relaxed max-w-[170px]">
                Salary, benefits, tools, mgmt overhead — replaced with variable pods.
              </p>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(127,255,212,0.65)"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </motion.div>

          {/* ── Card 3: Revenue Impact ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            className="relative rounded-2xl p-7 lg:p-8 overflow-hidden flex flex-col min-h-[340px]"
            style={{
              background:
                "linear-gradient(145deg, #0E1A1A 0%, #0A1414 60%, #080F10 100%)",
              border: "1px solid rgba(122,204,200,0.22)",
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #7ACCC8 35%, #7ACCC8 65%, transparent)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(122,204,200,0.18) 0%, transparent 65%)",
              }}
            />

            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/35 relative z-10">
              Revenue Impact
            </p>

            <div className="flex-1 flex flex-col justify-center my-6 relative z-10">
              <div
                className="font-black text-white tracking-[-0.05em] leading-none tabular-nums"
                style={{ fontSize: "clamp(64px, 8vw, 88px)" }}
              >
                +<Counter target={2} suffix="%" inView={inView} duration={1.4} />
              </div>
              <p
                className="mt-2 font-semibold tracking-wide"
                style={{ fontSize: 15, color: "#7ACCC8" }}
              >
                conversion lift
              </p>
            </div>

            <div
              className="mt-auto pt-5 flex items-end justify-between relative z-10"
              style={{ borderTop: "1px solid rgba(122,204,200,0.14)" }}
            >
              <p className="text-[12px] text-white/35 leading-relaxed max-w-[170px]">
                2% lift on $10M pipeline = $200K added revenue.
              </p>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(122,204,200,0.55)"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(127,255,212,0.2), transparent)",
        }}
      />
    </section>
  );
}
