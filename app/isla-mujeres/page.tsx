import Image from "next/image";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Isla Mujeres Tours | Mayan Xperience Tours",
  description:
    "Discover Isla Mujeres tours from the Riviera Maya with turquoise waters, Playa Norte, snorkeling, catamaran experiences and private options.",
  openGraph: {
    title: "Isla Mujeres Tours | Mayan Xperience Tours",
    description:
      "Discover Isla Mujeres tours from the Riviera Maya with turquoise waters, Playa Norte, snorkeling, catamaran experiences and private options.",
    url: "/isla-mujeres",
    images: [
      {
        url: "/tours/isla-mujeres.png",
        width: 1200,
        height: 630,
        alt: "Isla Mujeres turquoise water tour experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isla Mujeres Tours | Mayan Xperience Tours",
    description:
      "Discover Isla Mujeres tours from the Riviera Maya with turquoise waters, Playa Norte, snorkeling, catamaran experiences and private options.",
    images: [
      {
        url: "/tours/isla-mujeres.png",
        alt: "Isla Mujeres turquoise water tour experience",
      },
    ],
  },
};

export default function IslaMujeresPage() {
  const galleryImages = [
    "/tours/isla-mujeres-gallery/1.jpg",
    "/tours/isla-mujeres-gallery/2.jpg",
    "/tours/isla-mujeres-gallery/3.jpg",
    "/tours/isla-mujeres-gallery/4.jpg",
    "/tours/isla-mujeres-gallery/5.jpg",
    "/tours/isla-mujeres-gallery/6.jpg",
    "/tours/isla-mujeres-gallery/7.jpg",
    "/tours/isla-mujeres-gallery/8.jpg",
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
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            Isla Mujeres
          </h1>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            Discover Playa Norte, internationally recognized as one of the world&apos;s
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
          Escape to the Caribbean paradise of Isla Mujeres, a destination famous
          for its crystal-clear waters, relaxed atmosphere and breathtaking
          scenery. Depending on the experience you choose, you may enjoy sailing
          across the Caribbean Sea, snorkeling in vibrant reefs, relaxing at
          exclusive beach clubs or exploring the island at your own pace.

          Every visit offers a unique combination of natural beauty, local
          culture and unforgettable moments designed to create lasting memories.
        </p>

        <h2 style={{ marginTop: "50px" }}>
          Available Experience Styles
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Luxury Catamaran Experience</li>
          <li>Small Group Sailing Adventure</li>
          <li>Family-Friendly Island Escape</li>
          <li>Beach Club & Relaxation Day</li>
          <li>Private Customized Experience</li>
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
