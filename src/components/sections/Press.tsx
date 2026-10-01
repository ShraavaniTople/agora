"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const pressItems = [
  { outlet: "Tech Square Atlanta",   headline: "How Joseph Lee turned campus observation into a sales platform",         tag: "Founder Story", color: "#6321EE", num: "01" },
  { outlet: "Georgia Tech CREATE-X", headline: "AGORA AI selected for Georgia Tech's flagship startup accelerator",       tag: "Accelerator",   color: "#8B5CF6", num: "02" },
  { outlet: "11 Alive · NBC Atlanta", headline: "Georgia Tech launches program to aid students with startups",           tag: "News",          color: "#6321EE", num: "03" },
];

export default function Press() {
  return (
    <section className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-20 lg:py-28">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(0,0,0,0.30)" }}
          >
            As Seen In
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="font-black"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 0.9, letterSpacing: "-0.042em", color: "#0d0d0d" }}
          >
            In the press.
          </motion.h2>
        </div>

        {/* ── Blog-style card grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pressItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: EASE }}
              className="group rounded-2xl overflow-hidden flex flex-col"
              style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", cursor: "default" }}
            >
              {/* Card image area */}
              <div
                className="relative flex-shrink-0"
                style={{
                  height: 160,
                  background: i === 0
                    ? "linear-gradient(135deg, rgba(99,33,238,0.45) 0%, #080808 100%)"
                    : i === 1
                    ? "linear-gradient(135deg, rgba(139,92,246,0.40) 0%, #080808 100%)"
                    : "linear-gradient(135deg, rgba(99,33,238,0.30) 0%, #080808 100%)",
                }}
              >
                {/* Tag pill */}
                <span
                  className="absolute bottom-4 left-5"
                  style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: item.color, background: `${item.color}18`, border: `1px solid ${item.color}30`, padding: "4px 10px", borderRadius: 999 }}
                >
                  {item.tag}
                </span>

                {/* Number */}
                <span
                  className="absolute top-5 right-5 font-black select-none"
                  style={{ fontSize: 40, lineHeight: 1, letterSpacing: "-0.04em", color: "rgba(255,255,255,0.06)" }}
                >
                  {item.num}
                </span>
              </div>

              {/* Card body */}
              <div className="flex-1 flex flex-col p-6">
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: item.color, marginBottom: 12 }}>
                  {item.outlet}
                </p>
                <h3
                  className="font-semibold text-white group-hover:text-white/90 transition-colors duration-300 flex-1"
                  style={{ fontSize: 14, lineHeight: 1.5, letterSpacing: "-0.01em" }}
                >
                  {item.headline}
                </h3>
                <div className="flex items-center justify-between mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>Georgia Tech Program</span>
                  <span style={{ fontSize: 16, color: "rgba(255,255,255,0.20)" }}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
