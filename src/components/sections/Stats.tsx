"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const up = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

function Counter({
  target, prefix = "", suffix = "", inView, duration = 1.6,
}: { target: number; prefix?: string; suffix?: string; inView: boolean; duration?: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, target, duration]);
  return <>{prefix}{value}{suffix}</>;
}

const stats = [
  {
    label: "Time Eliminated",
    target: 6,
    suffix: "+",
    sublabel: "months ramp time",
    desc: "Typical SDR ramp eliminated. AGORA agents deploy in days, not months.",
    color: "#6321EE",
    glow: "rgba(99,33,238,0.32)",
    border: "rgba(99,33,238,0.42)",
    delay: 0,
    featured: false,
  },
  {
    label: "Cost Avoided",
    target: 150,
    prefix: "$",
    suffix: "K",
    sublabel: "per head / year",
    desc: "Salary, benefits, tools, and mgmt overhead — replaced with variable pods aligned to outcomes.",
    color: "#7FFFD4",
    glow: "rgba(127,255,212,0.28)",
    border: "rgba(127,255,212,0.40)",
    delay: 0.1,
    featured: true,
  },
  {
    label: "Revenue Impact",
    target: 2,
    prefix: "+",
    suffix: "%",
    sublabel: "conversion lift",
    desc: "2% lift on a $10M pipeline = $200K added revenue. At scale, marginal gains compound fast.",
    color: "#7ACCC8",
    glow: "rgba(122,204,200,0.24)",
    border: "rgba(122,204,200,0.38)",
    delay: 0.2,
    featured: false,
  },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-24 lg:py-36" style={{ background: "transparent" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.6), transparent)" }}
      />

      {/* Section-local glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(99,33,238,0.10) 0%, transparent 70%)",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.p variants={up} className="text-[11px] font-black tracking-[0.3em] uppercase text-[#6321EE] mb-4">
            Results
          </motion.p>
          <motion.h2
            variants={up}
            className="font-black text-white tracking-[-0.03em] leading-none mb-4"
            style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
          >
            What you save vs.{" "}
            <span className="gradient-text">hiring in-house</span>
          </motion.h2>
          <motion.p variants={up} style={{ color: "rgba(244,246,255,0.38)", fontSize: 15 }} className="max-w-md mx-auto leading-relaxed">
            Building an in-house SDR team means months of ramp time, six-figure salaries, and fixed overhead. AGORA replaces all of that.
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: s.delay }}
              className="group relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                padding: "40px 34px",
                minHeight: s.featured ? 360 : 320,
                background: s.featured
                  ? `linear-gradient(145deg, ${s.glow.replace("0.28", "0.14")} 0%, rgba(8,4,18,0.96) 100%)`
                  : "rgba(255,255,255,0.028)",
                border: `1px solid ${s.border}`,
                backdropFilter: "blur(14px)",
                transition: "all 0.32s cubic-bezier(0.22,1,0.36,1)",
              }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
            >
              {/* Top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${s.color} 35%, ${s.color} 65%, transparent)`,
                }}
              />

              {/* Bloom */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.glow} 0%, transparent 65%)` }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${s.glow.replace(s.featured ? "0.28" : "0.32", "0.18")} 0%, transparent 65%)`,
                }}
              />

              {/* Featured mesh blobs */}
              {s.featured && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="stats-mesh-blob stats-mesh-blob-1" />
                  <div className="stats-mesh-blob stats-mesh-blob-2" />
                  <div className="stats-mesh-blob stats-mesh-blob-3" />
                  <div className="absolute inset-0" style={{ background: "rgba(7,4,15,0.38)" }} />
                </div>
              )}

              <p className="text-[10px] font-bold tracking-[0.24em] uppercase relative z-10" style={{ color: "rgba(244,246,255,0.32)" }}>
                {s.label}
              </p>

              <div className="flex-1 flex flex-col justify-center py-6 relative z-10">
                <div
                  className="font-black text-white tracking-[-0.055em] leading-none tabular-nums"
                  style={{ fontSize: "clamp(60px, 7.5vw, 92px)" }}
                >
                  <Counter target={s.target} prefix={s.prefix} suffix={s.suffix} inView={inView} />
                </div>
                <p className="mt-3 font-semibold tracking-wide text-[14px]" style={{ color: s.color }}>
                  {s.sublabel}
                </p>
              </div>

              <div
                className="mt-auto relative z-10 pt-5"
                style={{ borderTop: `1px solid ${s.color}20` }}
              >
                <p style={{ fontSize: 12, color: "rgba(244,246,255,0.38)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.2), transparent)" }}
      />
    </section>
  );
}
