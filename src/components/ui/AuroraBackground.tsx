"use client";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Layer 1 — primary brand purple, center mass */}
      <div className="aurora-blob aurora-1" />
      {/* Layer 2 — violet, upper-left drift */}
      <div className="aurora-blob aurora-2" />
      {/* Layer 3 — teal/mint, lower-right drift */}
      <div className="aurora-blob aurora-3" />
      {/* Layer 4 — indigo, upper-right */}
      <div className="aurora-blob aurora-4" />
      {/* Layer 5 — aqua, slow center wander */}
      <div className="aurora-blob aurora-5" />
      {/* Grain — adds depth and physicality */}
      <div className="aurora-grain" />
    </div>
  );
}
