import CopyButton from "../../components/CopyButton";

const WHATSAPP_NUMBER = "573186941836";
const WHATSAPP_MESSAGE =
  "Hola, quisiera agendar una asesoría legal con Baez Tobar Abogados.";
const EMAIL = "baezcorporativo@gmail.com";
const EMAIL_SUBJECT = "Solicitud de asesoría jurídica";

export default function Page() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(EMAIL_SUBJECT)}`;

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Conversemos</p>
        <h1>Contacto</h1>
        <p>Cuéntenos su situación. Le indicaremos el siguiente paso.</p>
      </section>

      <section className="page-content grid-two">
        <div>
          <h2>Solicite una asesoría</h2>
          <p>
            La consulta inicial permite conocer el asunto, identificar su
            alcance y definir la forma de acompañamiento. Escriba directamente
            a Nicolás Baez Tobar y él le confirmará la disponibilidad para
            agendar una asesoría virtual o presencial en la oficina.
          </p>

          <div className="contact-channels">
            <a
              className="contact-channel"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-channel-icon">
                <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M16.01 3C9.38 3 4 8.32 4 14.87c0 2.24.62 4.33 1.7 6.13L4 29l8.24-2.63a12.9 12.9 0 0 0 3.77.56h.01c6.63 0 12.01-5.32 12.01-11.87C28.03 8.32 22.65 3 16.01 3Zm0 21.7h-.01c-1.24 0-2.46-.33-3.53-.96l-.25-.15-4.9 1.57 1.6-4.72-.16-.26a9.63 9.63 0 0 1-1.5-5.31c0-5.33 4.4-9.67 9.76-9.67 2.61 0 5.06 1 6.9 2.83a9.5 9.5 0 0 1 2.85 6.75c0 5.33-4.4 9.66-9.76 9.66Zm5.36-7.24c-.29-.15-1.75-.85-2.02-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.15-.17.19-.35.22-.64.07-.29-.15-1.23-.44-2.34-1.42a8.6 8.6 0 0 1-1.62-1.98c-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.58-.92-2.17-.24-.57-.49-.5-.67-.5h-.57c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.44 1.05 2.82 1.2 3.02.15.19 2.06 3.06 5 4.3.7.29 1.24.47 1.67.6.7.22 1.34.19 1.84.11.56-.08 1.75-.7 2-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.35Z" />
                </svg>
              </span>
              <span className="contact-channel-body">
                <strong>WhatsApp</strong>
                <span>Respuesta directa</span>
              </span>
            </a>

            <div className="contact-channel contact-channel--stack">
              <span className="contact-channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M3 6.5h18v11H3z" strokeLinejoin="round" />
                  <path d="m3 7 9 6.5L21 7" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="contact-channel-body">
                <strong>Correo electrónico</strong>
                <span>baezcorporativo@gmail.com</span>
                <span className="contact-channel-actions">
                  <a href={mailHref} className="channel-action">
                    Enviar correo
                  </a>
                  <a href={gmailHref} target="_blank" rel="noopener noreferrer" className="channel-action">
                    Abrir en Gmail
                  </a>
                  <CopyButton value={EMAIL} label="Copiar dirección de correo" />
                </span>
              </span>
            </div>
          </div>

          <p style={{ marginTop: 28 }}>
            <strong>Atención:</strong> con cita previa, de lunes a viernes.
          </p>
        </div>

        <div>
          <h2>Cómo funciona la asesoría</h2>
          <ul className="plain-list">
            <li>
              <strong>1. Escriba por WhatsApp o correo.</strong> Describa
              brevemente su situación y la ciudad o entidad involucrada.
            </li>
            <li>
              <strong>2. Nicolás confirma disponibilidad.</strong> Le
              propondrá un horario y la modalidad más adecuada para el caso.
            </li>
            <li>
              <strong>3. Asesoría virtual o en la oficina.</strong> La
              consulta puede realizarse por videollamada o presencialmente en
              Ibagué, según su preferencia.
            </li>
            <li>
              <strong>4. Siguiente paso claro.</strong> Al finalizar, usted
              sabrá el alcance del asunto y la forma de acompañamiento
              propuesta.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
