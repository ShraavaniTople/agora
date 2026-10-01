"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  { num: "01", title: "Tell us your campaign",         body: "Describe your target market, industry, and what a good outcome looks like — a booked meeting, a qualified call, a follow-up conversation.", note: "Takes about 30 minutes. We do the rest." },
  { num: "02", title: "We build and brief your team",  body: "AGORA matches you with agents, trains them on your script, and runs live coaching sessions before a single call is made.", note: "No hiring. No onboarding. No management." },
  { num: "03", title: "They work. You watch.",         body: "Agents run your campaigns every day. You get a live dashboard showing every call, every booking, and every result.", note: "Full visibility. No black boxes." },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      {/* ── Header ── */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 pt-20 pb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-black"
          style={{ fontSize: "clamp(54px, 8.5vw, 110px)", lineHeight: 0.88, letterSpacing: "-0.048em", color: "#0d0d0d" }}
        >
          How it<br />works.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          style={{ fontSize: 14, color: "rgba(0,0,0,0.45)", maxWidth: 280, lineHeight: 1.7 }}
        >
          From our first conversation to a team actively working your pipeline — in two weeks.
        </motion.p>
      </div>

      {/* ── Step cards ── */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: EASE }}
              className="relative rounded-2xl flex flex-col"
              style={{ background: "#f2f1ee", border: "1px solid rgba(0,0,0,0.07)", padding: "36px 32px" }}
            >
              {/* Step number — large ghost text */}
              <div
                className="font-black select-none pointer-events-none absolute top-4 right-6"
                style={{ fontSize: 72, lineHeight: 1, letterSpacing: "-0.06em", color: "rgba(0,0,0,0.06)" }}
              >
                {s.num}
              </div>

              {/* Small number badge */}
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6321EE", marginBottom: 48 }}>
                {s.num}
              </span>

              <h3
                className="font-bold"
                style={{ fontSize: 17, letterSpacing: "-0.02em", lineHeight: 1.2, color: "#0d0d0d", marginBottom: 16 }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 13, color: "rgba(0,0,0,0.50)", lineHeight: 1.75, marginBottom: 20 }}>
                {s.body}
              </p>
              <div
                className="mt-auto pt-5 flex items-center gap-2"
                style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
              >
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#6321EE", flexShrink: 0 }} />
                <p style={{ fontSize: 11, color: "#6321EE", fontWeight: 600, letterSpacing: "0.04em" }}>
                  {s.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
