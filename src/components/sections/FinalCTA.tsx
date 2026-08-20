"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden py-28 lg:py-40"
      style={{
        /* Background gradient */
        background: "linear-gradient(160deg, #6321EE 0%, #4A18B8 55%, #380F90 100%)",
      }}
    >
      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Inner radial depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 120%, rgba(30,8,80,0.7) 0%, transparent 65%)",
        }}
      />

      {/* Top-left highlight bloom */}
      <div
        className="absolute -top-20 -left-20 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, rgba(127,255,212,0.15) 0%, transparent 60%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />

      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Live badge */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2.5 mb-10"
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.12)",
              }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#7FFFD4]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ boxShadow: "0 0 6px #7FFFD4" }}
              />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/80">
                Network live · Accepting new programs
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUpVariants}
            className="font-black text-white leading-[0.96] tracking-[-0.04em] mb-7"
            style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
          >
            Add a sales team.
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, #FFFFFF 0%, #7FFFD4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skip the hiring.
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={fadeUpVariants}
            className="text-white/70 text-[16px] max-w-lg mx-auto mb-14 leading-relaxed"
          >
            Book a call and we&apos;ll show you exactly how AGORA works for your business:
            what the team looks like, how fast we can start, and what it costs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl bg-white font-bold transition-all duration-300 w-full sm:w-auto justify-center"
              style={{
                padding: "15px 32px",
                fontSize: 15,
                color: "#4A18B8",
                boxShadow: "0 4px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.15)";
              }}
            >
              Book a Free Call
              <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl text-white font-semibold transition-all duration-300 w-full sm:w-auto justify-center hover:bg-white/10"
              style={{
                padding: "15px 32px",
                fontSize: 15,
                border: "1px solid rgba(255,255,255,0.35)",
              }}
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
      />
    </section>
  );
}
