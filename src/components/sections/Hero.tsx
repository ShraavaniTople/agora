"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ── Dispatch-flow diagram ─────────────────────────────────────── */

function FlowBox({
  label,
  sublabel,
  accentColor,
  delay,
  featured,
}: {
  label: string;
  sublabel: string;
  accentColor: string;
  delay: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-2"
    >
      <div
        className="relative flex flex-col items-center gap-1 px-4 py-3 sm:px-5 sm:py-4 rounded-xl w-full sm:w-auto"
        style={{
          minWidth: featured ? 140 : 120,
          border: `1px solid ${accentColor}${featured ? "70" : "45"}`,
          background: `linear-gradient(135deg, ${accentColor}${featured ? "28" : "12"} 0%, ${accentColor}04 100%)`,
          boxShadow: featured ? `0 0 28px ${accentColor}35, inset 0 1px 0 rgba(255,255,255,0.08)` : undefined,
        }}
      >
        <div
          className="absolute top-0 left-4 right-4 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}50, transparent)` }}
        />
        {featured && (
          <div className="flex items-center gap-1.5 mb-0.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              style={{ background: accentColor, boxShadow: `0 0 6px ${accentColor}` }}
            />
            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase" style={{ color: accentColor }}>
              Matches + Coaches
            </span>
          </div>
        )}
        <span
          className={`font-black tracking-wide text-white ${featured ? "text-[14px] sm:text-[15px]" : "text-[12px] sm:text-[13px]"}`}
        >
          {label}
        </span>
      </div>
      <span className="text-[10px] sm:text-[11px] text-white/30 tracking-wide">{sublabel}</span>
    </motion.div>
  );
}

function AnimatedConnectorH({ delay, fromColor, toColor }: { delay: number; fromColor: string; toColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center relative flex-shrink-0"
      style={{ width: 64 }}
    >
      <div className="w-full h-px" style={{ background: `linear-gradient(90deg, ${fromColor}, ${toColor})` }} />
      <motion.div
        className="absolute w-2 h-2 rounded-full"
        style={{ background: toColor, boxShadow: `0 0 8px ${toColor}, 0 0 16px ${toColor}99`, top: "50%", marginTop: -4 }}
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
      />
    </motion.div>
  );
}

function AnimatedConnectorV({ delay, fromColor, toColor }: { delay: number; fromColor: string; toColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center relative flex-shrink-0"
      style={{ height: 36 }}
    >
      <div className="h-full w-px" style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }} />
      <motion.div
        className="absolute w-2 h-2 rounded-full"
        style={{ background: toColor, boxShadow: `0 0 8px ${toColor}, 0 0 16px ${toColor}99`, left: "50%", marginLeft: -4 }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
      />
    </motion.div>
  );
}

function DispatchFlow() {
  return (
    <>
      {/* Desktop: horizontal layout */}
      <div className="hidden sm:flex items-center justify-center gap-0 w-full max-w-3xl mx-auto">
        <FlowBox label="Company" sublabel="your campaigns" accentColor="#7ACCC8" delay={0.9} />
        <AnimatedConnectorH delay={1.1} fromColor="#7ACCC8" toColor="#6321EE" />
        <FlowBox label="AGORA" sublabel="we handle the rest" accentColor="#6321EE" delay={1.0} featured />
        <AnimatedConnectorH delay={1.1} fromColor="#6321EE" toColor="#7FFFD4" />
        <FlowBox label="Agent" sublabel="no hiring needed" accentColor="#7FFFD4" delay={0.9} />
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex sm:hidden flex-col items-center gap-0 w-full max-w-xs mx-auto">
        <FlowBox label="Company" sublabel="sets the brief" accentColor="#7ACCC8" delay={0.9} />
        <AnimatedConnectorV delay={1.1} fromColor="#7ACCC8" toColor="#6321EE" />
        <FlowBox label="AGORA" sublabel="matches + coaches" accentColor="#6321EE" delay={1.0} featured />
        <AnimatedConnectorV delay={1.1} fromColor="#6321EE" toColor="#7FFFD4" />
        <FlowBox label="Agent" sublabel="executes + earns" accentColor="#7FFFD4" delay={0.9} />
      </div>
    </>
  );
}

