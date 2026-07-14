"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";
import { Zap, Users, Brain, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Speed-to-Lead Coverage",
    description:
      "Route inbound and outbound follow-up instantly with on-demand coverage, after-hours support, and lead recovery campaigns. Your team keeps control of messaging. We handle the execution layer.",
    color: "#6321EE",
    tag: "Inbound",
    index: "01",
  },
  {
    icon: Users,
    title: "Dedicated Outbound Sales Pod",
    description:
      "Deploy dedicated pods for prospecting, account reactivation, and expansion campaigns. Scale up or down by region, segment, or program — without adding fixed payroll.",
    color: "#7FFFD4",
    tag: "Outbound",
    index: "02",
  },
  {
    icon: Brain,
    title: "Real-Time AI Coaching",
    description:
      "Give every rep live call guidance, script optimization, and objection analytics. Stay consistent across teams and regions with performance scoring and clear quality controls.",
    color: "#7ACCC8",
    tag: "AI",
    index: "03",
  },
  {
    icon: BarChart3,
    title: "Enterprise-Grade Reporting",
    description:
      "Call scoring dashboards, conversion analytics, objection trend mapping, regional comparisons, and revenue attribution. Know exactly what's working — then scale it.",
    color: "#6321EE",
    tag: "Analytics",
    index: "04",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "#100C0E" }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.3), transparent)" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Side glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 400,
          height: 600,
          background: "radial-gradient(ellipse, rgba(99,33,238,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-[11px] font-black tracking-[0.28em] uppercase text-[#7FFFD4] mb-4"
          >
            Revenue Acceleration
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="font-black text-white tracking-[-0.03em] leading-[1.02] mb-5"
            style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}
          >
            Four tools.
            <br />
            <span className="gradient-text">One network.</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-white/45 text-[15px] leading-relaxed">
            Agora connects companies that need outreach with proven sales agents.
            Companies set the rules. Agents compete to deliver. We enforce the standard.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  /* Colored left border — 3px, always visible */
                  borderLeft: `3px solid ${service.color}`,
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  borderRight: "1px solid rgba(255,255,255,0.07)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  /* Visible gradient background */
                  background: `linear-gradient(135deg, ${service.color}16 0%, rgba(10,6,8,0.95) 45%, rgba(10,6,8,1) 100%)`,
                }}
              >
                {/* Hover amplify glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${service.color}22 0%, transparent 55%)`,
                  }}
                />

                <div className="p-7 lg:p-8 relative">
                  {/* Icon + tag row */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${service.color}18`,
                        border: `1px solid ${service.color}35`,
                        boxShadow: `0 0 20px ${service.color}22`,
                      }}
                    >
                      <Icon size={22} style={{ color: service.color }} strokeWidth={1.7} />
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md"
                        style={{
                          color: service.color,
                          background: `${service.color}18`,
                          border: `1px solid ${service.color}30`,
                        }}
                      >
                        {service.tag}
                      </span>
                      <span
                        className="font-black text-right"
                        style={{ fontSize: 36, color: `${service.color}22`, lineHeight: 1, userSelect: "none" }}
                      >
                        {service.index}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="font-bold text-white mb-3 leading-snug"
                    style={{ fontSize: 18 }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-white/45 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom line — always partially visible, full on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[1px] transition-all duration-700"
                  style={{
                    width: "30%",
                    background: `linear-gradient(90deg, ${service.color}, transparent)`,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-700"
                  style={{
                    background: `linear-gradient(90deg, ${service.color}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.3), transparent)" }}
      />
    </section>
  );
}
