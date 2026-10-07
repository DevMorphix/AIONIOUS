import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionTag from "@/components/SectionTag";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { Globe, Mail, MapPin, Phone } from "@/components/Icons";
import { fullAddress, site, telHref } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Us – Free Consultation in Thiruvalla",
  description: `Call ${site.phones[0]} or email ${site.email} to book a free tax and accounting consultation at our Eraviperoor, Thiruvalla office.`,
  path: "/contact",
});

const mapQuery = `${site.address.building}, ${site.address.street}, ${site.address.locality}, ${site.address.city} ${site.address.postalCode}`;

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch for a free consultation with our experts."
        crumbs={[{ name: "Contact Us", href: "/contact" }]}
      />

      <section className="section" aria-labelledby="contact-title">
        <div className="container contact">
          <div className="contact__info">
            <SectionTag>Get In Touch</SectionTag>
            <h2 id="contact-title" className="h2">Let&apos;s Talk About Your Business</h2>
            <p>
              Whether you&apos;re starting your business or optimizing finances, our team is ready to help. Reach
              us by phone, email or visit our office.
            </p>

            <ul className="info-cards">
              <li className="info-card">
                <span className="info-card__icon"><MapPin /></span>
                <div>
                  <h3>Office Address</h3>
                  <address>{fullAddress}</address>
                </div>
              </li>
              <li className="info-card">
                <span className="info-card__icon"><Phone /></span>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href={telHref(site.phones[0])}>{site.phones[0]}</a>
                    <br />
                    <a href={telHref(site.phones[1])}>{site.phones[1]}</a>
                    <br />
                    <a href={telHref(site.landline)}>{site.landline}</a> (Office)
                  </p>
                </div>
              </li>
              <li className="info-card">
                <span className="info-card__icon"><Mail /></span>
                <div>
                  <h3>Email</h3>
                  <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
                </div>
              </li>
              <li className="info-card">
                <span className="info-card__icon"><Globe /></span>
                <div>
                  <h3>Website</h3>
                  <p><a href={site.url}>www.aioniousms.com</a></p>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact__form-wrap">
            <h2 className="contact__form-title">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <MapEmbed query={mapQuery} title="AIONIOUS Management Solutions location on Google Maps" />
    </>
  );
}
