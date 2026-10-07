import SectionTag from "./SectionTag";
import { Briefcase } from "./Icons";
import { whyChoose } from "@/lib/site";

export default function WhyChoose() {
  return (
    <section className="section why full-height" aria-labelledby="why-title">
      <div className="container">
        <header className="section-head section-head--center">
          <SectionTag>Why Choose Aionious</SectionTag>
          <h2 id="why-title" className="h2">Your Trusted Partner in Financial Success</h2>
        </header>
        <ul className="why__grid">
          {whyChoose.map((w) => (
            <li key={w.title} className="why__item">
              <span className="why__icon"><Briefcase width={22} height={22} /></span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
