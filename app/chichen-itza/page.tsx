import Image from "next/image";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import TourNavbar from "@/components/TourNavbar";
import type { LanguageCode } from "@/components/translations";

type TourPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

const tourTranslations = {
  en: {
    title: "Chichén Itzá",
    subtitle:
      "Explore one of the New Seven Wonders of the World and discover the fascinating history of the ancient Mayan civilization in an unforgettable cultural experience.",
    galleryTitle: "Experience Gallery",
    whatToExpectTitle: "What to Expect",
    whatToExpect:
      "Travel back in time as you explore the legendary archaeological site of Chichen Itza. Walk among ancient temples, admire the iconic Kukulkan Pyramid, and learn about the impressive achievements of the Mayan civilization.",
    highlightsTitle: "Highlights",
    highlights: [
      "Kukulkan Pyramid (El Castillo)",
      "Temple of the Warriors",
      "The Great Ball Court",
      "Sacred Cenote",
      "Professional Guided Experience",
    ],
    perfectForTitle: "Perfect For",
    perfectFor: [
      "🏛️ History Lovers",
      "📸 Photography Enthusiasts",
      "👨‍👩‍👧‍👦 Families",
      "🌎 First-Time Visitors",
      "✨ Cultural Explorers",
    ],
    recommendationTitle: "Why We Recommend This Experience",
    recommendation:
      "Chichen Itza is one of the most important archaeological sites in the world and a must-see destination during any visit to the Yucatan Peninsula. Its history, architecture and cultural significance make it an unforgettable experience.",
    whatsappButton: "Get Personalized Quote",
    whatsappMessage:
      "Hello Mayan Xperience Tours! I am interested in the Chichen Itza Experience.",
  },
  es: {
    title: "Chichén Itzá",
    subtitle:
      "Explora una de las Nuevas Siete Maravillas del Mundo y descubre la fascinante historia de la antigua civilización maya en una experiencia cultural inolvidable.",
    galleryTitle: "Galería de la Experiencia",
    whatToExpectTitle: "Qué Puedes Esperar",
    whatToExpect:
      "Viaja en el tiempo mientras exploras el legendario sitio arqueológico de Chichén Itzá. Camina entre templos antiguos, admira la icónica Pirámide de Kukulkán y aprende sobre los impresionantes logros de la civilización maya.",
    highlightsTitle: "Lo Más Destacado",
    highlights: [
      "Pirámide de Kukulkán (El Castillo)",
      "Templo de los Guerreros",
      "El Gran Juego de Pelota",
      "Cenote Sagrado",
      "Experiencia Guiada Profesional",
    ],
    perfectForTitle: "Ideal Para",
    perfectFor: [
      "🏛️ Amantes de la Historia",
      "📸 Amantes de la Fotografía",
      "👨‍👩‍👧‍👦 Familias",
      "🌎 Visitantes por Primera Vez",
      "✨ Exploradores Culturales",
    ],
    recommendationTitle: "Por Qué Recomendamos Esta Experiencia",
    recommendation:
      "Chichén Itzá es uno de los sitios arqueológicos más importantes del mundo y un destino imperdible durante cualquier visita a la Península de Yucatán. Su historia, arquitectura y significado cultural lo convierten en una experiencia inolvidable.",
    whatsappButton: "Solicitar Cotización Personalizada",
    whatsappMessage:
      "Hola Mayan Xperience Tours! Estoy interesado en la Experiencia Chichen Itza.",
  },
  fr: {
    title: "Chichén Itzá",
    subtitle:
      "Explorez l'une des Sept Nouvelles Merveilles du Monde et découvrez l'histoire fascinante de l'ancienne civilisation maya lors d'une expérience culturelle inoubliable.",
    galleryTitle: "Galerie de l'Expérience",
    whatToExpectTitle: "À Quoi Vous Attendre",
    whatToExpect:
      "Remontez le temps en explorant le légendaire site archéologique de Chichén Itzá. Marchez parmi d'anciens temples, admirez l'iconique pyramide de Kukulcán et découvrez les réalisations impressionnantes de la civilisation maya.",
    highlightsTitle: "Points Forts",
    highlights: [
      "Pyramide de Kukulcán (El Castillo)",
      "Temple des Guerriers",
      "Le Grand Terrain de Jeu de Balle",
      "Cénote Sacré",
      "Expérience Guidée Professionnelle",
    ],
    perfectForTitle: "Parfait Pour",
    perfectFor: [
      "🏛️ Passionnés d'Histoire",
      "📸 Passionnés de Photographie",
      "👨‍👩‍👧‍👦 Familles",
      "🌎 Premiers Visiteurs",
      "✨ Explorateurs Culturels",
    ],
    recommendationTitle: "Pourquoi Nous Recommandons Cette Expérience",
    recommendation:
      "Chichén Itzá est l'un des sites archéologiques les plus importants au monde et une destination incontournable lors de toute visite dans la péninsule du Yucatán. Son histoire, son architecture et son importance culturelle en font une expérience inoubliable.",
    whatsappButton: "Obtenir un Devis Personnalisé",
    whatsappMessage:
      "Bonjour Mayan Xperience Tours! Je suis intéressé par l'Expérience Chichen Itza.",
  },
} as const;

function getLanguage(value: string | string[] | undefined): LanguageCode {
  const lang = Array.isArray(value) ? value[0] : value;

  return lang === "es" || lang === "fr" ? lang : "en";
}

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

export default async function ChichenItzaPage({ searchParams }: TourPageProps) {
  const language = getLanguage((await searchParams).lang);
  const t = tourTranslations[language];
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
      <TourNavbar currentPath="/chichen-itza" initialLanguage={language} />

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
            {t.title}
          </h1>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            {t.subtitle}
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
          {t.galleryTitle}
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
        <h2>{t.whatToExpectTitle}</h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "#4b5563",
          }}
        >
          {t.whatToExpect}
        </p>

        <h2 style={{ marginTop: "50px" }}>
          {t.highlightsTitle}
        </h2>

        <ul style={{ lineHeight: "2" }}>
          {t.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 style={{ marginTop: "50px" }}>
          {t.perfectForTitle}
        </h2>

        <ul style={{ lineHeight: "2" }}>
          {t.perfectFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 style={{ marginTop: "50px" }}>
          {t.recommendationTitle}
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "#4b5563",
          }}
        >
          {t.recommendation}
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          <a
            href={`https://wa.me/529842467762?text=${encodeURIComponent(t.whatsappMessage)}`}
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
            {t.whatsappButton}
          </a>
        </div>
      </section>
    </main>
  );
}
