"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Radio } from "lucide-react";
import { staggerContainer, fadeUpVariants } from "@/components/ui/SectionWrapper";

export default function NotFound() {
  return (
    <div className="bg-[#211A1D] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] bg-[#6321EE]/[0.08] pointer-events-none" />

      {/* Animated dispatch nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full border border-[#6321EE]/40"
            style={{
              top: `${15 + i * 12}%`,
              left: `${10 + i * 14}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
        {/* Broken route lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px"
            style={{
              top: `${30 + i * 20}%`,
              left: "15%",
              right: "15%",
              background: `linear-gradient(90deg, transparent, rgba(99,33,238,${0.15 + i * 0.05}), transparent)`,
            }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.9,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Signal icon */}
          <motion.div
            variants={fadeUpVariants}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-2xl border border-[#6321EE]/30 bg-[#6321EE]/10 flex items-center justify-center">
              <motion.div
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Radio size={36} className="text-[#6321EE]" strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="text-xs font-bold tracking-[0.3em] uppercase text-[#6321EE] mb-4"
          >
            404 · Route Not Found
          </motion.p>

          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5"
          >
            Signal lost.
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="text-base text-white/50 mb-10 leading-relaxed"
          >
            Looks like this route isn't in our dispatch network. The page
            you're looking for doesn't exist, was moved, or the link is broken.
            Let's get you back on the grid.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6321EE] text-white font-semibold shadow-[0_0_25px_rgba(99,33,238,0.4)] hover:shadow-[0_0_45px_rgba(99,33,238,0.6)] hover:bg-[#7331FF] transition-all duration-300"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-medium hover:border-[#7FFFD4]/50 hover:text-[#7FFFD4] transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
