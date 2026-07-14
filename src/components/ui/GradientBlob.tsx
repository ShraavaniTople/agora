"use client";

import { motion } from "framer-motion";

interface GradientBlobProps {
  className?: string;
  color1?: string;
  color2?: string;
  size?: number;
  delay?: number;
}

export default function GradientBlob({
  className = "",
  color1 = "#6321EE",
  color2 = "#7FFFD4",
  size = 600,
  delay = 0,
}: GradientBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color1}33 0%, ${color2}22 50%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.5, 0.8, 0.5],
        x: [0, 20, -10, 0],
        y: [0, -15, 10, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
