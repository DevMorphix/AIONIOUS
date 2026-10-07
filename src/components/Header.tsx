"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowUpRight, Close, Menu, Phone } from "./Icons";
import { navLinks, site, telHref } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="container header__inner">
        <Logo />

        <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Main navigation">
          <ul className="nav__list">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`nav__link${isActive(l.href) ? " is-active" : ""}`}
                  aria-current={isActive(l.href) ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn--primary btn--sm nav__cta-mobile">
            Get Quote <ArrowUpRight width={14} height={14} />
          </Link>
        </nav>

        <div className="header__actions">
          <div className="header__phone">
            <span className="header__phone-icon"><Phone width={15} height={15} /></span>
            <span>
              <a href={telHref(site.phones[0])}>{site.phones[0]}</a>
              {" | "}
              <a href={telHref(site.phones[1])}>{site.phones[1]}</a>
            </span>
          </div>
          <Link href="/contact" className="btn btn--primary btn--sm">
            Get Quote <ArrowUpRight width={14} height={14} />
          </Link>
          <button
            type="button"
            className="header__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
