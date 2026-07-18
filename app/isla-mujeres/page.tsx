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
    title: "Isla Mujeres",
    subtitle:
      "Discover Playa Norte, internationally recognized as one of the world's most beautiful beaches. Enjoy turquoise waters, soft white sand and the unique charm of Isla Mujeres in an experience tailored to your travel style.",
    galleryTitle: "Experience Gallery",
    whatToExpectTitle: "What to Expect",
    whatToExpect:
      "Escape to the Caribbean paradise of Isla Mujeres, a destination famous for its crystal-clear waters, relaxed atmosphere and breathtaking scenery. Depending on the experience you choose, you may enjoy sailing across the Caribbean Sea, snorkeling in vibrant reefs, relaxing at exclusive beach clubs or exploring the island at your own pace.\n\nEvery visit offers a unique combination of natural beauty, local culture and unforgettable moments designed to create lasting memories.",
    experienceStylesTitle: "Available Experience Styles",
    experienceStyles: [
      "Luxury Catamaran Experience",
      "Small Group Sailing Adventure",
      "Family-Friendly Island Escape",
      "Beach Club & Relaxation Day",
      "Private Customized Experience",
    ],
    perfectForTitle: "Perfect For",
    perfectFor: [
      "❤️ Couples",
      "👨‍👩‍👧‍👦 Families",
      "🎉 Groups of Friends",
      "✨ Honeymooners",
      "🏖️ First-Time Visitors",
    ],
    recommendationTitle: "Why We Recommend This Experience",
    recommendation:
      "Isla Mujeres is one of the most requested experiences in the Riviera Maya thanks to its combination of turquoise waters, relaxed island atmosphere and flexible options for every type of traveler.",
    whatsappButton: "Get Personalized Quote",
    whatsappMessage:
      "Hello Mayan Xperience Tours! I am interested in the Isla Mujeres Experience.",
  },
  es: {
    title: "Isla Mujeres",
    subtitle:
      "Descubre Playa Norte, reconocida internacionalmente como una de las playas más hermosas del mundo. Disfruta aguas turquesa, arena blanca y suave, y el encanto único de Isla Mujeres en una experiencia adaptada a tu estilo de viaje.",
    galleryTitle: "Galería de la Experiencia",
    whatToExpectTitle: "Qué Puedes Esperar",
    whatToExpect:
      "Escápate al paraíso caribeño de Isla Mujeres, un destino famoso por sus aguas cristalinas, ambiente relajado y paisajes impresionantes. Según la experiencia que elijas, podrás navegar por el mar Caribe, hacer snorkel en arrecifes llenos de vida, relajarte en exclusivos clubes de playa o explorar la isla a tu propio ritmo.\n\nCada visita ofrece una combinación única de belleza natural, cultura local y momentos inolvidables diseñados para crear recuerdos duraderos.",
    experienceStylesTitle: "Estilos de Experiencia Disponibles",
    experienceStyles: [
      "Experiencia de Catamarán de Lujo",
      "Aventura de Navegación en Grupo Pequeño",
      "Escapada Familiar a la Isla",
      "Día de Playa Club y Relajación",
      "Experiencia Privada Personalizada",
    ],
    perfectForTitle: "Ideal Para",
    perfectFor: [
      "❤️ Parejas",
      "👨‍👩‍👧‍👦 Familias",
      "🎉 Grupos de Amigos",
      "✨ Luna de Miel",
      "🏖️ Visitantes por Primera Vez",
    ],
    recommendationTitle: "Por Qué Recomendamos Esta Experiencia",
    recommendation:
      "Isla Mujeres es una de las experiencias más solicitadas en la Riviera Maya gracias a su combinación de aguas turquesa, ambiente relajado de isla y opciones flexibles para cada tipo de viajero.",
    whatsappButton: "Solicitar Cotización Personalizada",
    whatsappMessage:
      "Hola Mayan Xperience Tours! Estoy interesado en la Experiencia Isla Mujeres.",
  },
  fr: {
    title: "Isla Mujeres",
    subtitle:
      "Découvrez Playa Norte, reconnue internationalement comme l'une des plus belles plages du monde. Profitez des eaux turquoise, du sable blanc et doux, et du charme unique d'Isla Mujeres dans une expérience adaptée à votre style de voyage.",
    galleryTitle: "Galerie de l'Expérience",
    whatToExpectTitle: "À Quoi Vous Attendre",
    whatToExpect:
      "Évadez-vous vers le paradis caribéen d'Isla Mujeres, une destination réputée pour ses eaux cristallines, son atmosphère détendue et ses paysages à couper le souffle. Selon l'expérience choisie, vous pourrez naviguer sur la mer des Caraïbes, faire du snorkeling dans des récifs colorés, vous détendre dans des clubs de plage exclusifs ou explorer l'île à votre rythme.\n\nChaque visite offre une combinaison unique de beauté naturelle, de culture locale et de moments inoubliables pensés pour créer des souvenirs durables.",
    experienceStylesTitle: "Styles d'Expérience Disponibles",
    experienceStyles: [
      "Expérience en Catamaran de Luxe",
      "Aventure en Voilier en Petit Groupe",
      "Escapade Familiale sur l'Île",
      "Journée Beach Club et Détente",
      "Expérience Privée Personnalisée",
    ],
    perfectForTitle: "Parfait Pour",
    perfectFor: [
      "❤️ Couples",
      "👨‍👩‍👧‍👦 Familles",
      "🎉 Groupes d'Amis",
      "✨ Voyages de Noces",
      "🏖️ Premiers Visiteurs",
    ],
    recommendationTitle: "Pourquoi Nous Recommandons Cette Expérience",
    recommendation:
      "Isla Mujeres est l'une des expériences les plus demandées dans la Riviera Maya grâce à sa combinaison d'eaux turquoise, d'ambiance insulaire détendue et d'options flexibles pour chaque type de voyageur.",
    whatsappButton: "Obtenir un Devis Personnalisé",
    whatsappMessage:
      "Bonjour Mayan Xperience Tours! Je suis intéressé par l'Expérience Isla Mujeres.",
  },
} as const;

function getLanguage(value: string | string[] | undefined): LanguageCode {
  const lang = Array.isArray(value) ? value[0] : value;

  return lang === "es" || lang === "fr" ? lang : "en";
}

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

export default async function IslaMujeresPage({ searchParams }: TourPageProps) {
  const language = getLanguage((await searchParams).lang);
  const t = tourTranslations[language];
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
      <TourNavbar currentPath="/isla-mujeres" initialLanguage={language} />

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
          {t.experienceStylesTitle}
        </h2>

        <ul style={{ lineHeight: "2" }}>
          {t.experienceStyles.map((item) => (
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
