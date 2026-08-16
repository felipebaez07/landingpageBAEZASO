"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark" | "system";

const THEME_KEY = "bt-theme";
const TEXT_SCALE_KEY = "bt-text-scale";
const MIN_SCALE = 85;
const MAX_SCALE = 160;
const DEFAULT_SCALE = 100;

function applyTheme(theme: Theme) {
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem(THEME_KEY);
  } else {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }
}

function applyTextScale(scale: number) {
  if (scale === DEFAULT_SCALE) {
    document.documentElement.style.removeProperty("font-size");
    localStorage.removeItem(TEXT_SCALE_KEY);
  } else {
    document.documentElement.style.fontSize = `${scale}%`;
    localStorage.setItem(TEXT_SCALE_KEY, String(scale));
  }
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  const [textScale, setTextScale] = useState(DEFAULT_SCALE);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const storedScale = localStorage.getItem(TEXT_SCALE_KEY);
    if (storedTheme) setTheme(storedTheme);
    if (storedScale) setTextScale(Number(storedScale));
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  function changeTheme(next: Theme) {
    setTheme(next);
    applyTheme(next);
  }

  function changeScale(value: number) {
    setTextScale(value);
    applyTextScale(value);
  }

  return (
    <div className="a11y-widget" data-open={open} ref={widgetRef}>
      <div className="a11y-panel" role="menu" aria-hidden={!open}>
        <div className="a11y-section">
          <p className="a11y-panel-title">Tamaño de texto</p>
          <div className="a11y-slider-row">
            <input
              type="range"
              min={MIN_SCALE}
              max={MAX_SCALE}
              step={5}
              value={textScale}
              onChange={(event) => changeScale(Number(event.target.value))}
              aria-label="Ajustar tamaño de texto"
              aria-valuetext={`${textScale} por ciento`}
            />
            <span className="a11y-slider-value" aria-hidden="true">
              {textScale}%
            </span>
          </div>
          <button type="button" className="a11y-reset" onClick={() => changeScale(DEFAULT_SCALE)}>
            Restablecer tamaño
          </button>
        </div>

        <div className="a11y-section">
          <p className="a11y-panel-title">Apariencia</p>
          <div className="a11y-row">
            <button type="button" aria-pressed={theme === "light"} onClick={() => changeTheme("light")}>
              Claro
            </button>
            <button type="button" aria-pressed={theme === "dark"} onClick={() => changeTheme("dark")}>
              Oscuro
            </button>
            <button type="button" aria-pressed={theme === "system"} onClick={() => changeTheme("system")}>
              Auto
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="a11y-trigger"
        aria-label="Opciones de accesibilidad: tamaño de texto y apariencia"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Aa
      </button>
    </div>
  );
}
