import Link from "next/link";

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
        {/* Isla Mujeres */}
        <Link
          href="/isla-mujeres"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="/tours/isla-mujeres.png"
              alt="Isla Mujeres"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>🏝️ Isla Mujeres</h3>
              <p>Catamarán, snorkel y aguas turquesa.</p>

              <p
                style={{
                  marginTop: "15px",
                  color: "#0284c7",
                  fontWeight: "bold",
                }}
              >
                View Experience →
              </p>
            </div>
          </div>
        </Link>

        {/* Chichen Itza */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src="/tours/chichen.jpg"
            alt="Chichén Itzá"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "20px" }}>
            <h3>🏛️ Chichén Itzá</h3>
            <p>Maravilla del mundo y legado de la cultura maya.</p>
          </div>
        </div>

        {/* Tulum */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src="/tours/tulum.jpg"
            alt="Tulum"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "20px" }}>
            <h3>🌴 Tulum</h3>
            <p>Ruinas frente al Caribe y vistas espectaculares.</p>
          </div>
        </div>

        {/* Cenotes */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <img
            src="/tours/cenotes.jpg"
            alt="Cenotes"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "20px" }}>
            <h3>💦 Cenotes</h3>
            <p>Nada en aguas cristalinas rodeadas de naturaleza.</p>
          </div>
        </div>
      </div>
    </section>
  );
}