import { LanguageCode, translations } from "./translations";

type WhyUsProps = {
  language: LanguageCode;
};

export default function WhyUs({ language }: WhyUsProps) {
  const t = translations[language].whyUs;

  return (
    <section
      style={{
        padding: "100px 40px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          {t.title}
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "60px",
          }}
        >
          {t.subtitle}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {t.reasons.map((reason) => (
            <div key={reason.title} style={{ textAlign: "center" }}>
              <h3>{reason.icon}</h3>
              <h4>{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
