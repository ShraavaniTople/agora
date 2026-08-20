/**
 * Agora logomark: circle with the inscribed geometric A.
 * Replace with final brand asset when available.
 */
export function AgoraMark({
  size = 32,
  color = "currentColor",
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="4" />
      {/* Left leg of A — extends past the apex, crossing the right leg */}
      <line x1="20" y1="74" x2="55" y2="18" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Right leg of A — extends past the apex, crossing the left leg */}
      <line x1="80" y1="74" x2="45" y2="18" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Horizontal crossbar */}
      <line x1="33" y1="53" x2="67" y2="53" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
