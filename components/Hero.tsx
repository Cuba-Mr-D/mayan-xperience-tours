import { LanguageCode, translations } from "./translations";

type HeroProps = {
  language: LanguageCode;
};

export default function Hero({ language }: HeroProps) {
  const t = translations[language].hero;

  return (
    <section
      style={{
        height: "100vh",
        backgroundImage: "url('/hero-riviera-maya.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(2px)",
          padding: "50px",
          borderRadius: "20px",
          maxWidth: "90%",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            marginBottom: "20px",
          }}
        >
          {t.title}
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "35px",
          }}
        >
          {t.subtitle}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#popular-tours"
            style={{
              backgroundColor: "#06b6d4",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {t.exploreTours}
          </a>

          <a
            href="#contact"
            style={{
              backgroundColor: "#22c55e",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {t.contactUs}
          </a>
        </div>

        <div
          style={{
            marginTop: "40px",
            fontSize: "2rem",
            opacity: 0.9,
          }}
        >
          ↓
        </div>
      </div>
    </section>
  );
}
