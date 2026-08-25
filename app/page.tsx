import Link from "next/link";

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Baez Tobar Abogados · Colombia</p>
        <h1>Rigor jurídico.<br/><em>Soluciones con criterio.</em></h1>
        <p className="lead">Asesoría legal cercana, estratégica y responsable para personas y empresas que necesitan tomar decisiones con seguridad.</p>
        <div className="actions"><Link className="button gold" href="/contacto">Solicitar asesoría</Link><Link className="button ghost" href="/firma">Conocer la firma</Link></div>
      </div>
      <div className="hero-image"><img src="/images/nicolas-baez.jpg" alt="Nicolás Baez Tobar, abogado principal" width={445} height={550} fetchPriority="high"/><span>Abogado principal</span></div>
    </section>
    <section className="trust-strip"><p>Experiencia con propósito</p><p>Atención personalizada</p><p>Estrategia jurídica integral</p></section>
    <section className="section intro"><div><p className="eyebrow blue">Una firma construida sobre la confianza</p><h2>El derecho como herramienta para avanzar.</h2></div><p>En Baez Tobar Abogados combinamos análisis riguroso, comunicación clara y acompañamiento directo. Cada asunto se estudia en su contexto para construir una respuesta jurídica útil, comprensible y orientada a resultados.</p></section>
    <section className="section practice"><p className="eyebrow">Áreas de práctica</p><h2>Asesoría enfocada en lo que realmente importa.</h2><div className="cards"><article><b>01</b><h3>Defensa judicial del Estado</h3><p>Representación de entidades públicas, con más de 140 procesos asumidos y una tasa de éxito cercana al 70&nbsp;%.</p></article><article><b>02</b><h3>Derecho urbano e inmobiliario</h3><p>Licencias, planeación territorial, desarrollo de proyectos y asuntos relacionados con la propiedad.</p></article><article><b>03</b><h3>Derecho administrativo y electoral</h3><p>Actuaciones ante autoridades, litigio contencioso y defensa judicial de actos electorales.</p></article></div><Link className="text-link" href="/areas-de-practica">Explorar todas las áreas →</Link></section>
    <section className="section profile-preview"><div><p className="eyebrow blue">Abogado principal</p><h2>Nicolás Baez Tobar</h2><p>Abogado especialista en derecho administrativo y urbano, con más de 340 procesos atendidos —143 en defensa directa de entidades públicas— y una tasa aproximada de éxito del 70&nbsp;% en los asuntos concluidos. Su práctica se distingue por el estudio detallado de cada caso y una relación profesional directa.</p><Link className="text-link dark" href="/equipo/nicolas-baez">Conocer su perfil →</Link></div></section>
    <section className="cta"><p className="eyebrow">Hablemos de su caso</p><h2>Una buena decisión comienza con una conversación clara.</h2><Link className="button gold" href="/contacto">Contactar a la firma</Link></section>
  </>;
}
