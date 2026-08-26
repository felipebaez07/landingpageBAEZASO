const data: [string, string][] = [
  [
    "Defensa judicial del Estado",
    "Representación judicial y extrajudicial de entidades públicas, con más de 140 procesos asumidos de forma directa y gestión simultánea de carteras de alto volumen.",
  ],
  [
    "Derecho administrativo",
    "Actuaciones ante autoridades, conceptos, actos administrativos y defensa de intereses ante organismos de control.",
  ],
  [
    "Litigio contencioso y constitucional",
    "Procesos contencioso-administrativos, tutelas, acciones populares y de cumplimiento, con acompañamiento hasta su resolución.",
  ],
  [
    "Derecho electoral",
    "Nulidad electoral, inhabilidades, requisitos de elección y defensa judicial de actos de corporaciones públicas.",
  ],
  [
    "Derecho urbano, inmobiliario y ordenamiento territorial",
    "Licenciamiento, planeación territorial, propiedad, desarrollo de proyectos y acompañamiento a constructoras.",
  ],
  [
    "Derecho civil y contractual",
    "Contratos, obligaciones, responsabilidad civil, procesos ejecutivos, controversias patrimoniales y prevención de conflictos.",
  ],
  [
    "Producción normativa y control político",
    "Proyectos de acuerdo, proyectos de ley y conceptos técnicos para concejos municipales y el Congreso de la República.",
  ],
  [
    "Asesoría empresarial y contratación privada",
    "Soporte jurídico corporativo, relaciones comerciales y gestión preventiva de riesgos para empresas de construcción e inversión.",
  ],
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Capacidades</p>
        <h1>Áreas de práctica</h1>
        <p>Experiencia jurídica aplicada a entidades públicas, empresas y personas.</p>
      </section>
      <section className="page-content">
        <div className="list-cards">
          {data.map(([a, b]) => (
            <article key={a}>
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
