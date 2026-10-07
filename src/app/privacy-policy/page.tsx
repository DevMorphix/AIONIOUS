import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { fullAddress, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How AIONIOUS Management Solutions collects, uses and protects the personal and financial information you share with us through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" crumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
      <section className="section">
        <div className="container prose">
          <p>
            {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what
            information we collect through this website and how we use it.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you contact us by phone, email or through the contact form, we receive the details you choose to
            share, such as your name, email address, phone number and information about your enquiry.
          </p>
          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your enquiries and provide the services you request</li>
            <li>To meet our legal, regulatory and tax compliance obligations</li>
            <li>To improve our website and services</li>
          </ul>
          <h2>Confidentiality</h2>
          <p>
            Financial and personal information shared with us is treated as strictly confidential. We do not sell
            or rent your information to third parties. We share it only where required by law or with your consent.
          </p>
          <h2>Data security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your information against
            unauthorised access, loss or misuse.
          </p>
          <h2>Contact</h2>
          <p>
            For any questions about this policy, contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or
            write to us at {fullAddress}.
          </p>
        </div>
      </section>
    </>
  );
}
