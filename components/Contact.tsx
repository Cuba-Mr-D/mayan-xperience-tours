type ContactProps = {
  language?: "en" | "es" | "fr";
};

export default function Contact({
  language = "en",
}: ContactProps) {
  const content = {
  en: {
    title: "Ready to Discover the Riviera Maya?",
    subtitle:
      "Contact us and we'll help you choose the perfect experience.",
    whatsapp: "📱 Contact on WhatsApp",
  },

  es: {
    title: "¿Listo para Descubrir la Riviera Maya?",
    subtitle:
      "Contáctanos y te ayudaremos a elegir la experiencia perfecta.",
    whatsapp: "📱 Contactar por WhatsApp",
  },

  fr: {
    title: "Prêt à Découvrir la Riviera Maya ?",
    subtitle:
      "Contactez-nous et nous vous aiderons à choisir l'expérience parfaite.",
    whatsapp: "📱 Contacter sur WhatsApp",
  },
};

const t = content[language];
  return (
    <section id="contact"
      style={{
        padding: "100px 40px",
        textAlign: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
        }}
      >
        {t.title}
      </h2>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "50px",
        }}
      >
        {t.subtitle}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginBottom: "40px",
        }}
      >
        <p>📱 WhatsApp: +52 9842467762</p>
        <p>📧 Email: cuba.mr.d@gmail.com</p>
        <p>📍 Riviera Maya, Mexico</p>
      </div>

      <a
  href="https://wa.me/529842467762?text=Hi%20Daniel!%20I'm%20interested%20in%20your%20Riviera%20Maya%20tours.%20Could%20you%20please%20send%20me%20more%20information?"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    style={{
      padding: "15px 35px",
      fontSize: "18px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#25D366",
      color: "white",
      fontWeight: "bold",
    }}
  >
    {t.whatsapp}
  </button>
</a>
    </section>
  );
}