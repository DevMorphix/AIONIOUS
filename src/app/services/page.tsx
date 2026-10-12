import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionTag from "@/components/SectionTag";
import ServiceCard from "@/components/ServiceCard";
import WhyChoose from "@/components/WhyChoose";
import CtaBand from "@/components/CtaBand";
import { serviceBySlug, serviceCategories } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Accounting, Tax, GST & UAE Corporate Services",
  description:
    "Bookkeeping, financial statements, income tax returns, GST registration and filing, plus UAE corporate tax and VAT services from AIONIOUS, Thiruvalla.",
  path: "/services",
  image: { url: "/images/corporate-tax.jpg", alt: "Tax documents and calculator" },
});

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Accounting, tax, GST and UAE corporate services – all under one roof."
        crumbs={[{ name: "Services", href: "/services" }]}
      />

      <nav className="category-nav" aria-label="Service categories">
        <div className="container">
          <ul>
            {serviceCategories.map((c) => (
              <li key={c.key}>
                <a href={`#${c.key}`}>{c.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {serviceCategories.map((c, i) => (
        <section
          key={c.key}
          id={c.key}
          className={`section service-group${i % 2 === 1 ? " services-light" : ""}`}
          aria-labelledby={`${c.key}-title`}
        >
          <div className="container">
            <header className="section-head section-head--center">
              <SectionTag>{`0${i + 1} · What We Offer`}</SectionTag>
              <h2 id={`${c.key}-title`} className="h2">{c.title}</h2>
              <p className="section-intro">{c.intro}</p>
            </header>
            <div className="services-grid">
              {c.slugs.map((slug) => {
                const s = serviceBySlug(slug);
                return s ? <ServiceCard key={slug} service={s} /> : null;
              })}
            </div>
          </div>
        </section>
      ))}

      <WhyChoose />
      <CtaBand />
    </>
  );
}
