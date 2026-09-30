"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const Starfield     = dynamic(() => import("@/components/ui/Starfield"),     { ssr: false });
const OrbitalSphere = dynamic(() => import("@/components/ui/OrbitalSphere"), { ssr: false });

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
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#050210" }}
    >
      {/* ── Stars ── */}
      {mounted && <Starfield />}

      {/* ── 3D Sphere — large, right side ── */}
      {mounted && <OrbitalSphere />}

      {/* ── Right-side atmospheric bloom behind sphere ── */}
      <div aria-hidden style={{
        position: "absolute", pointerEvents: "none",
        top: "50%", right: "-5%",
        transform: "translateY(-50%)",
        width: "60vw", height: "80vh",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(99,33,238,0.22) 0%, rgba(99,33,238,0.06) 45%, transparent 70%)",
        filter: "blur(80px)",
      }} />

      {/* ── Subtle top vignette ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,33,238,0.14) 0%, transparent 70%)",
      }} />

      {/* ── Bottom fade ── */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 260,
        background: "linear-gradient(to bottom, transparent, #050210)",
        pointerEvents: "none",
      }} />

      {/* ── Split layout: text left / sphere right ── */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16
                   flex flex-col lg:flex-row items-center min-h-screen"
        style={{ paddingTop: 68 }}
      >
        {/* LEFT — text stack */}
        <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start text-center lg:text-left py-20 lg:py-0">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full" style={{
              border: "1px solid rgba(99,33,238,0.40)",
              background: "rgba(5,2,16,0.80)",
              backdropFilter: "blur(20px)",
              fontSize: 11, fontWeight: 700,
              letterSpacing: "0.20em", textTransform: "uppercase",
              color: "rgba(244,246,255,0.50)",
            }}>
              <motion.span
                style={{ width: 5, height: 5, borderRadius: "50%", background: "#7FFFD4", boxShadow: "0 0 8px #7FFFD4", flexShrink: 0, display: "block" }}
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Georgia Tech Backed · Sales Network
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-white select-none"
            style={{
              fontSize: "clamp(52px, 7.5vw, 120px)",
              lineHeight: 0.90,
              letterSpacing: "-0.048em",
              marginBottom: 32,
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(15px, 1.4vw, 18px)",
              maxWidth: 440,
              color: "rgba(244,246,255,0.44)",
              lineHeight: 1.75,
              marginBottom: 40,
            }}
          >
            We recruit, train, and deploy sales reps for your campaigns.
            No hiring. No managing. Live in two weeks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 flex-wrap mb-12 justify-center lg:justify-start"
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl font-bold text-white transition-all duration-250 hover:-translate-y-[2px] hover:brightness-110"
              style={{
                padding: "15px 36px", fontSize: 14,
                background: "linear-gradient(135deg, #6321EE 0%, #8040FF 100%)",
                boxShadow: "0 0 50px rgba(99,33,238,0.65), 0 0 100px rgba(99,33,238,0.18), inset 0 1px 0 rgba(255,255,255,0.20)",
              }}
            >
              Book a Free Call
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-250 hover:-translate-y-[2px]"
              style={{
                padding: "15px 28px", fontSize: 14,
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
            transition={{ delay: 0.72, duration: 0.6 }}
            className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center lg:justify-start"
          >
            {[
              { num: "6+",    label: "months ramp time saved" },
              { num: "$150K", label: "saved vs in-house" },
              { num: "2 wks", label: "to first call" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-6 sm:gap-8">
                {i > 0 && <div style={{ width: 1, height: 26, background: "rgba(255,255,255,0.07)" }} className="hidden sm:block" />}
                <div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 10, color: "rgba(244,246,255,0.22)", marginTop: 3, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — visual space (sphere renders here via canvas) */}
        <div className="hidden lg:block lg:w-[52%]" />
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          style={{ width: 1, height: 44, background: "linear-gradient(to bottom, transparent, rgba(99,33,238,0.9), transparent)" }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
