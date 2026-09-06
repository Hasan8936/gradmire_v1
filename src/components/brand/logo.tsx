import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "color" | "white" | "navy";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { width: 32, height: 32 },
  md: { width: 48, height: 48 },
  lg: { width: 64, height: 64 },
};

export function Logo({
  variant = "color",
  size = "md",
  className = "",
}: LogoProps) {
  const { width, height } = sizeMap[size];

  const logoSource = {
    color: "/gradmire-logo.png",
    white: "/gradmire-logo-white.png",
    navy: "/gradmire-logo.png",
  }[variant];

  return (
    <Image
      src={logoSource}
      alt="Gradmire"
      width={width}
      height={height}
      className={`transition-all duration-200 ${className}`}
      priority
    />
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
