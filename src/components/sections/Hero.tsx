"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, TrendingUp, Users, CheckCircle2, Clock, Activity } from "lucide-react";

const INDUSTRIES = ["Healthcare", "Recruiting", "Real Estate"];

const AGENTS = [
  { initials: "SK", name: "Sarah K.",   status: "On Call",  color: "#6321EE" },
  { initials: "MR", name: "Marcus R.",  status: "Idle",     color: "#7FFFD4" },
  { initials: "JP", name: "Jamie P.",   status: "On Call",  color: "#7ACCC8" },
];

const FEED = [
  { msg: "Meeting booked · Dr. Patel",   time: "0:12",  dot: "#7FFFD4" },
  { msg: "Inbound routed · Valley Med",  time: "1:04",  dot: "#6321EE" },
  { msg: "Follow-up sent · Clinic A",    time: "2:31",  dot: "#7ACCC8" },
];

function DashboardPanel() {
  const [calls, setCalls] = useState(14);
  const [meetings, setMeetings] = useState(3);
  const [toast, setToast] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const t = setTimeout(() => setProgress(78), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() > 0.55) {
        setCalls(c => c + 1);
        if (Math.random() > 0.5) {
          setMeetings(m => m + 1);
          setToast(true);
          setTimeout(() => setToast(false), 3200);
        }
      }
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", width: 400 }}>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute", top: -52, right: 0, zIndex: 30,
              background: "rgba(127,255,212,0.09)",
              border: "1px solid rgba(127,255,212,0.30)",
              backdropFilter: "blur(16px)",
              borderRadius: 12, padding: "10px 16px",
              display: "flex", alignItems: "center", gap: 8,
              minWidth: 230,
            }}
          >
            <CheckCircle2 size={14} style={{ color: "#7FFFD4", flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "#7FFFD4", fontWeight: 600 }}>Meeting booked · Healthcare</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small revenue card — upper right */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="hero-float-card-3"
        style={{
          position: "absolute", top: -30, right: -36, zIndex: 20,
          background: "rgba(8,4,20,0.80)",
          border: "1px solid rgba(99,33,238,0.32)",
          backdropFilter: "blur(24px)",
          borderRadius: 14, padding: "14px 18px",
          boxShadow: "0 0 40px rgba(99,33,238,0.18), 0 16px 50px rgba(0,0,0,0.5)",
          minWidth: 158,
        }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <TrendingUp size={10} style={{ color: "#6321EE" }} />
          <span style={{ fontSize: 9, color: "rgba(244,246,255,0.36)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Q3 Revenue Lift</span>
        </div>
        <div style={{ fontSize: 26, fontWeight: 900, color: "white", letterSpacing: "-0.04em", lineHeight: 1 }}>+$2.4M</div>
        <div style={{ fontSize: 10, color: "rgba(244,246,255,0.26)", marginTop: 4 }}>6 active campaigns</div>
      </motion.div>

      {/* MAIN dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="hero-float-card-1"
        style={{
          background: "rgba(8,4,20,0.72)",
          border: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderRadius: 22,
          padding: "24px 24px 20px",
          boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Card header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <motion.div
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#7FFFD4", boxShadow: "0 0 10px #7FFFD4", flexShrink: 0 }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#7FFFD4", letterSpacing: "0.18em", textTransform: "uppercase" }}>Live</span>
          </div>
          <span style={{ fontSize: 10, color: "rgba(244,246,255,0.28)", fontWeight: 500 }}>Healthcare Campaign</span>
        </div>

        {/* Top stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 18 }}>
          {[
            { label: "Calls", value: calls, Icon: Phone,      color: "#6321EE" },
            { label: "Meetings", value: meetings, Icon: Users, color: "#7FFFD4" },
            { label: "Connect", value: "34%", Icon: Activity, color: "#7ACCC8" },
          ].map((s) => {
            const Icon = s.Icon;
            return (
              <div key={s.label} style={{
                textAlign: "center", padding: "12px 8px",
                background: "rgba(255,255,255,0.04)",
                borderRadius: 13, border: "1px solid rgba(255,255,255,0.07)",
              }}>
                <Icon size={11} style={{ color: s.color, margin: "0 auto 5px" }} />
                <div style={{ fontSize: 22, fontWeight: 900, color: "white", lineHeight: 1, letterSpacing: "-0.03em" }}>{s.value}</div>
                <div style={{ fontSize: 9, color: "rgba(244,246,255,0.28)", marginTop: 3, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 16 }} />

        {/* Agents list */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(244,246,255,0.28)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 }}>Active Agents</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {AGENTS.map((a) => (
              <div key={a.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: `linear-gradient(135deg, ${a.color}90, ${a.color}40)`,
                  border: `1px solid ${a.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 800, color: "white", flexShrink: 0,
                }}>
                  {a.initials}
                </div>
                <span style={{ fontSize: 12, color: "rgba(244,246,255,0.70)", fontWeight: 500, flex: 1 }}>{a.name}</span>
                <span style={{
                  fontSize: 9, fontWeight: 700,
                  color: a.status === "On Call" ? "#7FFFD4" : "rgba(244,246,255,0.30)",
                  background: a.status === "On Call" ? "rgba(127,255,212,0.10)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${a.status === "On Call" ? "rgba(127,255,212,0.22)" : "rgba(255,255,255,0.08)"}`,
                  padding: "3px 8px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 14 }} />

        {/* Speed-to-lead bar */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(244,246,255,0.36)", letterSpacing: "0.10em", textTransform: "uppercase" }}>Speed-to-Lead</span>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#7FFFD4" }}>{progress}%</span>
          </div>
          <div style={{ height: 5, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: "100%", background: "linear-gradient(90deg, #6321EE, #7FFFD4)", borderRadius: 99 }}
            />
          </div>
          <div style={{ fontSize: 10, color: "rgba(244,246,255,0.24)", marginTop: 6 }}>Called back in &lt;60 seconds</div>
        </div>
      </motion.div>

      {/* Activity feed card — lower left */}
      <motion.div
        initial={{ opacity: 0, x: -22, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="hero-float-card-2"
        style={{
          position: "absolute", bottom: -68, left: -28, zIndex: 20,
          background: "rgba(8,4,20,0.78)",
          border: "1px solid rgba(255,255,255,0.09)",
          backdropFilter: "blur(24px)",
          borderRadius: 16, padding: "16px 18px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.50)",
          minWidth: 240,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 11 }}>
          <Clock size={10} style={{ color: "rgba(244,246,255,0.35)" }} />
          <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(244,246,255,0.30)", letterSpacing: "0.16em", textTransform: "uppercase" }}>Activity Feed</span>
        </div>
        {FEED.map((f, i) => (
          <motion.div
            key={f.msg}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
            style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: i < FEED.length - 1 ? 8 : 0 }}
          >
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: f.dot, flexShrink: 0, boxShadow: `0 0 6px ${f.dot}` }} />
            <span style={{ fontSize: 11, color: "rgba(244,246,255,0.60)", flex: 1 }}>{f.msg}</span>
            <span style={{ fontSize: 10, color: "rgba(244,246,255,0.22)", fontWeight: 500 }}>{f.time}</span>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % INDUSTRIES.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 68 }}
    >
      {/* Atmospheric gradients */}
      <div aria-hidden style={{
        position: "absolute", top: "-22%", left: "18%",
        width: 960, height: 960, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,33,238,0.55) 0%, rgba(99,33,238,0.13) 44%, transparent 70%)",
        filter: "blur(90px)", pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", top: "8%", right: "-8%",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(127,255,212,0.08) 0%, transparent 68%)",
        filter: "blur(100px)", pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 320,
        background: "linear-gradient(to bottom, transparent, #050210)",
        pointerEvents: "none",
      }} />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-20">

          {/* LEFT */}
          <div className="flex-1 min-w-0 lg:max-w-[600px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-9"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full" style={{
                border: "1px solid rgba(99,33,238,0.40)",
                background: "rgba(99,33,238,0.09)",
                backdropFilter: "blur(14px)",
                fontSize: 11, fontWeight: 700,
                letterSpacing: "0.24em", textTransform: "uppercase",
                color: "rgba(244,246,255,0.55)",
              }}>
                <motion.span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7FFFD4", boxShadow: "0 0 8px #7FFFD4", flexShrink: 0, display: "block" }}
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.9, repeat: Infinity }}
                />
                Georgia Tech Backed · Sales Network
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="font-black text-white select-none"
              style={{ fontSize: "clamp(52px, 8vw, 108px)", lineHeight: 0.9, letterSpacing: "-0.046em", marginBottom: 30 }}
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
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
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

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              style={{ fontSize: "clamp(15px, 1.5vw, 18px)", maxWidth: 460, color: "rgba(244,246,255,0.44)", lineHeight: 1.74, marginBottom: 40 }}
            >
              We recruit, train, and deploy sales reps for your campaigns.
              No hiring. No managing. Live in two weeks.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.42 }}
              className="flex items-center gap-3 flex-wrap mb-9"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-2xl font-bold text-white transition-all duration-200 hover:-translate-y-[2px] hover:brightness-110 active:translate-y-0"
                style={{
                  padding: "16px 36px", fontSize: 15,
                  background: "linear-gradient(135deg, #6321EE 0%, #8040FF 100%)",
                  boxShadow: "0 0 55px rgba(99,33,238,0.70), 0 0 110px rgba(99,33,238,0.24), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                Book a Free Call
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-[2px]"
                style={{
                  padding: "16px 30px", fontSize: 15,
                  color: "rgba(244,246,255,0.52)",
                  border: "1px solid rgba(255,255,255,0.11)",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(244,246,255,0.52)")}
              >
                Get Started
              </Link>
            </motion.div>

            {/* Trust */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="flex items-center gap-7 flex-wrap"
            >
              {INDUSTRIES.map(v => (
                <span key={v} className="flex items-center gap-1.5 font-medium" style={{ fontSize: 12, color: "rgba(244,246,255,0.22)" }}>
                  <span style={{ color: "#7FFFD4", fontSize: 9 }}>✓</span> {v}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Dashboard */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0" style={{ paddingTop: 80, paddingBottom: 80 }}>
            <DashboardPanel />
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
      >
        <motion.div
          style={{ width: 1, height: 44, background: "linear-gradient(to bottom, transparent, rgba(99,33,238,0.88), transparent)" }}
          animate={{ opacity: [0.22, 1, 0.22], scaleY: [0.8, 1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
