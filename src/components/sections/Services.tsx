"use client";

import { motion } from "framer-motion";
import { Zap, Users, Brain, BarChart3 } from "lucide-react";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const up = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const services = [
  {
    icon: Zap,
    title: "Speed-to-Lead Follow-Up",
    description: "When someone fills out a form or calls in, how fast does your team respond? AGORA agents cover inbound follow-up around the clock so leads don't go cold while your team is busy.",
    color: "#6321EE",
    gradFrom: "rgba(99,33,238,0.14)",
    tag: "Inbound",
    index: "01",
  },
  {
    icon: Users,
    title: "Outbound Prospecting Teams",
    description: "Need to reach new accounts in healthcare, recruiting, or commercial real estate? AGORA builds you a dedicated outbound team, trained on your pitch, working your list, reporting back daily.",
    color: "#7FFFD4",
    gradFrom: "rgba(127,255,212,0.10)",
    tag: "Outbound",
    index: "02",
  },
  {
    icon: Brain,
    title: "Live Call Coaching",
    description: "Every AGORA agent gets real-time guidance on every call — what to say, how to handle objections, when to push and when to back off. Your messaging stays consistent, no matter how many reps are on the phone.",
    color: "#7ACCC8",
    gradFrom: "rgba(122,204,200,0.10)",
    tag: "Coaching",
    index: "03",
  },
  {
    icon: BarChart3,
    title: "Full Campaign Reporting",
    description: "See exactly how your campaign is performing — calls made, contacts reached, bookings created, and where leads are dropping off. No guessing. Just clear numbers you can act on.",
    color: "#6321EE",
    gradFrom: "rgba(99,33,238,0.12)",
    tag: "Analytics",
    index: "04",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-36" style={{ background: "transparent" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.3), transparent)" }} />

      <div className="absolute top-0 right-0 pointer-events-none"
        style={{ width: 600, height: 600, background: "radial-gradient(ellipse at 80% 20%, rgba(99,33,238,0.10) 0%, transparent 65%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-0 left-0 pointer-events-none"
        style={{ width: 500, height: 500, background: "radial-gradient(ellipse at 20% 80%, rgba(127,255,212,0.07) 0%, transparent 65%)", filter: "blur(40px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <motion.p variants={up} className="text-[11px] font-black tracking-[0.3em] uppercase text-[#7FFFD4] mb-4">
            What You Get
          </motion.p>
          <motion.h2 variants={up} className="font-black text-white tracking-[-0.03em] leading-[1.02] mb-5"
            style={{ fontSize: "clamp(34px, 5.5vw, 68px)" }}
          >
            Everything your
            <br />
            <span className="gradient-text">campaign needs.</span>
          </motion.h2>
          <motion.p variants={up} style={{ color: "rgba(244,246,255,0.42)", fontSize: 15, lineHeight: 1.7 }} className="max-w-lg">
            Trained sales reps, live call coaching, and full reporting — all in one. You focus on closing. We handle the outreach.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="card-glow-border" style={{ borderRadius: 20 }}>
                <motion.div
                  variants={up}
                  className="group relative rounded-[20px] overflow-hidden transition-all duration-400"
                  style={{
                    padding: "36px 32px",
                    background: `linear-gradient(145deg, ${service.gradFrom} 0%, rgba(5,2,16,0.65) 100%)`,
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                    borderRight: "1px solid rgba(255,255,255,0.07)",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    borderLeft: `3px solid ${service.color}55`,
                    backdropFilter: "blur(14px)",
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                >
                  {/* Corner bloom */}
                  <div className="absolute -top-16 -left-16 pointer-events-none"
                    style={{
                      width: 200, height: 200, borderRadius: "50%",
                      background: `radial-gradient(circle, ${service.gradFrom} 0%, transparent 70%)`,
                      filter: "blur(16px)",
                    }}
                  />

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 0% 0%, ${service.color}15 0%, transparent 60%)` }}
                  />

                  {/* Left border pulse */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: service.color }}
                  />

                  {/* Icon + tag */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: `${service.color}18`,
                        border: `1px solid ${service.color}35`,
                        boxShadow: `0 0 22px ${service.color}20`,
                      }}
                    >
                      <Icon size={22} style={{ color: service.color }} strokeWidth={1.6} />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md"
                        style={{ color: service.color, background: `${service.color}16`, border: `1px solid ${service.color}28` }}
                      >
                        {service.tag}
                      </span>
                      <span className="font-black" style={{ fontSize: 38, color: `${service.color}15`, lineHeight: 1, userSelect: "none" }}>
                        {service.index}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-white mb-3 leading-snug relative z-10"
                    style={{ fontSize: "clamp(16px, 1.4vw, 19px)" }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(244,246,255,0.48)", lineHeight: 1.72 }} className="relative z-10">
                    {service.description}
                  </p>

                  {/* Bottom sweep */}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                  />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.3), transparent)" }} />
    </section>
  );
}
