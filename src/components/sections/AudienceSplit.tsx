"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";
import { ArrowRight, Building2, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    label: "For Companies",
    color: "#6321EE",
    headline: "Extend your sales team without extending your payroll.",
    body: "AGORA gives you a coached, ready-to-deploy outbound team, matched to your industry, briefed on your campaigns, and accountable to your KPIs. Active in healthcare, recruiting, and commercial real estate.",
    cta: { label: "Book a Free Call", href: "https://calendly.com", external: true },
    sub: { label: "Or get started online", href: "/contact/company" },
  },
  {
    icon: GraduationCap,
    label: "For SDRs",
    color: "#7FFFD4",
    headline: "Build real sales skills and get paid while you do it.",
    body: "No prior experience required. AGORA places you in structured campaigns across healthcare, recruiting, and commercial real estate, with live coaching, a clear growth path, and performance-based pay. Great for college students and recent grads.",
    cta: { label: "Apply to the Network", href: "/for-agents", external: false },
    sub: { label: "See what agents earn", href: "/for-agents#earnings" },
  },
];

export default function AudienceSplit() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "#0D0A0F" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.3), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-[11px] font-black tracking-[0.28em] uppercase text-white/30 mb-3"
          >
            Who uses AGORA
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="font-black text-white tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Are you a company or an SDR?
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.label}
                variants={fadeUpVariants}
                className="group relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300"
                style={{
                  border: `1px solid ${a.color}25`,
                  background: `linear-gradient(135deg, ${a.color}0D 0%, rgba(10,6,8,0.9) 60%)`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${a.color}15 0%, transparent 60%)` }}
                />

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${a.color}18`, border: `1px solid ${a.color}30` }}
                  >
                    <Icon size={18} style={{ color: a.color }} strokeWidth={1.7} />
                  </div>
                  <span
                    className="text-[11px] font-black tracking-[0.2em] uppercase"
                    style={{ color: a.color }}
                  >
                    {a.label}
                  </span>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-white leading-snug mb-3">
                    {a.headline}
                  </h3>
                  <p className="text-[13px] text-white/45 leading-relaxed">
                    {a.body}
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                  {a.cta.external ? (
                    <a
                      href={a.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold text-[13px] px-5 py-3 rounded-xl transition-all duration-200"
                      style={{
                        background: `${a.color}18`,
                        border: `1px solid ${a.color}35`,
                        color: a.color,
                      }}
                    >
                      {a.cta.label}
                      <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link
                      href={a.cta.href}
                      className="inline-flex items-center gap-2 font-bold text-[13px] px-5 py-3 rounded-xl transition-all duration-200"
                      style={{
                        background: `${a.color}18`,
                        border: `1px solid ${a.color}35`,
                        color: a.color,
                      }}
                    >
                      {a.cta.label}
                      <ArrowRight size={14} />
                    </Link>
                  )}
                  <Link
                    href={a.sub.href}
                    className="text-[12px] text-white/30 hover:text-white/60 transition-colors font-medium px-1"
                  >
                    {a.sub.label} →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.15), transparent)" }}
      />
    </section>
  );
}
