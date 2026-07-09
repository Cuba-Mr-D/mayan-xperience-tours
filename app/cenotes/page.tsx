import Image from "next/image";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Cenotes Tours | Riviera Maya Adventure Experiences",
  description:
    "Discover cenotes tours in the Riviera Maya with crystal-clear freshwater, cave formations, swimming adventures and guided local experiences.",
  openGraph: {
    title: "Cenotes Tours | Riviera Maya Adventure Experiences",
    description:
      "Discover cenotes tours in the Riviera Maya with crystal-clear freshwater, cave formations, swimming adventures and guided local experiences.",
    url: "/cenotes",
    images: [
      {
        url: "/tours/cenotes-gallery/cenote1.jpg",
        width: 1200,
        height: 630,
        alt: "Riviera Maya cenote swimming adventure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cenotes Tours | Riviera Maya Adventure Experiences",
    description:
      "Discover cenotes tours in the Riviera Maya with crystal-clear freshwater, cave formations, swimming adventures and guided local experiences.",
    images: [
      {
        url: "/tours/cenotes-gallery/cenote1.jpg",
        alt: "Riviera Maya cenote swimming adventure",
      },
    ],
  },
};

export default function CenotesPage() {
  const galleryImages = [
    "/tours/cenotes-gallery/cenote1.jpg",
    "/tours/cenotes-gallery/cenote2.jpg",
    "/tours/cenotes-gallery/cenote3.jpg",
    "/tours/cenotes-gallery/cenote4.jpg",
    "/tours/cenotes-gallery/cenote5.jpg",
    "/tours/cenotes-gallery/cenote6.jpg",
    "/tours/cenotes-gallery/cenote7.jpg",
    "/tours/cenotes-gallery/cenote8.jpg",
    "/tours/cenotes-gallery/cenote9.jpg",
    "/tours/cenotes-gallery/cenote10.jpg",
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
          src="/tours/cenotes-gallery/cenote1.jpg"
          alt="Cenotes Adventure"
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
            Cenotes Adventure
          </h1>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            Discover the hidden natural wonders of the Riviera Maya. Swim in
            crystal-clear waters, explore ancient underground formations and
            connect with the breathtaking beauty of the Yucatán Peninsula.
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
          Experience one of the Riviera Maya&apos;s most unique natural attractions.
          Cenotes are freshwater sinkholes formed over thousands of years,
          offering an incredible opportunity to swim, explore and enjoy nature
          in a truly magical setting.
        </p>

        <h2 style={{ marginTop: "50px" }}>
          Highlights
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Crystal-Clear Freshwater Cenotes</li>
          <li>Underground Cave Formations</li>
          <li>Swimming & Nature Experience</li>
          <li>Professional Guided Adventure</li>
          <li>Unique Geological Wonders</li>
        </ul>

        <h2 style={{ marginTop: "50px" }}>
          Perfect For
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>🌿 Nature Lovers</li>
          <li>📸 Photography Enthusiasts</li>
          <li>👨‍👩‍👧‍👦 Families</li>
          <li>🏊 Adventure Seekers</li>
          <li>✨ First-Time Visitors</li>
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
          Cenotes are one of the most iconic natural treasures of the Yucatán
          Peninsula. They provide a refreshing escape, incredible scenery and a
          unique connection to the region&apos;s geological and cultural history.
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          <a
            href="https://wa.me/529842467762?text=Hello%20Mayan%20Xperience%20Tours!%20I%20am%20interested%20in%20the%20Cenotes%20Experience."
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
