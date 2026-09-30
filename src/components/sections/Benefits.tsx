"use client";

import { motion } from "framer-motion";
import { TrendingDown, Layers, Target, LineChart } from "lucide-react";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const up = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const benefits = [
  {
    icon: TrendingDown,
    num: "01",
    title: "No hiring. No ramp time.",
    desc: "Skip the months-long SDR hiring process. AGORA agents are trained and deployed in weeks.",
    color: "#6321EE",
  },
  {
    icon: Layers,
    num: "02",
    title: "Turn it up or down, anytime.",
    desc: "Need more coverage for a product launch? Scale the team up or down without reorganizing headcount.",
    color: "#7FFFD4",
  },
  {
    icon: Target,
    num: "03",
    title: "Stop losing leads to slow follow-up.",
    desc: "Most inbound leads go cold within the first hour. AGORA's speed-to-lead coverage calls them back while they're warm.",
    color: "#7ACCC8",
  },
  {
    icon: LineChart,
    num: "04",
    title: "Pay for results, not seats.",
    desc: "AGORA pricing is tied to outcomes — bookings, conversations, and campaign performance.",
    color: "#6321EE",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden py-24 lg:py-36"
      style={{ background: "transparent" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.2), transparent)" }}
      />

      {/* Right ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600, height: 700,
          background: "radial-gradient(ellipse, rgba(99,33,238,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-16 lg:mb-20"
        >
          <motion.p variants={up} className="text-[11px] font-black tracking-[0.3em] uppercase text-[#6321EE] mb-4">
            Benefits
          </motion.p>
          <motion.h2
            variants={up}
            className="font-black text-white tracking-[-0.03em] leading-[1.02] mb-5 max-w-2xl"
            style={{ fontSize: "clamp(34px, 5.5vw, 68px)" }}
          >
            Why businesses{" "}
            <span className="gradient-text">choose AGORA</span>
          </motion.h2>
          <motion.p variants={up} className="text-white/38 text-[15px] max-w-lg leading-relaxed">
            No ramp time. No fixed salaries. A sales team accountable to results, not headcount.
          </motion.p>
        </motion.div>

        {/* 2x2 grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="card-glow-border" style={{ borderRadius: 17 }}>
              <motion.div
                variants={up}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  padding: "32px",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
                whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${b.color}14 0%, transparent 65%)` }}
                />

                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${b.color}, transparent)` }}
                />

                {/* Ghost number */}
                <div
                  className="absolute top-3 right-4 font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: 72, color: `${b.color}0C`, fontVariantNumeric: "tabular-nums" }}
                >
                  {b.num}
                </div>

                <div className="flex items-start gap-4 mb-5 relative z-10">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: `${b.color}18`,
                      border: `1px solid ${b.color}32`,
                      boxShadow: `0 0 16px ${b.color}20`,
                    }}
                  >
                    <Icon size={20} style={{ color: b.color }} strokeWidth={1.6} />
                  </div>
                </div>

                <h3
                  className="font-bold text-white mb-2.5 leading-snug relative z-10"
                  style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
                >
                  {b.title}
                </h3>
                <p className="text-[13px] text-white/42 leading-relaxed relative z-10">
                  {b.desc}
                </p>
              </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.15), transparent)" }}
      />
    </section>
  );
}
