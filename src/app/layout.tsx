import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Motion from "@/components/Motion";
import { services, site } from "@/lib/site";
import { HOME_TITLE, pageMeta } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMeta({ title: HOME_TITLE, description: site.description, path: "/", absoluteTitle: true }),
  title: { default: HOME_TITLE, template: `%s | ${site.shortName}` },
  applicationName: site.name,
  keywords: [
    "tax consultant Thiruvalla",
    "accounting services Kerala",
    "corporate tax registration",
    "VAT registration",
    "VAT filing",
    "transfer pricing",
    "bookkeeping services",
    "annual corporate tax filing",
    "company setup in UAE",
    "financial advisory Pathanamthitta",
    "AIONIOUS Management Solutions",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, email: true, address: true },
  category: "finance",
};

export const viewport: Viewport = {
  themeColor: "#1572c4",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["AccountingService", "LocalBusiness"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/images/hero-2.jpg`,
      description: site.description,
      email: site.email,
      telephone: site.phones[0],
      contactPoint: [...site.phones, site.landline].map((telephone) => ({
        "@type": "ContactPoint",
        telephone,
        contactType: "customer service",
        areaServed: ["IN", "AE"],
        availableLanguage: ["English", "Malayalam"],
      })),
      foundingDate: site.foundedISO,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${site.address.building}, ${site.address.street}, ${site.address.locality}`,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.countryCode,
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      sameAs: Object.values(site.social),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tax, Accounting & Advisory Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.short, url: `${site.url}/services/${s.slug}` },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={montserrat.variable}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
        <JsonLd data={organizationLd} />
      </body>
    </html>
  );
}
