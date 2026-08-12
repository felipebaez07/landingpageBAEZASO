import Link from "next/link";

const stats: [string, string][] = [
  ["340+", "procesos judiciales y constitucionales atendidos"],
  ["70 %", "tasa aproximada de éxito en asuntos concluidos"],
  ["143", "procesos asumidos en defensa directa de entidades públicas"],
  ["70+", "asuntos gestionados de forma simultánea"],
  ["100+", "acciones constitucionales"],
  ["100+", "procesos contencioso-administrativos"],
  ["14", "proyectos de acuerdo elaborados o discutidos"],
  ["3–4", "productos normativos y conceptos al mes"],
];

const competencias: [string, string][] = [
  [
    "Defensa judicial del Estado",
    "Asume de forma directa la representación de entidades públicas, con control simultáneo de carteras de más de 70 asuntos, términos, audiencias y decisiones estratégicas.",
  ],
  [
    "Litigio contencioso y constitucional",
    "Interviene en procesos contencioso-administrativos y acciones constitucionales —tutelas, populares y de cumplimiento— con una tasa aproximada de éxito del 70 % en los asuntos concluidos.",
  ],
  [
    "Derecho electoral",
    "Analiza inhabilidades, requisitos y procedimientos de elección, y ha intervenido en controversias de nulidad electoral de personerías, contralorías, concejales y gobernadores.",
  ],
  [
    "Derecho urbano, inmobiliario y ordenamiento territorial",
    "Asesora proyectos urbanísticos y trámites de licenciamiento, traduciendo instrumentos de planeación y normativa en rutas jurídicas aplicables a cada proyecto.",
  ],
  [
    "Producción normativa y control político",
    "Redacta y discute proyectos de acuerdo, conceptos y respuestas a organismos de control para concejos municipales, el Congreso de la República y entidades territoriales.",
  ],
  [
    "Asesoría corporativa y contratación privada",
    "Coordina la representación judicial, la consultoría y la prevención de riesgos legales de empresas de construcción e inversión, integrando el análisis jurídico con la operación del negocio.",
  ],
];

const entities: [string, string[]][] = [
  [
    "Sector público · administración territorial",
    ["Gobernación del Tolima", "Alcaldía de Ibagué", "Alcaldía de El Guamo"],
  ],
  [
    "Corporaciones públicas, control político y electoral",
    [
      "Congreso de la República — Cámara de Representantes",
      "Concejo Municipal de Ibagué",
      "Concejo Municipal de El Espinal",
      "Personería Municipal de Ibagué",
      "Contraloría Municipal de Ibagué",
    ],
  ],
  [
    "Educación superior",
    ["Universidad de Ibagué", "Institución Universitaria de El Espinal"],
  ],
  [
    "Sector privado · construcción, ingeniería e inversión",
    [
      "Construaliados S.A.S.",
      "Construmédicos S.A.S.",
      "Inversiones y Construcciones de Occidente S.A.S.",
      "Construservicios B&H S.A.S.",
      "Concretos Ibagué S.A.S.",
      "Trefiaceros A&C S.A.S.",
      "Proyectos de Ingeniería, Consultoría y Asesorías PRICA S.A.S.",
      "Hacienda El Escobal",
      "Golden Club",
      "Gestión Legal Empresarial S.A.S.",
    ],
  ],
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Experiencia</p>
        <h1>Trayectoria</h1>
        <p>
          Una práctica construida desde 2018 mediante litigio, consultoría,
          producción normativa, gestión pública y docencia.
        </p>
      </section>

      <section className="section practice">
        <p className="eyebrow">Resultados de trayectoria</p>
        <h2>Cifras que respaldan el criterio.</h2>
        <div className="stats-grid">
          {stats.map(([n, l]) => (
            <div className="stat" key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="page-content">
        <h2>Qué puede encontrar en este acompañamiento.</h2>
        <p className="section-note">
          Más allá de los cargos, esto es lo que la práctica de Nicolás Báez
          Tobar pone a disposición de cada cliente.
        </p>
        <div className="list-cards" style={{ marginTop: 40 }}>
          {competencias.map(([t, d]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-content">
        <h2>Entidades y empresas asesoradas.</h2>
        <p className="section-note">
          Vinculaciones ejecutadas desde la firma, como asesor externo o
          mediante contratos de prestación de servicios profesionales, con
          autonomía técnica y administrativa.
        </p>
        <div className="entities">
          {entities.map(([group, items]) => (
            <div className="entity-group" key={group}>
              <h3>{group}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="page-content grid-two">
        <div>
          <h2>Formación y docencia.</h2>
          <ul className="plain-list">
            <li>
              <strong>Candidato a Magíster en Derecho y Gestión Urbanística</strong>{" "}
              — Universidad del Rosario (en curso)
            </li>
            <li>
              <strong>Especialista en Derecho Urbano</strong> — Universidad
              del Rosario, 2026
            </li>
            <li>
              <strong>Especialista en Derecho Administrativo</strong> —
              Universidad de Ibagué, 2022
            </li>
            <li>
              <strong>Abogado</strong> — Universidad de Ibagué, 2022
            </li>
          </ul>
        </div>
        <div>
          <h3>Docencia e investigación</h3>
          <p>
            Docente catedrático e investigador en Uniespinal (2025 –
            actualidad), donde ha dictado Derechos Humanos y Acciones
            Constitucionales, y jefe del Área de Derecho Público del
            Consultorio Jurídico de la Universidad de Ibagué.
          </p>
          <h3>Publicaciones</h3>
          <ul className="plain-list">
            <li>
              La inteligencia artificial como potencial criterio auxiliar para
              la solución de controversias (2024)
            </li>
            <li>
              Responsabilidad del Estado por el hecho de las leyes
              inconstitucionales en Colombia (2022)
            </li>
            <li>
              Medios de control ante la jurisdicción de lo contencioso
              administrativo (2021)
            </li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <p className="eyebrow">Hablemos de su caso</p>
        <h2>Lleve este criterio a su asunto.</h2>
        <Link className="button gold" href="/contacto">
          Agendar una consulta
        </Link>
      </section>
    </>
  );
}
