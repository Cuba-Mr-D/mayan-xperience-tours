import Image from "next/image";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import type { LanguageCode } from "@/components/translations";

type TourPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

const tourTranslations = {
  en: {
    title: "Tulum",
    subtitle:
      "Explore ancient Mayan ruins perched above turquoise Caribbean waters and discover one of Mexico's most iconic destinations. A perfect blend of history, culture and breathtaking coastal scenery.",
    galleryTitle: "Experience Gallery",
    whatToExpectTitle: "What to Expect",
    whatToExpect:
      "Experience the perfect combination of history, culture and Caribbean beauty. Explore the famous archaeological site overlooking turquoise waters, learn about the Mayan civilization and capture incredible photos from one of the most scenic locations in the Riviera Maya.",
    highlightsTitle: "Highlights",
    highlights: [
      "Ancient Ruins Overlooking the Caribbean Sea",
      "Iconic Tulum Castle",
      "Professional Guided Experience",
      "Free Time for Photos",
      "Unique Coastal Archaeological Site",
    ],
    perfectForTitle: "Perfect For",
    perfectFor: [
      "📸 Photography Enthusiasts",
      "❤️ Couples",
      "👨‍👩‍👧‍👦 Families",
      "🌴 Beach Lovers",
      "✨ Cultural Explorers",
    ],
    recommendationTitle: "Why We Recommend This Experience",
    recommendation:
      "Tulum offers one of the most unique landscapes in Mexico, combining ancient history with stunning Caribbean scenery. It is one of the most photographed destinations in the Riviera Maya and an essential stop for visitors looking for culture and natural beauty.",
    ctaTitle: "Ready to Explore Tulum?",
    ctaText:
      "Contact us today for pricing, availability and personalized recommendations.",
    whatsappButton: "Get Personalized Quote",
    whatsappMessage:
      "Hello Mayan Xperience Tours! I am interested in the Tulum Experience.",
  },
  es: {
    title: "Tulum",
    subtitle:
      "Explora antiguas ruinas mayas sobre aguas turquesa del Caribe y descubre uno de los destinos más icónicos de México. Una combinación perfecta de historia, cultura y paisajes costeros impresionantes.",
    galleryTitle: "Galería de la Experiencia",
    whatToExpectTitle: "Qué Puedes Esperar",
    whatToExpect:
      "Vive la combinación perfecta de historia, cultura y belleza caribeña. Explora el famoso sitio arqueológico con vista a aguas turquesa, aprende sobre la civilización maya y captura fotos increíbles desde uno de los lugares más escénicos de la Riviera Maya.",
    highlightsTitle: "Lo Más Destacado",
    highlights: [
      "Ruinas Antiguas con Vista al Mar Caribe",
      "El Icónico Castillo de Tulum",
      "Experiencia Guiada Profesional",
      "Tiempo Libre para Fotos",
      "Sitio Arqueológico Costero Único",
    ],
    perfectForTitle: "Ideal Para",
    perfectFor: [
      "📸 Amantes de la Fotografía",
      "❤️ Parejas",
      "👨‍👩‍👧‍👦 Familias",
      "🌴 Amantes de la Playa",
      "✨ Exploradores Culturales",
    ],
    recommendationTitle: "Por Qué Recomendamos Esta Experiencia",
    recommendation:
      "Tulum ofrece uno de los paisajes más únicos de México, combinando historia antigua con una impresionante vista caribeña. Es uno de los destinos más fotografiados de la Riviera Maya y una parada esencial para visitantes que buscan cultura y belleza natural.",
    ctaTitle: "¿Listo para Explorar Tulum?",
    ctaText:
      "Contáctanos hoy para consultar precios, disponibilidad y recomendaciones personalizadas.",
    whatsappButton: "Solicitar Cotización Personalizada",
    whatsappMessage:
      "Hola Mayan Xperience Tours! Estoy interesado en la Experiencia Tulum.",
  },
  fr: {
    title: "Tulum",
    subtitle:
      "Explorez d'anciennes ruines mayas dominant les eaux turquoise des Caraïbes et découvrez l'une des destinations les plus emblématiques du Mexique. Un parfait mélange d'histoire, de culture et de paysages côtiers à couper le souffle.",
    galleryTitle: "Galerie de l'Expérience",
    whatToExpectTitle: "À Quoi Vous Attendre",
    whatToExpect:
      "Vivez la combinaison parfaite entre histoire, culture et beauté caribéenne. Explorez le célèbre site archéologique surplombant les eaux turquoise, découvrez la civilisation maya et prenez des photos incroyables depuis l'un des lieux les plus spectaculaires de la Riviera Maya.",
    highlightsTitle: "Points Forts",
    highlights: [
      "Ruines Anciennes avec Vue sur la Mer des Caraïbes",
      "L'Iconique Château de Tulum",
      "Expérience Guidée Professionnelle",
      "Temps Libre pour les Photos",
      "Site Archéologique Côtier Unique",
    ],
    perfectForTitle: "Parfait Pour",
    perfectFor: [
      "📸 Passionnés de Photographie",
      "❤️ Couples",
      "👨‍👩‍👧‍👦 Familles",
      "🌴 Amoureux de la Plage",
      "✨ Explorateurs Culturels",
    ],
    recommendationTitle: "Pourquoi Nous Recommandons Cette Expérience",
    recommendation:
      "Tulum offre l'un des paysages les plus uniques du Mexique, associant histoire ancienne et décor caribéen spectaculaire. C'est l'une des destinations les plus photographiées de la Riviera Maya et une étape essentielle pour les visiteurs en quête de culture et de beauté naturelle.",
    ctaTitle: "Prêt à Explorer Tulum ?",
    ctaText:
      "Contactez-nous dès aujourd'hui pour les tarifs, les disponibilités et des recommandations personnalisées.",
    whatsappButton: "Obtenir un Devis Personnalisé",
    whatsappMessage:
      "Bonjour Mayan Xperience Tours! Je suis intéressé par l'Expérience Tulum.",
  },
} as const;

