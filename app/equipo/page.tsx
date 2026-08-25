import Link from "next/link";

const team: {
  photo: string;
  name: string;
  role: string;
  blurb: string;
  href: string;
}[] = [
  {
    photo: "/images/nicolas-baez.jpg",
    name: "Nicolás Baez Tobar",
    role: "Fundador · Abogado principal",
    blurb:
      "Abogado especialista en derecho administrativo y derecho urbano, con más de 340 procesos atendidos para entidades públicas, empresas de construcción e inversión y clientes particulares.",
    href: "/equipo/nicolas-baez",
  },
  {
    photo: "/images/team/ivan-pabon.jpg",
    name: "Iván Felipe Pabón Rocha",
    role: "Abogado",
    blurb:
      "Especialista en contratación estatal y en gobierno y gestión para el desarrollo regional y municipal, con más de 6 años de experiencia en asesoría jurídica, representación judicial y consultoría estratégica.",
    href: "/equipo/ivan-pabon",
  },
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Profesionales</p>
        <h1>Nuestro equipo</h1>
        <p>Atención personal, experiencia y una visión compartida.</p>
      </section>

      <section className="page-content">
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.href}>
              <div className="team-card-photo">
                <img src={member.photo} alt={member.name} loading="lazy" />
              </div>
              <div className="team-card-body">
                <p className="eyebrow blue">{member.role}</p>
                <h2>{member.name}</h2>
                <p>{member.blurb}</p>
                <Link className="text-link dark" href={member.href}>
                  Ver perfil profesional →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
