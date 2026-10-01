"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden" style={{ background: "#0d0d0d" }}>
      {/* Ambient purple glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%", left: "50%", transform: "translateX(-50%)",
          width: "60vw", height: "60vh",
          background: "radial-gradient(ellipse, rgba(99,33,238,0.22) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 px-8 sm:px-14 lg:px-20 xl:px-28 py-28 lg:py-44">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16 lg:gap-28">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {/* Status pill */}
            <div className="flex items-center gap-2.5 mb-10">
              <motion.span
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#6321EE", boxShadow: "0 0 10px rgba(99,33,238,0.8)", display: "inline-block" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)" }}>
                Network live · Accepting new programs
              </span>
            </div>

            <h2
              className="font-black text-white"
              style={{ fontSize: "clamp(52px, 8vw, 108px)", lineHeight: 0.88, letterSpacing: "-0.048em" }}
            >
              Add a sales<br />team. Skip<br />
              <span className="gradient-text">the hiring.</span>
            </h2>
          </motion.div>

          {/* ── Right ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.14, ease: EASE }}
            style={{ maxWidth: 380, flexShrink: 0 }}
          >
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", lineHeight: 1.8, marginBottom: 36 }}>
              Book a call and we&apos;ll show you exactly how AGORA works — what the team looks like, how fast we can start, and what it costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-bold text-white hover:brightness-110 transition-all duration-200"
                style={{
                  padding: "15px 32px", fontSize: 14,
                  background: "linear-gradient(135deg, #6321EE, #8040FF)",
                  boxShadow: "0 0 44px rgba(99,33,238,0.55), inset 0 1px 0 rgba(255,255,255,0.16)",
                }}
              >
                Book a Free Call ↗
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-white hover:bg-white/[0.08] transition-all duration-200"
                style={{ padding: "15px 28px", fontSize: 14, border: "1px solid rgba(255,255,255,0.16)" }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
