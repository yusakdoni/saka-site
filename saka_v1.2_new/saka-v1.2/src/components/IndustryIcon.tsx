type IconName = "plane" | "crane" | "cross" | "flask" | "cloud";

export default function IndustryIcon({ name, className }: { name: IconName; className?: string }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none" as const };
  const stroke = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  const paths: Record<IconName, JSX.Element> = {
    plane: (
      <path
        {...stroke}
        d="M10.5 3.5 12 2l1.5 1.5-1 5 6.5 4-.3 1.6-6.6-1.6-.7 4.4 2.1 1.6-.2 1.3-3.3-1-3.3 1-.2-1.3 2.1-1.6-.7-4.4-6.6 1.6-.3-1.6 6.5-4-1-5Z"
      />
    ),
    crane: (
      <path
        {...stroke}
        d="M4 21h9M6 21V9l7-5v3M13 7h6l-2 3M9 9v12M9 12h4M4 21l2-3"
      />
    ),
    cross: (
      <path {...stroke} d="M12 3v18M4.5 8h15a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    ),
    flask: (
      <path
        {...stroke}
        d="M9 2h6M10 3v6.2L4.8 18a1.6 1.6 0 0 0 1.4 2.4h11.6a1.6 1.6 0 0 0 1.4-2.4L14 9.2V3M7.5 15h9"
      />
    ),
    cloud: (
      <path
        {...stroke}
        d="M7 18h10a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 8.1 9.1 4 4 0 0 0 7 18Z"
      />
    ),
  };

  return (
    <svg {...common} className={className}>
      {paths[name]}
    </svg>
  );
}
