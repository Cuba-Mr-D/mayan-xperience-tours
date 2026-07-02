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
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "10px",
            }}
          >
            Isla Mujeres Experience
          </h1>

          <p
            style={{
              maxWidth: "700px",
              fontSize: "1.2rem",
            }}
          >
            Discover one of the most beautiful islands in the Mexican Caribbean
            with a personalized experience tailored to your travel style.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h2>What to Expect</h2>

        <ul
          style={{
            lineHeight: "2",
          }}
        >
          <li>Catamaran sailing through the Caribbean Sea</li>
          <li>Crystal-clear turquoise waters</li>
          <li>Beach club access</li>
          <li>Time to explore Isla Mujeres</li>
          <li>Personalized recommendations</li>
        </ul>

        <h2 style={{ marginTop: "50px" }}>
          Available Experience Styles
        </h2>

        <ul
          style={{
            lineHeight: "2",
          }}
        >
          <li>Standard Experience</li>
          <li>Premium Experience</li>
          <li>Small Group Experience</li>
          <li>Private Charter Experience</li>
        </ul>

        <h2 style={{ marginTop: "50px" }}>
          Ideal For
        </h2>

        <ul
          style={{
            lineHeight: "2",
          }}
        >
          <li>Couples</li>
          <li>Families</li>
          <li>Groups of Friends</li>
          <li>Honeymooners</li>
        </ul>

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#25D366",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
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