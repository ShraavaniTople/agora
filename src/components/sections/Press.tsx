"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const pressItems = [
  { outlet: "Tech Square Atlanta",  headline: "How Joseph Lee turned campus observation into a sales platform", tag: "Founder Story" },
  { outlet: "Georgia Tech CREATE-X", headline: "AGORA AI selected for Georgia Tech's flagship startup accelerator", tag: "Accelerator" },
  { outlet: "11 Alive · NBC Atlanta", headline: "Georgia Tech launches program to aid students with startups", tag: "News" },
];

export default function Press() {
  return (
    <section className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-20 lg:py-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(244,246,255,0.28)", marginBottom: 40 }}
        >
          As Seen In
        </motion.p>

        <div>
          {pressItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: EASE }}
              className="group flex items-center gap-6 py-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(244,246,255,0.18)", letterSpacing: "0.06em", minWidth: 26 }}>
                0{i + 1}
              </span>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6321EE", minWidth: 160 }}>
                  {item.outlet}
                </span>
                <p className="flex-1 font-medium text-white/70 group-hover:text-white transition-colors duration-300"
                  style={{ fontSize: 14, letterSpacing: "-0.01em" }}>
                  {item.headline}
                </p>
              </div>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.15)" }} className="hidden sm:block">→</span>
            </motion.div>
          ))}
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
        </div>
      </div>
    </section>
  );
}
