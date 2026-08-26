// Deterministic abstract "editorial" cover art, generated from a text seed.
// Used as a placeholder visual (hero, cards, work/service covers) so the site
// isn't empty before real photography is available. No external images,
// no licensing risk. Swap for a real <Image> once photos exist — see README.

function hashSeed(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

const PALETTES: [string, string, string][] = [
  ["#1E46A5", "#121E32", "#5B7FD1"],
  ["#121E32", "#1E46A5", "#8FA6DA"],
  ["#0F1729", "#2C58BE", "#B9C7EA"],
  ["#1E46A5", "#0B1220", "#9FB3E0"],
];

export default function CoverArt({
  seed,
  className,
  variant = "card",
}: {
  seed: string;
  className?: string;
  variant?: "card" | "hero";
}) {
  const h = hashSeed(seed);
  const [c1, c2, c3] = PALETTES[h % PALETTES.length];
  const angle = h % 360;
  const cx = 20 + (h % 60);
  const cy = 15 + ((h >> 3) % 50);
  const r1 = 30 + (h % 40);
  const lines = 5 + (h % 5);
  const gridId = `grid-${h}`;
  const gradId = `grad-${h}`;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="SAKA Solusindo"
    >
      <defs>
        <linearGradient id={gradId} gradientTransform={`rotate(${angle})`}>
          <stop offset="0%" stopColor={c2} />
          <stop offset="100%" stopColor={c1} />
        </linearGradient>
        <pattern id={gridId} width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M 26 0 L 0 0 0 26" fill="none" stroke={c3} strokeOpacity="0.18" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="400" height="300" fill={`url(#${gradId})`} />
      <rect width="400" height="300" fill={`url(#${gridId})`} />

      <circle cx={cx * 4} cy={cy * 3} r={r1} fill={c3} fillOpacity="0.16" />
      <circle cx={cx * 4} cy={cy * 3} r={r1 * 0.55} fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1" />

      {Array.from({ length: lines }).map((_, i) => (
        <line
          key={i}
          x1={0}
          y1={40 + i * (220 / lines)}
          x2={400}
          y2={10 + i * (220 / lines)}
          stroke="#FFFFFF"
          strokeOpacity={variant === "hero" ? 0.06 : 0.09}
          strokeWidth="1"
        />
      ))}

      <rect x="24" y="24" width="60" height="1.5" fill="#FFFFFF" fillOpacity="0.6" />
    </svg>
  );
}
