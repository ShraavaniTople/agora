"use client";

const ITEMS = [
  "Healthcare Outreach",
  "Recruiting Firms",
  "Commercial Real Estate",
  "Speed-to-Lead",
  "Live Call Coaching",
  "Full Campaign Reporting",
  "Georgia Tech Backed",
  "No Fixed Overhead",
  "Deploy in 2 Weeks",
  "Performance-Based Pay",
];

export default function TrustMarquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="relative overflow-hidden py-5"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.055)",
        borderBottom: "1px solid rgba(255,255,255,0.055)",
        background: "rgba(255,255,255,0.012)",
        maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap" style={{ gap: 0 }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 flex-shrink-0" style={{ paddingRight: 56 }}>
            <span
              style={{
                width: 4, height: 4, borderRadius: "50%", flexShrink: 0, display: "inline-block",
                background: i % 3 === 0 ? "#6321EE" : i % 3 === 1 ? "#7FFFD4" : "#7ACCC8",
                boxShadow: i % 3 === 0 ? "0 0 6px #6321EE" : i % 3 === 1 ? "0 0 6px #7FFFD4" : "0 0 6px #7ACCC8",
              }}
            />
            <span style={{
              fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(244,246,255,0.28)",
            }}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
