"use client";

import { useEffect, useRef, useState } from "react";

export type EntityShowcaseItem = {
  name: string;
  context: string;
  logo?: string;
};

const STOP_WORDS = new Set(["de", "del", "la", "el", "los", "las", "y", "en", "&"]);

function initials(name: string) {
  const words = name.split(/\s+/).filter((w) => !STOP_WORDS.has(w.toLowerCase()));
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function EntityShowcase({ items }: { items: EntityShowcaseItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion || items.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 4800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, items.length]);

  if (items.length === 0) return null;

  const go = (next: number) => setIndex((next + items.length) % items.length);
  const current = items[index];

  return (
    <div
      className="entity-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <button
        type="button"
        className="entity-showcase-nav"
        aria-label="Entidad anterior"
        onClick={() => go(index - 1)}
      >
        ‹
      </button>

      <div
        className="entity-showcase-card"
        key={index}
        role="group"
        aria-roledescription="diapositiva"
        aria-label={`${index + 1} de ${items.length}`}
      >
        <div className="entity-showcase-logo">
          {current.logo ? (
            <img src={current.logo} alt="" loading="lazy" />
          ) : (
            <span className="entity-showcase-fallback" aria-hidden="true">
              {initials(current.name)}
            </span>
          )}
        </div>
        <div className="entity-showcase-body">
          <strong>{current.name}</strong>
          <p>{current.context}</p>
        </div>
      </div>

      <button
        type="button"
        className="entity-showcase-nav"
        aria-label="Entidad siguiente"
        onClick={() => go(index + 1)}
      >
        ›
      </button>

      <div className="entity-showcase-dots" role="tablist" aria-label="Seleccionar entidad">
        {items.map((item, i) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={item.name}
            className={`entity-showcase-dot${i === index ? " is-active" : ""}`}
            onClick={() => go(i)}
          />
        ))}
        <button
          type="button"
          className="entity-showcase-pause"
          aria-pressed={paused}
          aria-label={paused ? "Reanudar avance automático" : "Pausar avance automático"}
          onClick={() => setPaused((v) => !v)}
        >
          {paused ? "▶" : "❚❚"}
        </button>
      </div>
    </div>
  );
}
