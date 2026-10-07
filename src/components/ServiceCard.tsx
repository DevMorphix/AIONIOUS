import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./Icons";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service, headingLevel = 3 }: { service: Service; headingLevel?: 2 | 3 }) {
  const Heading = `h${headingLevel}` as "h2" | "h3";
  return (
    <article className="service-card">
      <Link href={`/services/${service.slug}`} className="service-card__media" tabIndex={-1} aria-hidden="true">
        <Image
          src={service.image}
          alt={`${service.title} service by AIONIOUS Management Solutions`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
        />
      </Link>
      <div className="service-card__body">
        <Heading className="service-card__title">
          <Link href={`/services/${service.slug}`}>{service.title}</Link>
        </Heading>
        <p>{service.short}</p>
        <Link href="/contact" className="link-arrow" aria-label={`Contact us about ${service.title}`}>
          Contact Us <ArrowUpRight width={12} height={12} />
        </Link>
      </div>
    </article>
  );
}