/* ── Hero ──────────────────────────────────────────────────────── */

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#080507", paddingTop: 68 }}
    >
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Purple glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          width: "min(900px, 140vw)",
          height: "min(600px, 90vw)",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, rgba(99,33,238,0.45) 0%, rgba(99,33,238,0.12) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "hero-glow 6s ease-in-out infinite",
        }}
      />

      {/* Teal bottom-left orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-80px",
          left: "-60px",
          width: "min(500px, 80vw)",
          height: "min(500px, 80vw)",
          background: "radial-gradient(ellipse, rgba(127,255,212,0.18) 0%, transparent 65%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />

      {/* Purple top-right orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-100px",
          right: "-80px",
          width: "min(600px, 90vw)",
          height: "min(500px, 80vw)",
          background: "radial-gradient(ellipse, rgba(99,33,238,0.22) 0%, transparent 65%)",
          borderRadius: "50%",
          filter: "blur(70px)",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 mb-8 sm:mb-10"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
            style={{
              border: "1px solid rgba(99,33,238,0.5)",
              background: "rgba(99,33,238,0.12)",
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#6321EE]"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              style={{ boxShadow: "0 0 6px #6321EE" }}
            />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#6321EE]">
              Georgia Tech Backed · Sales Network
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-black text-white leading-[0.94] tracking-[-0.04em] mb-6 sm:mb-7"
          style={{ fontSize: "clamp(42px, 8.5vw, 100px)" }}
        >
          Your outbound
          <br />
          <span className="gradient-text">sales team,</span>
          <br />
          <span className="text-white">on demand</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/55 font-medium mb-5 sm:mb-6 mx-auto leading-relaxed"
          style={{ fontSize: "clamp(15px, 2vw, 20px)", maxWidth: 560 }}
        >
          AGORA recruits, trains, and deploys sales reps for your campaigns in healthcare, recruiting, and commercial real estate.
          No hiring. No managing. Ready in two weeks.
        </motion.p>

        {/* Industry strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8 sm:mb-10 flex-wrap"
        >
          <span className="text-[11px] text-white/25 font-medium tracking-wide">Active in</span>
          {["Healthcare", "Recruiting", "Commercial Real Estate"].map((ind, i) => (
            <span key={ind} className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-white/50">{ind}</span>
              {i < 2 && <span className="text-white/15">·</span>}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 sm:mb-5"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-xl bg-[#6321EE] text-white font-bold transition-all duration-300 w-full sm:w-auto justify-center"
            style={{
              padding: "14px 28px",
              fontSize: 15,
              boxShadow: "0 0 36px rgba(99,33,238,0.65), 0 0 72px rgba(99,33,238,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 56px rgba(99,33,238,0.85), 0 0 100px rgba(99,33,238,0.35)";
              (e.currentTarget as HTMLElement).style.background = "#7331FF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(99,33,238,0.65), 0 0 72px rgba(99,33,238,0.2)";
              (e.currentTarget as HTMLElement).style.background = "#6321EE";
            }}
          >
            Book a Free Call
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2.5 rounded-xl text-white font-semibold transition-all duration-300 w-full sm:w-auto justify-center hover:border-white/30 hover:text-white/90"
            style={{
              padding: "14px 28px",
              fontSize: 15,
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            Get Started
          </Link>
        </motion.div>

        {/* Agent path link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-14 sm:mb-16"
        >
          <Link
            href="/for-agents"
            className="text-[12px] text-white/30 hover:text-[#7FFFD4] transition-colors duration-200 font-medium"
          >
            Looking to build your sales career? Apply as an SDR →
          </Link>
        </motion.div>

        {/* Dispatch flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="px-2 sm:px-0"
        >
          <DispatchFlow />
        </motion.div>
      </motion.div>

      {/* Fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #080507, transparent)" }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(99,33,238,0.8), transparent)" }}
          animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.85, 1, 0.85] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
