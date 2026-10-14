import Image from "next/image";
import Link from "next/link";

// Official AIONIOUS mark (public/logo-mark.png, 269×256, transparent background).
const MARK_RATIO = 269 / 256;

export function LogoMark({ size = 40, priority = false }: { size?: number; priority?: boolean }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      width={Math.round(size * MARK_RATIO)}
      height={size}
      priority={priority}
      className="logo-mark"
    />
  );
}

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className={`logo logo--${variant}`}>
      <LogoMark size={42} priority={variant === "dark"} />
      <span className="logo__text">
        <span className="logo__name">AIONIOUS</span>
        <span className="logo__sub">Management Solutions</span>
      </span>
    </Link>
  );
}
