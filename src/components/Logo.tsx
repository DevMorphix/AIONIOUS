import Link from "next/link";

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M33 4c-7 10-9 19-4 30 2 5 3 11 2 18 9-9 10-20 5-30-3-6-4-12-3-18z" fill="#1a8fd8" />
      <path d="M10 20c-2 13 4 26 18 32-3-7-4-14-7-20-2-5-6-9-11-12z" fill="#4b5563" />
      <path d="M54 20c-5 3-9 7-11 12-3 6-4 13-7 20 14-6 20-19 18-32z" fill="#4b5563" />
    </svg>
  );
}

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className={`logo logo--${variant}`}>
      <LogoMark />
      <span className="logo__text">
        <span className="logo__name">AIONIOUS</span>
        <span className="logo__sub">Management Solutions</span>
      </span>
    </Link>
  );
}
