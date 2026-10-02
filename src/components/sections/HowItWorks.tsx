"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    num: "01", label: "BRIEF", duration: "30 MIN",
    title: "Tell us your campaign",
    body: "Describe your target market, industry, and what a good outcome looks like — a booked meeting, a qualified call, a follow-up conversation. Takes about 30 minutes. We do the rest.",
  },
  {
    num: "02", label: "BUILD", duration: "1 WEEK",
    title: "We build and brief your team",
    body: "AGORA matches you with agents, trains them on your script, and runs live coaching sessions before a single call is made. No hiring. No onboarding. No management.",
  },
  {
    num: "03", label: "EXECUTE", duration: "ONGOING",
    title: "They work. You watch.",
    body: "Agents run your campaigns every day. You get a live dashboard showing every call, every booking, and every result. Full visibility. No black boxes.",
  },
];

/* ── Step visuals ─────────────────────────────────────── */

function BriefVisual() {
  return (
    <div style={{ padding: "40px 48px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 24 }}>Campaign brief intake</div>
      {[
        { label: "Target industry", value: "Healthcare / Medtech", filled: true },
        { label: "Ideal company size", value: "50–500 employees", filled: true },
        { label: "Primary goal", value: "Booked demo calls", filled: true },
        { label: "Campaign start", value: "ASAP — within 2 weeks", filled: false },
      ].map((f, i) => (
        <div key={i} style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.32)", letterSpacing: "0.10em", textTransform: "uppercase", marginBottom: 4 }}>{f.label}</div>
          <div style={{ background: f.filled ? "rgba(255,255,255,0.06)" : "rgba(99,33,238,0.12)", border: `1px solid ${f.filled ? "rgba(255,255,255,0.09)" : "rgba(99,33,238,0.30)"}`, borderRadius: 8, padding: "9px 14px" }}>
            <span style={{ fontSize: 12, color: f.filled ? "rgba(255,255,255,0.60)" : "#9B65FF", fontWeight: f.filled ? 400 : 600 }}>{f.value}</span>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 8, background: "#6321EE", borderRadius: 8, padding: "11px 20px", textAlign: "center", boxShadow: "0 0 28px rgba(99,33,238,0.45)" }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Submit Brief →</span>
      </div>
    </div>
  );
}

function BuildVisual() {
  const agents = [
    { init: "MR", name: "Maya R.", spec: "Healthcare · B2B", ready: true },
    { init: "DK", name: "Darius K.", spec: "SaaS · SMB", ready: true },
    { init: "LS", name: "Layla S.", spec: "Recruiting · Enterprise", ready: false },
  ];
  return (
    <div style={{ padding: "40px 48px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 24 }}>Team assembly</div>
      {agents.map((a, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: i < 2 ? 14 : 0, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "12px 16px" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: `rgba(99,33,238,${0.3 + i * 0.15})`, border: "1.5px solid rgba(99,33,238,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: "rgba(255,255,255,0.9)" }}>{a.init}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.80)", marginBottom: 2 }}>{a.name}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.30)" }}>{a.spec}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.ready ? "#7FFFD4" : "#6321EE", boxShadow: `0 0 6px ${a.ready ? "#7FFFD4" : "#6321EE"}` }} />
            <span style={{ fontSize: 9, fontWeight: 700, color: a.ready ? "rgba(127,255,212,0.7)" : "rgba(99,33,238,0.8)", letterSpacing: "0.08em" }}>
              {a.ready ? "BRIEFED" : "TRAINING"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ExecuteVisual() {
  const metrics = [
    { label: "Calls made", value: "147", delta: "+12%" },
    { label: "Contacts reached", value: "63", delta: "+8%" },
    { label: "Meetings booked", value: "14", delta: "+21%" },
  ];
  return (
    <div style={{ padding: "40px 48px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7FFFD4", boxShadow: "0 0 8px #7FFFD4" }} />
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(127,255,212,0.7)" }}>Live dashboard</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
        {metrics.map((m, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.30)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{m.label}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{m.value}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#7FFFD4", marginTop: 4 }}>{m.delta}</div>
          </div>
        ))}
      </div>
      {/* Mini chart */}
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "14px 16px" }}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", marginBottom: 10 }}>BOOKINGS · LAST 7 DAYS</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 40 }}>
          {[2,3,2,5,4,7,14].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${(h / 14) * 100}%`, borderRadius: "3px 3px 0 0", background: i === 6 ? "#6321EE" : `rgba(99,33,238,${0.2 + i * 0.06})`, boxShadow: i === 6 ? "0 0 12px rgba(99,33,238,0.5)" : "none" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const VISUALS = [BriefVisual, BuildVisual, ExecuteVisual];

/* ── Main component ───────────────────────────────────── */

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      {/* Header */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 pt-20 pb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-black"
          style={{ fontSize: "clamp(54px, 8.5vw, 110px)", lineHeight: 0.88, letterSpacing: "-0.048em", color: "#0d0d0d" }}
        >
          How it<br />works.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          style={{ fontSize: 14, color: "rgba(0,0,0,0.45)", maxWidth: 280, lineHeight: 1.7 }}
        >
          From first conversation to a team actively working your pipeline — in two weeks.
        </motion.p>
      </div>

      {/* Interactive panel — desktop */}
      <div className="hidden lg:grid px-8 sm:px-14 lg:px-20 xl:px-28 pb-24" style={{ gridTemplateColumns: "3fr 2fr", gap: 5 }}>

        {/* Left — animated visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="rounded-2xl overflow-hidden relative"
          style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)", minHeight: 420 }}
        >
          {/* Gradient wash */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(145deg, rgba(99,33,238,0.18) 0%, transparent 60%)" }} />

          {/* Ghost number */}
          <div className="absolute top-0 right-0 font-black select-none pointer-events-none"
            style={{ fontSize: 220, lineHeight: 0.80, letterSpacing: "-0.07em", color: "rgba(255,255,255,0.028)", transform: "translate(6%, -4%)" }}>
            {steps[active].num}
          </div>

          <div className="relative z-10 h-full">
            <AnimatePresence mode="wait">
              {VISUALS.map((Visual, i) =>
                i === active ? (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.38, ease: EASE }}
                    style={{ height: "100%" }}
                  >
                    <Visual />
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right — step accordion */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
          className="flex flex-col"
        >
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="text-left w-full"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.09)",
                padding: "24px 0 24px 28px",
                borderBottom: i === steps.length - 1 ? "1px solid rgba(0,0,0,0.09)" : "none",
                transition: "background 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 900,
                  letterSpacing: "-0.045em",
                  lineHeight: 1,
                  color: active === i ? "#0d0d0d" : "rgba(0,0,0,0.20)",
                  transition: "color 0.3s",
                }}>
                  {s.title}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.30, ease: EASE }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ paddingTop: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#6321EE", letterSpacing: "0.12em" }}>
                          {s.label}
                        </span>
                        <span style={{ fontSize: 10, color: "rgba(0,0,0,0.28)", letterSpacing: "0.10em" }}>
                          · {s.duration}
                        </span>
                      </div>
                      <p style={{ fontSize: 13, color: "rgba(0,0,0,0.50)", lineHeight: 1.75, maxWidth: 340 }}>
                        {s.body}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Mobile — stacked cards */}
      <div className="lg:hidden px-8 sm:px-14 pb-20 flex flex-col gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
            className="relative rounded-2xl overflow-hidden"
            style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", minHeight: 260 }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(145deg, rgba(99,33,238,0.18) 0%, transparent 60%)" }} />
            <div className="absolute top-0 right-0 font-black select-none pointer-events-none"
              style={{ fontSize: 160, lineHeight: 0.82, letterSpacing: "-0.07em", color: "rgba(255,255,255,0.03)", transform: "translate(8%, -4%)" }}>
              {s.num}
            </div>
            <div className="relative z-10 p-7" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#6321EE", letterSpacing: "0.12em" }}>{s.label}</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.22)", letterSpacing: "0.10em" }}>· {s.duration}</span>
              </div>
              <h3 className="font-bold text-white" style={{ fontSize: 16, letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.72 }}>
                {s.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
