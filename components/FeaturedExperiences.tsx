export default function FeaturedExperiences() {
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
            color: "#111827",
          }}
        >
          Featured Experiences
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "60px",
          }}
        >
          Handpicked adventures across the Riviera Maya
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3>🏝 Isla Mujeres Catamaran</h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.6",
              }}
            >
              Sail across the Caribbean Sea, enjoy snorkeling, open bar and
              free time on Isla Mujeres.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3>🏛 Chichen Itza</h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.6",
              }}
            >
              Visit one of the New Seven Wonders of the World and discover
              ancient Maya history.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3>🌴 Tulum Express</h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.6",
              }}
            >
              Explore the iconic cliffside ruins overlooking the turquoise
              Caribbean waters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}