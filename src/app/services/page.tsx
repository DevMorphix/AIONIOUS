import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionTag from "@/components/SectionTag";
import ServiceCard from "@/components/ServiceCard";
import WhyChoose from "@/components/WhyChoose";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Tax, VAT & Accounting Services in Kerala",
  description:
    "Corporate tax, VAT registration and filing, transfer pricing, bookkeeping, financial reporting and UAE company setup from AIONIOUS in Thiruvalla.",
  path: "/services",
  image: { url: "/images/corporate-tax.jpg", alt: "Tax documents and calculator" },
});

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Complete tax, accounting and advisory solutions under one roof."
        crumbs={[{ name: "Services", href: "/services" }]}
      />
      <section className="section services-light" aria-labelledby="all-services-title">
        <div className="container">
          <header className="section-head section-head--center">
            <SectionTag>What We Offer</SectionTag>
            <h2 id="all-services-title" className="h2">Explore Our Professional Services</h2>
          </header>
          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
      <WhyChoose />
      <CtaBand />
    </>
  );
}
