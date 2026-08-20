"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    color: "#6321EE",
    title: "You tell us your campaign",
    body: "Describe your target market, the industry you're working in, and what a good outcome looks like, a booked meeting, a qualified call, a follow-up conversation.",
    note: "Takes about 30 minutes. We do the rest.",
  },
  {
    number: "02",
    color: "#7FFFD4",
    title: "We build and brief your team",
    body: "AGORA matches you with agents, trains them on your script, and runs live coaching sessions before a single call is made. Most programs are live within two weeks.",
    note: "No hiring. No onboarding. No management from your side.",
  },
  {
    number: "03",
    color: "#7ACCC8",
    title: "They work. You watch.",
    body: "Agents run your campaigns every day. You get a live dashboard showing every call, every booking, and every result, so you always know exactly what's happening.",
    note: "Full visibility. No black boxes.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "#080507" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.35), transparent)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mb-14"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-[11px] font-black tracking-[0.28em] uppercase text-[#6321EE] mb-3"
          >
            How it works
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="font-black text-white tracking-tight"
            style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}
          >
            Three steps. Calls start in two weeks.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUpVariants}
              className="relative rounded-2xl p-7 flex flex-col gap-4"
              style={{
                border: `1px solid ${step.color}20`,
                background: `linear-gradient(145deg, ${step.color}0A 0%, rgba(8,5,7,0.95) 60%)`,
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${step.color}50, transparent)` }}
              />

              <span
                className="font-black text-[11px] tracking-[0.2em]"
                style={{ color: `${step.color}60` }}
              >
                STEP {step.number}
              </span>

              <h3 className="text-[17px] font-bold text-white leading-snug">
                {step.title}
              </h3>

              <p className="text-[13px] text-white/45 leading-relaxed flex-1">
                {step.body}
              </p>

              <div
                className="text-[11px] font-semibold pt-4 mt-auto"
                style={{
                  borderTop: `1px solid ${step.color}18`,
                  color: step.color,
                }}
              >
                {step.note}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.15), transparent)" }}
      />
    </section>
  );
}
