import { LogoMark } from "./Logo";

export default function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`section-tag${light ? " section-tag--light" : ""}`}>
      <LogoMark size={16} />
      <span>{children}</span>
    </p>
  );
}
