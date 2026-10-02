"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

function tiltMove(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
  const y = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
  el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale3d(1.02,1.02,1.02)`;
  el.style.transition = "transform 0.06s linear";
}
function tiltLeave(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  e.currentTarget.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)";
}

export default function AudienceSplit() {
  return (
    <section className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-20 lg:py-28">
        {/* ── Label ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 40 }}
        >
          Who uses AGORA
        </motion.p>

        {/* ── Two editorial cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5">

          {/* Left — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.90, ease: EASE }}
          >
            <div
              onMouseMove={tiltMove}
              onMouseLeave={tiltLeave}
              className="group relative rounded-2xl overflow-hidden h-full"
              style={{
                minHeight: 420,
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.06)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, rgba(99,33,238,0.25) 0%, transparent 55%)" }} />

              <div className="relative z-10 flex flex-col h-full p-10 lg:p-12">
                <div className="flex items-center justify-between mb-auto">
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                    For Companies
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6321EE" }}>
                    01
                  </span>
                </div>

                <div
                  className="font-black select-none pointer-events-none"
                  style={{ fontSize: "clamp(80px,14vw,160px)", lineHeight: 0.85, letterSpacing: "-0.06em", color: "rgba(255,255,255,0.04)", marginTop: 24, marginBottom: -16 }}
                >
                  B2B
                </div>

                <div style={{ marginTop: "auto" }}>
                  <h3
                    className="font-black text-white"
                    style={{ fontSize: "clamp(22px,3vw,32px)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}
                  >
                    Extend your sales team<br />without extending your payroll.
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.72, marginBottom: 28, maxWidth: 400 }}>
                    AGORA gives you a coached, ready-to-deploy outbound team matched to your industry, briefed on your campaigns, and accountable to your KPIs.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {["Live in 2 weeks", "No fixed overhead", "Full campaign reporting"].map(f => (
                      <span key={f} style={{ fontSize: 11, fontWeight: 600, color: "#6321EE", background: "rgba(99,33,238,0.12)", border: "1px solid rgba(99,33,238,0.25)", padding: "5px 12px", borderRadius: 999 }}>
                        {f}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-white rounded-xl group/btn transition-all"
                    style={{ fontSize: 13, padding: "12px 22px", background: "#6321EE", boxShadow: "0 0 28px rgba(99,33,238,0.4)" }}
                  >
                    Book a Free Call
                    <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.90, delay: 0.10, ease: EASE }}
          >
            <div
              onMouseMove={tiltMove}
              onMouseLeave={tiltLeave}
              className="group relative rounded-2xl overflow-hidden h-full"
              style={{
                minHeight: 420,
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.06)",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, rgba(99,33,238,0.15) 0%, transparent 55%)" }} />

              <div className="relative z-10 flex flex-col h-full p-10">
                <div className="flex items-center justify-between mb-auto">
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                    For SDRs
                  </span>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B5CF6" }}>
                    02
                  </span>
                </div>

                <div
                  className="font-black select-none pointer-events-none"
                  style={{ fontSize: "clamp(80px,14vw,160px)", lineHeight: 0.85, letterSpacing: "-0.06em", color: "rgba(255,255,255,0.04)", marginTop: 24, marginBottom: -16 }}
                >
                  SDR
                </div>

                <div style={{ marginTop: "auto" }}>
                  <h3
                    className="font-black text-white"
                    style={{ fontSize: "clamp(20px,2.5vw,28px)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}
                  >
                    Build real sales<br />skills. Get paid<br />while you do it.
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.72, marginBottom: 28 }}>
                    No experience required. AGORA places you in structured campaigns with live coaching, a clear growth path, and performance-based pay.
                  </p>

                  <Link
                    href="/for-agents"
                    className="inline-flex items-center gap-2 font-semibold rounded-xl transition-all"
                    style={{ fontSize: 13, padding: "12px 22px", border: "1px solid rgba(255,255,255,0.16)", color: "#fff" }}
                  >
                    Apply to the Network
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
