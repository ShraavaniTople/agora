"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

interface Section { id: string; label: string; }

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
  children: ReactNode;
}

export default function LegalLayout({ title, lastUpdated, intro, sections, children }: LegalLayoutProps) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <div className="bg-[#0A0608] min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-14 lg:py-18 border-b border-white/[0.05] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(99,33,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,33,238,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 variants={fadeUpVariants}
              className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">
              {title}
            </motion.h1>
            <motion.p variants={fadeUpVariants} className="text-[12px] text-white/25 mb-5">
              Last updated: {lastUpdated}
            </motion.p>
            <motion.p variants={fadeUpVariants}
              className="text-[14px] text-white/50 max-w-3xl leading-relaxed">
              {intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex gap-12 lg:gap-16">
          {/* Sticky TOC */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-4">Contents</p>
              <nav className="space-y-0.5">
                {sections.map(({ id, label }) => (
                  <a key={id} href={`#${id}`}
                    className={`block text-[12px] py-1.5 pl-3 border-l transition-all duration-200 ${
                      active === id
                        ? "border-[#6321EE] text-[#7FFFD4] font-semibold"
                        : "border-white/[0.06] text-white/35 hover:text-white/65 hover:border-white/20"
                    }`}>
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-28">
      <h2 className="text-[18px] sm:text-xl font-black text-white mb-5 pb-3 border-b border-white/[0.06]">
        {title}
      </h2>
      <div className="text-[13px] text-white/55 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-3 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-2 w-1 h-1 rounded-full bg-[#6321EE] flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
