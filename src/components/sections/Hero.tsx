"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function DispatchFlow() {
  return (
    <div className="flex items-center justify-center gap-0 w-full max-w-3xl mx-auto">
      {/* Company box */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-2.5"
      >
        <div
          className="relative px-5 py-4 rounded-xl flex flex-col items-center gap-1"
          style={{
            width: 160,
            border: "1px solid rgba(122,204,200,0.45)",
            background: "linear-gradient(135deg, rgba(122,204,200,0.12) 0%, rgba(122,204,200,0.04) 100%)",
          }}
        >
          <div
            className="absolute top-0 left-4 right-4 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #7ACCC8, transparent)" }}
          />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#7ACCC8]/60">Company</span>
          <span className="text-[13px] font-bold text-white/90">Sets the brief</span>
        </div>
        <span className="text-[11px] text-white/30 tracking-wide">your campaigns</span>
      </motion.div>

      {/* Connector left */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="flex items-center relative mx-2"
        style={{ width: 80, flexShrink: 0 }}
      >
        <div
          className="w-full h-px"
          style={{ background: "linear-gradient(90deg, #7ACCC8, #6321EE)" }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[#6321EE]"
          style={{ boxShadow: "0 0 8px #6321EE, 0 0 16px rgba(99,33,238,0.6)", top: "50%", marginTop: -4 }}
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
        />
      </motion.div>

      {/* AGORA core box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-2.5 z-10"
      >
        <div
          className="relative px-6 py-4 rounded-xl flex flex-col items-center gap-1"
          style={{
            width: 176,
            border: "1px solid rgba(99,33,238,0.7)",
            background: "linear-gradient(135deg, rgba(99,33,238,0.28) 0%, rgba(99,33,238,0.10) 100%)",
            boxShadow: "0 0 28px rgba(99,33,238,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#6321EE]"
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              style={{ boxShadow: "0 0 6px #6321EE" }}
            />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#6321EE]">Matches + Coaches</span>
          </div>
          <span className="text-[15px] font-black tracking-wide text-white">AGORA</span>
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(99,33,238,0.22) 0%, transparent 55%)" }}
          />
        </div>
        <span className="text-[11px] text-[#6321EE] font-semibold tracking-wide">we handle the rest</span>
      </motion.div>

      {/* Connector right */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="flex items-center relative mx-2"
        style={{ width: 80, flexShrink: 0 }}
      >
        <div
          className="w-full h-px"
          style={{ background: "linear-gradient(90deg, #6321EE, #7FFFD4)" }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[#7FFFD4]"
          style={{ boxShadow: "0 0 8px #7FFFD4, 0 0 16px rgba(127,255,212,0.6)", top: "50%", marginTop: -4 }}
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4, delay: 0.8 }}
        />
      </motion.div>

      {/* Agent box */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-2.5"
      >
        <div
          className="relative px-5 py-4 rounded-xl flex flex-col items-center gap-1"
          style={{
            width: 160,
            border: "1px solid rgba(127,255,212,0.45)",
            background: "linear-gradient(135deg, rgba(127,255,212,0.12) 0%, rgba(127,255,212,0.04) 100%)",
          }}
        >
          <div
            className="absolute top-0 left-4 right-4 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #7FFFD4, transparent)" }}
          />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#7FFFD4]/60">Agent</span>
          <span className="text-[13px] font-bold text-white/90">Executes + earns</span>
        </div>
        <span className="text-[11px] text-white/30 tracking-wide">no hiring needed</span>
      </motion.div>
    </div>
  );
}

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

      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          width: 900,
          height: 600,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, rgba(99,33,238,0.45) 0%, rgba(99,33,238,0.12) 40%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "hero-glow 6s ease-in-out infinite",
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-80px",
          left: "-60px",
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, rgba(127,255,212,0.18) 0%, transparent 65%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          top: "-100px",
          right: "-80px",
          width: 600,
          height: 500,
          background: "radial-gradient(ellipse, rgba(99,33,238,0.22) 0%, transparent 65%)",
          borderRadius: "50%",
          filter: "blur(70px)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 mb-10"
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
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#6321EE]">
              Georgia Tech Backed · Sales Network
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-black text-white leading-[0.94] tracking-[-0.04em] mb-7"
          style={{ fontSize: "clamp(52px, 9vw, 104px)" }}
        >
          Outbound&nbsp;Sales,
          <br />
          <span className="gradient-text">Without&nbsp;the</span>
          <br />
          <span className="text-white">Overhead</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/55 font-medium mb-6 mx-auto leading-relaxed"
          style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 540 }}
        >
          We give companies a coached, performance-driven sales team — on demand.
          No hiring cycles. No fixed payroll. Just results.
        </motion.p>

        {/* Industry strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5"
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
          className="mb-16"
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
        >
          <DispatchFlow />
        </motion.div>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #080507, transparent)" }}
      />

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
