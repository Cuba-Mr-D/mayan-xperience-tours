import { categoryIds, type ProductCategoryId } from "@/content/categories";
import { createTodoContent, createTodoSeo } from "@/content/products/shared";
import type { ExperienceProduct } from "@/types/product";

export const cenoteExperiences = [
  {
    id: "cenotes",
    slug: "cenotes",
    legacyPath: "/cenotes",
    type: "experience",
    category: categoryIds.cenotes,
    status: "published",
    priority: "featured",
    assetBasePath: "/images/experiences/cenotes",
    cardImage: "/images/experiences/cenotes/card.jpg",
    cardImageAlt: "Riviera Maya cenote swimming adventure.",
    cardImageObjectPosition: "center 52%",
    heroImage: "/tours/cenotes-gallery/cenote1.jpg",
    heroAlt: "Cenotes Adventure",
    gallery: [
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
    ],
    relatedProductIds: [],
    recommendedServiceIds: [],
    recommendedExperienceIds: [],
    tripBuilderEligible: true,
    seo: {
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
    },
    content: {
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
    },
  },
  {
    id: "tulum-cenote",
    slug: "tulum-cenote",
    type: "experience",
    category: categoryIds.cenotes,
    status: "draft",
    priority: "standard",
    heroImage: "",
    heroAlt: "TODO: Add Tulum + Cenote hero image alt text.",
    gallery: [],
    relatedProductIds: ["tulum", "cenotes"],
    recommendedServiceIds: [],
    recommendedExperienceIds: ["tulum", "cenotes"],
    tripBuilderEligible: true,
    seo: createTodoSeo("Tulum + Cenote"),
    content: createTodoContent("Tulum + Cenote"),
  },
  {
    id: "tulum-turtles-cenote",
    slug: "tulum-turtles-cenote",
    type: "experience",
    category: categoryIds.cenotes,
    status: "draft",
    priority: "standard",
    heroImage: "",
    heroAlt: "TODO: Add Tulum + Turtles + Cenote hero image alt text.",
    gallery: [],
    relatedProductIds: ["tulum", "cenotes", "snorkeling-with-turtles-cenote"],
    recommendedServiceIds: [],
    recommendedExperienceIds: ["tulum", "cenotes", "snorkeling-with-turtles-cenote"],
    tripBuilderEligible: true,
    seo: createTodoSeo("Tulum + Turtles + Cenote"),
    content: createTodoContent("Tulum + Turtles + Cenote"),
  },
  {
    id: "snorkeling-with-turtles-cenote",
    slug: "snorkeling-with-turtles-cenote",
    type: "experience",
    category: categoryIds.cenotes,
    status: "draft",
    priority: "standard",
    heroImage: "",
    heroAlt: "TODO: Add Snorkeling with Turtles + Cenote hero image alt text.",
    gallery: [],
    relatedProductIds: ["cenotes", "tulum-turtles-cenote"],
    recommendedServiceIds: [],
    recommendedExperienceIds: ["cenotes", "tulum-turtles-cenote"],
    tripBuilderEligible: true,
    seo: createTodoSeo("Snorkeling with Turtles + Cenote"),
    content: createTodoContent("Snorkeling with Turtles + Cenote"),
  },
] as const satisfies Array<ExperienceProduct & { category: ProductCategoryId }>;
