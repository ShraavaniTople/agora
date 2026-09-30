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

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: "#050210" }}>

      {/* ── Three.js globe canvas, full viewport ── */}
      {mounted && <HeroScene />}

      {/* ── Film grain ── */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.06'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── Left atmospheric glow ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        background: "radial-gradient(ellipse 50% 65% at 0% 50%, rgba(99,33,238,0.16) 0%, transparent 70%)",
      }} />

      {/* ── Bottom fade ── */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 260,
        background: "linear-gradient(to bottom, transparent, #050210)",
        pointerEvents: "none", zIndex: 4,
      }} />

      {/* ── Main content ── */}
      <div
        className="relative flex flex-col justify-between min-h-screen"
        style={{ paddingTop: 100, paddingBottom: 52, zIndex: 5 }}
      >
        {/* ─── Top section: label + massive headline ─── */}
        <div className="px-8 sm:px-14 lg:px-20 xl:px-28">

          {/* Label row */}
          <motion.div {...enter(0.15)} className="flex items-center gap-5 mb-10">
            <motion.span
              style={{
                width: 5, height: 5, borderRadius: "50%",
                background: "#7FFFD4", boxShadow: "0 0 8px #7FFFD4",
                display: "inline-block", flexShrink: 0,
              }}
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(244,246,255,0.38)",
            }}>
              Georgia Tech Backed · Sales Network
            </span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
          </motion.div>

          {/* Headline — cinematic, full-width */}
          <motion.h1
            {...enter(0.30)}
            style={{
              fontSize: "clamp(62px, 10.5vw, 148px)",
              fontWeight: 900,
              lineHeight: 0.875,
              letterSpacing: "-0.052em",
              color: "#fff",
              marginBottom: 0,
              maxWidth: "56ch",
            }}
          >
            <span style={{ color: "rgba(244,246,255,0.55)", fontWeight: 300 }}>Your</span>
            <br />
            <span style={{ display: "inline-block", position: "relative", minWidth: "5ch" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={INDUSTRIES[idx]}
                  className="gradient-text"
                  style={{ display: "inline-block" }}
                  initial={{ y: 48, opacity: 0, filter: "blur(14px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -48, opacity: 0, filter: "blur(14px)" }}
                  transition={{ duration: 0.48, ease: EASE }}
                >
                  {INDUSTRIES[idx]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            <span>team,</span>
            <br />
            <span style={{ color: "rgba(244,246,255,0.72)", fontWeight: 800 }}>on demand.</span>
          </motion.h1>
        </div>

        {/* ─── Bottom section: rule + subtext + stats ─── */}
        <div className="px-8 sm:px-14 lg:px-20 xl:px-28">

          {/* Horizontal rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
            style={{
              height: 1,
              background: "linear-gradient(90deg, rgba(99,33,238,0.7), rgba(127,255,212,0.25), transparent 65%)",
              transformOrigin: "left",
              marginBottom: 32,
            }}
          />

          {/* Bottom row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">

            {/* Left — subtext + CTAs */}
            <motion.div {...enter(0.55)} style={{ maxWidth: 380 }}>
              <p style={{
                fontSize: "clamp(14px, 1.1vw, 16px)",
                color: "rgba(244,246,255,0.42)",
                lineHeight: 1.78,
                letterSpacing: "-0.01em",
                marginBottom: 28,
              }}>
                We recruit, train, and deploy sales reps for your campaigns.
                No hiring. No managing. Live in two weeks.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://calendly.com"
                  target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-xl font-bold text-white hover:-translate-y-px hover:brightness-110 transition-all duration-200 active:translate-y-0"
                  style={{
                    padding: "13px 28px", fontSize: 13,
                    background: "linear-gradient(135deg, #6321EE, #8040FF)",
                    boxShadow: "0 0 44px rgba(99,33,238,0.60), 0 0 90px rgba(99,33,238,0.18), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  Book a Free Call
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl font-semibold hover:-translate-y-px transition-all duration-200"
                  style={{
                    padding: "13px 22px", fontSize: 13,
                    color: "rgba(244,246,255,0.50)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    background: "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,246,255,0.50)")}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Right — stats */}
            <motion.div
              {...enter(0.68)}
              className="flex items-center gap-8 sm:gap-12 flex-wrap lg:pb-0.5"
            >
              {[
                { num: "6+",      label: "months ramp saved" },
                { num: "$150K",   label: "saved vs in-house" },
                { num: "2 weeks", label: "to first call" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-8 sm:gap-12">
                  {i > 0 && (
                    <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.07)" }} />
                  )}
                  <div>
                    <div style={{
                      fontSize: "clamp(20px, 2vw, 26px)",
                      fontWeight: 900,
                      color: "#fff",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}>{s.num}</div>
                    <div style={{
                      fontSize: 9.5,
                      color: "rgba(244,246,255,0.22)",
                      marginTop: 5,
                      fontWeight: 600,
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                    }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Scroll pulse ── */}
      <motion.div
        className="absolute bottom-10 right-10 sm:right-14 lg:right-20"
        style={{ zIndex: 5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          style={{
            width: 1, height: 48,
            background: "linear-gradient(to bottom, transparent, rgba(99,33,238,0.75), transparent)",
          }}
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
