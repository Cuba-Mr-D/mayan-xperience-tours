import Image from "next/image";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Chichén Itzá Tours | Mayan Xperience Tours",
  description:
    "Visit Chichén Itzá from the Riviera Maya with guided cultural experiences, the Kukulkan Pyramid and personalized tour recommendations.",
  openGraph: {
    title: "Chichén Itzá Tours | Mayan Xperience Tours",
    description:
      "Visit Chichén Itzá from the Riviera Maya with guided cultural experiences, the Kukulkan Pyramid and personalized tour recommendations.",
    url: "/chichen-itza",
    images: [
      {
        url: "/tours/chichen.jpg",
        width: 1200,
        height: 630,
        alt: "Chichén Itzá Kukulkan Pyramid tour experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chichén Itzá Tours | Mayan Xperience Tours",
    description:
      "Visit Chichén Itzá from the Riviera Maya with guided cultural experiences, the Kukulkan Pyramid and personalized tour recommendations.",
    images: [
      {
        url: "/tours/chichen.jpg",
        alt: "Chichén Itzá Kukulkan Pyramid tour experience",
      },
    ],
  },
};

export default function ChichenItzaPage() {
  const galleryImages = [
    "/tours/chichen-gallery/chichen1.jpg",
    "/tours/chichen-gallery/chichen2.jpg",
    "/tours/chichen-gallery/chichen3.jpg",
    "/tours/chichen-gallery/chichen4.jpg",
    "/tours/chichen-gallery/chichen5.jpg",
    "/tours/chichen-gallery/chichen6.jpg",
    "/tours/chichen-gallery/chichen7.jpg",
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
          src="/tours/chichen.jpg"
          alt="Chichen Itza"
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
            Chichén Itzá
          </h1>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            Explore one of the New Seven Wonders of the World and discover the
            fascinating history of the ancient Mayan civilization in an
            unforgettable cultural experience.
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
          Travel back in time as you explore the legendary archaeological site
          of Chichen Itza. Walk among ancient temples, admire the iconic
          Kukulkan Pyramid, and learn about the impressive achievements of the
          Mayan civilization.
        </p>

        <h2 style={{ marginTop: "50px" }}>
          Highlights
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Kukulkan Pyramid (El Castillo)</li>
          <li>Temple of the Warriors</li>
          <li>The Great Ball Court</li>
          <li>Sacred Cenote</li>
          <li>Professional Guided Experience</li>
        </ul>

        <h2 style={{ marginTop: "50px" }}>
          Perfect For
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>🏛️ History Lovers</li>
          <li>📸 Photography Enthusiasts</li>
          <li>👨‍👩‍👧‍👦 Families</li>
          <li>🌎 First-Time Visitors</li>
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
          Chichen Itza is one of the most important archaeological sites in the
          world and a must-see destination during any visit to the Yucatan
          Peninsula. Its history, architecture and cultural significance make it
          an unforgettable experience.
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          <a
            href="https://wa.me/529842467762?text=Hello%20Mayan%20Xperience%20Tours!%20I%20am%20interested%20in%20the%20Chichen%20Itza%20Experience."
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
