export default function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        backgroundImage: "url('/hero-riviera-maya.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(2px)",
          padding: "50px",
          borderRadius: "20px",
          maxWidth: "90%",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "2.4rem",
            marginBottom: "20px",
          }}
        >
          Experience Riviera Maya Like a Local
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "35px",
          }}
        >
          Handpicked tours, hidden gems and unforgettable adventures.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#experiences"
            style={{
              backgroundColor: "#06b6d4",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Explore Tours
          </a>

          <a
            href="#contact"
            style={{
              backgroundColor: "#22c55e",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </a>
        </div>

        <div
          style={{
            marginTop: "40px",
            fontSize: "2rem",
            opacity: 0.9,
          }}
        >
          ↓
        </div>
      </div>
    </section>
  );
}