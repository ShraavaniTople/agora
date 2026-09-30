"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const Starfield = dynamic(() => import("@/components/ui/Starfield"), { ssr: false });

const INDUSTRIES = ["Healthcare", "Recruiting"];

function GlowOrb() {
  return (
    <div style={{ position: "relative", width: 260, height: 260, margin: "0 auto" }}>
      {/* Outer glow ring */}
      <div className="hero-orb" style={{
        position: "absolute", inset: -40,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,33,238,0.18) 0%, transparent 70%)",
        filter: "blur(30px)",
      }} />

      {/* Main sphere body */}
      <div className="hero-orb" style={{
        position: "absolute", inset: 0,
        borderRadius: "50%",
        background: `
          radial-gradient(circle at 36% 32%,
            rgba(190,130,255,0.96) 0%,
            rgba(120,50,240,0.90) 22%,
            rgba(80,20,190,0.78) 46%,
            rgba(40,8,110,0.88) 68%,
            rgba(12,4,32,0.96) 85%
          )
        `,
      }} />

      {/* Primary gloss highlight */}
      <div style={{
        position: "absolute",
        top: "11%", left: "17%",
        width: "44%", height: "34%",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 50%, transparent 80%)",
        filter: "blur(5px)",
      }} />

      {/* Secondary teal rim light */}
      <div style={{
        position: "absolute",
        bottom: "18%", right: "10%",
        width: "36%", height: "28%",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(127,255,212,0.40) 0%, rgba(127,255,212,0.10) 60%, transparent 90%)",
        filter: "blur(8px)",
      }} />

      {/* Deep shadow edge */}
      <div style={{
        position: "absolute", inset: 0,
        borderRadius: "50%",
        boxShadow: "inset -30px -30px 60px rgba(0,0,0,0.55)",
      }} />
    </div>
  );
}

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const id = setInterval(() => setIdx(i => (i + 1) % INDUSTRIES.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: 68, background: "#050210" }}
    >
      {/* Starfield */}
      {mounted && <Starfield />}

      {/* Animated mesh gradient */}
      <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "-25%", left: "50%", transform: "translateX(-50%)",
          width: 900, height: 900, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,33,238,0.48) 0%, rgba(99,33,238,0.12) 44%, transparent 70%)",
          filter: "blur(100px)",
          animation: "mesh-drift-1 20s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", top: "35%", left: "-10%",
          width: 650, height: 650, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(127,255,212,0.09) 0%, transparent 70%)",
          filter: "blur(90px)",
          animation: "mesh-drift-2 26s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", top: "25%", right: "-8%",
          width: 580, height: 580, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,33,238,0.14) 0%, transparent 68%)",
          filter: "blur(80px)",
          animation: "mesh-drift-3 22s ease-in-out infinite",
        }} />
      </div>

      {/* Dot grid overlay */}
      <div aria-hidden className="hero-dot-grid absolute inset-0 pointer-events-none" />

      {/* Bottom fade */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 320,
        background: "linear-gradient(to bottom, transparent, #050210)",
        pointerEvents: "none",
      }} />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[960px] mx-auto px-6 text-center flex flex-col items-center">

        {/* Orb — the butter.video "hero object" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.72, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <GlowOrb />
        </motion.div>

        {/* Headline — editorial, dominant */}
        <div className="mb-8 select-none overflow-hidden">
          {/* "Your" */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block font-black text-white"
              style={{ fontSize: "clamp(52px, 10vw, 140px)", lineHeight: 0.88, letterSpacing: "-0.048em" }}
            >
              Your
            </span>
          </motion.div>

          {/* Cycling industry word */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "block", minHeight: "clamp(58px,10vw,140px)", lineHeight: 0.88 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={INDUSTRIES[idx]}
                className="gradient-text block font-black"
                style={{ fontSize: "clamp(52px, 10vw, 140px)", lineHeight: 0.88, letterSpacing: "-0.048em" }}
                initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -32, filter: "blur(12px)" }}
                transition={{ duration: 0.50, ease: [0.22, 1, 0.36, 1] }}
              >
                {INDUSTRIES[idx]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* "team, on demand." */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block font-black text-white"
              style={{ fontSize: "clamp(52px, 10vw, 140px)", lineHeight: 0.92, letterSpacing: "-0.048em" }}
            >
              team, on demand.
            </span>
          </motion.div>
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(16px, 1.6vw, 19px)",
            maxWidth: 500,
            color: "rgba(244,246,255,0.44)",
            lineHeight: 1.72,
            marginBottom: 44,
          }}
        >
          We recruit, train, and deploy sales reps for your campaigns.
          No hiring. No managing. Live in two weeks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 flex-wrap mb-12"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-2xl font-bold text-white transition-all duration-250 hover:-translate-y-[3px] hover:brightness-110"
            style={{
              padding: "17px 42px", fontSize: 15,
              background: "linear-gradient(135deg, #6321EE 0%, #8040FF 100%)",
              boxShadow: "0 0 60px rgba(99,33,238,0.75), 0 0 120px rgba(99,33,238,0.25), inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
          >
            Book a Free Call
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl font-semibold transition-all duration-250 hover:-translate-y-[3px]"
            style={{
              padding: "17px 34px", fontSize: 15,
              color: "rgba(244,246,255,0.52)",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,246,255,0.52)")}
          >
            Get Started
          </Link>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center justify-center gap-2.5"
        >
          <motion.span
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#7FFFD4", boxShadow: "0 0 8px #7FFFD4", flexShrink: 0, display: "block" }}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,246,255,0.30)" }}>
            Georgia Tech Backed · Sales Network
          </span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, rgba(99,33,238,0.9), transparent)" }}
          animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.8, 1, 0.8] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
