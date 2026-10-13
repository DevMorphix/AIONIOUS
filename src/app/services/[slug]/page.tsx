import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import SectionTag from "@/components/SectionTag";
import ServiceCard from "@/components/ServiceCard";
import { ArrowUpRight, Check, Mail, Phone } from "@/components/Icons";
import { serviceBySlug, serviceCategories, services, site, telHref, type Service } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { serviceFaqs } from "@/lib/faqs";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Search title: the first candidate that fits ~46 chars (plus " | AIONIOUS" stays under 60).
function searchTitle(s: Service) {
  const candidates =
    s.category === "uae"
      ? [s.metaTitle, `${s.title} Services`, s.title]
      : [s.metaTitle, `${s.title} in Thiruvalla, Kerala`, `${s.title} in Kerala`, s.title];
  return candidates.find((t): t is string => !!t && t.length <= 46) ?? s.title;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  // Keep the description within ~160 chars; add the tagline only when it fits.
  let description = `${service.title} by AIONIOUS. ${service.short}`;
  if (description.length + service.tagline.length < 160) description += ` ${service.tagline}`;
  return pageMeta({
    title: searchTitle(service),
    description,
    path: `/services/${service.slug}`,
    image: { url: service.image, alt: service.title },
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const category = serviceCategories.find((c) => c.key === service.category)!;
  const faqs = serviceFaqs[service.slug] ?? [];
  const related = category.slugs
    .filter((s) => s !== service.slug)
    .map(serviceBySlug)
    .filter((s): s is Service => !!s)
    .slice(0, 3);
  const areaServed =
    service.slug === "bookkeeping" ? ["India", "United Arab Emirates"] : service.category === "uae" ? ["United Arab Emirates"] : ["India"];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    category: category.title,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed,
  };

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.tagline}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` },
        ]}
      />

      <section className="section">
        <div className="container service-detail">
          <article className="service-detail__main">
            <Image
              src={service.image}
              alt={`${service.title} – ${category.title} by AIONIOUS`}
              width={800}
              height={500}
              className="service-detail__img"
              sizes="(max-width: 900px) 100vw, 760px"
              priority
            />
            <SectionTag>{category.title}</SectionTag>
            <h2 className="h2">{service.title}</h2>
            <p className="lead">{service.short}</p>
            <p>{service.description}</p>
            <h3>What&apos;s included</h3>
            <ul className="check-list">
              {service.points.map((p) => (
                <li key={p}><Check width={16} height={16} />{p}</li>
              ))}
            </ul>
            <p>
              Talk to our specialists today. Every engagement comes with a dedicated manager, clear timelines and
              transparent fees.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Schedule a Free Consultation <ArrowUpRight width={14} height={14} />
            </Link>
          </article>

          <aside className="service-detail__aside">
            {serviceCategories.map((c) => (
              <nav key={c.key} className="aside-card" aria-label={c.title}>
                <h2>{c.title}</h2>
                <ul>
                  {c.slugs.map((slug) => {
                    const s = serviceBySlug(slug)!;
                    const active = s.slug === service.slug;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={active ? "is-active" : undefined}
                          aria-current={active ? "page" : undefined}
                        >
                          {s.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}
            <div className="aside-card aside-card--dark">
              <h2>Need Help?</h2>
              <p>Speak to an expert about {service.title}.</p>
              <p><Phone width={15} height={15} /> <a href={telHref(site.phones[0])}>{site.phones[0]}</a></p>
              <p><Phone width={15} height={15} /> <a href={telHref(site.phones[1])}>{site.phones[1]}</a></p>
              <p><Mail width={15} height={15} /> <a href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>
          </aside>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="section faq" aria-labelledby="faq-title">
          <div className="container faq__inner">
            <header className="section-head section-head--center">
              <SectionTag>FAQs</SectionTag>
              <h2 id="faq-title" className="h2">{service.title}: Common Questions</h2>
            </header>
            <div className="faq__list">
              {faqs.map((f, i) => (
                <details key={f.q} className="faq__item" open={i === 0}>
                  <summary>
                    <h3>{f.q}</h3>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section services-light" aria-labelledby="related-title">
          <div className="container">
            <header className="section-head section-head--center">
              <SectionTag>{category.title}</SectionTag>
              <h2 id="related-title" className="h2">Related Services</h2>
            </header>
            <div className="services-grid">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
      <JsonLd data={serviceLd} />
      {faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
    </>
  );
}
