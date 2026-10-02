"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const industries = [
  {
    name: "Healthcare",
    category: "Medical Sales",
    metric: "3.2× pipeline velocity",
    gradient: "linear-gradient(145deg, #1a0060, #0a001a)",
    accent: "#7FFFD4",
    icon: "🏥",
  },
  {
    name: "Recruiting",
    category: "Talent Acquisition",
    metric: "47 placements / month",
    gradient: "linear-gradient(145deg, #200080, #0d0030)",
    accent: "#9B65FF",
    icon: "🎯",
  },
  {
    name: "Financial Services",
    category: "FinTech · Insurance",
    metric: "61% contact rate",
    gradient: "linear-gradient(145deg, #0d0040, #050215)",
    accent: "#7FFFD4",
    icon: "📈",
  },
  {
    name: "Real Estate",
    category: "Property Sales",
    metric: "29 qualified calls / week",
    gradient: "linear-gradient(145deg, #150055, #080020)",
    accent: "#AA70FF",
    icon: "🏢",
  },
  {
    name: "SaaS",
    category: "Software · B2B",
    metric: "2× demo conversion",
    gradient: "linear-gradient(145deg, #1e0070, #0c0025)",
    accent: "#7FFFD4",
    icon: "⚡",
  },
  {
    name: "Legal",
    category: "Law Firm Growth",
    metric: "18 new client calls / mo",
    gradient: "linear-gradient(145deg, #0a003a, #050215)",
    accent: "#9B65FF",
    icon: "⚖️",
  },
];

export default function ShowcaseScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      <div className="py-20 lg:py-28">
        {/* Header */}
        <div className="px-8 sm:px-14 lg:px-20 xl:px-28 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(0,0,0,0.30)", marginBottom: 12 }}>
              Industries we serve
            </p>
            <h2
              className="font-black"
              style={{ fontSize: "clamp(44px, 6vw, 78px)", lineHeight: 0.90, letterSpacing: "-0.046em", color: "#0d0d0d" }}
            >
              Built for<br />every vertical.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            style={{ fontSize: 13.5, color: "rgba(0,0,0,0.45)", maxWidth: 260, lineHeight: 1.75 }}
          >
            AGORA agents are trained on your specific industry, not generic scripts.
          </motion.p>
        </div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto"
          style={{
            scrollbarWidth: "none",
            paddingLeft: "clamp(32px, 8%, 140px)",
            paddingRight: "clamp(32px, 8%, 140px)",
            paddingBottom: 8,
          }}
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="flex-shrink-0 rounded-2xl overflow-hidden"
              style={{
                width: 260,
                height: 320,
                background: ind.gradient,
                border: "1px solid rgba(255,255,255,0.07)",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 24,
                position: "relative",
              }}
            >
              {/* Top */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <span style={{ fontSize: 28 }}>{ind.icon}</span>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                  {ind.category}
                </span>
              </div>

              {/* Ghost number */}
              <div
                className="absolute font-black select-none pointer-events-none"
                style={{
                  fontSize: 130,
                  lineHeight: 1,
                  letterSpacing: "-0.06em",
                  color: "rgba(255,255,255,0.03)",
                  bottom: -12,
                  right: -10,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Bottom */}
              <div>
                <div style={{ width: 28, height: 2, borderRadius: 2, background: ind.accent, marginBottom: 14, opacity: 0.7 }} />
                <h3
                  className="font-black text-white"
                  style={{ fontSize: 26, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: 10 }}
                >
                  {ind.name}
                </h3>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.42)", lineHeight: 1.55 }}>
                  {ind.metric}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
