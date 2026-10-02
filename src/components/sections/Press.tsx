"use client";
import React from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const pressItems = [
  {
    outlet: "Tech Square Atlanta",
    headline: "How Joseph Lee turned campus observation into a sales platform",
    tag: "Founder Story", color: "#6321EE", num: "01",
    // enters from below-left
    initial: { opacity: 0, x: -40, y: 60 },
    transition: { duration: 0.88, delay: 0, ease: EASE },
  },
  {
    outlet: "Georgia Tech CREATE-X",
    headline: "AGORA AI selected for Georgia Tech's flagship startup accelerator",
    tag: "Accelerator", color: "#8B5CF6", num: "02",
    // enters from below with scale
    initial: { opacity: 0, y: 80, scale: 0.91 },
    transition: { duration: 0.80, delay: 0.10, ease: EASE },
  },
  {
    outlet: "11 Alive · NBC Atlanta",
    headline: "Georgia Tech launches program to aid students with startups",
    tag: "News", color: "#7FFFD4", num: "03",
    // enters from below-right with rotation
    initial: { opacity: 0, x: 40, y: 60, rotateZ: 1.6 },
    transition: { duration: 0.88, delay: 0.06, ease: EASE },
  },
];

function tiltMove(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
  const y = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
  el.style.transform = `perspective(800px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) scale3d(1.03,1.03,1.03)`;
  el.style.transition = "transform 0.06s linear";
  el.style.zIndex = "10";
}
function tiltLeave(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  e.currentTarget.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)";
  e.currentTarget.style.zIndex = "";
}

export default function Press() {
  return (
    <section className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-20 lg:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}
          >
            As Seen In
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="font-black"
            style={{ fontSize: "clamp(40px,6vw,72px)", lineHeight: 0.9, letterSpacing: "-0.042em", color: "#ffffff" }}
          >
            In the press.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pressItems.map((item, i) => (
            /* Entrance wrapper */
            <motion.div
              key={i}
              initial={item.initial}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotateZ: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={item.transition}
            >
              {/* Tilt wrapper */}
              <div
                onMouseMove={tiltMove}
                onMouseLeave={tiltLeave}
                className="group rounded-2xl overflow-hidden flex flex-col h-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  cursor: "default",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                {/* Card image area */}
                <div
                  className="relative flex-shrink-0"
                  style={{
                    height: 160,
                    background: i === 0
                      ? "linear-gradient(135deg, rgba(99,33,238,0.45) 0%, rgba(5,2,16,0.9) 100%)"
                      : i === 1
                      ? "linear-gradient(135deg, rgba(139,92,246,0.40) 0%, rgba(5,2,16,0.9) 100%)"
                      : "linear-gradient(135deg, rgba(127,255,212,0.20) 0%, rgba(5,2,16,0.9) 100%)",
                  }}
                >
                  <span
                    className="absolute bottom-4 left-5"
                    style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: item.color, background: `${item.color}18`, border: `1px solid ${item.color}30`, padding: "4px 10px", borderRadius: 999 }}
                  >
                    {item.tag}
                  </span>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
