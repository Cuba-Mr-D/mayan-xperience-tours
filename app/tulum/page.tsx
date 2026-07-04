import Image from "next/image";
import Gallery from "@/components/Gallery";

export default function TulumPage() {
  const galleryImages = [
    "/tours/tulum-gallery/tulum1.jpg",
    "/tours/tulum-gallery/tulum2.jpg",
    "/tours/tulum-gallery/tulum3.jpg",
    "/tours/tulum-gallery/tulum4.jpg",
    "/tours/tulum-gallery/tulum5.jpg",
    "/tours/tulum-gallery/tulum6.jpg",
  ];
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
          src="/tours/tulum-gallery/tulum1.jpg"
          alt="Tulum"
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
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            Tulum
          </h1>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            Discover the breathtaking beauty of Tulum, the only ancient Mayan
            city built on the Caribbean coastline. Enjoy spectacular ocean
            views, fascinating history and one of the most iconic destinations
            in Mexico.
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

        <Gallery images={galleryImages} />
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
          Experience the perfect combination of history, culture and Caribbean
          beauty. Explore the famous archaeological site overlooking turquoise
          waters, learn about the Mayan civilization and capture incredible
          photos from one of the most scenic locations in the Riviera Maya.
        </p>

        <h2 style={{ marginTop: "50px" }}>
          Highlights
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Ancient Ruins Overlooking the Caribbean Sea</li>
          <li>Iconic Tulum Castle</li>
          <li>Professional Guided Experience</li>
          <li>Free Time for Photos</li>
          <li>Unique Coastal Archaeological Site</li>
        </ul>

        <h2 style={{ marginTop: "50px" }}>
          Perfect For
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>📸 Photography Enthusiasts</li>
          <li>❤️ Couples</li>
          <li>👨‍👩‍👧‍👦 Families</li>
          <li>🌴 Beach Lovers</li>
          <li>✨ Cultural Explorers</li>
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
          Tulum offers one of the most unique landscapes in Mexico, combining
          ancient history with stunning Caribbean scenery. It is one of the
          most photographed destinations in the Riviera Maya and an essential
          stop for visitors looking for culture and natural beauty.
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          <a
            href="https://wa.me/529842467762?text=Hello%20Mayan%20Xperience%20Tours!%20I%20am%20interested%20in%20the%20Tulum%20Experience."
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