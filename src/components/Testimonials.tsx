"use client";

import Image from "next/image";
import { useRef } from "react";
import SectionTag from "./SectionTag";
import { ChevronLeft, ChevronRight, Quote, Star } from "./Icons";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="section testimonials full-height" aria-labelledby="testimonials-title">
      <Image src="/images/testimonial-bg.jpg" alt="Modern office where AIONIOUS meets clients"fill sizes="100vw" className="testimonials__bg" />
      <div className="container testimonials__inner">
        <header className="section-head section-head--center">
          <SectionTag>Testimonials</SectionTag>
          <h2 id="testimonials-title" className="h2">What They Say</h2>
        </header>

        <div className="testimonials__slider">
          <button type="button" className="slider-arrow slider-arrow--prev" onClick={() => scroll(-1)} aria-label="Previous testimonial">
            <ChevronLeft />
          </button>
          <ul ref={track} className="testimonials__track">
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure className="testimonial">
                  <div className="testimonial__stars" role="img" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }, (_, i) => <Star key={i} />)}
                  </div>
                  <Quote className="testimonial__quote-icon" />
                  <blockquote>
                    <p>&ldquo;{t.quote}</p>
                    <p>{t.detail}&rdquo;</p>
                  </blockquote>
                  <figcaption>— {t.name}, {t.role}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <button type="button" className="slider-arrow slider-arrow--next" onClick={() => scroll(1)} aria-label="Next testimonial">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
