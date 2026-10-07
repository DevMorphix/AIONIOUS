import Link from "next/link";
import Logo from "./Logo";
import { Facebook, Instagram, LinkedIn, Mail, MapPin, Phone } from "./Icons";
import { fullAddress, site, telHref } from "@/lib/site";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`social ${className}`} aria-label="Social media">
      <li><a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a></li>
      <li><a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a></li>
      <li><a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a></li>
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="light" />
          <p>
            Established in {site.founded}, AIONIOUS Management Solutions delivers accurate, timely, and
            trusted financial services to individuals, startups, and businesses alike.
          </p>
          <SocialLinks />
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h2 className="footer__title">Quick Links</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__title">Contact</h2>
          <address className="footer__contact">
            <p><MapPin width={15} height={15} /><span>{fullAddress}</span></p>
            <p><Mail width={15} height={15} /><a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p>
              <Phone width={15} height={15} />
              <span>
                <a href={telHref(site.phones[0])}>{site.phones[0]}</a>,{" "}
                <a href={telHref(site.phones[1])}>{site.phones[1]}</a>
                <br />
                <a href={telHref(site.landline)}>{site.landline}</a>
              </span>
            </p>
          </address>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} AIONIOUS Management Solutions. All rights reserved.</p>
        <p>Developed &amp; Managed by Devmorphix</p>
      </div>
    </footer>
  );
}
