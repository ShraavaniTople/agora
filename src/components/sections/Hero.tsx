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

  const stagger = (i: number) => ({ duration: 0.85, delay: 0.3 + i * 0.12, ease: EASE });

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#050210" }}
    >
      {/* ── Three.js globe — full-viewport canvas, globe on the right ── */}
      {mounted && <HeroScene />}

      {/* ── Bottom fade ── */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 220,
        background: "linear-gradient(to bottom, transparent, #050210)",
        pointerEvents: "none", zIndex: 3,
      }} />

      {/* ── Left-side text ── */}
      <div
        className="relative flex items-center min-h-screen"
        style={{ paddingTop: 68, zIndex: 5 }}
      >
        <div className="px-8 sm:px-12 lg:px-20 w-full max-w-[560px]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(0)}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full" style={{
              border: "1px solid rgba(99,33,238,0.40)",
              background: "rgba(5,2,16,0.75)",
              backdropFilter: "blur(16px)",
              fontSize: 11, fontWeight: 700,
              letterSpacing: "0.20em", textTransform: "uppercase",
              color: "rgba(244,246,255,0.48)",
            }}>
              <motion.span
                style={{ width: 5, height: 5, borderRadius: "50%", background: "#7FFFD4", boxShadow: "0 0 8px #7FFFD4", display: "block", flexShrink: 0 }}
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Georgia Tech Backed · Sales Network
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(1)}
            className="font-black text-white select-none"
            style={{
              fontSize: "clamp(44px, 6vw, 88px)",
              lineHeight: 0.90,
              letterSpacing: "-0.044em",
              marginBottom: 28,
            }}
          >
            Your
            <br />
            <span style={{ display: "inline-block", position: "relative" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={INDUSTRIES[idx]}
                  className="gradient-text inline-block"
                  initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.44, ease: EASE }}
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
            transition={stagger(2)}
            style={{
              fontSize: "clamp(15px, 1.2vw, 17px)",
              maxWidth: 400,
              color: "rgba(244,246,255,0.44)",
              lineHeight: 1.75,
              letterSpacing: "-0.01em",
              marginBottom: 36,
            }}
          >
            We recruit, train, and deploy sales reps for your campaigns.
            No hiring. No managing. Live in two weeks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(3)}
            className="flex items-center gap-3 flex-wrap mb-12"
          >
            <a
              href="https://calendly.com"
              target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl font-bold text-white hover:-translate-y-[2px] hover:brightness-110 transition-all duration-200 active:translate-y-0"
              style={{
                padding: "14px 32px", fontSize: 14,
                background: "linear-gradient(135deg, #6321EE, #8040FF)",
                boxShadow: "0 0 50px rgba(99,33,238,0.65), 0 0 100px rgba(99,33,238,0.18), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              Book a Free Call
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl font-semibold hover:-translate-y-[2px] transition-all duration-200"
              style={{
                padding: "14px 26px", fontSize: 14,
                color: "rgba(244,246,255,0.52)",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,246,255,0.52)")}
            >
              Get Started
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={stagger(4)}
            className="flex items-center gap-7 flex-wrap"
          >
            {[
              { num: "6+",      label: "months ramp saved" },
              { num: "$150K",   label: "saved vs in-house" },
              { num: "2 weeks", label: "to first call" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-7">
                {i > 0 && <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.08)" }} className="hidden sm:block" />}
                <div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 10, color: "rgba(244,246,255,0.24)", marginTop: 3, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-10 sm:left-14 lg:left-20"
        style={{ zIndex: 5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          style={{ width: 1, height: 44, background: "linear-gradient(to bottom, transparent, rgba(99,33,238,0.8), transparent)" }}
          animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
