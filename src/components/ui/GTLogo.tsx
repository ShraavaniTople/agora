/**
 * Georgia Tech interlocking GT mark.
 * Approximated from the official GT brand mark — swap for official asset when available.
 */
export default function GTLogo({
  size = 28,
  className,
}: {
  size?: number;
  className?: string;
}) {
  // Official GT gold
  const gold = "#CFB53B";
  // Framer reference: 36w × 24.5h → ratio ≈ 1.47
  const w = size * 1.47;
  const h = size;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 88 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Georgia Tech"
    >
      {/* ── G ─────────────────────────────────────── */}
      {/* Left vertical stroke */}
      <rect x="0"  y="0"  width="12" height="60" fill={gold} />
      {/* Top horizontal stroke */}
      <rect x="0"  y="0"  width="50" height="13" fill={gold} />
      {/* Bottom horizontal stroke */}
      <rect x="0"  y="47" width="50" height="13" fill={gold} />
      {/* Inner crossbar (the element that turns C into G) */}
      <rect x="22" y="32" width="28" height="11" fill={gold} />

      {/* ── T ─────────────────────────────────────── */}
      {/* Crossbar — extends past the G's right edge */}
      <rect x="22" y="0"  width="66" height="13" fill={gold} />
      {/* Vertical stem */}
      <rect x="56" y="0"  width="14" height="60" fill={gold} />
    </svg>
  );
}
