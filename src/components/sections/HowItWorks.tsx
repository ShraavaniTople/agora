"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.16 } } };
const up = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const steps = [
  {
    number: "01",
    color: "#6321EE",
    title: "Tell us your campaign",
    body: "Describe your target market, industry, and what a good outcome looks like — a booked meeting, a qualified call, a follow-up conversation.",
    note: "Takes about 30 minutes. We do the rest.",
  },
  {
    number: "02",
    color: "#7FFFD4",
    title: "We build and brief your team",
    body: "AGORA matches you with agents, trains them on your script, and runs live coaching sessions before a single call is made.",
    note: "No hiring. No onboarding. No management.",
  },
  {
    number: "03",
    color: "#7ACCC8",
    title: "They work. You watch.",
    body: "Agents run your campaigns every day. You get a live dashboard showing every call, every booking, and every result.",
    note: "Full visibility. No black boxes.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden" style={{ background: "transparent" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.4), transparent)" }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: 800, height: 600, background: "radial-gradient(ellipse, rgba(99,33,238,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
          className="text-center mb-20"
        >
          <motion.p variants={up} className="text-[11px] font-black tracking-[0.3em] uppercase text-[#6321EE] mb-4">
            How it works
          </motion.p>
          <motion.h2 variants={up} className="font-black text-white tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Three steps. Calls start{" "}
            <span className="gradient-text">in two weeks.</span>
          </motion.h2>
          <motion.p variants={up} style={{ color: "rgba(244,246,255,0.38)", fontSize: 15 }} className="max-w-md mx-auto">
            From our first conversation to a team actively working your pipeline.
          </motion.p>
        </motion.div>

        {/* Steps with connectors */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px pointer-events-none" style={{ zIndex: 0 }}>
            <div style={{ width: "100%", height: "100%", background: "rgba(255,255,255,0.06)", position: "relative" }}>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(90deg, #6321EE, #7FFFD4, #7ACCC8)",
                  transformOrigin: "left",
                }}
              />
            </div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7"
          >
            {steps.map((step, i) => (
              <motion.div key={step.number} variants={up} className="card-glow-border relative z-10">
                <TiltCard
                  className="group relative rounded-2xl overflow-hidden flex flex-col h-full"
                  style={{
                    padding: "36px 30px 30px",
                    background: "rgba(255,255,255,0.026)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
                  />

                  {/* Corner glow */}
                  <div className="absolute -top-10 -left-10 pointer-events-none"
                    style={{
                      width: 140, height: 140, borderRadius: "50%",
                      background: `radial-gradient(circle, ${step.color}16 0%, transparent 70%)`,
                      filter: "blur(12px)",
                    }}
                  />

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 30% 0%, ${step.color}12 0%, transparent 65%)` }}
                  />

                  {/* Step number circle — also acts as connector node */}
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${step.color}18`,
                        border: `2px solid ${step.color}60`,
                        boxShadow: `0 0 20px ${step.color}30`,
                        fontSize: 12, fontWeight: 900, color: step.color,
                      }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-[9px] font-black tracking-[0.28em] uppercase" style={{ color: `${step.color}70` }}>
                      Step {step.number}
                    </span>
                  </div>

                  {/* Ghost number */}
                  <div className="absolute -top-2 -right-1 font-black leading-none select-none pointer-events-none"
                    style={{ fontSize: 108, color: `${step.color}09`, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}
                  >
                    {step.number}
                  </div>

                  <h3 className="font-bold text-white leading-snug mb-4 relative z-10"
                    style={{ fontSize: "clamp(16px, 1.5vw, 19px)" }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(244,246,255,0.44)", lineHeight: 1.72 }} className="flex-1 relative z-10">
                    {step.body}
                  </p>

                  <div className="text-[11px] font-semibold pt-5 mt-5 relative z-10 transition-colors duration-300"
                    style={{ borderTop: `1px solid ${step.color}18`, color: step.color }}
                  >
                    {step.note}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.15), transparent)" }} />
    </section>
  );
}
