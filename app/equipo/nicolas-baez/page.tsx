import Link from "next/link";

const stats: [string, string][] = [
  ["2021", "en ejercicio profesional"],
  ["340+", "procesos atendidos"],
  ["70 %", "tasa aprox. de éxito"],
  ["143", "asuntos en defensa del Estado"],
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Fundador · Abogado principal</p>
        <h1>Nicolás Baez Tobar</h1>
        <p>Derecho público, litigio estratégico y gestión jurídica del Estado.</p>
      </section>

      <section className="page-content grid-two">
        <img
          style={{ width: "100%", maxHeight: 620, objectFit: "cover", objectPosition: "top" }}
          src="/images/team/nicolas-baez.jpg"
          alt="Nicolás Baez Tobar"
          width={502}
          height={620}
        />
        <div>
          <h2>Perfil profesional</h2>
          <p>
            Abogado especialista en Derecho Administrativo y Derecho Urbano, y
            candidato a Magíster en Derecho y Gestión Urbanística.
          </p>
          <p>
            Con más de 6 años de experiencia, ejerce con especial énfasis en
            el litigio estratégico, la defensa judicial y la consultoría
            pública y privada — un enfoque que complementa con su labor como
            columnista de opinión y docente, aportando una mirada actualizada
            y rigurosa a cada asunto que asume.
          </p>
          <p>
            Ha intervenido en más de 340 procesos judiciales y
            constitucionales — más de 200 gestionados desde su firma y 143
            asumidos directamente en defensa de entidades públicas — con una
            tasa global de resultados favorables cercana al 70 % en los
            asuntos concluidos.
          </p>

          <div className="mini-stats">
            {stats.map(([n, l]) => (
              <div key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>

          <h3>Enfoque</h3>
          <p>
            Defensa judicial del Estado · Derecho administrativo y electoral ·
            Derecho urbano, inmobiliario y ordenamiento territorial ·
            Asesoría corporativa y contratación privada.
          </p>
          <h3>Forma de trabajo</h3>
          <p>
            Atención cercana, análisis detallado, comunicación clara y
            estrategias ajustadas a cada cliente, sosteniendo simultáneamente
            carteras de litigio, consultoría y compromisos académicos
            mediante priorización de riesgos y disciplina de ejecución.
          </p>
          <h3>Formación académica</h3>
          <ul className="plain-list">
            <li>Candidato a Magíster en Derecho y Gestión Urbanística — Universidad del Rosario</li>
            <li>Especialista en Derecho Urbano — Universidad del Rosario, 2026</li>
            <li>Especialista en Derecho Administrativo — Universidad de Ibagué, 2022</li>
            <li>Abogado — Universidad de Ibagué, 2022</li>
          </ul>
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
          <Link className="text-link dark" href="/trayectoria" style={{ marginTop: 12, display: "inline-block" }}>
            Ver trayectoria completa y entidades asesoradas →
          </Link>
        </div>
      </section>
    </>
  );
}
