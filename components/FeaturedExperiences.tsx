import Link from "next/link";

export default function FeaturedExperiences() {
  return (
    <section
      id="experiences"
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Isla Mujeres */}
          <Link
            href="/isla-mujeres"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                backgroundColor: "#f8fafc",
                padding: "40px",
                borderRadius: "24px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                cursor: "pointer",
                height: "100%",
              }}
            >
              <h3 style={{ color: "#111827" }}>
                🏝 Isla Mujeres Experience
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "1.6",
                }}
              >
                Discover the Caribbean with personalized sailing experiences,
                beach clubs and unforgettable island adventures.
              </p>

              <p
                style={{
                  marginTop: "20px",
                  color: "#0284c7",
                  fontWeight: "bold",
                }}
              >
                View Experience →
              </p>
            </div>
          </Link>

          {/* Chichen Itza */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3>🏛 Chichen Itza Experience</h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.6",
              }}
            >
              Explore one of the most important archaeological sites in the
              world and immerse yourself in Maya history.
            </p>

            <p
              style={{
                marginTop: "20px",
                color: "#94a3b8",
              }}
            >
              Coming Soon
            </p>
          </div>

          {/* Tulum */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3>🌴 Tulum Experience</h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.6",
              }}
            >
              Ancient ruins, turquoise waters and unique experiences tailored
              to your travel style.
            </p>

            <p
              style={{
                marginTop: "20px",
                color: "#94a3b8",
              }}
            >
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}