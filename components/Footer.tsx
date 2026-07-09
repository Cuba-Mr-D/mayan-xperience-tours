import { LanguageCode, translations } from "./translations";

type FooterProps = {
  language: LanguageCode;
};

export default function Footer({ language }: FooterProps) {
  const t = translations[language].footer;

  return (
    <footer
      style={{
        backgroundColor: "#021024",
        color: "white",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          marginBottom: "15px",
        }}
      >
        MAYAN XPERIENCE TOURS
      </h3>

      <p
        style={{
          opacity: 0.8,
          marginBottom: "20px",
        }}
      >
        {t.description}
      </p>

      <p
        style={{
          marginBottom: "20px",
        }}
      >
        {t.links}
      </p>

      <p
        style={{
          fontSize: "14px",
          opacity: 0.7,
        }}
      >
        {t.rights}
      </p>
    </footer>
  );
}
