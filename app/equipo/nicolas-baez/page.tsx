import Link from "next/link";

const stats: [string, string][] = [
  ["2018", "en ejercicio profesional"],
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
          src="/images/nicolas-baez.jpg"
          alt="Nicolás Baez Tobar"
          width={502}
          height={620}
        />
        <div>
          <h2>Perfil profesional</h2>
          <p>
            Abogado especialista en derecho administrativo y derecho urbano, y
            candidato a Magíster en Derecho y Gestión Urbanística. Desde 2018
            combina litigio, consultoría, producción normativa, gestión
            pública, docencia e investigación en empresas privadas, entidades
            territoriales, corporaciones públicas y el Congreso de la
            República.
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
          <Link className="text-link dark" href="/trayectoria" style={{ marginTop: 12, display: "inline-block" }}>
            Ver trayectoria completa y entidades asesoradas →
          </Link>
        </div>
      </section>
    </>
  );
}
