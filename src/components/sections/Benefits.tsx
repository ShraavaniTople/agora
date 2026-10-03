"use client";
import React from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  { num: "01", title: "No hiring. No ramp time.", detail: "Brief us Monday. Agents calling Tuesday." },
  { num: "02", title: "Scale up or down any time.", detail: "Add pods when pipeline grows. Cut when it doesn't." },
  { num: "03", title: "Stop losing leads to slow follow-up.", detail: "Inbound is covered around the clock." },
  { num: "04", title: "Pay for results, not seats.", detail: "Variable pricing tied to what gets delivered." },
];

const metrics = [
  { value: "$150K", label: "average annual savings vs in-house teams", accent: "#7FFFD4", float: "ben-float-a" },
  { value: "6+",    label: "months of ramp time eliminated per hire",   accent: "#6321EE", float: "ben-float-b" },
  { value: "2 wks", label: "from kickoff to a live working sales team",  accent: "#9B65FF", float: "ben-float-c" },
  { value: "0",     label: "management overhead on your end",            accent: "#7FFFD4", float: "ben-float-d" },
];

function tiltMove(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;
  const nx = (x - r.width  / 2) / (r.width  / 2);
  const ny = (y - r.height / 2) / (r.height / 2);
  el.style.transform = `perspective(700px) rotateY(${nx * 14}deg) rotateX(${-ny * 14}deg) scale3d(1.05,1.05,1.05)`;
  el.style.transition = "transform 0.06s linear";
  el.style.zIndex = "10";
  el.style.setProperty("--mouse-x", `${x}px`);
  el.style.setProperty("--mouse-y", `${y}px`);
}
function tiltLeave(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  el.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)";
  el.style.zIndex = "";
  el.style.setProperty("--mouse-x", "-999px");
  el.style.setProperty("--mouse-y", "-999px");
}

export default function Benefits() {
  return (
    <section id="benefits" className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-20 lg:py-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 48 }}
        >
          Why choose us
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">

          {/* Left: numbered list */}
          <div>
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.70, delay: i * 0.07, ease: EASE }}
                className="group flex gap-6 py-6 cursor-default"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}
              >
                {/* Purple left bar that grows on hover */}
                <div
                  className="ben-row-bar"
                  style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: 2,
                    background: "#6321EE", transform: "scaleY(0)", transformOrigin: "bottom",
                    transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
                <span
                  className="group-hover:text-[#6321EE] transition-colors duration-300"
                  style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.20)", letterSpacing: "0.06em", minWidth: 26, flexShrink: 0, paddingTop: 2 }}
                >
                  {b.num}
                </span>
                <div>
                  <h3
                    className="font-semibold group-hover:text-white transition-colors duration-300"
                    style={{ fontSize: 16, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.75)", marginBottom: 6 }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="group-hover:text-white/40 transition-colors duration-300"
                    style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", lineHeight: 1.6 }}
                  >
                    {b.detail}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
          </div>

          {/* Right: 2x2 floating metric cards */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.90, delay: 0.14, ease: EASE }}
            className="grid grid-cols-2 gap-3"
          >
            {metrics.map((m, i) => (
              <div key={i} className={`${m.float}`} style={{ height: "100%" }}>
                <div
                  onMouseMove={tiltMove}
                  onMouseLeave={tiltLeave}
                  className="spot-parent ben-metric-card"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    padding: "28px 24px",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    cursor: "default",
                    minHeight: 140,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div className="spot-overlay" />
                  <div
                    className="font-black"
                    style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1, color: m.accent }}
                  >
                    {m.value}
                  </div>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.55, marginTop: 12 }}>
                    {m.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .ben-float-a { animation: ben-fa 6.5s 0.0s ease-in-out infinite; }
        .ben-float-b { animation: ben-fb 7.2s 0.9s ease-in-out infinite; }
        .ben-float-c { animation: ben-fc 5.8s 1.5s ease-in-out infinite; }
        .ben-float-d { animation: ben-fa 6.8s 0.5s ease-in-out infinite; }

        @keyframes ben-fa { 0%,100% { transform: translateY(0px);  } 50% { transform: translateY(-9px);  } }
        @keyframes ben-fb { 0%,100% { transform: translateY(-4px); } 50% { transform: translateY(-13px); } }
        @keyframes ben-fc { 0%,100% { transform: translateY(-2px); } 50% { transform: translateY(-10px); } }

        .ben-metric-card:hover {
          border-color: rgba(99,33,238,0.30) !important;
          box-shadow: 0 20px 60px rgba(99,33,238,0.22) !important;
        }

        .group:hover .ben-row-bar {
          transform: scaleY(1);
        }
      `}</style>
    </section>
  );
}
