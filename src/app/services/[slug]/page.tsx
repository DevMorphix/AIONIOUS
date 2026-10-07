import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { ArrowUpRight, Check, Mail, Phone } from "@/components/Icons";
import { services, site, telHref } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const title = service.metaTitle ?? `${service.title} in Thiruvalla, Kerala`;
  return pageMeta({
    title: title.length > 46 ? `${service.title} in Kerala` : title,
    description: `${title} by AIONIOUS. ${service.short}`,
    path: `/services/${service.slug}`,
    image: { url: service.image, alt: service.title },
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: ["India", "United Arab Emirates"],
  };

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.short}
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
              alt={service.title}
              width={800}
              height={500}
              className="service-detail__img"
              sizes="(max-width: 900px) 100vw, 760px"
              priority
            />
            <h2 className="h2">{service.title}</h2>
            <p>{service.description}</p>
            <h3>What&apos;s included</h3>
            <ul className="check-list">
              {service.points.map((p) => (
                <li key={p}><Check width={16} height={16} />{p}</li>
              ))}
            </ul>
            <p>
              Talk to our specialists today. Every engagement comes with a dedicated account manager, clear
              timelines and transparent pricing.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Schedule a Free Consultation <ArrowUpRight width={14} height={14} />
            </Link>
          </article>

          <aside className="service-detail__aside">
            <nav className="aside-card" aria-label="All services">
              <h2>All Services</h2>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={s.slug === service.slug ? "is-active" : undefined}
                      aria-current={s.slug === service.slug ? "page" : undefined}
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="aside-card aside-card--dark">
              <h2>Need Help?</h2>
              <p>Speak to an expert about {service.title.toLowerCase()}.</p>
              <p><Phone width={15} height={15} /> <a href={telHref(site.phones[0])}>{site.phones[0]}</a></p>
              <p><Phone width={15} height={15} /> <a href={telHref(site.phones[1])}>{site.phones[1]}</a></p>
              <p><Mail width={15} height={15} /> <a href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={serviceLd} />
    </>
  );
}
