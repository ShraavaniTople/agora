"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const up = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden py-28 lg:py-44"
      style={{ background: "linear-gradient(170deg, #0A0618 0%, #120836 45%, #0E0525 100%)" }}
    >
      {/* Animated mesh blobs */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ borderRadius: 0 }}
      >
        <div
          className="absolute"
          style={{
            width: 800, height: 800,
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(99,33,238,0.35) 0%, rgba(99,33,238,0.08) 45%, transparent 70%)",
            filter: "blur(80px)",
            animation: "blob-drift-1 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            width: 500, height: 500,
            top: "-10%", right: "10%",
            background: "radial-gradient(circle, rgba(127,255,212,0.18) 0%, transparent 65%)",
            filter: "blur(60px)",
            animation: "blob-drift-3 13s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            width: 400, height: 400,
            bottom: "0%", left: "5%",
            background: "radial-gradient(circle, rgba(122,204,200,0.12) 0%, transparent 65%)",
            filter: "blur(50px)",
            animation: "blob-drift-2 16s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.6), rgba(127,255,212,0.3), transparent)" }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {/* Live badge */}
          <motion.div variants={up} className="inline-flex items-center gap-2.5 mb-10">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
              style={{
                border: "1px solid rgba(127,255,212,0.3)",
                background: "rgba(127,255,212,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#7FFFD4]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ boxShadow: "0 0 8px #7FFFD4" }}
              />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#7FFFD4]/80">
                Network live · Accepting new programs
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={up}
            className="font-black text-white leading-[0.94] tracking-[-0.04em] mb-7"
            style={{ fontSize: "clamp(42px, 7vw, 86px)" }}
          >
            Add a sales team.
            <br />
            <span
              style={{
                background: "linear-gradient(120deg, #FFFFFF 0%, #7FFFD4 60%, #7ACCC8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skip the hiring.
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p variants={up} className="text-white/60 text-[16px] max-w-lg mx-auto mb-14 leading-relaxed">
            Book a call and we&apos;ll show you exactly how AGORA works — what the team looks like, how fast we can start, and what it costs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={up}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold text-white w-full sm:w-auto transition-all duration-300"
              style={{
                padding: "16px 34px",
                fontSize: 15,
                background: "linear-gradient(135deg, #ffffff 0%, #e8e8f8 100%)",
                color: "#3A10CC",
                boxShadow: "0 4px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.12)";
              }}
            >
              <Zap size={15} />
              Book a Free Call
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold transition-all duration-300 w-full sm:w-auto hover:bg-white/10"
              style={{
                padding: "16px 32px",
                fontSize: 15,
                border: "1px solid rgba(255,255,255,0.28)",
                backdropFilter: "blur(8px)",
              }}
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
      />
    </section>
  );
}
