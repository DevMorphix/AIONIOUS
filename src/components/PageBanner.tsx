import Image from "next/image";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { site } from "@/lib/site";

type Crumb = { name: string; href: string };

export default function PageBanner({
  title,
  subtitle,
  crumbs,
  image = "/images/page-banner.jpg",
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  image?: string;
}) {
  const all = [{ name: "Home", href: "/" }, ...crumbs];
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <section className="page-banner">
      <Image src={image} alt="" fill priority sizes="100vw" className="page-banner__bg" />
      <div className="container page-banner__inner">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumbs">
            {all.map((c, i) => (
              <li key={c.href}>
                {i < all.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <JsonLd data={breadcrumbLd} />
    </section>
  );
}
