"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Stethoscope, Users, Building, GraduationCap, TrendingUp, Clock } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const industries = [
  { icon: Stethoscope, label: "Healthcare", desc: "Patient outreach, appointment setting, and care coordination campaigns." },
  { icon: Users, label: "Recruiting", desc: "Candidate sourcing, screening calls, and talent pipeline development." },
  { icon: Building, label: "Commercial Real Estate", desc: "Prospecting, lead qualification, and broker outreach programs." },
];

const whyJoin = [
  { icon: GraduationCap, title: "No experience required", desc: "We teach you. AGORA's coaching platform walks you through every script, objection, and industry before you make a single call." },
  { icon: TrendingUp, title: "Skills that go on your resume", desc: "Work real campaigns in healthcare, recruiting, and CRE. Leave with industry knowledge, communication skills, and a track record you can point to." },
  { icon: Clock, title: "Flexible, fits around your schedule", desc: "Part-time, full-time, or project-based. You pick your availability. Great for students and recent grads building experience while earning." },
];

const qualify = [
  "College students and recent graduates welcome",
  "No prior sales experience required",
  "Must be based in the U.S.",
  "Strong communicator, comfortable on the phone",
  "Coachable and motivated by performance",
];

export default function AgentLandingClient() {
  return (
    <div className="bg-[#080507] min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "min(700px, 140vw)",
            height: "min(500px, 80vw)",
            background: "radial-gradient(ellipse, rgba(127,255,212,0.18) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants} className="mb-8">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase"
                style={{ border: "1px solid rgba(127,255,212,0.35)", background: "rgba(127,255,212,0.08)", color: "#7FFFD4" }}
              >
                Join as an SDR
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="font-black text-white tracking-[-0.04em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(44px, 8vw, 88px)" }}
            >
              Build real sales skills.
              <br />
              <span style={{ color: "#7FFFD4" }}>Get paid to do it.</span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-white/50 leading-relaxed mb-10 mx-auto"
              style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 520 }}
            >
              AGORA places you in real outbound campaigns across healthcare, recruiting,
              and commercial real estate, with structured coaching, flexible hours,
              and performance-based pay. No experience needed.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact/agent"
                className="group flex items-center gap-2.5 rounded-xl font-bold text-[#080507] transition-all duration-300 w-full sm:w-auto justify-center"
                style={{
                  padding: "14px 28px",
                  fontSize: 15,
                  background: "#7FFFD4",
                  boxShadow: "0 0 32px rgba(127,255,212,0.4)",
                }}
              >
                Apply Now
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              {/* Replace href below with your actual App Store link when live */}
              <a
                href="#"
                className="flex items-center gap-2.5 rounded-xl text-white font-semibold transition-all duration-300 w-full sm:w-auto justify-center hover:border-white/30"
                style={{ padding: "14px 28px", fontSize: 15, border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Download the App
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-24" style={{ background: "#0D0A0F" }}>
        <div
          className="h-px mb-0"
          style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.2), transparent)" }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUpVariants} className="text-[11px] font-black tracking-[0.28em] uppercase text-[#7FFFD4] mb-3 text-center">
              Industries
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="font-black text-white tracking-tight text-center mb-12"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Work in fields that matter.
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <motion.div
                    key={ind.label}
                    variants={fadeUpVariants}
                    className="rounded-2xl p-6"
                    style={{
                      border: "1px solid rgba(127,255,212,0.15)",
                      background: "linear-gradient(135deg, rgba(127,255,212,0.06) 0%, rgba(10,6,8,0.9) 60%)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(127,255,212,0.12)", border: "1px solid rgba(127,255,212,0.2)" }}
                    >
                      <Icon size={18} style={{ color: "#7FFFD4" }} strokeWidth={1.7} />
                    </div>
                    <h3 className="text-[15px] font-bold text-white mb-2">{ind.label}</h3>
                    <p className="text-[13px] text-white/40 leading-relaxed">{ind.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why join */}
      <section className="py-20 lg:py-28" style={{ background: "#080507" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUpVariants} className="text-[11px] font-black tracking-[0.28em] uppercase text-[#6321EE] mb-3 text-center">
              Why AGORA
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="font-black text-white tracking-tight text-center mb-12"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              More than a gig.{" "}
              <span className="gradient-text">A career foundation.</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {whyJoin.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUpVariants}
                    className="rounded-2xl p-6"
                    style={{
                      border: "1px solid rgba(99,33,238,0.2)",
                      background: "linear-gradient(135deg, rgba(99,33,238,0.08) 0%, rgba(10,6,8,0.9) 60%)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(99,33,238,0.15)", border: "1px solid rgba(99,33,238,0.25)" }}
                    >
                      <Icon size={18} style={{ color: "#6321EE" }} strokeWidth={1.7} />
                    </div>
                    <h3 className="text-[15px] font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Earnings, placeholder section */}
      <section id="earnings" className="py-20 lg:py-24" style={{ background: "#0D0A0F" }}>
        <div
          className="h-px mb-0"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.25), transparent)" }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUpVariants} className="text-[11px] font-black tracking-[0.28em] uppercase text-[#7FFFD4] mb-3">
              Earnings
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="font-black text-white tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Performance pay, not hourly minimums.
            </motion.h2>
            <motion.p variants={fadeUpVariants} className="text-white/45 text-[15px] leading-relaxed mb-10">
              AGORA agents earn based on results, bookings, qualified conversations,
              and campaign outcomes. The more you improve, the more you earn.
              {/* TODO: Add specific earnings example once data is confirmed */}
            </motion.p>

            {/* Placeholder for real earnings stats, swap in once confirmed */}
            <motion.div variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Performance-based pay", sub: "Earn more as you improve" },
                { label: "Flexible hours", sub: "Part-time or full-time" },
                { label: "Bonus incentives", sub: "For top performers" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-5"
                  style={{ border: "1px solid rgba(127,255,212,0.15)", background: "rgba(127,255,212,0.04)" }}
                >
                  <p className="text-[14px] font-bold text-white mb-1">{stat.label}</p>
                  <p className="text-[12px] text-white/35">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Do I qualify */}
      <section className="py-20 lg:py-28" style={{ background: "#080507" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUpVariants} className="text-[11px] font-black tracking-[0.28em] uppercase text-[#6321EE] mb-3 text-center">
              Eligibility
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="font-black text-white tracking-tight text-center mb-10"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Do I qualify?
            </motion.h2>

            <motion.div
              variants={fadeUpVariants}
              className="rounded-2xl p-8"
              style={{ border: "1px solid rgba(99,33,238,0.2)", background: "linear-gradient(135deg, rgba(99,33,238,0.08) 0%, rgba(8,5,7,0.9) 60%)" }}
            >
              <ul className="flex flex-col gap-4">
                {qualify.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#7FFFD4] flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] text-white/70">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-[13px] text-white/35 mb-5">
                  Note: AGORA SDR positions are classified as 1099 independent contractor roles.
                  You set your own hours and work across multiple campaign types.
                </p>
                <Link
                  href="/contact/agent"
                  className="group inline-flex items-center gap-2.5 font-bold text-[#080507] rounded-xl transition-all duration-300"
                  style={{ padding: "13px 24px", fontSize: 14, background: "#7FFFD4", boxShadow: "0 0 24px rgba(127,255,212,0.35)" }}
                >
                  Apply to the Network
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Backed by credibility */}
      <section className="py-16 border-t border-white/[0.05]" style={{ background: "#080507" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUpVariants} className="text-[13px] text-white/30 mb-4">
              Backed by Georgia Tech. Operating across the U.S.
            </motion.p>
            <motion.div variants={fadeUpVariants} className="flex items-center justify-center gap-6 flex-wrap">
              <span className="text-[12px] text-white/20 font-medium">Questions?</span>
              <a
                href="mailto:agents@agoraai.tech"
                className="text-[12px] text-[#6321EE] hover:text-[#7FFFD4] transition-colors font-medium"
              >
                agents@agoraai.tech
              </a>
              <span className="text-white/10">·</span>
              <Link href="/terms-conditions" className="text-[12px] text-white/20 hover:text-white/40 transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy" className="text-[12px] text-white/20 hover:text-white/40 transition-colors">
                Privacy
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
