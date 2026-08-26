import Link from "next/link";
import EntityShowcase, { type EntityShowcaseItem } from "../../components/EntityShowcase";
import { whatsappHref } from "../../lib/whatsapp";

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
        <p className="eyebrow">Confianza institucional</p>
        <h1>Experiencia</h1>
        <p>
          Entidades públicas, corporaciones y empresas que han confiado en la
          firma.
        </p>
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
        <a
          className="button gold"
          href={whatsappHref("Hola, quisiera agendar una consulta jurídica con Baez Tobar Abogados.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar una consulta
        </a>
      </section>
    </>
  );
}
