"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const HeroArtwork = dynamic(() => import("@/components/ui/HeroArtwork"), { ssr: false });

const INDUSTRIES = ["Healthcare", "Recruiting"];
const EASE = [0.22, 1, 0.36, 1] as const;

const lineVariant = {
  hidden: { opacity: 0, y: 48, skewY: 1.5 },
  visible: (i: number) => ({
    opacity: 1, y: 0, skewY: 0,
    transition: { duration: 1.0, delay: 0.25 + i * 0.13, ease: EASE },
  }),
};

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

      {mounted && <HeroArtwork />}

      {/* Film grain */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.055'/%3E%3C/svg%3E")`,
        mixBlendMode: "overlay",
      }} />

      {/* Bottom gradient — fades scene to #050210 at the bottom edge */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "68vh",
        background: "linear-gradient(to top, #050210 0%, rgba(5,2,16,0.75) 36%, transparent 100%)",
        pointerEvents: "none", zIndex: 3,
      }} />

      {/* Left gradient so text always readable */}
      <div aria-hidden style={{
        position: "absolute", top: 0, bottom: 0, left: 0, width: "58%",
        background: "linear-gradient(to right, rgba(5,2,16,0.80) 0%, rgba(5,2,16,0.30) 65%, transparent 100%)",
        pointerEvents: "none", zIndex: 3,
      }} />

      {/* ── Headline — bottom-left, staggered per line ── */}
      <motion.div
        initial="hidden"
        animate="visible"
        style={{
          position: "absolute",
          bottom: "11%",
          left: "clamp(28px, 8%, 140px)",
          zIndex: 6,
          maxWidth: "clamp(340px, 54%, 720px)",
        }}
      >
        {/* Georgia Tech badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 100,
            padding: "5px 14px 5px 8px",
            marginBottom: 28,
          }}
        >
          <div style={{
            width: 18, height: 18, borderRadius: 4,
            background: "#EEB400",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{ fontSize: 8, fontWeight: 900, color: "#003057", letterSpacing: "-0.02em" }}>GT</span>
          </div>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(244,246,255,0.55)" }}>
            Backed by Georgia Tech CREATE-X
          </span>
        </motion.div>

        {/* Line 1 — "Your" italic */}
        <div style={{ overflow: "hidden", marginBottom: 0 }}>
          <motion.div custom={0} variants={lineVariant}>
            <span style={{
              display: "block",
              fontSize: "clamp(50px, 7vw, 96px)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.045em",
              color: "rgba(244,246,255,0.45)",
              fontStyle: "italic",
            }}>
              Your
            </span>
          </motion.div>
        </div>

        {/* Line 2 — cycling industry word */}
        <div style={{ overflow: "hidden", height: "clamp(44px, 6.4vw, 88px)", marginBottom: 2 }}>
          <motion.div custom={1} variants={lineVariant}>
            <AnimatePresence mode="wait">
              <motion.span
                key={INDUSTRIES[idx]}
                className="gradient-text"
                style={{
                  display: "block",
                  fontSize: "clamp(50px, 7vw, 96px)",
                  fontWeight: 900,
                  lineHeight: 0.88,
                  letterSpacing: "-0.045em",
                }}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ duration: 0.48, ease: EASE }}
              >
                {INDUSTRIES[idx]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Line 3 — "team," */}
        <div style={{ overflow: "hidden" }}>
          <motion.div custom={2} variants={lineVariant}>
            <span style={{
              display: "block",
              fontSize: "clamp(50px, 7vw, 96px)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.045em",
              color: "#ffffff",
            }}>
              team,
            </span>
          </motion.div>
        </div>

        {/* Line 4 — "on demand." */}
        <div style={{ overflow: "hidden", marginBottom: "clamp(20px, 2.4vw, 36px)" }}>
          <motion.div custom={3} variants={lineVariant}>
            <span style={{
              display: "block",
              fontSize: "clamp(50px, 7vw, 96px)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              color: "rgba(244,246,255,0.60)",
              fontStyle: "italic",
            }}>
              on demand.
            </span>
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
          style={{
            fontSize: "clamp(13px, 1.05vw, 15px)",
            color: "rgba(244,246,255,0.36)",
            lineHeight: 1.85,
            letterSpacing: "-0.01em",
            marginBottom: 28,
            maxWidth: 340,
          }}
        >
          We recruit, train, and deploy sales reps for your campaigns.
          No hiring. No managing. Live in two weeks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
          className="flex items-center gap-5"
        >
          <a
            href="https://calendly.com"
            target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-bold text-white hover:brightness-110 transition-all duration-200"
            style={{
              fontSize: 13,
              padding: "12px 24px",
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
            className="font-medium hover:text-white transition-colors duration-200"
            style={{ fontSize: 13, color: "rgba(244,246,255,0.42)" }}
          >
            Get Started →
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Bottom-left status pill ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4, ease: EASE }}
        style={{
          position: "absolute", bottom: 46, left: "clamp(28px, 8%, 140px)",
          zIndex: 6, display: "flex", alignItems: "center", gap: 8,
        }}
      >
        <motion.span
          style={{ width: 5, height: 5, borderRadius: "50%", background: "#6321EE", boxShadow: "0 0 8px rgba(99,33,238,0.8)", display: "inline-block" }}
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,246,255,0.26)" }}>
          Georgia Tech Backed · Sales Network
        </span>
      </motion.div>

      {/* ── Scroll indicator — thin line bouncing ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{ position: "absolute", bottom: 42, right: "clamp(28px, 8%, 140px)", zIndex: 6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 44, background: "linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0))" }}
        />
      </motion.div>

    </section>
  );
}
