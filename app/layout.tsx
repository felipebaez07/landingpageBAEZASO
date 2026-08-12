import type { Metadata, Viewport } from "next";
import Link from "next/link";

import "./globals.css";
import MotionObserver from "../components/MotionObserver";
import SiteHeader from "../components/SiteHeader";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600;1,700;1,800&family=Public+Sans:wght@400;500;600;700;800&display=swap";

export const metadata: Metadata = {
  title: {
    default: "Báez Tobar Abogados",
    template: "%s | Báez Tobar Abogados",
  },
  description:
    "Firma de abogados en Colombia: asesoría jurídica estratégica, cercana y responsable en derecho urbano, civil, contractual y empresarial.",
  keywords: [
    "Báez Tobar Abogados",
    "abogados Colombia",
    "derecho urbano e inmobiliario",
    "derecho civil y contractual",
    "asesoría jurídica empresarial",
  ],
  openGraph: {
    title: "Báez Tobar Abogados",
    description:
      "Asesoría jurídica estratégica, cercana y responsable para personas y empresas.",
    locale: "es_CO",
    type: "website",
    siteName: "Báez Tobar Abogados",
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
      </head>
      <body>
        <SiteHeader links={links} />

        <main className="page-transition">{children}</main>

        <MotionObserver />

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <Link href="/" className="brand brand-footer">
                <span className="brand-name" translate="no">BÁEZ TOBAR</span>
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
              <p>Atención con cita previa.</p>
              <Link href="/contacto" className="text-link">
                Agendar consulta →
              </Link>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Báez Tobar Abogados. Todos los
              derechos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}