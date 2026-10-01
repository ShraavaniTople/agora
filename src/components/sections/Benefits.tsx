"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  { num: "01", title: "No hiring. No ramp time." },
  { num: "02", title: "Turn it up or down, anytime." },
  { num: "03", title: "Stop losing leads to slow follow-up." },
  { num: "04", title: "Pay for results, not seats." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-20 lg:py-28">
        {/* ── Section label ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(0,0,0,0.30)", marginBottom: 48 }}
        >
          Why choose us
        </motion.p>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-10 items-start">

          {/* Left: numbered list */}
          <div>
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
                className="group flex items-center gap-6 py-5"
                style={{ borderTop: "1px solid rgba(0,0,0,0.09)" }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(0,0,0,0.18)", letterSpacing: "0.06em", minWidth: 26, flexShrink: 0 }}>
                  {b.num}
                </span>
                <h3
                  className="font-semibold group-hover:text-[#6321EE] transition-colors duration-300"
                  style={{ fontSize: 16, letterSpacing: "-0.01em", color: "#0d0d0d" }}
                >
                  {b.title}
                </h3>
              </motion.div>
            ))}
            <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />
          </div>

          {/* Right: dark feature panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="rounded-2xl flex flex-col justify-between"
            style={{
              background: "#0d0d0d",
              padding: "44px 40px",
              minHeight: 320,
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Top badge */}
            <div className="flex items-center gap-2 mb-auto">
              <motion.span
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#6321EE", boxShadow: "0 0 10px rgba(99,33,238,0.8)", display: "inline-block" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)" }}>
                Deploy timeline
              </span>
            </div>

            {/* Headline */}
            <div style={{ marginTop: 48 }}>
              <h3
                className="font-black text-white"
                style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 0.9, letterSpacing: "-0.048em", marginBottom: 20 }}
              >
                Live in<br />2 weeks.
              </h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.40)", lineHeight: 1.75 }}>
                From kickoff to a team actively working your pipeline. No hiring, no onboarding, no management overhead.
              </p>
            </div>

            {/* Stat row */}
            <div
              className="flex items-center gap-8 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div>
                <div className="font-black text-white" style={{ fontSize: 32, letterSpacing: "-0.04em", lineHeight: 1 }}>$150K</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 6 }}>saved vs in-house</div>
              </div>
              <div>
                <div className="font-black" style={{ fontSize: 32, letterSpacing: "-0.04em", lineHeight: 1, color: "#6321EE" }}>6+</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 6 }}>months saved</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
