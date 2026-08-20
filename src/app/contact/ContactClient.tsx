"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, User, ArrowRight } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const cards = [
  {
    icon: Building2,
    role: "I run a company",
    description:
      "Add an outbound sales team to your business, without hiring. We build the team, train them on your campaign, and have them making calls within two weeks.",
    cta: "Tell us about your business",
    href: "/contact/company",
    color: "#6321EE",
    tags: ["Healthcare", "Recruiting", "Commercial Real Estate"],
  },
  {
    icon: User,
    role: "I want to be an SDR",
    description:
      "Build real sales skills across healthcare, recruiting, and commercial real estate, and get paid while you do it. No prior experience required.",
    cta: "Apply to the network",
    href: "/contact/agent",
    color: "#7FFFD4",
    tags: ["Flexible Hours", "Performance Pay", "Coaching Included"],
  },
];

export default function ContactClient() {
  return (
    <div className="bg-[#211A1D] min-h-screen pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[130px] bg-[#6321EE]/10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-bold tracking-[0.25em] uppercase text-[#7FFFD4] mb-4"
            >
              Contact
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
            >
              Get started with{" "}
              <span className="gradient-text">AGORA</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-lg text-white/55 max-w-xl mx-auto"
            >
              Interested in getting set up with AGORA? Tell us who you are and
              we'll connect you with the right path.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={i} variants={fadeUpVariants}>
                  <Link
                    href={card.href}
                    className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 lg:p-10 hover:border-white/20 hover:-translate-y-2 hover:bg-white/[0.04] transition-all duration-400 overflow-hidden flex flex-col h-full block"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${card.color}08 0%, transparent 70%)`,
                      }}
                    />
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${card.color}, transparent)`,
                      }}
                    />

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${card.color}15`,
                        border: `1px solid ${card.color}30`,
                      }}
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.5}
                        style={{ color: card.color }}
                      />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {card.role}
                    </h2>
                    <p className="text-sm text-white/55 leading-relaxed flex-1 mb-6">
                      {card.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full border border-white/[0.08] text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
                      style={{ color: card.color }}
                    >
                      {card.cta}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
