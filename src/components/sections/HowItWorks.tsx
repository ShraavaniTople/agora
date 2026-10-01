"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    num: "01", label: "BRIEF", duration: "30 MIN",
    title: "Tell us your campaign",
    body: "Describe your target market, industry, and what a good outcome looks like — a booked meeting, a qualified call, a follow-up conversation. Takes about 30 minutes. We do the rest.",
  },
  {
    num: "02", label: "BUILD", duration: "1 WEEK",
    title: "We build and brief your team",
    body: "AGORA matches you with agents, trains them on your script, and runs live coaching sessions before a single call is made. No hiring. No onboarding. No management.",
  },
  {
    num: "03", label: "EXECUTE", duration: "ONGOING",
    title: "They work. You watch.",
    body: "Agents run your campaigns every day. You get a live dashboard showing every call, every booking, and every result. Full visibility. No black boxes.",
  },
];

type Step = typeof steps[0];

function StepPanel({ step, wide, delay = 0 }: { step: Step; wide?: boolean; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className="relative rounded-2xl overflow-hidden flex flex-col justify-end"
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.06)",
        minHeight: wide ? 240 : 360,
      }}
    >
      {/* Gradient wash */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(145deg, rgba(99,33,238,0.22) 0%, transparent 60%)" }} />

      {/* Ghost step number */}
      <div
        className="absolute top-0 right-0 font-black select-none pointer-events-none"
        style={{
          fontSize: 180,
          lineHeight: 0.82,
          letterSpacing: "-0.07em",
          color: "rgba(255,255,255,0.035)",
          transform: "translate(8%, -4%)",
        }}
      >
        {step.num}
      </div>

      {/* Bottom content */}
      <div
        className="relative z-10 p-7 lg:p-9"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.28)", letterSpacing: "0.10em" }}>
            ← {step.num}/03
          </span>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#6321EE", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            · {step.label}
          </span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.20)", letterSpacing: "0.10em" }}>
            · {step.duration}
          </span>
        </div>
        <h3
          className="font-bold text-white"
          style={{ fontSize: wide ? 18 : 16, letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: 10 }}
        >
          {step.title}
        </h3>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.72, maxWidth: wide ? 560 : "none" }}>
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="process" className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      {/* Header */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 pt-20 pb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-black"
          style={{ fontSize: "clamp(54px, 8.5vw, 110px)", lineHeight: 0.88, letterSpacing: "-0.048em", color: "#0d0d0d" }}
        >
          How it<br />works.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          style={{ fontSize: 14, color: "rgba(0,0,0,0.45)", maxWidth: 280, lineHeight: 1.7 }}
        >
          From first conversation to a team actively working your pipeline — in two weeks.
        </motion.p>
      </div>

      {/* Portfolio-style panels */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 pb-20 lg:pb-28 flex flex-col gap-5">
        {/* Row 1: Step 01 large left, Step 02 right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-5">
          <StepPanel step={steps[0]} delay={0.05} />
          <StepPanel step={steps[1]} delay={0.15} />
        </div>
        {/* Row 2: Step 03 full width */}
        <StepPanel step={steps[2]} wide delay={0.1} />
      </div>
    </section>
  );
}
