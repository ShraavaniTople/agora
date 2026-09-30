"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const Starfield       = dynamic(() => import("@/components/ui/Starfield"),       { ssr: false });
const OrbitalSphere   = dynamic(() => import("@/components/ui/OrbitalSphere"),   { ssr: false });

const INDUSTRIES = ["Healthcare", "Recruiting"];

export default function Hero() {
  const [idx, setIdx]         = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setIdx(i => (i + 1) % INDUSTRIES.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: 68, background: "#050210" }}
    >
      {/* ── Layer 0: Stars ── */}
      {mounted && <Starfield />}

      {/* ── Layer 1: 3D Orbital Sphere ── */}
      {mounted && <OrbitalSphere />}

      {/* ── Layer 2: Atmosphere — top aurora, side accents ── */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Top aurora */}
        <div style={{
          position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
          width: 900, height: 900, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,33,238,0.32) 0%, rgba(99,33,238,0.08) 45%, transparent 70%)",
          filter: "blur(100px)",
          animation: "mesh-drift-1 22s ease-in-out infinite",
        }} />
        {/* Teal depth left */}
        <div style={{
          position: "absolute", top: "30%", left: "-15%",
          width: 640, height: 640, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(127,255,212,0.06) 0%, transparent 70%)",
          filter: "blur(90px)",
          animation: "mesh-drift-2 30s ease-in-out infinite",
        }} />
        {/* Purple rim right */}
        <div style={{
          position: "absolute", top: "15%", right: "-12%",
          width: 580, height: 580, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,33,238,0.12) 0%, transparent 68%)",
          filter: "blur(80px)",
          animation: "mesh-drift-3 26s ease-in-out infinite",
        }} />
      </div>

      {/* ── Layer 3: Text readability vignette — dark center so text is crisp over sphere ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 55% 65% at 50% 52%, rgba(5,2,16,0.72) 0%, rgba(5,2,16,0.30) 50%, transparent 100%)",
      }} />

      {/* ── Layer 4: Dot grid ── */}
      <div aria-hidden className="hero-dot-grid absolute inset-0 pointer-events-none" />

      {/* ── Layer 5: Bottom fade ── */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 320,
        background: "linear-gradient(to bottom, transparent, #050210)",
        pointerEvents: "none",
      }} />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-6 text-center flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full" style={{
            border: "1px solid rgba(99,33,238,0.42)",
            background: "rgba(5,2,16,0.78)",
            backdropFilter: "blur(20px)",
            fontSize: 11, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(244,246,255,0.52)",
            boxShadow: "0 0 28px rgba(99,33,238,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}>
            <motion.span
              style={{ width: 6, height: 6, borderRadius: "50%", background: "#7FFFD4", boxShadow: "0 0 10px #7FFFD4", flexShrink: 0, display: "block" }}
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Georgia Tech Backed · Sales Network
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-white select-none"
          style={{
            fontSize: "clamp(58px, 10.5vw, 152px)",
            lineHeight: 0.88,
            letterSpacing: "-0.048em",
            marginBottom: 36,
            textShadow: "0 0 120px rgba(99,33,238,0.4), 0 2px 0 rgba(0,0,0,0.4)",
          }}
        >
          Your
          <br />
          <span style={{ display: "inline-block", position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={INDUSTRIES[idx]}
                className="gradient-text inline-block"
                initial={{ y: 40, opacity: 0, filter: "blur(12px)" }}
                animate={{ y: 0,  opacity: 1, filter: "blur(0px)"  }}
                exit={{   y: -40, opacity: 0, filter: "blur(12px)" }}
                transition={{ duration: 0.50, ease: [0.22, 1, 0.36, 1] }}
              >
                {INDUSTRIES[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          team,
          <br />
          on demand.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(16px, 1.65vw, 20px)",
            maxWidth: 520,
            color: "rgba(244,246,255,0.46)",
            lineHeight: 1.72,
            marginBottom: 48,
          }}
        >
          We recruit, train, and deploy sales reps for your campaigns.
          No hiring. No managing. Live in two weeks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 flex-wrap mb-14"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-2xl font-bold text-white transition-all duration-250 hover:-translate-y-[3px] hover:brightness-110 active:translate-y-0"
            style={{
              padding: "17px 42px", fontSize: 15,
              background: "linear-gradient(135deg, #6321EE 0%, #8040FF 100%)",
              boxShadow: "0 0 60px rgba(99,33,238,0.75), 0 0 120px rgba(99,33,238,0.22), inset 0 1px 0 rgba(255,255,255,0.22)",
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
              color: "rgba(244,246,255,0.55)",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(12px)",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,246,255,0.55)")}
          >
            Get Started
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.74, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center flex-wrap"
          style={{ gap: "0 40px" }}
        >
          {[
            { num: "6+",    label: "months of ramp time saved" },
            { num: "$150K", label: "per head saved vs in-house" },
            { num: "2 weeks", label: "to first call" },
          ].map((s, i) => (
            <div key={i} className="flex items-center" style={{ gap: "0 40px" }}>
              {i > 0 && (
                <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.08)" }} className="hidden sm:block" />
              )}
              <div className="text-center">
                <div className="font-black text-white" style={{ fontSize: 20, letterSpacing: "-0.04em", lineHeight: 1, textShadow: "0 0 40px rgba(99,33,238,0.6)" }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "rgba(244,246,255,0.24)", marginTop: 4, fontWeight: 500, letterSpacing: "0.02em" }}>{s.label}</div>
              </div>
            </div>
          ))}
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
