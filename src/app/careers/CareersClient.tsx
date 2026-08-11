"use client";

import { motion } from "framer-motion";
import { Mail, Zap, Hammer, Eye, Shield } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const values = [
  {
    icon: Zap,
    title: "Move fast",
    description:
      "We ship, learn, and iterate. Decisions get made and we move on.",
  },
  {
    icon: Hammer,
    title: "Build things that matter",
    description:
      "Every feature connects to real outcomes for real companies and real agents.",
  },
  {
    icon: Eye,
    title: "Take ownership",
    description:
      "We don't pass the buck. If you see a problem, you own the fix.",
  },
  {
    icon: Shield,
    title: "Do things right",
    description:
      "Shortcuts compound into debt. We build with quality from the start.",
  },
];

export default function CareersClient() {
  return (
    <div className="bg-[#211A1D] min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] bg-[#6321EE]/10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-bold tracking-[0.25em] uppercase text-[#7FFFD4] mb-4"
            >
              Careers
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8 max-w-3xl"
            >
              Help us build{" "}
              <span className="gradient-text">the future of sales</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-6"
            >
              AGORA connects companies with trained sales agents and gives them
              the tools, coaching, and reporting to perform. We&apos;re a small,
              fast-moving team — if you like to build and take ownership,
              you&apos;ll fit in here.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 lg:py-20 bg-[#F4F6FF]/[0.03]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl sm:text-3xl font-bold text-white mb-10"
            >
              What we care about
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUpVariants}
                    className="flex gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-[#6321EE]/30 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(99,33,238,0.15)", border: "1px solid rgba(99,33,238,0.2)" }}
                    >
                      <Icon size={16} style={{ color: "#6321EE" }} strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1.5">
                        {val.title}
                      </h3>
                      <p className="text-sm text-white/50">{val.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUpVariants}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Open positions
              </h2>
              <span className="text-xs font-semibold text-white/30 bg-white/[0.05] px-3 py-1 rounded-full border border-white/[0.08]">
                0 open roles
              </span>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="relative rounded-2xl border border-dashed border-white/[0.12] p-12 lg:p-16 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6321EE]/[0.04] to-transparent pointer-events-none" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-[#6321EE]/10 border border-[#6321EE]/20 flex items-center justify-center mx-auto mb-6">
                  <Mail size={28} className="text-[#6321EE]" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  No open roles right now
                </h3>
                <p className="text-sm sm:text-base text-white/50 max-w-md mx-auto mb-8">
                  We don&apos;t always have open roles listed, but we&apos;re always
                  interested in hearing from great people. If what we&apos;re building
                  resonates with you, reach out.
                </p>

                <a
                  href="mailto:careers@agoraai.tech"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#6321EE] text-white font-semibold shadow-[0_0_25px_rgba(99,33,238,0.4)] hover:shadow-[0_0_45px_rgba(99,33,238,0.6)] hover:bg-[#7331FF] transition-all duration-300"
                >
                  <Mail size={17} />
                  Get in touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Two-sided split */}
      <section className="py-16 lg:py-24 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {[
              {
                label: "For Companies",
                sub: "Add a sales team without the hiring",
                color: "#6321EE",
                href: "/contact/company",
                cta: "Get started as a company",
              },
              {
                label: "For SDRs",
                sub: "Build skills, earn performance pay",
                color: "#7FFFD4",
                href: "/for-agents",
                cta: "Apply as an SDR",
              },
            ].map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                variants={fadeUpVariants}
                className="group rounded-2xl border border-white/[0.08] p-7 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative block"
                style={{
                  background: `linear-gradient(135deg, ${card.color}08 0%, transparent 60%)`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-wider mb-2 block"
                  style={{ color: card.color }}
                >
                  {card.label}
                </span>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {card.sub}
                </h3>
                <p
                  className="text-sm font-medium mt-4 group-hover:underline"
                  style={{ color: card.color }}
                >
                  {card.cta} →
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
