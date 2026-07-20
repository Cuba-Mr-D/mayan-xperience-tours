import { categoryIds, type ProductCategoryId } from "@/content/categories";
import { createTodoContent, createTodoSeo } from "@/content/products/shared";
import type { ExperienceProduct } from "@/types/product";

export const mayanRuinsCultureExperiences = [
  {
    id: "chichen-itza",
    slug: "chichen-itza",
    legacyPath: "/chichen-itza",
    type: "experience",
    category: categoryIds.mayanRuinsCulture,
    status: "published",
    priority: "featured",
    assetBasePath: "/images/experiences/chichen-itza",
    cardImage: "/images/experiences/chichen-itza/card.jpg",
    cardImageAlt: "Chichén Itzá Kukulkan Pyramid tour experience.",
    cardImageObjectPosition: "center 48%",
    heroImage: "/tours/chichen.jpg",
    heroAlt: "Chichen Itza",
    gallery: [
      "/tours/chichen-gallery/chichen1.jpg",
      "/tours/chichen-gallery/chichen2.jpg",
      "/tours/chichen-gallery/chichen3.jpg",
      "/tours/chichen-gallery/chichen4.jpg",
      "/tours/chichen-gallery/chichen5.jpg",
      "/tours/chichen-gallery/chichen6.jpg",
      "/tours/chichen-gallery/chichen7.jpg",
    ],
    relatedProductIds: [],
    recommendedServiceIds: [],
    recommendedExperienceIds: [],
    tripBuilderEligible: true,
    seo: {
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
    },
    content: {
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
    },
  },
  {
    id: "tulum",
    slug: "tulum",
    legacyPath: "/tulum",
    type: "experience",
    category: categoryIds.mayanRuinsCulture,
    status: "published",
    priority: "featured",
    heroImage: "/tours/tulum-gallery/tulum1.jpg",
    heroAlt: "Tulum",
    gallery: [
      "/tours/tulum-gallery/tulum1.jpg",
      "/tours/tulum-gallery/tulum2.jpg",
      "/tours/tulum-gallery/tulum3.jpg",
      "/tours/tulum-gallery/tulum4.jpg",
      "/tours/tulum-gallery/tulum5.jpg",
      "/tours/tulum-gallery/tulum6.jpg",
    ],
    relatedProductIds: [],
    recommendedServiceIds: [],
    recommendedExperienceIds: [],
    tripBuilderEligible: true,
    seo: {
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
    },
    content: {
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
    },
  },
  {
    id: "tulum-express",
    slug: "tulum-express",
    type: "experience",
    category: categoryIds.mayanRuinsCulture,
    status: "draft",
    priority: "standard",
    heroImage: "",
    heroAlt: "TODO: Add Tulum Express hero image alt text.",
    gallery: [],
    relatedProductIds: ["tulum"],
    recommendedServiceIds: [],
    recommendedExperienceIds: ["tulum"],
    tripBuilderEligible: true,
    seo: createTodoSeo("Tulum Express"),
    content: createTodoContent("Tulum Express"),
  },
  {
    id: "coba",
    slug: "coba",
    type: "experience",
    category: categoryIds.mayanRuinsCulture,
    status: "draft",
    priority: "standard",
    heroImage: "",
    heroAlt: "TODO: Add Coba hero image alt text.",
    gallery: [],
    relatedProductIds: [],
    recommendedServiceIds: [],
    recommendedExperienceIds: [],
    tripBuilderEligible: true,
    seo: createTodoSeo("Coba"),
    content: createTodoContent({ en: "Coba", es: "Cobá", fr: "Cobá" }),
  },
  {
    id: "ek-balam",
    slug: "ek-balam",
    type: "experience",
    category: categoryIds.mayanRuinsCulture,
    status: "draft",
    priority: "standard",
    heroImage: "",
    heroAlt: "TODO: Add Ek Balam hero image alt text.",
    gallery: [],
    relatedProductIds: [],
    recommendedServiceIds: [],
    recommendedExperienceIds: [],
    tripBuilderEligible: true,
    seo: createTodoSeo("Ek Balam"),
    content: createTodoContent("Ek Balam"),
  },
] as const satisfies Array<ExperienceProduct & { category: ProductCategoryId }>;
