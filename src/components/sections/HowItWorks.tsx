"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  { num: "01", title: "Tell us your campaign",    body: "Describe your target market, industry, and what a good outcome looks like — a booked meeting, a qualified call, a follow-up conversation.", note: "Takes about 30 minutes. We do the rest." },
  { num: "02", title: "We build and brief your team", body: "AGORA matches you with agents, trains them on your script, and runs live coaching sessions before a single call is made.", note: "No hiring. No onboarding. No management." },
  { num: "03", title: "They work. You watch.",     body: "Agents run your campaigns every day. You get a live dashboard showing every call, every booking, and every result.", note: "Full visibility. No black boxes." },
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

      {/* ── Steps ── */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
            className="group flex items-start gap-6 py-8"
            style={{ borderTop: "1px solid rgba(0,0,0,0.09)" }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(0,0,0,0.18)", letterSpacing: "0.06em", minWidth: 26, paddingTop: 3 }}>
              {s.num}
            </span>

            <div className="flex-1 flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
              <h3
                className="font-semibold md:min-w-[220px] transition-colors duration-300"
                style={{ fontSize: 15, letterSpacing: "-0.01em", color: "#0d0d0d" }}
              >
                {s.title}
              </h3>

              <div className="flex-1">
                <p style={{ fontSize: 13, color: "rgba(0,0,0,0.50)", lineHeight: 1.72, marginBottom: 10 }}>
                  {s.body}
                </p>
                <p style={{ fontSize: 11, color: "#6321EE", fontWeight: 600, letterSpacing: "0.04em" }}>
                  {s.note}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />
      </div>
    </section>
  );
}
