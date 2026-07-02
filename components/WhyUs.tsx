export default function WhyUs() {
  return (
    <section
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
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Why Travel With Us?
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "60px",
          }}
        >
          Personalized experiences designed by Riviera Maya experts.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3>🌴</h3>
            <h4>Local Experts</h4>
            <p>We know the Riviera Maya inside and out.</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3>⭐</h3>
            <h4>Top Experiences</h4>
            <p>Only the best tours and activities.</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3>🤝</h3>
            <h4>Personal Service</h4>
            <p>Real people helping you every step.</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3>🌎</h3>
            <h4>Multilingual</h4>
            <p>English, Spanish and French support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}