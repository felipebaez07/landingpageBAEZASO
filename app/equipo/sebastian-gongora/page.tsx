import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Asociado · Abogado de la firma</p>
        <h1>Sebastián Góngora Romero</h1>
        <p>Contratación estatal, litigio ejecutivo, recuperación de cartera y propiedad horizontal.</p>
      </section>

      <section className="page-content grid-two">
        <img
          className="profile-photo-quiet"
          src="/images/team/sebastian-gongora.jpg"
          alt="Sebastián Góngora Romero"
          width={502}
          height={460}
        />
        <div>
          <h2>Perfil profesional</h2>
          <p>
            Abogado especialista en Contratación Estatal, con experiencia en
            asesoría jurídica empresarial, gestión contractual, propiedad
            horizontal y representación judicial en asuntos civiles y
            ejecutivos.
          </p>
          <p>
            Su práctica se concentra en contratación estatal, procesos
            ejecutivos y recuperación de cartera, con experiencia en la
            representación y gestión de más de 120 procesos ejecutivos —desde
            la estructuración de demandas y solicitud de medidas cautelares
            hasta la negociación de obligaciones y acuerdos de pago.
          </p>
          <p>
            En propiedad horizontal asesora copropiedades en la recuperación
            de cartera y en la estructuración de procesos contractuales para
            la ejecución de obras y servicios en conjuntos residenciales, con
            atención especial a la distribución de obligaciones,
            responsabilidades y riesgos entre las partes. En contratación
            estatal cuenta además con experiencia en la revisión de procesos
            de selección, estructuración de ofertas y gestión, facturación y
            liquidación de contratos públicos, combinando el rigor jurídico
            con los componentes operativos, comerciales y financieros de cada
            contrato.
          </p>

          <h3>Áreas de práctica</h3>
          <p>
            Contratación Estatal · Procesos Ejecutivos · Cobro y Recuperación
            de Cartera · Propiedad Horizontal · Contratación de Obras en
            Copropiedades · Derecho Contractual · Asesoría Empresarial.
          </p>
          <h3>Experiencia destacada</h3>
          <ul className="plain-list">
            <li>
              <strong>120+ procesos</strong> — Representación en procesos
              ejecutivos y recuperación de cartera.
            </li>
            <li>
              <strong>Contratación estatal</strong> — Estructuración,
              seguimiento, ejecución y liquidación de contratos públicos.
            </li>
            <li>
              <strong>Propiedad horizontal</strong> — Asesoría jurídica,
              recuperación de cartera y estructuración contractual para obras
              en copropiedades.
            </li>
          </ul>
          <h3>Formación académica</h3>
          <ul className="plain-list">
            <li>Especialista en Contratación Estatal — Universidad de La Sabana</li>
            <li>Abogado — Universidad de Ibagué</li>
            <li>
              Diplomado en Administración de la Propiedad Horizontal —
              Politécnico de Suramérica
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
