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
      <div className="hero-image hero-image--logo"><img src="/images/logo-mark-transparent.png" alt="Baez Tobar Abogados" width={420} height={455} fetchPriority="high"/></div>
    </section>
    <section className="trust-strip"><p>Experiencia con propósito</p><p>Atención personalizada</p><p>Estrategia jurídica integral</p></section>
    <section className="section intro"><div><p className="eyebrow blue">Una firma construida sobre la confianza</p><h2>El derecho como herramienta para avanzar.</h2></div><p>En Baez Tobar Abogados combinamos análisis riguroso, comunicación clara y acompañamiento directo. Cada asunto se estudia en su contexto para construir una respuesta jurídica útil, comprensible y orientada a resultados.</p></section>
    <section className="section practice"><p className="eyebrow">Áreas de práctica</p><h2>Asesoría enfocada en lo que realmente importa.</h2><div className="cards"><article><b>01</b><h3>Defensa judicial del Estado</h3><p>Representación de entidades públicas, con más de 140 procesos asumidos y una tasa de éxito cercana al 70&nbsp;%.</p></article><article><b>02</b><h3>Derecho urbano e inmobiliario</h3><p>Licencias, planeación territorial, desarrollo de proyectos y asuntos relacionados con la propiedad.</p></article><article><b>03</b><h3>Derecho administrativo y electoral</h3><p>Actuaciones ante autoridades, litigio contencioso y defensa judicial de actos electorales.</p></article></div><Link className="text-link" href="/areas-de-practica">Explorar todas las áreas →</Link></section>
    <section className="section profile-preview"><div><p className="eyebrow blue">Experiencia jurídica con visión integral</p><h2>Una firma preparada para asuntos que exigen criterio.</h2><p>En Baez Tobar Abogados integramos litigio, consultoría y acompañamiento estratégico para entidades públicas, empresas y personas. Cada asunto es abordado desde una visión integral, combinando rigor jurídico, comprensión del contexto y soluciones orientadas a proteger los intereses de nuestros clientes.</p><Link className="text-link dark" href="/firma">Conocer la firma →</Link></div></section>
    <section className="cta"><p className="eyebrow">Hablemos de su caso</p><h2>Una buena decisión comienza con una conversación clara.</h2><Link className="button gold" href="/contacto">Contactar a la firma</Link></section>
  </>;
}
