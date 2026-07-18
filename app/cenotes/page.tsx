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
    title: "Cenotes Adventure",
    subtitle:
      "Discover the hidden natural wonders of the Riviera Maya. Swim in crystal-clear waters, explore ancient underground formations and connect with the breathtaking beauty of the Yucatán Peninsula.",
    galleryTitle: "Experience Gallery",
    whatToExpectTitle: "What to Expect",
    whatToExpect:
      "Experience one of the Riviera Maya's most unique natural attractions. Cenotes are freshwater sinkholes formed over thousands of years, offering an incredible opportunity to swim, explore and enjoy nature in a truly magical setting.",
    highlightsTitle: "Highlights",
    highlights: [
      "Crystal-Clear Freshwater Cenotes",
      "Underground Cave Formations",
      "Swimming & Nature Experience",
      "Professional Guided Adventure",
      "Unique Geological Wonders",
    ],
    perfectForTitle: "Perfect For",
    perfectFor: [
      "🌿 Nature Lovers",
      "📸 Photography Enthusiasts",
      "👨‍👩‍👧‍👦 Families",
      "🏊 Adventure Seekers",
      "✨ First-Time Visitors",
    ],
    recommendationTitle: "Why We Recommend This Experience",
    recommendation:
      "Cenotes are one of the most iconic natural treasures of the Yucatán Peninsula. They provide a refreshing escape, incredible scenery and a unique connection to the region's geological and cultural history.",
    whatsappButton: "Get Personalized Quote",
    whatsappMessage:
      "Hello Mayan Xperience Tours! I am interested in the Cenotes Experience.",
  },
  es: {
    title: "Aventura en Cenotes",
    subtitle:
      "Descubre las maravillas naturales escondidas de la Riviera Maya. Nada en aguas cristalinas, explora antiguas formaciones subterráneas y conecta con la impresionante belleza de la Península de Yucatán.",
    galleryTitle: "Galería de la Experiencia",
    whatToExpectTitle: "Qué Puedes Esperar",
    whatToExpect:
      "Vive una de las atracciones naturales más únicas de la Riviera Maya. Los cenotes son pozos de agua dulce formados durante miles de años, que ofrecen una oportunidad increíble para nadar, explorar y disfrutar la naturaleza en un entorno verdaderamente mágico.",
    highlightsTitle: "Lo Más Destacado",
    highlights: [
      "Cenotes de Agua Dulce Cristalina",
      "Formaciones de Cuevas Subterráneas",
      "Experiencia de Nado y Naturaleza",
      "Aventura Guiada Profesional",
      "Maravillas Geológicas Únicas",
    ],
    perfectForTitle: "Ideal Para",
    perfectFor: [
      "🌿 Amantes de la Naturaleza",
      "📸 Amantes de la Fotografía",
      "👨‍👩‍👧‍👦 Familias",
      "🏊 Buscadores de Aventura",
      "✨ Visitantes por Primera Vez",
    ],
    recommendationTitle: "Por Qué Recomendamos Esta Experiencia",
    recommendation:
      "Los cenotes son uno de los tesoros naturales más icónicos de la Península de Yucatán. Ofrecen una escapada refrescante, paisajes increíbles y una conexión única con la historia geológica y cultural de la región.",
    whatsappButton: "Solicitar Cotización Personalizada",
    whatsappMessage:
      "Hola Mayan Xperience Tours! Estoy interesado en la Experiencia Cenotes.",
  },
  fr: {
    title: "Aventure dans les Cénotes",
    subtitle:
      "Découvrez les merveilles naturelles cachées de la Riviera Maya. Nagez dans des eaux cristallines, explorez d'anciennes formations souterraines et connectez-vous à la beauté spectaculaire de la péninsule du Yucatán.",
    galleryTitle: "Galerie de l'Expérience",
    whatToExpectTitle: "À Quoi Vous Attendre",
    whatToExpect:
      "Vivez l'une des attractions naturelles les plus uniques de la Riviera Maya. Les cénotes sont des puits d'eau douce formés au fil de milliers d'années, offrant une occasion incroyable de nager, d'explorer et de profiter de la nature dans un cadre véritablement magique.",
    highlightsTitle: "Points Forts",
    highlights: [
      "Cénotes d'Eau Douce Cristalline",
      "Formations de Grottes Souterraines",
      "Expérience de Nage et de Nature",
      "Aventure Guidée Professionnelle",
      "Merveilles Géologiques Uniques",
    ],
    perfectForTitle: "Parfait Pour",
    perfectFor: [
      "🌿 Amoureux de la Nature",
      "📸 Passionnés de Photographie",
      "👨‍👩‍👧‍👦 Familles",
      "🏊 Amateurs d'Aventure",
      "✨ Premiers Visiteurs",
    ],
    recommendationTitle: "Pourquoi Nous Recommandons Cette Expérience",
    recommendation:
      "Les cénotes comptent parmi les trésors naturels les plus emblématiques de la péninsule du Yucatán. Ils offrent une escapade rafraîchissante, des paysages incroyables et une connexion unique à l'histoire géologique et culturelle de la région.",
    whatsappButton: "Obtenir un Devis Personnalisé",
    whatsappMessage:
      "Bonjour Mayan Xperience Tours! Je suis intéressé par l'Expérience Cenotes.",
  },
} as const;

function getLanguage(value: string | string[] | undefined): LanguageCode {
  const lang = Array.isArray(value) ? value[0] : value;

  return lang === "es" || lang === "fr" ? lang : "en";
}

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

export default async function CenotesPage({ searchParams }: TourPageProps) {
  const language = getLanguage((await searchParams).lang);
  const t = tourTranslations[language];
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
      <TourNavbar currentPath="/cenotes" initialLanguage={language} />

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
