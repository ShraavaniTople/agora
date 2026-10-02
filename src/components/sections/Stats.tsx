"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

function Counter({ target, prefix = "", suffix = "", inView }: { target: number; prefix?: string; suffix?: string; inView: boolean }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setValue(Math.round(v)) });
    return () => ctrl.stop();
  }, [inView, target]);
  return <>{prefix}{value}{suffix}</>;
}

const stats = [
  { label: "months ramp saved",   target: 6,   prefix: "",  suffix: "+",  color: "#6321EE", desc: "Typical SDR ramp eliminated. AGORA agents deploy in days, not months." },
  { label: "saved vs in-house",   target: 150, prefix: "$", suffix: "K",  color: "#7FFFD4", desc: "Salary, benefits, tools, and management overhead — replaced with variable pods aligned to outcomes." },
  { label: "conversion lift",     target: 2,   prefix: "+", suffix: "%",  color: "#9B65FF", desc: "2% lift on a $10M pipeline = $200K added revenue. At scale, marginal gains compound fast." },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />

      <div ref={ref} className="px-8 sm:px-14 lg:px-20 xl:px-28 py-20 lg:py-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 40 }}
        >
          Results
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.10, ease: EASE }}
              className="py-8 sm:py-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingRight: i < 2 ? 40 : 0 }}
            >
              <div
                className="font-black tabular-nums"
                style={{ fontSize: "clamp(64px, 8vw, 96px)", lineHeight: 0.9, letterSpacing: "-0.055em", marginBottom: 14, color: "#ffffff" }}
              >
                <Counter target={s.target} prefix={s.prefix} suffix={s.suffix} inView={inView} />
              </div>
              <p style={{ fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
                {s.label}
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.65, maxWidth: 240 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
    </section>
  );
}
