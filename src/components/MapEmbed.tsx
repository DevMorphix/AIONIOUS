"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin } from "./Icons";

export default function MapEmbed({ query, title }: { query: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const q = encodeURIComponent(query);

  // Fallback in case the iframe finished loading before hydration and onLoad was missed.
  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 10000);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className={`map${loaded ? " map--loaded" : ""}`} aria-label="Office location map" aria-busy={!loaded}>
      <div className="map__loader" role="status">
        <div className="map__spin-wrap" aria-hidden="true">
          <span className="map__spinner" />
          <MapPin className="map__pin" width={20} height={20} />
        </div>
        <span>Loading map…</span>
      </div>
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${q}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
      />
      <a
        className="btn btn--white btn--sm map__open"
        href={`https://www.google.com/maps/search/?api=1&query=${q}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Google Maps <ArrowUpRight width={14} height={14} />
      </a>
    </section>
  );
}
