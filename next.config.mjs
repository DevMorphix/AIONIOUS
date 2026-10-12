const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Optimised images are content-addressed by URL + width, so they can be cached for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
  async redirects() {
    // Service pages from the first version of the site, mapped to their replacements.
    const oldServices = {
      "corporate-tax-registration": "/services/uae-corporate-tax-registration",
      "free-vat-registration": "/services/uae-vat-registration",
      "annual-corporate-tax-filing": "/services/uae-annual-corporate-tax-filing",
      "quarterly-vat-filing": "/services/uae-quarterly-vat-filing",
      "accounting-services": "/services/financial-accounting-and-reporting",
      "financial-reporting": "/services/financial-accounting-and-reporting",
      "transfer-pricing-analysis": "/services",
      "dedicated-account-manager": "/services",
      "business-valuation-and-bank-account": "/services",
      "company-setup-in-uae": "/services#uae",
    };
    return [
      ...Object.entries(oldServices).map(([slug, destination]) => ({
        source: `/services/${slug}`,
        destination,
        permanent: true,
      })),
      // Canonical host is www (matches metadataBase, sitemap and structured data).
      {
        source: "/:path*",
        has: [{ type: "host", value: "aioniousms.com" }],
        destination: "https://www.aioniousms.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
