"use client";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

function WireframeCube({
  size,
  rgb,
  rotX = 20,
  initRotY = 0,
  speed = 24,
  float = 14,
  style,
  delay = 0,
  edgeAlpha = 0.65,
}: {
  size: number;
  rgb: string;
  rotX?: number;
  initRotY?: number;
  speed?: number;
  float?: number;
  style?: CSSProperties;
  delay?: number;
  edgeAlpha?: number;
}) {
  const h = size / 2;

  const face = (xf: string, a: number): CSSProperties => ({
    position: "absolute",
    inset: 0,
    transform: xf,
    border: `1.5px solid rgba(${rgb}, ${(a * edgeAlpha).toFixed(2)})`,
    background: `rgba(${rgb}, ${(a * edgeAlpha * 0.1).toFixed(3)})`,
    boxShadow:
      a >= 0.9
        ? `0 0 ${Math.round(size * 0.14)}px rgba(${rgb}, 0.22), inset 0 0 ${Math.round(size * 0.18)}px rgba(${rgb}, 0.05)`
        : undefined,
    boxSizing: "border-box",
  });

  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        transformStyle: "preserve-3d",
        rotateX: rotX,
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateY: [initRotY, initRotY + 360],
        y: [0, -float, 0],
      }}
      transition={{
        opacity: { duration: 1.1, delay },
        scale: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
        rotateY: { duration: speed, repeat: Infinity, ease: "linear", delay },
        y: {
          duration: 5 + delay * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <div style={face(`translateZ(${h}px)`, 1.0)} />
      <div style={face(`rotateY(180deg) translateZ(${h}px)`, 0.38)} />
      <div style={face(`rotateY(90deg) translateZ(${h}px)`, 0.66)} />
      <div style={face(`rotateY(-90deg) translateZ(${h}px)`, 0.52)} />
      <div style={face(`rotateX(90deg) translateZ(${h}px)`, 0.82)} />
      <div style={face(`rotateX(-90deg) translateZ(${h}px)`, 0.28)} />
    </motion.div>
  );
}

export default function HeroBlocks() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        perspective: "1100px",
        perspectiveOrigin: "50% 45%",
        pointerEvents: "none",
        zIndex: 3,
        overflow: "hidden",
      }}
    >
      {/* Large purple — left side, fills left column */}
      <WireframeCube
        size={260}
        rgb="99,33,238"
        rotX={22}
        initRotY={15}
        speed={34}
        float={20}
        edgeAlpha={0.68}
        style={{ left: "2%", top: "20%" }}
        delay={0.2}
      />
      {/* Large teal — right side */}
      <WireframeCube
        size={220}
        rgb="127,255,212"
        rotX={18}
        initRotY={-20}
        speed={28}
        float={15}
        edgeAlpha={0.62}
        style={{ right: "3%", top: "25%" }}
        delay={0.5}
      />
      {/* Medium purple — top area, right of center */}
      <WireframeCube
        size={155}
        rgb="99,33,238"
        rotX={38}
        initRotY={45}
        speed={23}
        float={12}
        edgeAlpha={0.55}
        style={{ right: "21%", top: "4%" }}
        delay={0.9}
      />
      {/* Medium teal — top area, left of center */}
      <WireframeCube
        size={135}
        rgb="122,204,200"
        rotX={30}
        initRotY={-50}
        speed={21}
        float={10}
        edgeAlpha={0.52}
        style={{ left: "21%", top: "6%" }}
        delay={0.7}
      />
      {/* Small aqua — lower left */}
      <WireframeCube
        size={115}
        rgb="122,204,200"
        rotX={15}
        initRotY={-30}
        speed={19}
        float={10}
        edgeAlpha={0.50}
        style={{ left: "12%", bottom: "18%" }}
        delay={1.2}
      />
      {/* Small purple — lower right */}
      <WireframeCube
        size={125}
        rgb="99,33,238"
        rotX={28}
        initRotY={60}
        speed={17}
        float={13}
        edgeAlpha={0.50}
        style={{ right: "0%", bottom: "24%" }}
        delay={0.4}
      />
      {/* Extra teal — far left edge, partially clipped */}
      <WireframeCube
        size={160}
        rgb="127,255,212"
        rotX={20}
        initRotY={80}
        speed={26}
        float={16}
        edgeAlpha={0.42}
        style={{ left: "-4%", bottom: "35%" }}
        delay={1.5}
      />
    </div>
  );
}
