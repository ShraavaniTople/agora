"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    tag: "Inbound",
    title: "Speed-to-Lead\nFollow-Up",
    desc: "Around-the-clock inbound coverage so leads don't go cold while your team is busy.",
    Visual: SpeedVisual,
  },
  {
    tag: "Outbound",
    title: "Outbound\nProspecting Teams",
    desc: "A dedicated outbound team trained on your pitch, working your list, reporting back daily.",
    Visual: OutboundVisual,
  },
  {
    tag: "Coaching",
    title: "Live Call\nCoaching",
    desc: "Real-time guidance on every call. Consistent messaging at any scale, no exceptions.",
    Visual: CoachingVisual,
  },
  {
    tag: "Analytics",
    title: "Full Campaign\nReporting",
    desc: "Calls made, contacts reached, bookings created. Clear numbers you can actually act on.",
    Visual: ReportingVisual,
  },
];

/* ── Visual mockups ──────────────────────────────────── */

function SpeedVisual() {
  return (
    <div style={{ height: 162, background: "linear-gradient(145deg,rgba(99,33,238,0.18) 0%,rgba(5,2,16,0.95) 100%)", borderRadius: "12px 12px 0 0", padding: 18, position: "relative", overflow: "hidden" }}>
      {/* Ping rings */}
      {[28, 48, 68].map((r, i) => (
        <div key={i} style={{
          position: "absolute", top: "50%", left: "30%",
          width: r, height: r, borderRadius: "50%",
          border: `1px solid rgba(99,33,238,${0.55 - i * 0.16})`,
          transform: "translate(-50%,-50%)",
          animation: `ping${i} 2.4s ease-out ${i * 0.6}s infinite`,
        }} />
      ))}
      <div style={{ position: "absolute", top: "50%", left: "30%", width: 8, height: 8, borderRadius: "50%", background: "#7FFFD4", transform: "translate(-50%,-50%)", boxShadow: "0 0 10px #7FFFD4" }} />
      {/* Notification */}
      <div style={{ position: "absolute", top: 18, right: 18, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 10, padding: "10px 14px", minWidth: 140 }}>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.38)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>New Lead · Healthcare</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#7FFFD4", letterSpacing: "-0.02em" }}>Contacted in 43s</div>
      </div>
      {/* Live indicator */}
      <div style={{ position: "absolute", bottom: 14, right: 18, display: "flex", alignItems: "center", gap: 5 }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#7FFFD4", boxShadow: "0 0 8px #7FFFD4" }} />
        <span style={{ fontSize: 9, color: "rgba(127,255,212,0.7)", fontWeight: 700, letterSpacing: "0.14em" }}>LIVE</span>
      </div>
      <style>{`
        @keyframes ping0 { 0%{opacity:0.7;transform:translate(-50%,-50%) scale(1)} 100%{opacity:0;transform:translate(-50%,-50%) scale(2.2)} }
        @keyframes ping1 { 0%{opacity:0.5;transform:translate(-50%,-50%) scale(1)} 100%{opacity:0;transform:translate(-50%,-50%) scale(2.0)} }
        @keyframes ping2 { 0%{opacity:0.3;transform:translate(-50%,-50%) scale(1)} 100%{opacity:0;transform:translate(-50%,-50%) scale(1.8)} }
        div[style*="animation: ping0"] { animation-name: ping0 !important; }
      `}</style>
    </div>
  );
}

function OutboundVisual() {
  const agents = [
    { init: "A", name: "Alex R.", calls: 24, active: true },
    { init: "J", name: "Jordan M.", calls: 19, active: true },
    { init: "S", name: "Sam K.", calls: 17, active: false },
  ];
  return (
    <div style={{ height: 162, background: "linear-gradient(145deg,rgba(80,20,200,0.16) 0%,rgba(5,2,16,0.95) 100%)", borderRadius: "12px 12px 0 0", padding: "16px 18px", overflow: "hidden" }}>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 12 }}>Active Agents</div>
      {agents.map((a, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i < 2 ? 10 : 0 }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: `rgba(99,33,238,${0.28 + i * 0.12})`, border: "1px solid rgba(99,33,238,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: "rgba(255,255,255,0.85)" }}>{a.init}</span>
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", flex: 1 }}>{a.name}</span>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
            {[4, 7, 5, 9, 6, 8].map((h, j) => (
              <div key={j} style={{ width: 3, height: Math.round(h * 0.7) + 2, borderRadius: 2, background: j >= 4 ? "rgba(255,255,255,0.14)" : "#6321EE", opacity: j >= 4 ? 1 : 0.6 + j * 0.1 }} />
            ))}
          </div>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.active ? "#7FFFD4" : "rgba(255,255,255,0.2)", marginLeft: 4, flexShrink: 0 }} />
        </div>
      ))}
    </div>
  );
}

