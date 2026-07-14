"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const pressItems = [
  { outlet: "Tech Square Atlanta", headline: "How Joseph Lee turned campus observation into a sales platform", tag: "Founder Story" },
  { outlet: "Georgia Tech CREATE-X", headline: "AGORA AI selected for Georgia Tech's flagship startup accelerator", tag: "Accelerator" },
  { outlet: "11 Alive · NBC Atlanta", headline: "Georgia Tech launches program to aid students with startups", tag: "News" },
];

export default function Press() {
  return (
    <section className="relative bg-[#0D0A0C] py-20 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.12), transparent)" }} />

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
            As Seen In
          </motion.p>
          <motion.h2 variants={fadeUpVariants}
            className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Building in public since day one
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          {pressItems.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUpVariants}
              className="group rounded-2xl border border-white/[0.06] bg-[#0A0608] p-6 hover:border-white/[0.12] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span
                className="text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded-md bg-[#6321EE]/12 text-[#6321EE] mb-4 inline-block"
              >
                {item.tag}
              </span>
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/25 mb-2.5">{item.outlet}</p>
              <p className="text-[14px] font-semibold text-white/80 leading-snug">{item.headline}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
