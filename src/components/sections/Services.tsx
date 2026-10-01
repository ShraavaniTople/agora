"use client";
import { motion } from "framer-motion";
import { Zap, Users, Brain, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Service = {
  icon: LucideIcon;
  title: string;
  tag: string;
  color: string;
  desc: string;
};

const services: Service[] = [
  { icon: Zap,       title: "Speed-to-Lead Follow-Up",   tag: "Inbound",   color: "#6321EE", desc: "Around-the-clock inbound coverage so leads don't go cold while your team is busy." },
  { icon: Users,     title: "Outbound Prospecting Teams", tag: "Outbound",  color: "#8B5CF6", desc: "A dedicated outbound team trained on your pitch, working your list, reporting back daily." },
  { icon: Brain,     title: "Live Call Coaching",         tag: "Coaching",  color: "#6321EE", desc: "Real-time guidance on every call. Consistent messaging at any scale, no exceptions." },
  { icon: BarChart3, title: "Full Campaign Reporting",    tag: "Analytics", color: "#8B5CF6", desc: "Calls made, contacts reached, bookings created. Clear numbers you can actually act on." },
];

function ServiceCard({ s, delay = 0 }: { s: Service; i?: number; delay?: number }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group flex flex-col gap-5 rounded-2xl p-7"
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.07)",
        cursor: "default",
      }}
    >
      <div className="flex items-center justify-between">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
        >
          <Icon size={16} style={{ color: s.color }} strokeWidth={1.6} />
        </div>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: s.color }}>
          {s.tag}
        </span>
      </div>
      <h3 className="font-semibold text-white" style={{ fontSize: 15, letterSpacing: "-0.01em", lineHeight: 1.3 }}>
        {s.title}
      </h3>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.72 }}>
        {s.desc}
      </p>
      <span style={{ fontSize: 14, color: "rgba(255,255,255,0.18)", marginTop: "auto" }}>→</span>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-20 lg:py-28">

        {/* ── Desktop: scattered grid with centered heading ── */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 20,
            alignItems: "center",
          }}
        >
          {/* Card 1 — top left */}
          <div style={{ gridColumn: "1", gridRow: "1" }}>
            <ServiceCard s={services[0]} i={0} delay={0.1} />
          </div>

          {/* Center heading — spans cols 2-3, rows 1-2 */}
          <div style={{ gridColumn: "2 / 4", gridRow: "1 / 3", textAlign: "center", padding: "0 24px" }}>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="font-black"
              style={{
                fontSize: "clamp(52px, 6.5vw, 88px)",
                lineHeight: 0.9,
                letterSpacing: "-0.048em",
                color: "#0d0d0d",
                marginBottom: 28,
              }}
            >
              What<br />we offer.
            </motion.h2>
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

          {/* Card 2 — top right */}
          <div style={{ gridColumn: "4", gridRow: "1" }}>
            <ServiceCard s={services[1]} i={1} delay={0.15} />
          </div>

          {/* Card 3 — bottom left */}
          <div style={{ gridColumn: "1", gridRow: "2" }}>
            <ServiceCard s={services[2]} i={2} delay={0.2} />
          </div>

          {/* Card 4 — bottom right */}
          <div style={{ gridColumn: "4", gridRow: "2" }}>
            <ServiceCard s={services[3]} i={3} delay={0.25} />
          </div>
        </div>

        {/* ── Mobile: heading then 2-col card grid ── */}
        <div className="lg:hidden">
          <h2
            className="font-black mb-8"
            style={{ fontSize: "clamp(48px, 12vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.048em", color: "#0d0d0d" }}
          >
            What<br />we offer.
          </h2>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl font-semibold mb-10"
            style={{ fontSize: 13, padding: "11px 24px", border: "1px solid rgba(0,0,0,0.18)", color: "#0d0d0d" }}
          >
            Book a call ↗
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {services.map((s, i) => (
              <ServiceCard key={i} s={s} i={i} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
