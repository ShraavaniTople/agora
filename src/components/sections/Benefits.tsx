"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  { num: "01", title: "No hiring. No ramp time.",        desc: "Skip the months-long SDR hiring process. AGORA agents are trained and deployed in weeks.", color: "#6321EE" },
  { num: "02", title: "Turn it up or down, anytime.",    desc: "Need more coverage for a product launch? Scale the team up or down without reorganizing headcount.", color: "#6321EE" },
  { num: "03", title: "Stop losing leads to slow follow-up.", desc: "Most inbound leads go cold within the first hour. AGORA's speed-to-lead coverage calls them back while they're warm.", color: "#6321EE" },
  { num: "04", title: "Pay for results, not seats.",     desc: "AGORA pricing is tied to outcomes — bookings, conversations, and campaign performance.", color: "#6321EE" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      {/* ── Header ── */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 pt-20 pb-14">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-black"
          style={{ fontSize: "clamp(54px, 8.5vw, 110px)", lineHeight: 0.88, letterSpacing: "-0.048em", color: "#0d0d0d" }}
        >
          Why<br />choose us.
        </motion.h2>
      </div>

      {/* ── Benefit rows ── */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: EASE }}
            className="group flex items-start gap-6 py-7"
            style={{ borderTop: "1px solid rgba(0,0,0,0.09)", cursor: "default" }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(0,0,0,0.18)", letterSpacing: "0.06em", minWidth: 26, paddingTop: 3 }}>
              {b.num}
            </span>

            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
              <h3
                className="font-semibold group-hover:text-[#6321EE] transition-colors duration-300 md:min-w-[240px]"
                style={{ fontSize: 15, letterSpacing: "-0.01em", color: "#0d0d0d" }}
              >
                {b.title}
              </h3>
              <p className="flex-1" style={{ fontSize: 13, color: "rgba(0,0,0,0.50)", lineHeight: 1.72 }}>
                {b.desc}
              </p>
            </div>
          </motion.div>
        ))}
        <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />
      </div>
    </section>
  );
}
