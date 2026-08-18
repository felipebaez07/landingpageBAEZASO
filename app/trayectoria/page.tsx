import Link from "next/link";
import EntityShowcase, { type EntityShowcaseItem } from "../../components/EntityShowcase";

const stats: [string, string][] = [
  ["340+", "procesos judiciales atendidos"],
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
    ["Institución Universitaria de El Espinal"],
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

const entityShowcase: EntityShowcaseItem[] = [
  {
    name: "Gobernación del Tolima",
    context: "Asesoría externa en defensa judicial y consultoría jurídica territorial.",
    logo: "/images/entities/gobernacion-tolima.svg",
  },
  {
    name: "Alcaldía de Ibagué",
    context: "Acompañamiento en procesos contencioso-administrativos y gestión territorial.",
    logo: "/images/entities/alcaldia-ibague.svg",
  },
  {
    name: "Alcaldía de El Guamo",
    context: "Representación judicial y asesoría a la administración municipal.",
    logo: "/images/entities/alcaldia-el-guamo.svg",
  },
  {
    name: "Congreso de la República — Cámara de Representantes",
    context: "Producción normativa y conceptos jurídicos para la actividad legislativa.",
    logo: "/images/entities/camara-representantes.svg",
  },
  {
    name: "Concejo Municipal de Ibagué",
    context: "Elaboración y discusión de proyectos de acuerdo y control político.",
    logo: "/images/entities/concejo-ibague.png",
  },
  {
    name: "Concejo Municipal de El Espinal",
    context: "Asesoría en producción normativa municipal y control político.",
    logo: "/images/entities/concejo-el-espinal.jpg",
  },
  {
    name: "Personería Municipal de Ibagué",
    context: "Consultoría jurídica en el ejercicio del ministerio público.",
    logo: "/images/entities/personeria-ibague.png",
  },
  {
    name: "Contraloría Municipal de Ibagué",
    context: "Conceptos y respuestas jurídicas ante el organismo de control fiscal.",
    logo: "/images/entities/contraloria-ibague.png",
  },
  {
    name: "Institución Universitaria de El Espinal",
    context: "Docencia universitaria y dirección del Consultorio Jurídico.",
    logo: "/images/entities/uniespinal.png",
  },
  {
    name: "Construaliados S.A.S.",
    context: "Asesoría legal y prevención de riesgos en proyectos de construcción.",
    logo: "/images/entities/construaliados.webp",
  },
  {
    name: "Construmédicos S.A.S.",
    context: "Consultoría jurídica y contractual para proyectos de infraestructura.",
  },
  {
    name: "Inversiones y Construcciones de Occidente S.A.S.",
    context: "Acompañamiento legal en inversión y desarrollo de proyectos.",
  },
  {
    name: "Construservicios B&H S.A.S.",
    context: "Asesoría contractual y de cumplimiento normativo.",
    logo: "/images/entities/construservicios-byh.webp",
  },
  {
    name: "Concretos Ibagué S.A.S.",
    context: "Consultoría jurídica en contratación y operación del negocio.",
    logo: "/images/entities/concretos-ibague.png",
  },
  {
    name: "Trefiaceros A&C S.A.S.",
    context: "Acompañamiento legal en contratación y riesgos empresariales.",
  },
  {
    name: "PRICA S.A.S.",
    context: "Asesoría jurídica en proyectos de ingeniería y consultoría técnica.",
  },
  {
    name: "Hacienda El Escobal",
    context: "Asesoría legal patrimonial y contractual.",
    logo: "/images/entities/hacienda-el-escobal.jpg",
  },
  {
    name: "Golden Club",
    context: "Consultoría jurídica y contractual del negocio.",
    logo: "/images/entities/golden-club.jpg",
  },
  {
    name: "Gestión Legal Empresarial S.A.S.",
    context: "Coordinación de asesoría jurídica empresarial integral.",
  },
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Experiencia</p>
        <h1>Trayectoria</h1>
        <p>
          Una práctica construida desde 2021 mediante litigio, consultoría,
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
          Más allá de los cargos, esto es lo que la práctica de la firma pone
          a disposición de cada cliente.
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
        <EntityShowcase items={entityShowcase} />
        <div className="entities" style={{ marginTop: 56 }}>
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
