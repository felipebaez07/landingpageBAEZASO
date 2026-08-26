import { whatsappHref } from "../../lib/whatsapp";

const stats: [string, string][] = [
  ["340+", "procesos judiciales atendidos"],
  ["70 %", "tasa aproximada de éxito en asuntos concluidos"],
  ["143", "procesos asumidos en defensa directa de entidades públicas"],
  ["70+", "asuntos gestionados de forma simultánea"],
  ["100+", "acciones constitucionales"],
  ["100+", "procesos contencioso-administrativos"],
  ["14", "proyectos de acuerdo elaborados o discutidos"],
  ["3–4", "productos normativos y conceptos al mes"],
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Cifras y resultados</p>
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
