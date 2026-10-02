"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const industries = [
  { name: "Healthcare",          category: "Medical Sales",         metric: "3.2× pipeline velocity",    gradient: "linear-gradient(145deg,#1a0060,#0a001a)", accent: "#7FFFD4" },
  { name: "Recruiting",          category: "Talent Acquisition",    metric: "47 placements / month",     gradient: "linear-gradient(145deg,#200080,#0d0030)", accent: "#9B65FF" },
  { name: "Financial Services",  category: "FinTech · Insurance",   metric: "61% contact rate",          gradient: "linear-gradient(145deg,#0d0040,#050215)", accent: "#7FFFD4" },
  { name: "Real Estate",         category: "Property Sales",        metric: "29 qualified calls / week", gradient: "linear-gradient(145deg,#150055,#080020)", accent: "#AA70FF" },
  { name: "SaaS",                category: "Software · B2B",        metric: "2× demo conversion",        gradient: "linear-gradient(145deg,#1e0070,#0c0025)", accent: "#7FFFD4" },
  { name: "Legal",               category: "Law Firm Growth",       metric: "18 new client calls / mo",  gradient: "linear-gradient(145deg,#0a003a,#050215)", accent: "#9B65FF" },
];

/* duplicate for seamless loop */
const track = [...industries, ...industries];

export default function ShowcaseScroll() {
  return (
    <section className="relative overflow-hidden" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

      <div className="py-20 lg:py-28">
        {/* Header */}
        <div className="px-8 sm:px-14 lg:px-20 xl:px-28 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 12 }}>
              Industries we serve
            </p>
            <h2 className="font-black" style={{ fontSize: "clamp(44px,6vw,78px)", lineHeight: 0.90, letterSpacing: "-0.046em", color: "#ffffff" }}>
              Built for<br />every vertical.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            style={{ fontSize: 13.5, color: "rgba(255,255,255,0.42)", maxWidth: 260, lineHeight: 1.75 }}
          >
            AGORA agents are trained on your specific industry, not generic scripts.
          </motion.p>
        </div>

        {/* Auto-scroll marquee */}
        <div style={{ overflow: "hidden" }}>
          <div
            className="showcase-track"
            style={{
              display: "flex",
              gap: 16,
              width: "max-content",
              paddingLeft: 8,
              paddingBottom: 8,
            }}
          >
            {track.map((ind, i) => (
              <div
                key={i}
                className="showcase-card"
                style={{
                  width: 260,
                  height: 320,
                  flexShrink: 0,
                  borderRadius: 20,
                  overflow: "hidden",
                  background: ind.gradient,
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 24,
                  position: "relative",
                  cursor: "default",
                }}
              >
                {/* Ghost number */}
                <div
                  className="font-black select-none pointer-events-none"
                  style={{
                    position: "absolute",
                    fontSize: 130, lineHeight: 1, letterSpacing: "-0.06em",
                    color: "rgba(255,255,255,0.03)",
                    bottom: -12, right: -10,
                  }}
                >
                  {String((i % industries.length) + 1).padStart(2, "0")}
                </div>

                {/* Top */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                    {ind.category}
                  </span>
                </div>

                {/* Bottom */}
                <div>
                  <div style={{ width: 28, height: 2, borderRadius: 2, background: ind.accent, marginBottom: 14, opacity: 0.7 }} />
                  <h3 className="font-black text-white" style={{ fontSize: 26, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: 10 }}>
                    {ind.name}
                  </h3>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.42)", lineHeight: 1.55 }}>
                    {ind.metric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .showcase-track {
          animation: showcase-scroll 38s linear infinite;
        }
        .showcase-track:hover {
          animation-play-state: paused;
        }
        @keyframes showcase-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .showcase-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
        }
        .showcase-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 24px 60px rgba(99,33,238,0.28);
        }
      `}</style>
    </section>
  );
}
