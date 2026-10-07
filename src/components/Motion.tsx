"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronLeft } from "./Icons";

// Elements that animate in on scroll. Kept here (not as markup attributes) so the
// page components stay clean. Siblings get a staggered delay.
const REVEAL_SELECTORS = [
  ".section-head",
  ".about__media",
  ".about__text",
  ".experts__head > *",
  ".stat",
  ".service-card",
  ".why__item",
  ".cta__inner > *",
  ".testimonials__slider",
  ".vm__card",
  ".info-card",
  ".contact__info > .h2",
  ".contact__form-wrap",
  ".service-detail__main",
  ".aside-card",
  ".prose",
].join(",");

export default function Motion() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  // Scroll-reveal. Content is only hidden once JS has run and the user allows motion,
  // so crawlers and no-JS visitors always see everything.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    // Skip anything already on screen: it was painted by the server render, and
    // hiding it now would cause a flicker.
    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS)).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight
    );
    els.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
      const index = Math.max(0, siblings.indexOf(el));
      el.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 90}ms`);
      el.classList.add("reveal");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Scroll progress bar + back-to-top visibility.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setShowTop(window.scrollY > 600);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <button
        type="button"
        className={`back-to-top${showTop ? " is-shown" : ""}`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronLeft style={{ transform: "rotate(90deg)" }} />
      </button>
    </>
  );
}
