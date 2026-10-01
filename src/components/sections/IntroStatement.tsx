"use client";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function IntroStatement() {
  return (
    <section style={{ background: "transparent" }}>
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-24 lg:py-44">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: EASE }}
          className="font-black"
          style={{
            fontSize: "clamp(34px, 5.5vw, 74px)",
            lineHeight: 1.06,
            letterSpacing: "-0.042em",
            color: "#0d0d0d",
            maxWidth: "78vw",
          }}
        >
          At AGORA, we build high-performance sales teams for the world&apos;s most ambitious companies.
        </motion.h2>
      </div>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />
    </section>
  );
}
