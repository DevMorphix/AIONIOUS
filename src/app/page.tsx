import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import SectionTag from "@/components/SectionTag";
import Stats from "@/components/Stats";
import ServiceCard from "@/components/ServiceCard";
import WhyChoose from "@/components/WhyChoose";
import CtaBand from "@/components/CtaBand";
import Testimonials from "@/components/Testimonials";
import { ArrowUpRight, BarChart } from "@/components/Icons";
import { services, site } from "@/lib/site";
import { HOME_TITLE, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: HOME_TITLE,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  const featured = services.filter((s) => s.featured);

  return (
    <>
      <HeroSlider />

      {/* Who We Are */}
      <section id="about" className="section about full-height"aria-labelledby="about-title">
        <div className="container about__grid">
          <div className="about__media">
            <Image
              src="/images/about.jpg"
              alt="AIONIOUS consultants presenting a financial strategy to clients"
              width={1000}
              height={667}
              sizes="(max-width: 900px) 100vw, 520px"
            />
            <span className="about__badge" aria-hidden="true"><BarChart width={30} height={30} /></span>
          </div>
          <div className="about__text">
            <SectionTag>About Aionious</SectionTag>
            <h2 id="about-title" className="h2">Who We Are</h2>
            <p className="pill">Established in {site.founded}.</p>
            <p>
              <strong>Vision</strong> is to be a highly respected and trusted professional firm known for its quality
              services and commitment to client success. To be regionally recognized as the accounting firm of choice
              for providing comprehensive financial and professional services to entrepreneurs, individuals and
              businesses alike while providing a working environment where members can grow and succeed in the
              industry.
            </p>
            <p>
              <strong>Mission</strong> is to provide clients with valuable financial insights, ensure regulatory
              compliance, and help the entrepreneurs and firms to achieve their financial goals through high-quality
              auditing, accounting, tax planning, and business advisory services.
            </p>
            <Link href="/about" className="btn btn--primary btn--sm">
              Know More <ArrowUpRight width={14} height={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experts + stats */}
      <section className="section experts" aria-labelledby="experts-title">
        <div className="container">
          <div className="experts__head">
            <h2 id="experts-title" className="h2">The Right Experts to Solve Your Tax Challenges</h2>
            <p>
              We specialize in providing expert tax solutions tailored to your unique financial situation. With
              trusted, certified, and experienced professionals, we navigate complex tax laws, maximize savings,
              ensure compliance, and support the financial growth of your business.
            </p>
          </div>
          <Stats />
        </div>
      </section>

      {/* Services */}
      <section className="section services-dark" aria-labelledby="services-title">
        <div className="container">
          <header className="section-head section-head--center">
            <SectionTag light>Our Core Services</SectionTag>
            <h2 id="services-title" className="h2 h2--light">Explore Our Professional Services</h2>
          </header>
          <div className="services-grid">
            {featured.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="center">
            <Link href="/services" className="btn btn--primary btn--sm">
              View All Services <ArrowUpRight width={14} height={14} />
            </Link>
          </div>
        </div>
      </section>

      <WhyChoose />
      <CtaBand />
      <Testimonials />
    </>
  );
}
