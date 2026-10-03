"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const industries = [
  { name: "Healthcare",         category: "Medical Sales",       metric: "Pipeline moves three times faster",    gradient: "linear-gradient(145deg,#1a0060,#0a001a)", accent: "#7FFFD4" },
  { name: "Recruiting",         category: "Talent Acquisition",  metric: "47 placements per month on average",   gradient: "linear-gradient(145deg,#200080,#0d0030)", accent: "#9B65FF" },
  { name: "Financial Services", category: "FinTech",             metric: "61 percent connect rate across lists", gradient: "linear-gradient(145deg,#0d0040,#050215)", accent: "#7FFFD4" },
  { name: "Real Estate",        category: "Property Sales",      metric: "29 qualified calls booked each week",  gradient: "linear-gradient(145deg,#150055,#080020)", accent: "#AA70FF" },
  { name: "SaaS",               category: "B2B Software",        metric: "Double the demo booking rate",         gradient: "linear-gradient(145deg,#1e0070,#0c0025)", accent: "#7FFFD4" },
  { name: "Legal",              category: "Law Firm Growth",     metric: "18 new client calls opened per month", gradient: "linear-gradient(145deg,#0a003a,#050215)", accent: "#9B65FF" },
];

const track = [...industries, ...industries];

export default function ShowcaseScroll() {
  return (
    <section className="relative" style={{ background: "transparent", overflow: "hidden" }}>
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

      <div className="py-20 lg:py-28">
        {/* Header */}
        <div className="px-8 sm:px-14 lg:px-20 xl:px-28 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
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

        {/* Marquee track */}
        <div style={{ overflow: "hidden" }}>
          <div className="showcase-track" style={{ display: "flex", gap: 16, width: "max-content", paddingLeft: 8, paddingBottom: 8 }}>
            {track.map((ind, i) => (
              <div
                key={i}
                className={`showcase-card sc-float-${i % industries.length}`}
                style={{
                  width: 260,
                  height: 320,
                  flexShrink: 0,
                  borderRadius: 20,
                  overflow: "hidden",
                  background: ind.gradient,
                  border: "1px solid rgba(255,255,255,0.09)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 24,
                  position: "relative",
                  cursor: "default",
                }}
              >
                {/* Shimmer on hover */}
                <div className="showcase-shimmer" style={{
                  position: "absolute", inset: 0, borderRadius: 20, pointerEvents: "none",
                  background: "linear-gradient(135deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 70%)",
                  transform: "translateX(-100%)",
                }} />

                {/* Ghost number */}
                <div className="font-black select-none pointer-events-none" style={{
                  position: "absolute", fontSize: 130, lineHeight: 1, letterSpacing: "-0.06em",
                  color: "rgba(255,255,255,0.04)", bottom: -12, right: -10,
                }}>
                  {String((i % industries.length) + 1).padStart(2, "0")}
                </div>

                {/* Top label */}
                <div>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.30)" }}>
                    {ind.category}
                  </span>
                </div>

                {/* Bottom content */}
                <div>
                  <div style={{ width: 28, height: 2, borderRadius: 2, background: ind.accent, marginBottom: 14, opacity: 0.75 }} />
                  <h3 className="font-black text-white" style={{ fontSize: 26, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: 10 }}>
                    {ind.name}
                  </h3>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.60 }}>
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
          animation: showcase-scroll 40s linear infinite;
        }
        .showcase-track:hover {
          animation-play-state: paused;
        }
        @keyframes showcase-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .showcase-card {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease;
        }
        .showcase-card:hover {
          transform: translateY(-12px) scale(1.04) !important;
          box-shadow: 0 32px 80px rgba(99,33,238,0.35);
          animation-play-state: paused !important;
        }
        .showcase-card:hover .showcase-shimmer {
          animation: shimmer-sweep 0.7s ease forwards;
        }
        @keyframes shimmer-sweep {
          from { transform: translateX(-100%); }
          to   { transform: translateX(200%); }
        }

        .sc-float-0 { animation: sc-float-a 6.0s 0.0s ease-in-out infinite; }
        .sc-float-1 { animation: sc-float-b 7.0s 0.8s ease-in-out infinite; }
        .sc-float-2 { animation: sc-float-a 5.5s 1.4s ease-in-out infinite; }
        .sc-float-3 { animation: sc-float-c 6.8s 0.4s ease-in-out infinite; }
        .sc-float-4 { animation: sc-float-b 6.2s 1.0s ease-in-out infinite; }
        .sc-float-5 { animation: sc-float-a 7.2s 1.8s ease-in-out infinite; }

        @keyframes sc-float-a { 0%,100% { transform: translateY(0px);  } 50% { transform: translateY(-9px);  } }
        @keyframes sc-float-b { 0%,100% { transform: translateY(-4px); } 50% { transform: translateY(-12px); } }
        @keyframes sc-float-c { 0%,100% { transform: translateY(-2px); } 50% { transform: translateY(-10px); } }
      `}</style>
    </section>
  );
}
