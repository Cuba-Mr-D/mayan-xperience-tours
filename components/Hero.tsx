export default function Hero() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        backgroundImage:
  "linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.45)), url('/hero-riviera-maya.jpg')",
backgroundSize: "cover",
backgroundPosition: "center 05%",
backgroundRepeat: "no-repeat",
        padding: "0 20px",
      }}
    >
      <p
        style={{
          letterSpacing: "3px",
          textTransform: "uppercase",
          marginBottom: "20px",
          opacity: 0.8,
        }}
      >
        Riviera Maya • Mexico
      </p>

      <h1
        style={{
          fontSize: "4rem",
          maxWidth: "900px",
          marginBottom: "20px",
          lineHeight: 1.1,
          textShadow: "0 4px 12px rgba(0,0,0,0.8)",
        }}
      >
        Discover the Riviera Maya
        <br />
        Beyond the Ordinary
      </h1>
        
      <p
        style={{
          maxWidth: "700px",
          fontSize: "1.2rem",
          marginBottom: "40px",
          opacity: 0.9,
          textShadow: "0 2px 8px rgba(0,0,0,0.8)",
        }}
      >
        Personalized tours, exclusive experiences and unforgettable adventures
        designed by local experts.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "15px 30px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Explore Tours
        </button>

        <button
          style={{
            padding: "15px 30px",
            border: "2px solid white",
            background: "transparent",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}