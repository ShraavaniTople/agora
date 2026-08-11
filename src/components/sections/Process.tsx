"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";
import { SlidersHorizontal, Rocket, BrainCircuit, BarChart2, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: { n: string; Icon: LucideIcon; color: string; title: string; desc: string }[] = [
  { n: "01", Icon: SlidersHorizontal, color: "#6321EE", title: "Align on goals and guardrails", desc: "Define targets, lead sources, messaging, routing, and QA requirements. We map scripts and success criteria to your existing sales motion." },
  { n: "02", Icon: Rocket, color: "#7FFFD4", title: "Launch your specialized team", desc: "We staff a dedicated team aligned to your segment, region, and use case, with clear accountability and performance scoring." },
  { n: "03", Icon: BrainCircuit, color: "#7ACCC8", title: "Calibrate scripts and coaching", desc: "We tune talk tracks, objection handling, and routing based on real conversations, then standardize what performs best." },
  { n: "04", Icon: BarChart2, color: "#6321EE", title: "Track lift with full transparency", desc: "Monitor contact rates, booking rates, call quality, and outcomes in dashboards. You'll always know exactly what you're paying for." },
  { n: "05", Icon: Zap, color: "#7FFFD4", title: "Scale what works", desc: "Expand capacity by program, region, or segment once KPIs are stable. Keep your core team on strategy while AGORA scales execution." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section id="process" className="relative bg-[#0A0608] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.35), transparent)" }} />
      <div className="absolute inset-0 dot-grid-subtle opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.p variants={fadeUpVariants}
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#7FFFD4] mb-3">
            Process
          </motion.p>
          <motion.h2 variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Simple rollout.{" "}
            <span className="gradient-text">Measurable results.</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-white/40 max-w-md mx-auto text-[15px]">
            From kickoff to scaled revenue execution in weeks, not quarters.
          </motion.p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-white/[0.06] hidden sm:block">
            <motion.div
              className="w-full origin-top"
              style={{
                height: lineH,
                background: "linear-gradient(to bottom, #6321EE, #7FFFD4)",
              }}
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="space-y-2"
          >
            {steps.map((step, i) => {
              const Icon = step.Icon;
              return (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                className="group flex gap-6 sm:gap-8 p-5 sm:p-6 rounded-2xl border border-transparent hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300"
              >
                {/* Step dot */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: `${step.color}18`,
                      border: `1px solid ${step.color}35`,
                      boxShadow: `0 0 14px ${step.color}20`,
                    }}
                  >
                    <Icon size={18} style={{ color: step.color }} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="flex-1 pt-1.5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-mono font-bold text-[#6321EE]">{step.n}</span>
                    <div className="h-px flex-1 bg-white/[0.05]" />
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[13px] text-white/45 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
