import type { Metadata, Viewport } from "next";
import Link from "next/link";

import "./globals.css";
import MotionObserver from "../components/MotionObserver";
import SiteHeader from "../components/SiteHeader";
import AccessibilityWidget from "../components/AccessibilityWidget";
import ContactFloat from "../components/ContactFloat";
import { WHATSAPP_NUMBER, whatsappHref } from "../lib/whatsapp";

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("bt-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}var s=localStorage.getItem("bt-text-scale");if(s){document.documentElement.style.fontSize=s+"%"}}catch(e){}})();`;

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600;1,700;1,800&family=Public+Sans:wght@400;500;600;700;800&display=swap";

export const metadata: Metadata = {
  title: {
    default: "Baez Tobar Abogados",
    template: "%s | Baez Tobar Abogados",
  },
  description:
    "Firma de abogados en Colombia: asesoría jurídica estratégica, cercana y responsable en derecho urbano, civil, contractual y empresarial.",
  keywords: [
    "Baez Tobar Abogados",
    "abogados Colombia",
    "derecho urbano e inmobiliario",
    "derecho civil y contractual",
    "asesoría jurídica empresarial",
  ],
  openGraph: {
    title: "Baez Tobar Abogados",
    description:
      "Asesoría jurídica estratégica, cercana y responsable para personas y empresas.",
    locale: "es_CO",
    type: "website",
    siteName: "Baez Tobar Abogados",
  },
};

export const viewport: Viewport = {
  themeColor: "#061a2e",
};

const links = [
  { href: "/", label: "Inicio" },
  { href: "/firma", label: "La firma" },
  { href: "/areas-de-practica", label: "Áreas de práctica" },
  { href: "/trayectoria", label: "Trayectoria" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/equipo", label: "Equipo" },
  { href: "/contacto", label: "Contacto" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_URL} />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <SiteHeader links={links} />

        <main className="page-transition">{children}</main>

        <MotionObserver />
        <AccessibilityWidget />
        <ContactFloat />

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <Link href="/" className="brand brand-footer">
                <span className="brand-name" translate="no">BAEZ TOBAR</span>
                <span className="brand-description">ABOGADOS</span>
              </Link>

              <p>
                Asesoría jurídica con criterio, claridad y compromiso.
              </p>
            </div>

            <nav className="footer-navigation" aria-label="Navegación secundaria">
              <span className="footer-nav-title">Navegación</span>
              {links.slice(1).map(({ href, label }) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>

            <div className="footer-contact">
              <span className="footer-nav-title">Contacto</span>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                WhatsApp: 318 694 1836
              </a>
              <a href="mailto:baezcorporativo@gmail.com">baezcorporativo@gmail.com</a>
              <a
                href={whatsappHref("Hola, quisiera agendar una consulta jurídica con Baez Tobar Abogados.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Agendar consulta →
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Baez Tobar Abogados. Todos los
              derechos reservados.
            </p>
            <p className="footer-credit">
              Desarrollado por Felipe Baez Tobar ·{" "}
              <a href="mailto:felipebaez7tobar@gmail.com">felipebaez7tobar@gmail.com</a> ·{" "}
              <a href="mailto:felipe.baez@hytrex.co">felipe.baez@hytrex.co</a> ·{" "}
              <a href="tel:+573022467449">302 246 7449</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}