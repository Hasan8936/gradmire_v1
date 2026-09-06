import Link from "next/link";

interface LogoProps {
  variant?: "color" | "white" | "navy";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { width: "32px", height: "auto" },
  md: { width: "120px", height: "auto" },
  lg: { width: "160px", height: "auto" },
};

export function Logo({
  variant = "color",
  size = "md",
  className = "",
}: LogoProps) {
  const { width } = sizeMap[size];

  return (
    <svg
      width={width}
      height="auto"
      viewBox="0 0 300 120"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={`transition-all duration-200 ${className}`}
      aria-label="Gradmire"
    >
      <defs>
        <style>{`
          .gradmire-text {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 56px;
            font-weight: 700;
            fill: ${variant === 'white' ? '#FFFFFF' : '#11446A'};
            letter-spacing: -1px;
          }
        `}</style>
      </defs>

      {/* Plane icon */}
      <g transform="translate(10, 15)">
        <path
          d="M 35 5 L 50 35 L 40 40 L 25 25 L 15 45 L 10 43 L 20 20 L 5 20 Z"
          fill="none"
          stroke={variant === 'white' ? '#FFFFFF' : '#11446A'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Gradmire text */}
      <text x="70" y="65" className="gradmire-text">
        Gradmire
      </text>

      {/* Graduation cap icon */}
      <g transform="translate(270, 22)">
        <rect x="0" y="0" width="28" height="4" rx="1" fill={variant === 'white' ? '#FFFFFF' : '#11446A'} />
        <path
          d="M 2 4 L 14 -8 L 26 4"
          fill={variant === 'white' ? '#FFFFFF' : '#11446A'}
          stroke={variant === 'white' ? '#FFFFFF' : '#11446A'}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line x1="14" y1="0" x2="14" y2="12" stroke={variant === 'white' ? '#FFFFFF' : '#11446A'} strokeWidth="2" />
      </g>
    </svg>
  );
}

interface LogoLinkProps extends LogoProps {
  href?: string;
}

export function LogoLink({
  href = "/",
  variant = "color",
  size = "md",
  className = "",
}: LogoLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 transition-opacity hover:opacity-75 ${className}`}
    >
      <Logo variant={variant} size={size} />
      <span className="font-display font-semibold text-ink">Gradmire</span>
    </Link>
  );
}
