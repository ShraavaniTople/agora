"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = ["Healthcare", "Recruiting"];

function ExitoOrb() {
  return (
    <div style={{ position: "relative", width: "min(480px, 42vw)", height: "min(480px, 42vw)" }}>
      {/* Outer atmosphere */}
      <div style={{
        position: "absolute", inset: "-30%",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(110,80,255,0.22) 0%, rgba(99,33,238,0.06) 55%, transparent 75%)",
        filter: "blur(50px)",
        animation: "orb-float 9s ease-in-out infinite",
      }} />
      {/* Core sphere */}
      <div style={{
        position: "absolute", inset: 0,
        borderRadius: "50%",
        background: "radial-gradient(circle at 37% 30%, #B8D8FF 0%, #88AAFF 16%, #6070EE 36%, #4040C8 58%, #22158C 78%, #0E0850 92%)",
        boxShadow: "0 40px 100px rgba(70,50,200,0.40), 0 0 0 1px rgba(150,130,255,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
        animation: "orb-float 9s ease-in-out infinite",
      }} />
      {/* Primary glass highlight */}
      <div style={{
        position: "absolute", top: "9%", left: "13%",
        width: "48%", height: "38%",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,255,255,0.60) 0%, rgba(255,255,255,0.14) 55%, transparent 82%)",
        filter: "blur(5px)",
      }} />
      {/* Teal rim light */}
      <div style={{
        position: "absolute", bottom: "14%", right: "10%",
        width: "40%", height: "30%",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(127,255,212,0.55) 0%, rgba(127,255,212,0.12) 65%, transparent 90%)",
        filter: "blur(9px)",
      }} />
      {/* Depth inset shadow */}
      <div style={{
        position: "absolute", inset: 0,
        borderRadius: "50%",
        boxShadow: "inset -55px -55px 110px rgba(0,0,20,0.45)",
      }} />
    </div>
  );
}

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
      style={{ background: "linear-gradient(145deg, #EDEEFF 0%, #F3F0FF 40%, #EBF0FF 100%)" }}
    >
      {/* Subtle noise grain for texture */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      }} />

      {/* Soft purple blob top-right */}
      <div aria-hidden style={{
        position: "absolute", top: "-10%", right: "-5%", pointerEvents: "none",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(130,100,255,0.12) 0%, transparent 65%)",
        filter: "blur(60px)",
      }} />

      {/* Bottom transition to dark sections */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 180,
        background: "linear-gradient(to bottom, transparent, rgba(5,2,16,0.08))",
        pointerEvents: "none",
      }} />

      {/* ── Split Layout ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16
                   flex flex-col lg:flex-row items-center gap-8 lg:gap-0"
        style={{ minHeight: "100vh", paddingTop: 68 }}
      >
        {/* LEFT — text */}
        <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start text-center lg:text-left py-20 lg:py-0">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full" style={{
              border: "1px solid rgba(99,33,238,0.28)",
              background: "rgba(255,255,255,0.70)",
              backdropFilter: "blur(12px)",
              fontSize: 11, fontWeight: 700,
              letterSpacing: "0.20em", textTransform: "uppercase",
              color: "rgba(60,30,120,0.65)",
              boxShadow: "0 2px 12px rgba(99,33,238,0.10)",
            }}>
              <motion.span
                style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E", flexShrink: 0, display: "block" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Georgia Tech Backed · Sales Network
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 56 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-black select-none"
            style={{
              fontSize: "clamp(48px, 6.2vw, 100px)",
              lineHeight: 0.90,
              letterSpacing: "-0.046em",
              marginBottom: 28,
              color: "#0C0828",
            }}
          >
            Your
            <br />
            <span style={{ display: "inline-block", position: "relative" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={INDUSTRIES[idx]}
                  className="gradient-text inline-block"
                  initial={{ y: 32, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0,  opacity: 1, filter: "blur(0px)"  }}
                  exit={{   y: -32, opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(15px, 1.2vw, 17px)",
              maxWidth: 400,
              color: "rgba(12,8,40,0.52)",
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            We recruit, train, and deploy sales reps for your campaigns.
            No hiring. No managing. Live in two weeks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 flex-wrap justify-center lg:justify-start mb-10"
          >
            <a
              href="https://calendly.com"
              target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl font-bold text-white hover:-translate-y-[2px] hover:brightness-110 transition-all duration-200"
              style={{
                padding: "14px 34px", fontSize: 14,
                background: "linear-gradient(135deg, #6321EE, #8040FF)",
                boxShadow: "0 8px 30px rgba(99,33,238,0.40), inset 0 1px 0 rgba(255,255,255,0.18)",
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
                color: "rgba(12,8,40,0.60)",
                border: "1px solid rgba(12,8,40,0.14)",
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0C0828")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(12,8,40,0.60)")}
            >
              Get Started
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.68, duration: 0.6 }}
            className="flex items-center gap-6 flex-wrap justify-center lg:justify-start"
          >
            {[
              { num: "6+",      label: "months ramp time saved" },
              { num: "$150K",   label: "saved vs in-house" },
              { num: "2 weeks", label: "to first call" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && <div style={{ width: 1, height: 24, background: "rgba(12,8,40,0.12)" }} className="hidden sm:block" />}
                <div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: "#0C0828", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 10, color: "rgba(12,8,40,0.38)", marginTop: 3, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — orb */}
        <div className="w-full lg:w-[52%] flex items-center justify-center py-12 lg:py-0" style={{ minHeight: "clamp(320px, 50vw, 560px)" }}>
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.80, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <ExitoOrb />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
