export default function PopularTours() {
  return (
    <section
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
        Most Popular Tours
      </h2>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "50px",
        }}
      >
        Discover our most requested experiences in the Riviera Maya.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div style={{ padding: "30px", border: "1px solid #ddd", borderRadius: "15px" }}>
          🏝 Isla Mujeres
        </div>

        <div style={{ padding: "30px", border: "1px solid #ddd", borderRadius: "15px" }}>
          🏛 Chichén Itzá
        </div>

        <div style={{ padding: "30px", border: "1px solid #ddd", borderRadius: "15px" }}>
          🌴 Tulum
        </div>

        <div style={{ padding: "30px", border: "1px solid #ddd", borderRadius: "15px" }}>
          💦 Cenotes
        </div>
      </div>
    </section>
  );
}