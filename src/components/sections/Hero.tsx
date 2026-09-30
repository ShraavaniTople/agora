"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const INDUSTRIES = ["Healthcare", "Recruiting"];

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_SOFT = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Grain texture — juncastudio uses paper.webp, we use CSS noise */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.055'/%3E%3C/svg%3E\")",
        opacity: 0.7,
      }} />

      {/* Very subtle purple tint at top — just a hint of brand color */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "110%", height: "55%", pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,33,238,0.14) 0%, transparent 70%)",
      }} />

      {/* Bottom fade */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
        background: "linear-gradient(to bottom, transparent, #080808)",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* ── Main content ── */}
      <div
        className="relative flex flex-col items-center text-center px-6"
        style={{ zIndex: 2, paddingTop: 120, paddingBottom: 80 }}
      >
        {/* Label */}
        {mounted && (
          <Reveal delay={0.05}>
            <div className="inline-flex items-center gap-2 mb-10" style={{
              fontFamily: "var(--font-geist-sans, sans-serif)",
              fontSize: 11, fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(247,247,247,0.35)",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7FFFD4", boxShadow: "0 0 6px #7FFFD4", display: "block", flexShrink: 0 }} />
              Georgia Tech Backed · Sales Network
            </div>
          </Reveal>
        )}

        {/* Headline — juncastudio style: medium weight, tight tracking, large */}
        {mounted && (
          <Reveal delay={0.12}>
            <h1
              className="select-none"
              style={{
                fontFamily: "var(--font-geist-sans, sans-serif)",
                fontSize: "clamp(52px, 9vw, 140px)",
                fontWeight: 500,
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
                color: "#f7f7f7",
                marginBottom: 40,
              }}
            >
              Your{" "}
              <span style={{ display: "inline-block", minWidth: "3ch", verticalAlign: "bottom" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={INDUSTRIES[idx]}
                    className="gradient-text"
                    style={{ display: "inline-block" }}
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                    transition={{ duration: 0.44, ease: EASE }}
                  >
                    {INDUSTRIES[idx]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              team, on demand.
            </h1>
          </Reveal>
        )}

        {/* Subtext */}
        {mounted && (
          <Reveal delay={0.24}>
            <p style={{
              fontSize: "clamp(15px, 1.3vw, 18px)",
              fontWeight: 400,
              lineHeight: 1.68,
              color: "rgba(247,247,247,0.42)",
              maxWidth: 480,
              letterSpacing: "-0.015em",
              marginBottom: 44,
            }}>
              We recruit, train, and deploy sales reps for your campaigns.
              No hiring. No managing. Live in two weeks.
            </p>
          </Reveal>
        )}

        {/* CTAs */}
        {mounted && (
          <Reveal delay={0.32}>
            <div className="flex items-center justify-center gap-3 flex-wrap mb-16">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-medium text-white"
                style={{
                  padding: "13px 28px",
                  fontSize: 14,
                  letterSpacing: "-0.01em",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 8,
                  backdropFilter: "blur(8px)",
                  transition: "background 0.2s, border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.13)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Book a Free Call
                <ArrowUpRight size={13} style={{ opacity: 0.7, transition: "transform 0.2s" }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-medium"
                style={{
                  padding: "13px 28px",
                  fontSize: 14,
                  letterSpacing: "-0.01em",
                  color: "rgba(247,247,247,0.85)",
                  background: "linear-gradient(135deg, #6321EE, #8040FF)",
                  borderRadius: 8,
                  boxShadow: "0 0 40px rgba(99,33,238,0.50), inset 0 1px 0 rgba(255,255,255,0.16)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(99,33,238,0.70), inset 0 1px 0 rgba(255,255,255,0.16)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(99,33,238,0.50), inset 0 1px 0 rgba(255,255,255,0.16)";
                }}
              >
                Get Started
              </Link>
            </div>
          </Reveal>
        )}

        {/* Divider */}
        {mounted && (
          <Reveal delay={0.40}>
            <div style={{ width: "100%", maxWidth: 560, height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 28 }} />
          </Reveal>
        )}

        {/* Stats */}
        {mounted && (
          <Reveal delay={0.46}>
            <div className="flex items-center justify-center gap-10 flex-wrap">
              {[
                { num: "6+",      label: "months ramp time saved" },
                { num: "$150K",   label: "saved vs in-house" },
                { num: "2 weeks", label: "to first call" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-10">
                  {i > 0 && <div style={{ width: 1, height: 22, background: "rgba(255,255,255,0.07)" }} className="hidden sm:block" />}
                  <div className="text-center">
                    <div style={{ fontSize: 17, fontWeight: 600, color: "#f7f7f7", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 11, color: "rgba(247,247,247,0.25)", marginTop: 4, fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase" }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      {/* Scroll cue */}
      {mounted && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ zIndex: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.div
            style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, rgba(247,247,247,0.25), transparent)" }}
            animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </section>
  );
}
