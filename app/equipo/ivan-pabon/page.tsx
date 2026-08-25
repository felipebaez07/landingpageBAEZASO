import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Abogado</p>
        <h1>Iván Felipe Pabón Rocha</h1>
        <p>Contratación estatal, gestión pública y consultoría estratégica.</p>
      </section>

      <section className="page-content grid-two">
        <img
          className="profile-photo-quiet"
          src="/images/team/ivan-pabon.jpg"
          alt="Iván Felipe Pabón Rocha"
          width={502}
          height={460}
        />
        <div>
          <h2>Perfil profesional</h2>
          <p>
            Abogado especialista en Contratación Estatal de la Universidad
            Externado de Colombia y especialista en Gobierno y Gestión para
            el Desarrollo Regional y Municipal de la Universidad Católica de
            Colombia.
          </p>
          <p>
            Con más de 6 años de experiencia profesional, enfocado en la
            asesoría jurídica, representación judicial y consultoría
            estratégica en asuntos públicos y privados. Su ejercicio combina
            el rigor técnico de la contratación pública con una mirada
            integral de la gestión territorial, acompañando a entidades y
            particulares en decisiones que exigen tanto respaldo jurídico
            como sentido práctico.
          </p>

          <h3>Áreas de enfoque</h3>
          <p>
            Contratación estatal · Asesoría jurídica y consultoría
            estratégica · Representación judicial · Gestión pública y
            desarrollo territorial.
          </p>
          <h3>Formación académica</h3>
          <ul className="plain-list">
            <li>
              Especialista en Contratación Estatal — Universidad Externado de
              Colombia
            </li>
            <li>
              Especialista en Gobierno y Gestión para el Desarrollo Regional y
              Municipal — Universidad Católica de Colombia
            </li>
          </ul>
          <Link className="text-link dark" href="/equipo" style={{ marginTop: 12, display: "inline-block" }}>
            ← Volver al equipo
          </Link>
        </div>
      </section>
    </>
  );
}
