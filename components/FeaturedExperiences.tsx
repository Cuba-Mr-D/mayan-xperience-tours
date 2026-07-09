import { LanguageCode, translations } from "./translations";

type FeaturedExperiencesProps = {
  language: LanguageCode;
};

export default function FeaturedExperiences({
  language,
}: FeaturedExperiencesProps) {
  const t = translations[language].featuredExperiences;

  return (
    <section
      id="experiences"
      style={{
        padding: "100px 40px",
        backgroundColor: "#f8fafc",
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
            fontSize: "2.2rem",
            marginBottom: "20px",
            color: "#111827",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {t.groups.map((group) => (
            <div
              key={group.title}
              style={{
                backgroundColor: "#f8fafc",
                padding: "40px",
                borderRadius: "24px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  color: "#111827",
                }}
              >
                {group.title}
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "1.8",
                }}
              >
                {group.description}
              </p>

              <ul
                style={{
                  color: "#6b7280",
                  lineHeight: "2",
                  listStyle: "none",
                  padding: 0,
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
