import { LanguageCode, translations } from "./translations";

type TestimonialsProps = {
  language: LanguageCode;
};

export default function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language].testimonials;

  return (
    <section id="about"
      style={{
        padding: "100px 40px",
        backgroundColor: "#f8fafc",
        textAlign: "center",
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
          marginBottom: "60px",
        }}
      >
        {t.subtitle}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {t.items.map((testimonial) => (
          <div
            key={testimonial.author}
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <p>{`"${testimonial.quote}"`}</p>

            <h4>⭐⭐⭐⭐⭐</h4>

            <strong>{testimonial.author}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