function getLanguage(value: string | string[] | undefined): LanguageCode {
  const lang = Array.isArray(value) ? value[0] : value;

  return lang === "es" || lang === "fr" ? lang : "en";
}

export const metadata: Metadata = {
  title: "Tulum Tours | Mayan Ruins & Riviera Maya Experiences",
  description:
    "Explore Tulum tours in the Riviera Maya with ancient Mayan ruins, Caribbean views, guided experiences and personalized recommendations.",
  openGraph: {
    title: "Tulum Tours | Mayan Ruins & Riviera Maya Experiences",
    description:
      "Explore Tulum tours in the Riviera Maya with ancient Mayan ruins, Caribbean views, guided experiences and personalized recommendations.",
    url: "/tulum",
    images: [
      {
        url: "/tours/tulum-gallery/tulum1.jpg",
        width: 1200,
        height: 630,
        alt: "Tulum Mayan ruins overlooking the Caribbean Sea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulum Tours | Mayan Ruins & Riviera Maya Experiences",
    description:
      "Explore Tulum tours in the Riviera Maya with ancient Mayan ruins, Caribbean views, guided experiences and personalized recommendations.",
    images: [
      {
        url: "/tours/tulum-gallery/tulum1.jpg",
        alt: "Tulum Mayan ruins overlooking the Caribbean Sea",
      },
    ],
  },
};

export default async function TulumPage({ searchParams }: TourPageProps) {
  const language = getLanguage((await searchParams).lang);
  const t = tourTranslations[language];
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
          <h2
            style={{
              marginBottom: "15px",
            }}
          >
            {t.ctaTitle}
          </h2>

          <p
            style={{
              color: "#4b5563",
              marginBottom: "30px",
            }}
          >
            {t.ctaText}
          </p>
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
