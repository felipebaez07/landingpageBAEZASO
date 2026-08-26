import Link from "next/link";

const team: {
  photo: string;
  photoPosition?: string;
  name: string;
  role: string;
  stat: string;
  statLabel: string;
  blurb: string;
  href: string;
}[] = [
  {
    photo: "/images/team/nicolas-baez.jpg",
    photoPosition: "center 34%",
    name: "Nicolás Baez Tobar",
    role: "Fundador · Abogado principal",
    stat: "340+",
    statLabel: "procesos judiciales atendidos desde 2021",
    blurb:
      "Defensa judicial del Estado, derecho administrativo, urbano y electoral, con litigio estratégico y consultoría pública y privada.",
    href: "/equipo/nicolas-baez",
  },
  {
    photo: "/images/team/ivan-pabon.jpg",
    name: "Iván Felipe Pabón Rocha",
    role: "Asociado · Abogado de la firma",
    stat: "6+",
    statLabel: "años de experiencia profesional",
    blurb:
      "Contratación estatal, gobierno y gestión para el desarrollo regional y municipal, asesoría jurídica y consultoría estratégica.",
    href: "/equipo/ivan-pabon",
  },
  {
    photo: "/images/team/sebastian-gongora.jpg",
    name: "Sebastián Góngora Romero",
    role: "Asociado · Abogado de la firma",
    stat: "120+",
    statLabel: "procesos ejecutivos gestionados",
    blurb:
      "Contratación estatal, procesos ejecutivos, recuperación de cartera y propiedad horizontal.",
    href: "/equipo/sebastian-gongora",
  },
];

export default function Page() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Nuestro equipo</p>
        <h1>Trayectoria</h1>
        <p>
          La experiencia combinada de los abogados que conforman la firma.
        </p>
      </section>

      <section className="page-content">
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.href}>
              <div className="team-card-photo">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined}
                />
              </div>
              <div className="team-card-body">
                <p className="eyebrow blue">{member.role}</p>
                <h2>{member.name}</h2>
                <div className="stat-highlight">
                  <strong>{member.stat}</strong>
                  <span>{member.statLabel}</span>
                </div>
                <p>{member.blurb}</p>
                <Link className="text-link dark" href={member.href}>
                  Ver perfil completo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
