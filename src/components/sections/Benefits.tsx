"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";
import { TrendingDown, Layers, Target, LineChart } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    num: "01",
    title: "No hiring. No ramp time.",
    desc: "Skip the months-long SDR hiring process. AGORA agents are trained and deployed in weeks — you start seeing outreach activity almost immediately.",
    color: "#6321EE",
  },
  {
    icon: Layers,
    num: "02",
    title: "Turn it up or down, anytime.",
    desc: "Need more coverage for a product launch? Running a regional push? Scale the team up or down without reorganizing your headcount.",
    color: "#7FFFD4",
  },
  {
    icon: Target,
    num: "03",
    title: "Stop losing leads to slow follow-up.",
    desc: "Most inbound leads go cold within the first hour. AGORA's speed-to-lead coverage means someone calls them back while they're still warm.",
    color: "#7ACCC8",
  },
  {
    icon: LineChart,
    num: "04",
    title: "Pay for results, not seats.",
    desc: "AGORA pricing is tied to outcomes — bookings, conversations, and campaign performance. You spend based on what's working, not a fixed monthly contract.",
    color: "#6321EE",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "#0A0608" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.2), transparent)" }}
      />

      {/* Right ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 500,
          height: 700,
          background: "radial-gradient(ellipse, rgba(99,33,238,0.16) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-16 lg:mb-20"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-[11px] font-black tracking-[0.28em] uppercase text-[#6321EE] mb-4"
          >
            Benefits
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="font-black text-white tracking-[-0.03em] leading-[1.02] mb-5 max-w-2xl"
            style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}
          >
            Why businesses{" "}
            <span className="gradient-text">choose AGORA</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-white/40 text-[15px] max-w-lg leading-relaxed">
            No ramp time. No fixed salaries. A sales team that&apos;s accountable to
            results — not headcount.
          </motion.p>
        </motion.div>

        {/* Benefits list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="flex flex-col"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                className="group"
              >
                {/* Rule above */}
                <div
                  className="h-px w-full mb-7 transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${b.color}60 0%, rgba(255,255,255,0.08) 30%, transparent 100%)`,
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10 pb-7">
                  {/* Number + icon */}
                  <div className="flex items-center gap-4 flex-shrink-0 sm:w-52">
                    <span
                      className="font-black tracking-tighter leading-none transition-colors duration-300"
                      style={{
                        fontSize: "clamp(40px, 5vw, 56px)",
                        color: `${b.color}45`,
                        lineHeight: 1,
                      }}
                    >
                      {b.num}
                    </span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: `${b.color}1A`,
                        border: `1px solid ${b.color}35`,
                        boxShadow: `0 0 16px ${b.color}25`,
                      }}
                    >
                      <Icon size={20} style={{ color: b.color }} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3
                      className="font-bold text-white mb-2 leading-snug transition-colors duration-300 group-hover:text-white"
                      style={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
                    >
                      {b.title}
                    </h3>
                    <p className="text-[14px] text-white/45 leading-relaxed max-w-xl">
                      {b.desc}
                    </p>
                  </div>

                  {/* Arrow indicator on hover */}
                  <div
                    className="hidden sm:flex items-center self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                    style={{ color: b.color }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Final rule */}
          <div
            className="h-px w-full"
            style={{ background: "linear-gradient(90deg, rgba(99,33,238,0.4) 0%, rgba(255,255,255,0.06) 40%, transparent 100%)" }}
          />
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.15), transparent)" }}
      />
    </section>
  );
}
