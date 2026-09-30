"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, GraduationCap } from "lucide-react";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } };
const up = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } };

const audiences = [
  {
    icon: Building2,
    label: "For Companies",
    color: "#6321EE",
    gradFrom: "rgba(99,33,238,0.18)",
    gradTo: "rgba(99,33,238,0.06)",
    borderColor: "rgba(99,33,238,0.30)",
    headline: "Extend your sales team without extending your payroll.",
    body: "AGORA gives you a coached, ready-to-deploy outbound team, matched to your industry, briefed on your campaigns, and accountable to your KPIs. Active in healthcare, recruiting, and commercial real estate.",
    cta: { label: "Book a Free Call", href: "https://calendly.com", external: true },
    sub: { label: "Or get started online", href: "/contact/company" },
    features: ["Live in 2 weeks", "No fixed overhead", "Full campaign reporting"],
  },
  {
    icon: GraduationCap,
    label: "For SDRs",
    color: "#7FFFD4",
    gradFrom: "rgba(127,255,212,0.12)",
    gradTo: "rgba(127,255,212,0.04)",
    borderColor: "rgba(127,255,212,0.22)",
    headline: "Build real sales skills and get paid while you do it.",
    body: "No prior experience required. AGORA places you in structured campaigns with live coaching, a clear growth path, and performance-based pay. Great for college students and recent grads.",
    cta: { label: "Apply to the Network", href: "/for-agents", external: false },
    sub: { label: "See what agents earn", href: "/for-agents#earnings" },
    features: ["Performance-based pay", "Live call coaching", "Flexible hours"],
  },
];

export default function AudienceSplit() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "transparent" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.4), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={up} className="text-[11px] font-black tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(0,0,0,0.32)" }}>
            Who uses AGORA
          </motion.p>
          <motion.h2
            variants={up}
            className="font-black tracking-[-0.03em]"
            style={{ fontSize: "clamp(30px, 4.5vw, 54px)", color: "#0d0d0d" }}
          >
            Company or SDR — we have a path for you
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.label} className="card-glow-border" style={{ borderRadius: 20 }}>
              <motion.div
                variants={up}
                className="group relative rounded-[20px] overflow-hidden flex flex-col transition-all duration-500"
                style={{
                  padding: "40px 36px",
                  background: `linear-gradient(145deg, ${a.gradFrom} 0%, ${a.gradTo} 60%, rgba(5,2,16,0.60) 100%)`,
                  border: `1px solid ${a.borderColor}`,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Top gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${a.color}, transparent)` }}
                />

                {/* Corner glow */}
                <div
                  className="absolute -top-20 -left-20 pointer-events-none"
                  style={{
                    width: 260, height: 260, borderRadius: "50%",
                    background: `radial-gradient(circle, ${a.gradFrom} 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 15% 0%, ${a.color}10 0%, transparent 60%)` }}
                />

                {/* Icon + label */}
                <div className="flex items-center gap-3 mb-7 relative z-10">
                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${a.color}18`,
                      border: `1px solid ${a.color}38`,
                      boxShadow: `0 0 24px ${a.color}22`,
                    }}
                  >
                    <Icon size={20} style={{ color: a.color }} strokeWidth={1.6} />
                  </div>
                  <span
                    className="text-[11px] font-black tracking-[0.22em] uppercase"
                    style={{ color: a.color }}
                  >
                    {a.label}
                  </span>
                </div>

                {/* Headline + body */}
                <div className="relative z-10 mb-7">
                  <h3
                    className="font-bold text-white leading-snug mb-4"
                    style={{ fontSize: "clamp(19px, 2.2vw, 24px)", letterSpacing: "-0.02em" }}
                  >
                    {a.headline}
                  </h3>
                  <p style={{ fontSize: 14, color: "rgba(244,246,255,0.52)", lineHeight: 1.72 }}>
                    {a.body}
                  </p>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {a.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontSize: 11, fontWeight: 600,
                        color: a.color,
                        background: `${a.color}12`,
                        border: `1px solid ${a.color}22`,
                        padding: "5px 12px",
                        borderRadius: 999,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-2 mt-auto relative z-10">
                  {a.cta.external ? (
                    <a
                      href={a.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 font-bold text-[14px] px-5 py-3.5 rounded-xl transition-all duration-250"
                      style={{
                        background: `${a.color}18`,
                        border: `1px solid ${a.color}35`,
                        color: a.color,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${a.color}28`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${a.color}28`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${a.color}18`;
                        (e.currentTarget as HTMLElement).style.boxShadow = "";
                      }}
                    >
                      {a.cta.label}
                      <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={a.cta.href}
                      className="group/btn inline-flex items-center gap-2 font-bold text-[14px] px-5 py-3.5 rounded-xl transition-all duration-250"
                      style={{
                        background: `${a.color}18`,
                        border: `1px solid ${a.color}35`,
                        color: a.color,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${a.color}28`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${a.color}28`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `${a.color}18`;
                        (e.currentTarget as HTMLElement).style.boxShadow = "";
                      }}
                    >
                      {a.cta.label}
                      <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                  <Link
                    href={a.sub.href}
                    className="text-[12px] hover:text-white/60 transition-colors font-medium px-1"
                    style={{ color: "rgba(244,246,255,0.30)" }}
                  >
                    {a.sub.label} →
                  </Link>
                </div>
              </motion.div>
              </div>
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
