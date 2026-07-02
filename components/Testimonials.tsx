export default function Testimonials() {
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
        What Our Travelers Say
      </h2>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "60px",
        }}
      >
        Real experiences from guests who explored the Riviera Maya with us.
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
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <p>
            "Amazing experience in Isla Mujeres. Everything was perfectly
            organized."
          </p>

          <h4>⭐⭐⭐⭐⭐</h4>

          <strong>Sarah – Canada</strong>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <p>
            "Daniel helped us choose the perfect tour for our family. Highly
            recommended."
          </p>

          <h4>⭐⭐⭐⭐⭐</h4>

          <strong>Pierre – France</strong>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <p>
            "Best service we found in Riviera Maya. Friendly and professional."
          </p>

          <h4>⭐⭐⭐⭐⭐</h4>

          <strong>Michael – USA</strong>
        </div>
      </div>
    </section>
  );
}