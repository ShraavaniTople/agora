"use client";

const stats = [
  {
    value: "3–6",
    unit: "Months",
    tag: "Time Eliminated",
    label: "Typical SDR ramp time — gone.",
    detail: "The average new hire takes 3–6 months to hit quota. AGORA deploys pre-qualified agents in days.",
    color: "#6321EE",
    glow: "rgba(99,33,238,0.35)",
    border: "rgba(99,33,238,0.5)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6321EE" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    value: "$150K",
    unit: "Per Head",
    tag: "Cost Avoided",
    label: "Fully-loaded SDR cost — avoided.",
    detail: "Salary, benefits, tools, management overhead. Variable pods replace fixed payroll.",
    color: "#7FFFD4",
    glow: "rgba(127,255,212,0.22)",
    border: "rgba(127,255,212,0.45)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7FFFD4" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    value: "2%",
    unit: "Lift",
    tag: "Revenue Impact",
    label: "Small lift, outsized revenue impact.",
    detail: "A 2% conversion improvement on a $10M pipeline = $200K. At scale, marginal gains compound fast.",
    color: "#7ACCC8",
    glow: "rgba(122,204,200,0.25)",
    border: "rgba(122,204,200,0.45)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7ACCC8" strokeWidth="1.8" strokeLinecap="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "#0D0A0C" }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.6), transparent)" }} />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{
          width: 800, height: 400,
          background: "radial-gradient(ellipse, rgba(99,33,238,0.1) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(80px)",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[11px] font-black tracking-[0.28em] uppercase text-[#6321EE] mb-4">
            By The Numbers
          </p>
          <h2
            className="font-black text-white tracking-[-0.03em] leading-none"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            The numbers{" "}
            <span className="gradient-text">don&apos;t lie</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card group relative rounded-2xl p-7 lg:p-8 overflow-hidden cursor-default"
              style={{
                background: `linear-gradient(145deg, #1A1320 0%, #120E16 50%, #0D090C 100%)`,
                border: `1px solid rgba(255,255,255,0.09)`,
                boxShadow: `0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)`,
                transition: "transform 0.28s cubic-bezier(0.22,1,0.36,1), box-shadow 0.28s ease, border-color 0.28s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-8px)";
                el.style.boxShadow = `0 24px 64px ${stat.glow}, 0 0 0 1px ${stat.border}`;
                el.style.borderColor = stat.border;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.boxShadow = "";
                el.style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Gradient top border */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent 0%, ${stat.color} 40%, ${stat.color} 60%, transparent 100%)` }}
              />

              {/* Subtle always-on top glow, amplified on hover */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
                style={{
                  background: `radial-gradient(ellipse at 50% -10%, ${stat.glow} 0%, transparent 55%)`,
                  opacity: 0.5,
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                style={{
                  background: `radial-gradient(ellipse at top center, ${stat.glow} 0%, transparent 60%)`,
                }}
              />

              {/* Tag + icon row */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="flex items-center gap-2 px-2.5 py-1 rounded-lg"
                  style={{
                    background: `${stat.color}14`,
                    border: `1px solid ${stat.color}25`,
                  }}
                >
                  {stat.icon}
                  <span
                    className="text-[10px] font-black tracking-widest uppercase"
                    style={{ color: stat.color }}
                  >
                    {stat.tag}
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* The number — big, bold, floating */}
              <div className="mb-5">
                <div className="flex items-end gap-2.5 leading-none">
                  <span
                    className="font-black tracking-[-0.04em] text-white"
                    style={{ fontSize: "clamp(56px, 8vw, 80px)", lineHeight: 1 }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-bold pb-1.5 tracking-tight"
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      color: stat.color,
                      lineHeight: 1,
                    }}
                  >
                    {stat.unit}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-5"
                style={{ background: `linear-gradient(90deg, ${stat.color}30, transparent)` }}
              />

              {/* Label + detail */}
              <p className="text-[14px] font-semibold text-white/85 mb-2 leading-snug">
                {stat.label}
              </p>
              <p className="text-[12px] text-white/35 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(127,255,212,0.2), transparent)" }} />
    </section>
  );
}
