"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const integrations = [
  { name: "Slack", emoji: "💬" },
  { name: "HubSpot", emoji: "🟠" },
  { name: "Outlook", emoji: "📧" },
  { name: "Calendly", emoji: "📅" },
  { name: "Pipedrive", emoji: "🎯" },
  { name: "ChatGPT", emoji: "🤖" },
  { name: "Zoom", emoji: "📹" },
  { name: "Google Workspace", emoji: "🔵" },
  { name: "Notion", emoji: "⬛" },
  { name: "Intercom", emoji: "💙" },
];

function Chip({ name, emoji }: { name: string; emoji: string }) {
  const [h, setH] = useState(false);
  return (
    <div
      className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border cursor-default select-none transition-all duration-200"
      style={{
        borderColor: h ? "rgba(99,33,238,0.5)" : "rgba(255,255,255,0.07)",
        background: h ? "rgba(99,33,238,0.1)" : "rgba(255,255,255,0.02)",
        filter: h ? "none" : "grayscale(50%)",
        transform: h ? "scale(1.04) translateY(-1px)" : "scale(1)",
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      <span className="text-lg leading-none">{emoji}</span>
      <span className="text-[13px] font-medium" style={{ color: h ? "#fff" : "rgba(255,255,255,0.5)" }}>
        {name}
      </span>
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="relative bg-[#0A0608] py-20 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.25), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUpVariants}
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6321EE] mb-3">
            Integrations
          </motion.p>
          <motion.h2 variants={fadeUpVariants}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Works with your existing stack
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-white/40 text-[14px]">
            No migration. No new tooling. AGORA plugs into what you already use.
          </motion.p>
        </motion.div>

        {/* Scrolling rows */}
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0F0B0E] py-5">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#0F0B0E] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#0F0B0E] to-transparent" />

          {/* Row 1 */}
          <div className="flex gap-3 mb-3" style={{ animation: "marquee 24s linear infinite" }}>
            {[...integrations, ...integrations].map((item, i) => (
              <Chip key={i} {...item} />
            ))}
          </div>
          {/* Row 2 — reverse */}
          <div className="flex gap-3" style={{ animation: "marquee 18s linear infinite reverse" }}>
            {[...integrations, ...integrations].map((item, i) => (
              <Chip key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
