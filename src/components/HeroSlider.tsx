"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "./Icons";
import { SocialLinks } from "./Footer";

const slides = [
  { src: "/images/hero-2.jpg", alt: "Financial advisors celebrating a successful client outcome" },
  { src: "/images/hero-3.jpg", alt: "Handshake sealing a trusted business partnership" },
  { src: "/images/page-banner.jpg", alt: "Modern corporate office buildings" },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="hero"
      aria-label="Introduction"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={i === 0 ? s.alt : ""}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`hero__bg${i === active ? " is-active" : ""}`}
        />
      ))}
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content">
        <h1 className="hero__title">
          Your Financial Growth,
          <br /> Our Expertise.
        </h1>
        <p className="hero__lead">
          Empowering Entrepreneurs and Businesses with Trusted Tax, Accounting, and Advisory Services.
        </p>
        <div className="hero__actions">
          <Link href="/contact" className="btn btn--dark">
            Get a Free Consultation <ArrowUpRight width={14} height={14} />
          </Link>
          <Link href="/services" className="btn btn--primary">
            Explore Our Services <ArrowUpRight width={14} height={14} />
          </Link>
        </div>
      </div>

      <SocialLinks className="hero__social social--glass" />

      <a href="#about" className="hero__scroll">Scroll Down</a>

      <div className="hero__dots" role="tablist" aria-label="Choose background slide">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1}`}
            className={i === active ? "is-active" : ""}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}
