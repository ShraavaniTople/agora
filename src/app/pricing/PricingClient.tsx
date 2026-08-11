"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const valueProps = [
  "No rigid tiers or bloated packages",
  "Pay only for tools, automation, and support you actually use",
  "Variable pricing aligned to your outcomes",
  "Scale up or down by program without renegotiating",
  "Full transparency — dashboards tied to every dollar spent",
  "Performance-aligned economics from day one",
];

const illustrativeEngagements = [
  {
    name: "Speed-to-Lead Pod",
    description:
      "Dedicated coverage for inbound lead response — after-hours, weekends, and overflow. Best for companies losing pipeline to slow follow-up.",
    tags: ["Inbound Coverage", "Lead Recovery", "Reporting"],
    color: "#6321EE",
  },
  {
    name: "Outbound Growth Pod",
    description:
      "Prospecting and account reactivation at scale — by region, segment, or campaign. Best for companies looking to grow net-new pipeline without adding headcount.",
    tags: ["Outbound Prospecting", "Reactivation", "Live Coaching"],
    color: "#7FFFD4",
  },
  {
    name: "Enterprise Program",
    description:
      "Multi-pod deployments with full reporting, performance coaching, and regional expansion built in. Best for scaled revenue teams running complex, multi-segment motions.",
    tags: ["Multi-Pod", "Enterprise Reporting", "Regional Expansion"],
    color: "#7ACCC8",
  },
];

export default function PricingClient() {
  return (
    <div className="bg-[#211A1D] min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] bg-[#6321EE]/12 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-bold tracking-[0.25em] uppercase text-[#7FFFD4] mb-3"
            >
              Pricing
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
            >
              Custom Pricing.{" "}
              <span className="gradient-text">Built Around Your Business.</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto mb-12"
            >
              Smart, scalable engagement designed to align with your
              organization. Why pay for bloated packages filled with features
              you'll never use? Our custom pricing structure fits your business
              — not the other way around.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Value props card */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative rounded-2xl border border-[#6321EE]/30 bg-gradient-to-br from-[#6321EE]/10 to-[#7FFFD4]/05 p-8 lg:p-12 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] bg-[#6321EE]/15 pointer-events-none" />

            <motion.div variants={fadeUpVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6321EE]/20 border border-[#6321EE]/40 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7FFFD4] animate-pulse" />
                <span className="text-xs font-semibold text-[#7FFFD4]">
                  Performance Based Pricing → Custom
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                No fluff. No unnecessary add-ons. No rigid tiers.
              </h2>
              <p className="text-white/55">
                You only invest in the tools, automation, and support you
                actually need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {valueProps.map((prop, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={17}
                    className="text-[#7FFFD4] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-white/75">{prop}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUpVariants}>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#6321EE] text-white font-semibold shadow-[0_0_30px_rgba(99,33,238,0.4)] hover:shadow-[0_0_50px_rgba(99,33,238,0.6)] hover:bg-[#7331FF] transition-all duration-300"
              >
                Book a Free Call
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Illustrative engagements */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-2"
            >
              Illustrative Engagement Models
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl sm:text-3xl font-bold text-white"
            >
              Common ways companies work with AGORA
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="mt-3 text-sm text-white/40"
            >
              These are example program types — not fixed pricing packages.
              Pricing for each is custom and based on your specific needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {illustrativeEngagements.map((eng, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariants}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, ${eng.color}, transparent)`,
                  }}
                />
                <h3 className="text-base font-semibold text-white mb-3">
                  {eng.name}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed mb-5">
                  {eng.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {eng.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-white/[0.08] text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
            >
              Ready to talk specifics?
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-white/50 mb-8"
            >
              We'll map out a pricing structure aligned to your pipeline volume,
              team size, and growth goals.
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#6321EE] text-white font-semibold shadow-[0_0_30px_rgba(99,33,238,0.4)] hover:shadow-[0_0_50px_rgba(99,33,238,0.6)] transition-all duration-300"
              >
                Book a Free Call
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:border-[#7FFFD4]/50 hover:text-[#7FFFD4] transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
