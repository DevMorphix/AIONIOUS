"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  // Render the final value on the server so crawlers and no-JS users see real numbers.
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1400, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setDisplay(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className="stat__value">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <ul className="stats">
      {stats.map((s, i) => (
        <li key={s.label} className={`stat${i === 1 ? " stat--accent" : ""}`}>
          <span className="stat__bar" aria-hidden="true" />
          <Counter value={s.value} suffix={s.suffix} />
          <span className="stat__label">{s.label}</span>
        </li>
      ))}
    </ul>
  );
}
