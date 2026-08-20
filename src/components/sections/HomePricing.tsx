"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const pods = [
  {
    name: "Speed-to-Lead Pod",
    desc: "On-demand inbound coverage, after-hours response, and lead recovery. Stop losing pipeline to slow follow-up.",
    color: "#6321EE",
    tag: "Inbound",
  },
  {
    name: "Outbound Growth Pod",
    desc: "Prospecting and account reactivation by region, segment, or campaign, without adding fixed headcount.",
    color: "#7FFFD4",
    tag: "Outbound",
    featured: true,
  },
  {
    name: "Enterprise Program",
    desc: "Multi-pod deployments with reporting, coaching, and regional expansion. Built for scaled revenue teams.",
    color: "#7ACCC8",
    tag: "Enterprise",
  },
];

export default function HomePricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "#0D0A0C" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.3), transparent)" }}
      />

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 500,
          height: 600,
          background: "radial-gradient(ellipse, rgba(127,255,212,0.10) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-14"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-[11px] font-black tracking-[0.28em] uppercase text-[#7FFFD4] mb-4"
          >
            Pricing
          </motion.p>
          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2
              className="font-black text-white tracking-[-0.03em] leading-[1.02]"
              style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}
            >
              Custom pricing.
              <br />
              <span className="gradient-text">No rigid tiers.</span>
            </h2>
            <p className="text-white/45 text-[15px] max-w-xs leading-relaxed sm:text-right pb-2">
              Pay for what you use. Variable programs built around your pipeline, not our package sizes.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {pods.map((pod, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: pod.featured
                  ? `1px solid ${pod.color}45`
                  : "1px solid rgba(255,255,255,0.07)",
                background: pod.featured
                  ? `linear-gradient(145deg, ${pod.color}14 0%, rgba(10,6,8,0.98) 60%)`
                  : "rgba(255,255,255,0.018)",
              }}
            >
              {pod.featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${pod.color} 35%, ${pod.color} 65%, transparent)`,
                  }}
                />
              )}

              <div className="p-7 lg:p-8">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md"
                    style={{
                      color: pod.color,
                      background: `${pod.color}18`,
                      border: `1px solid ${pod.color}28`,
                    }}
                  >
                    {pod.tag}
                  </span>
                  {pod.featured && (
                    <span
                      className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full"
                      style={{ color: pod.color, background: `${pod.color}10` }}
                    >
                      Most popular
                    </span>
                  )}
                </div>

                <h3 className="text-[17px] font-bold text-white mb-3 leading-snug">
                  {pod.name}
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed mb-6">
                  {pod.desc}
                </p>

                <div
                  className="h-px w-full mb-5"
                  style={{ background: `linear-gradient(90deg, ${pod.color}30, transparent)` }}
                />

                <p className="text-[12px] font-semibold" style={{ color: `${pod.color}CC` }}>
                  Custom · Performance-aligned
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#6321EE] text-white font-bold text-[14px] shadow-[0_0_28px_rgba(99,33,238,0.45)] hover:shadow-[0_0_44px_rgba(99,33,238,0.65)] hover:bg-[#7331FF] transition-all duration-300"
          >
            Book a free call
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/pricing"
            className="flex items-center gap-2 text-[14px] font-semibold text-white/50 hover:text-white transition-colors duration-200"
          >
            See full pricing details
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.15), transparent)" }}
      />
    </section>
  );
}