function CoachingVisual() {
  return (
    <div style={{ height: 162, background: "linear-gradient(145deg,rgba(60,10,160,0.18) 0%,rgba(5,2,16,0.95) 100%)", borderRadius: "12px 12px 0 0", padding: "16px 18px", overflow: "hidden" }}>
      {/* Waveform */}
      <div style={{ display: "flex", alignItems: "center", gap: 2.5, marginBottom: 14 }}>
        {[3,6,9,5,12,8,4,11,7,5,9,6,3,10,7,4,8,11,5,7,3,9,6,4,10].map((h, i) => (
          <div key={i} style={{ width: 3, height: h, borderRadius: 2, background: `rgba(99,33,238,${0.4 + (i % 3) * 0.2})`, flexShrink: 0 }} />
        ))}
      </div>
      {/* Active call chip */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#7FFFD4", boxShadow: "0 0 6px #7FFFD4", flexShrink: 0 }} />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)" }}>Active call · 02:41</span>
        <div style={{ marginLeft: "auto", background: "rgba(99,33,238,0.2)", border: "1px solid rgba(99,33,238,0.35)", borderRadius: 6, padding: "3px 9px" }}>
          <span style={{ fontSize: 9, fontWeight: 700, color: "#9B65FF", letterSpacing: "0.06em" }}>Score 94</span>
        </div>
      </div>
      {/* Coaching tip */}
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "7px 11px" }}>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.38)" }}>Tip: </span>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.58)" }}>Ask open-ended question now →</span>
      </div>
    </div>
  );
}

function ReportingVisual() {
  const bars = [42, 58, 51, 74, 67, 85, 91];
  const days = ["M","T","W","T","F","S","S"];
  return (
    <div style={{ height: 162, background: "linear-gradient(145deg,rgba(99,33,238,0.14) 0%,rgba(5,2,16,0.95) 100%)", borderRadius: "12px 12px 0 0", padding: "16px 18px", overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", letterSpacing: "0.10em", textTransform: "uppercase" }}>Bookings this week</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1 }}>47 <span style={{ fontSize: 11, fontWeight: 500, color: "#7FFFD4" }}>↑ 23%</span></div>
        </div>
      </div>
      {/* Bar chart */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 5 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ width: "100%", height: Math.round(h * 0.52), borderRadius: "3px 3px 0 0", background: i === bars.length - 1 ? "#6321EE" : `rgba(99,33,238,${0.25 + i * 0.06})`, boxShadow: i === bars.length - 1 ? "0 0 12px rgba(99,33,238,0.5)" : "none" }} />
            <span style={{ fontSize: 7.5, color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────── */

export default function Services() {
  return (
    <section id="services" className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-20 lg:py-28">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(0,0,0,0.30)", marginBottom: 16 }}>
              What we offer
            </p>
            <h2
              className="font-black"
              style={{ fontSize: "clamp(52px, 6.5vw, 88px)", lineHeight: 0.9, letterSpacing: "-0.048em", color: "#0d0d0d" }}
            >
              What<br />we offer.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl font-semibold hover:bg-black/[0.06] transition-all duration-200"
              style={{ fontSize: 13, padding: "11px 24px", border: "1px solid rgba(0,0,0,0.18)", color: "#0d0d0d" }}
            >
              Book a call ↗
            </a>
          </motion.div>
        </div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ tag, title, desc, Visual }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="group flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.07)",
                cursor: "default",
              }}
            >
              {/* Visual area */}
              <Visual />

              {/* Text area */}
              <div style={{ padding: "20px 22px 24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#6321EE", display: "block", marginBottom: 10 }}>
                  {tag}
                </span>
                <h3 className="font-semibold text-white" style={{ fontSize: 14, letterSpacing: "-0.01em", lineHeight: 1.3, whiteSpace: "pre-line", marginBottom: 10 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.40)", lineHeight: 1.70 }}>
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
