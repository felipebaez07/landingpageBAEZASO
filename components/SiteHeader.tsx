"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { whatsappHref } from "../lib/whatsapp";

type NavLink = { href: string; label: string };

const AGENDAR_HREF = whatsappHref(
  "Hola, quisiera agendar una consulta jurídica con Baez Tobar Abogados."
);

export default function SiteHeader({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Baez Tobar Abogados — ir al inicio">
          <img src="/images/logo-mark.png" alt="" className="brand-logo" width={44} height={44} />
          <span className="brand-text">
            <span className="brand-name" translate="no">BAEZ TOBAR</span>
            <span className="brand-description">Abogados</span>
          </span>
        </Link>

        <nav
          className={`main-navigation${open ? " main-navigation--open" : ""}`}
          aria-label="Navegación principal"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="navigation-link"
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <a
            href={AGENDAR_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="header-action header-action--mobile"
          >
            Agendar consulta
          </a>
        </nav>

        <a
          href={AGENDAR_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="header-action header-action--desktop"
        >
          Agendar consulta
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <button
        type="button"
        className="nav-scrim"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
