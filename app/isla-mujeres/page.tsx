import Image from "next/image";

export default function IslaMujeresPage() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "70vh",
        }}
      >
        <Image
          src="/tours/isla-mujeres.png"
          alt="Isla Mujeres"
          fill
          style={{
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <p
  style={{
    maxWidth: "800px",
    fontSize: "1.2rem",
    lineHeight: "1.8",
  }}
>
  Discover Playa Norte, internationally recognized as one of the world's
  most beautiful beaches. Enjoy turquoise waters, soft white sand and the
  unique charm of Isla Mujeres in an experience tailored to your travel style.
</p>
        </div>
      </section>

      {/* Gallery */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
          }}
        >
          Experience Gallery
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <img src="/tours/isla-mujeres-gallery/1.jpg" alt="Gallery 1" style={{ width: "100%", borderRadius: "15px" }} />
          <img src="/tours/isla-mujeres-gallery/2.jpg" alt="Gallery 2" style={{ width: "100%", borderRadius: "15px" }} />
          <img src="/tours/isla-mujeres-gallery/3.jpg" alt="Gallery 3" style={{ width: "100%", borderRadius: "15px" }} />
          <img src="/tours/isla-mujeres-gallery/4.jpg" alt="Gallery 4" style={{ width: "100%", borderRadius: "15px" }} />
          <img src="/tours/isla-mujeres-gallery/5.jpg" alt="Gallery 5" style={{ width: "100%", borderRadius: "15px" }} />
          <img src="/tours/isla-mujeres-gallery/6.jpg" alt="Gallery 6" style={{ width: "100%", borderRadius: "15px" }} />
          <img src="/tours/isla-mujeres-gallery/7.jpg" alt="Gallery 7" style={{ width: "100%", borderRadius: "15px" }} />
          <img src="/tours/isla-mujeres-gallery/8.jpg" alt="Gallery 8" style={{ width: "100%", borderRadius: "15px" }} />
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h2>What to Expect</h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "#4b5563",
          }}
        >
          Sail through crystal-clear turquoise waters, discover the charm of
          Isla Mujeres, relax at beautiful beaches and enjoy a personalized
          experience designed around your travel style.
        </p>

        <h2 style={{ marginTop: "50px" }}>
          Available Experience Styles
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Standard Experience</li>
          <li>Premium Experience</li>
          <li>Small Group Experience</li>
          <li>Private Charter Experience</li>
          <li>Luxury Experience</li>
        </ul>

        <h2 style={{ marginTop: "50px" }}>
          Perfect For
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>❤️ Couples</li>
          <li>👨‍👩‍👧‍👦 Families</li>
          <li>🎉 Groups of Friends</li>
          <li>✨ Honeymooners</li>
          <li>🏖️ First-Time Visitors</li>
        </ul>

        <h2 style={{ marginTop: "50px" }}>
          Why We Recommend This Experience
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "#4b5563",
          }}
        >
          Isla Mujeres is one of the most requested experiences in the Riviera
          Maya thanks to its combination of turquoise waters, relaxed island
          atmosphere and flexible options for every type of traveler.
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          <a
            href="https://wa.me/529842467762?text=Hello%20Mayan%20Xperience%20Tours!%20I%20am%20interested%20in%20the%20Isla%20Mujeres%20Experience."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#25D366",
              color: "white",
              padding: "18px 35px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            Get Personalized Quote
          </a>
        </div>
      </section>
    </main>
  );
}