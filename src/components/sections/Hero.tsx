"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const Starfield = dynamic(() => import("@/components/ui/Starfield"), { ssr: false });

const INDUSTRIES = ["Healthcare", "Recruiting"];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % INDUSTRIES.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: 68 }}
    >
      {/* Three.js starfield */}
      <Starfield />

      {/* Atmospheric layers */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 120% 80% at 50% -10%, rgba(99,33,238,0.52) 0%, rgba(99,33,238,0.10) 45%, transparent 72%)",
      }} />
      <div aria-hidden style={{
        position: "absolute", top: "30%", left: "-20%", pointerEvents: "none",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(127,255,212,0.07) 0%, transparent 70%)",
        filter: "blur(80px)",
      }} />
      <div aria-hidden style={{
        position: "absolute", top: "20%", right: "-15%", pointerEvents: "none",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,33,238,0.12) 0%, transparent 70%)",
        filter: "blur(80px)",
      }} />

      {/* Dot grid */}
      <div aria-hidden className="hero-dot-grid absolute inset-0 pointer-events-none" />

      {/* Bottom fade */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 300,
        background: "linear-gradient(to bottom, transparent, #050210)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-6 text-center flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full" style={{
            border: "1px solid rgba(99,33,238,0.38)",
            background: "rgba(5,2,16,0.60)",
            backdropFilter: "blur(16px)",
            fontSize: 11, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(244,246,255,0.50)",
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
          initial={{ opacity: 0, y: 72 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-white select-none"
          style={{
            fontSize: "clamp(56px, 10.5vw, 148px)",
            lineHeight: 0.88,
            letterSpacing: "-0.048em",
            marginBottom: 36,
          }}
        >
          Your
          <br />
          <span style={{ display: "inline-block", position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={INDUSTRIES[idx]}
                className="gradient-text inline-block"
                initial={{ y: 36, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0,  opacity: 1, filter: "blur(0px)"  }}
                exit={{   y: -36, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
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
          transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
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
          transition={{ duration: 0.56, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 flex-wrap mb-12"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-2xl font-bold text-white transition-all duration-250 hover:-translate-y-[3px] hover:brightness-110 active:translate-y-0"
            style={{
              padding: "17px 40px", fontSize: 15,
              background: "linear-gradient(135deg, #6321EE 0%, #8040FF 100%)",
              boxShadow: "0 0 60px rgba(99,33,238,0.75), 0 0 120px rgba(99,33,238,0.22), inset 0 1px 0 rgba(255,255,255,0.20)",
            }}
          >
            Book a Free Call
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl font-semibold transition-all duration-250 hover:-translate-y-[3px]"
            style={{
              padding: "17px 32px", fontSize: 15,
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.74, duration: 0.6 }}
          className="flex items-center justify-center gap-10 flex-wrap"
        >
          {[
            { num: "6+", label: "months of ramp time saved" },
            { num: "$150K", label: "per head saved vs in-house" },
            { num: "2 weeks", label: "to first call" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 text-center">
              {i > 0 && <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.08)" }} className="hidden sm:block" />}
              <div>
                <div className="font-black text-white" style={{ fontSize: 18, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "rgba(244,246,255,0.24)", marginTop: 3, fontWeight: 500 }}>{s.label}</div>
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
        transition={{ delay: 2.5 }}
      >
        <motion.div
          style={{
            width: 1, height: 44,
            background: "linear-gradient(to bottom, transparent, rgba(99,33,238,0.9), transparent)",
          }}
          animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.8, 1, 0.8] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
