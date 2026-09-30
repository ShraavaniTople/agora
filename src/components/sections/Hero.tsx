"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/ui/HeroScene"), { ssr: false });

const INDUSTRIES = ["Healthcare", "Recruiting"];
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [idx, setIdx]         = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const id = setInterval(() => setIdx(i => (i + 1) % INDUSTRIES.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: "100vh", background: "#050210" }}>

      {/* ── Three.js globe — full-viewport, sphere centre-right ── */}
      {mounted && <HeroScene />}

      {/* ── Film grain ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.06'/%3E%3C/svg%3E")`,
        mixBlendMode: "overlay",
      }} />

      {/* ── Bottom vignette so text is always readable ── */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "62vh",
        background: "linear-gradient(to top, rgba(5,2,16,0.96) 0%, rgba(5,2,16,0.55) 45%, transparent 100%)",
        pointerEvents: "none", zIndex: 3,
      }} />

      {/* ── Left-side vignette so text block doesn't fight the sphere ── */}
      <div aria-hidden style={{
        position: "absolute", top: 0, bottom: 0, left: 0,
        width: "52%",
        background: "linear-gradient(to right, rgba(5,2,16,0.55) 0%, transparent 100%)",
        pointerEvents: "none", zIndex: 3,
      }} />

      {/* ── Headline block — bottom-left, juncastudio-style ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
        style={{
          position: "absolute",
          bottom: "13%",
          left: "clamp(28px, 8%, 140px)",
          zIndex: 6,
          maxWidth: "clamp(320px, 48%, 640px)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(46px, 6.5vw, 88px)",
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: "-0.038em",
            color: "#fff",
            marginBottom: "clamp(18px, 2.4vw, 32px)",
          }}
        >
          <span style={{ color: "rgba(244,246,255,0.50)", fontWeight: 300 }}>Your</span>
          {" "}
          <span style={{ display: "inline-block", position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={INDUSTRIES[idx]}
                className="gradient-text"
                style={{ display: "inline-block" }}
                initial={{ y: 32, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0,  opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -32, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.44, ease: EASE }}
              >
                {INDUSTRIES[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          team,
          <br />
          <span style={{ color: "rgba(244,246,255,0.70)", fontWeight: 700 }}>on demand.</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: "clamp(13px, 1.1vw, 15px)",
          color: "rgba(244,246,255,0.38)",
          lineHeight: 1.8,
          letterSpacing: "-0.01em",
          marginBottom: 24,
          maxWidth: 340,
        }}>
          We recruit, train, and deploy sales reps for your campaigns.
          No hiring. No managing. Live in two weeks.
        </p>

        {/* CTAs — minimal, text-link style */}
        <div className="flex items-center gap-5">
          <a
            href="https://calendly.com"
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-bold text-white hover:opacity-80 transition-opacity"
            style={{
              fontSize: 13,
              padding: "11px 22px",
              background: "linear-gradient(135deg, #6321EE, #8040FF)",
              borderRadius: 10,
              boxShadow: "0 0 36px rgba(99,33,238,0.55), inset 0 1px 0 rgba(255,255,255,0.16)",
            }}
          >
            Book a Free Call
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/contact"
            className="font-medium hover:text-white transition-colors"
            style={{ fontSize: 13, color: "rgba(244,246,255,0.42)" }}
          >
            Get Started →
          </Link>
        </div>
      </motion.div>

      {/* ── Bottom strip — full width, juncastudio footer bar style ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: EASE }}
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          zIndex: 6,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px clamp(28px, 8%, 140px)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Left — badge */}
        <div className="flex items-center gap-2.5">
          <motion.span
            style={{
              width: 4, height: 4, borderRadius: "50%",
              background: "#7FFFD4", boxShadow: "0 0 6px #7FFFD4",
              display: "inline-block",
            }}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span style={{
            fontSize: 10, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "rgba(244,246,255,0.28)",
          }}>
            Georgia Tech Backed · Sales Network
          </span>
        </div>

        {/* Right — stats */}
        <div className="hidden sm:flex items-center gap-7">
          {[
            { num: "6+",      label: "months ramp saved" },
            { num: "$150K",   label: "saved vs in-house" },
            { num: "2 weeks", label: "to first call" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-7">
              {i > 0 && <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.07)" }} />}
              <div className="text-right">
                <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 9, color: "rgba(244,246,255,0.22)", marginTop: 2, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
