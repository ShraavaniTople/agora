"use client";
import { motion } from "framer-motion";
import { Zap, Users, Brain, BarChart3 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  { num: "01", icon: Zap,       title: "Speed-to-Lead Follow-Up",   tag: "Inbound",   color: "#6321EE", desc: "When someone fills out a form or calls in, how fast does your team respond? AGORA agents cover inbound follow-up around the clock so leads don't go cold while your team is busy." },
  { num: "02", icon: Users,     title: "Outbound Prospecting Teams", tag: "Outbound",  color: "#6321EE", desc: "Need to reach new accounts in healthcare, recruiting, or commercial real estate? AGORA builds you a dedicated outbound team, trained on your pitch, working your list, reporting back daily." },
  { num: "03", icon: Brain,     title: "Live Call Coaching",         tag: "Coaching",  color: "#6321EE", desc: "Every AGORA agent gets real-time guidance on every call — what to say, how to handle objections, when to push and when to back off. Your messaging stays consistent, no matter how many reps are on the phone." },
  { num: "04", icon: BarChart3, title: "Full Campaign Reporting",    tag: "Analytics", color: "#6321EE", desc: "See exactly how your campaign is performing — calls made, contacts reached, bookings created, and where leads are dropping off. No guessing. Just clear numbers you can act on." },
];

export default function Services() {
  return (
    <section id="services" className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      {/* ── Header ── */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 pt-20 pb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="font-black"
          style={{ fontSize: "clamp(54px, 8.5vw, 110px)", lineHeight: 0.88, letterSpacing: "-0.048em", color: "#0d0d0d" }}
        >
          What<br />we offer.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
          className="flex-shrink-0"
        >
          <a
            href="https://calendly.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl font-semibold hover:bg-black/[0.04] transition-all duration-200"
            style={{ fontSize: 14, padding: "12px 26px", border: "1px solid rgba(0,0,0,0.16)", color: "#0d0d0d" }}
          >
            Book a call ↗
          </a>
        </motion.div>
      </div>

      {/* ── Service rows ── */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: EASE }}
              className="group flex items-start gap-6 py-7"
              style={{ borderTop: "1px solid rgba(0,0,0,0.09)", cursor: "default" }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(0,0,0,0.18)", letterSpacing: "0.06em", minWidth: 26, paddingTop: 3 }}>
                {s.num}
              </span>

              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                <div className="flex items-center gap-3 md:min-w-[240px]">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.color}12`, border: `1px solid ${s.color}28` }}>
                    <Icon size={15} style={{ color: s.color }} strokeWidth={1.6} />
                  </div>
                  <h3
                    className="font-semibold group-hover:text-[#6321EE] transition-colors duration-300"
                    style={{ fontSize: 15, letterSpacing: "-0.01em", color: "#0d0d0d" }}
                  >
                    {s.title}
                  </h3>
                </div>

                <p className="flex-1" style={{ fontSize: 13, color: "rgba(0,0,0,0.50)", lineHeight: 1.72 }}>
                  {s.desc}
                </p>

                <span className="hidden md:block flex-shrink-0 transition-colors duration-300"
                  style={{ fontSize: 18, color: "rgba(0,0,0,0.22)" }}>→</span>
              </div>
            </motion.div>
          );
        })}
        <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />
      </div>
    </section>
  );
}
