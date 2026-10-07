import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionTag from "@/components/SectionTag";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import CtaBand from "@/components/CtaBand";
import { ArrowUpRight, BarChart, Check } from "@/components/Icons";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Us – Tax & Accounting Firm in Thiruvalla",
  description:
    "Meet AIONIOUS Management Solutions, a Thiruvalla tax and accounting firm established in June 2025. Read our vision, mission and values.",
  path: "/about",
  image: { url: "/images/about.jpg", alt: "AIONIOUS team in a client strategy meeting" },
});

const values = [
  "Integrity and confidentiality in every engagement",
  "Accuracy and timeliness you can rely on",
  "Personal attention from a dedicated manager",
  "Practical advice that supports real growth",
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Trusted tax, accounting and advisory partners for growing businesses."
        crumbs={[{ name: "About Us", href: "/about" }]}
      />

      <section className="section about" aria-labelledby="who-title">
        <div className="container about__grid">
          <div className="about__media">
            <Image
              src="/images/about.jpg"
              alt="AIONIOUS team in a client strategy meeting"
              width={1000}
              height={667}
              sizes="(max-width: 900px) 100vw, 520px"
            />
            <span className="about__badge" aria-hidden="true"><BarChart width={30} height={30} /></span>
          </div>
          <div className="about__text">
            <SectionTag>About Aionious</SectionTag>
            <h2 id="who-title" className="h2">Who We Are</h2>
            <p className="pill">Established in {site.founded}.</p>
            <p>
              AIONIOUS Management Solutions is a professional firm based at {site.address.building},{" "}
              {site.address.street}, {site.address.locality}, {site.address.city}, Kerala. We provide tax,
              accounting, VAT, corporate tax, transfer pricing and business advisory services to individuals,
              startups and established businesses in India, with dedicated support for company setup in the UAE.
            </p>
            <p>
              Our team of certified specialists combines deep regulatory knowledge with a personal, responsive
              approach, so every client knows exactly where they stand.
            </p>
          </div>
        </div>
      </section>

      <section className="section vm" aria-label="Vision and mission">
        <div className="container vm__grid">
          <article className="vm__card">
            <h2>Our Vision</h2>
            <p>
              To be a highly respected and trusted professional firm known for its quality services and commitment
              to client success. To be regionally recognized as the accounting firm of choice for providing
              comprehensive financial and professional services to entrepreneurs, individuals and businesses alike
              while providing a working environment where members can grow and succeed in the industry.
            </p>
          </article>
          <article className="vm__card vm__card--accent">
            <h2>Our Mission</h2>
            <p>
              To provide clients with valuable financial insights, ensure regulatory compliance, and help
              entrepreneurs and firms achieve their financial goals through high-quality auditing, accounting, tax
              planning, and business advisory services.
            </p>
          </article>
          <article className="vm__card">
            <h2>Our Values</h2>
            <ul className="check-list">
              {values.map((v) => (
                <li key={v}><Check width={16} height={16} />{v}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section experts" aria-labelledby="numbers-title">
        <div className="container">
          <div className="experts__head">
            <h2 id="numbers-title" className="h2">The Right Experts to Solve Your Tax Challenges</h2>
            <p>
              Trusted, certified, and experienced professionals who navigate complex tax laws, maximize savings, and
              ensure compliance.
            </p>
          </div>
          <Stats />
          <div className="center" style={{ marginTop: 40 }}>
            <Link href="/services" className="btn btn--primary btn--sm">
              Explore Our Services <ArrowUpRight width={14} height={14} />
            </Link>
          </div>
        </div>
      </section>

      <WhyChoose />
      <CtaBand />
    </>
  );
}
