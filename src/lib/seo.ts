import type { Metadata } from "next";
import { site } from "./site";

export const HOME_TITLE = "Accounting, Tax & GST Services in Thiruvalla | AIONIOUS";

const DEFAULT_IMAGE = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "AIONIOUS Management Solutions – Your Financial Growth, Our Expertise",
};

// Builds a complete, per-page metadata set. Next.js replaces (not merges) nested
// objects like openGraph, so every page must supply all of these fields together.
export function pageMeta({
  title,
  description,
  path,
  image,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
  absoluteTitle?: boolean;
}): Metadata {
  const ogImage = image ? { ...image, width: 800, height: 533 } : DEFAULT_IMAGE;
  const fullTitle = absoluteTitle ? title : `${title} | ${site.shortName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
