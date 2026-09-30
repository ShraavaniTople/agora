"use client";

export default function GlobalBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: "#050210",
        overflow: "hidden",
      }}
    >
      {/* Grain texture overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        opacity: 1,
        zIndex: 0,
      }} />

      {/* Large top-center purple bloom — hero anchor */}
      <div
        className="ambient-orb-1"
        style={{
          position: "absolute",
          top: "-18%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 1100,
          height: 1000,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,33,238,0.30) 0%, rgba(99,33,238,0.10) 42%, transparent 68%)",
          filter: "blur(60px)",
        }}
      />

      {/* Top-right purple anchor */}
      <div
        className="ambient-orb-2"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,33,238,0.18) 0%, rgba(99,33,238,0.05) 48%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Bottom-left mint accent */}
      <div
        className="ambient-orb-3"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "0%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(127,255,212,0.12) 0%, rgba(127,255,212,0.03) 52%, transparent 72%)",
          filter: "blur(80px)",
        }}
      />

      {/* Mid-page center fill — keeps sections from going pitch black */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 1400,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(99,33,238,0.08) 0%, transparent 68%)",
          filter: "blur(80px)",
        }}
      />

      {/* Bottom-right teal whisper */}
      <div
        className="ambient-orb-4"
        style={{
          position: "absolute",
          bottom: "8%",
          right: "4%",
          width: 650,
          height: 650,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(122,204,200,0.10) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Very bottom purple sweep */}
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 1200,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(99,33,238,0.15) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
    </div>
  );
}
