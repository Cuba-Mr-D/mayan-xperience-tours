import { categoryIds, type ProductCategoryId } from "@/content/categories";
import type { LanguageCode } from "@/components/translations";
import type { LocalizedContent } from "@/types/product";

export type ExperienceCategoryConfig = {
  accentColor: string;
  bannerImage?: string;
  bannerPosition?: string;
  slug: ProductCategoryId;
  name: LocalizedContent<string>;
  heading: LocalizedContent<string>;
  description: LocalizedContent<string>;
  featuredProductSlugs: string[];
  order: number;
};

export const experienceCategoryConfigs = [
  {
    slug: categoryIds.caribbeanIslands,
    accentColor: "#14C7C8",
    name: {
      en: "Caribbean Islands",
      es: "Islas del Caribe",
      fr: "Îles des Caraïbes",
    },
    heading: {
      en: "Discover the Caribbean Islands",
      es: "Descubre las islas del Caribe",
      fr: "Découvrez les îles des Caraïbes",
    },
    description: {
      en: "Island escapes, turquoise water, sailing days and Caribbean scenery.",
      es: "Escapadas a islas, aguas turquesa, navegación y paisajes caribeños.",
      fr: "Escapades insulaires, eaux turquoise, journées en mer et paysages caribéens.",
    },
    bannerImage: "/tours/isla-mujeres.png",
    bannerPosition: "center 56%",
    featuredProductSlugs: [
      "isla-mujeres",
      "cozumel",
      "isla-contoy",
      "holbox",
    ],
    order: 1,
  },
  {
    slug: categoryIds.mayanRuinsCulture,
    accentColor: "#C89B5A",
    name: {
      en: "Mayan Ruins & Culture",
      es: "Ruinas mayas y cultura",
      fr: "Ruines mayas et culture",
    },
    heading: {
      en: "Explore Mayan History",
      es: "Explora la historia maya",
      fr: "Explorez l’histoire maya",
    },
    description: {
      en: "Archaeological sites, ancient cities and guided cultural experiences.",
      es: "Zonas arqueológicas, ciudades antiguas y experiencias culturales guiadas.",
      fr: "Sites archéologiques, cités anciennes et expériences culturelles guidées.",
    },
    bannerImage: "/tours/chichen.jpg",
    bannerPosition: "center 48%",
    featuredProductSlugs: ["tulum", "chichen-itza", "coba", "ek-balam"],
    order: 2,
  },
  {
    slug: categoryIds.cenotes,
    accentColor: "#0EA5C6",
    name: {
      en: "Cenotes",
      es: "Cenotes",
      fr: "Cénotes",
    },
    heading: {
      en: "Cenotes & Underground Wonders",
      es: "Cenotes y maravillas subterráneas",
      fr: "Cénotes et merveilles souterraines",
    },
    description: {
      en: "Freshwater swimming, jungle settings and underground formations.",
      es: "Nado en agua dulce, entornos de selva y formaciones subterráneas.",
      fr: "Baignade en eau douce, décors de jungle et formations souterraines.",
    },
    bannerImage: "/tours/cenotes-gallery/cenote1.jpg",
    bannerPosition: "center 50%",
    featuredProductSlugs: [
      "cenotes",
      "tulum-cenote",
      "snorkeling-with-turtles-cenote",
      "xenotes",
    ],
    order: 3,
  },
  {
    slug: categoryIds.adventure,
    accentColor: "#F97316",
    name: {
      en: "Adventure",
      es: "Aventura",
      fr: "Aventure",
    },
    heading: {
      en: "Adventure & Adrenaline",
      es: "Aventura y adrenalina",
      fr: "Aventure et adrénaline",
    },
    description: {
      en: "Active experiences for travelers who want energy, movement and nature.",
      es: "Experiencias activas para viajeros que buscan energía, movimiento y naturaleza.",
      fr: "Expériences actives pour les voyageurs en quête d’énergie, de mouvement et de nature.",
    },
    bannerImage: "/tours/cenotes.jpg",
    bannerPosition: "center 50%",
    featuredProductSlugs: [
      "atv-adventure",
      "atv-snorkeling-express",
      "xplor",
      "xavage",
    ],
    order: 4,
  },
  {
    slug: categoryIds.natureWildlife,
    accentColor: "#2E8B57",
    name: {
      en: "Nature & Wildlife",
      es: "Naturaleza y vida silvestre",
      fr: "Nature et vie sauvage",
    },
    heading: {
      en: "Nature & Wildlife",
      es: "Naturaleza y vida silvestre",
      fr: "Nature et vie sauvage",
    },
    description: {
      en: "Natural reserves, wildlife moments and experiences surrounded by the Riviera Maya landscape.",
      es: "Reservas naturales, vida silvestre y experiencias rodeadas por el paisaje de la Riviera Maya.",
      fr: "Réserves naturelles, moments avec la faune et expériences au coeur des paysages de la Riviera Maya.",
    },
    bannerImage: "/tours/cenotes-gallery/cenote4.jpg",
    bannerPosition: "center 52%",
    featuredProductSlugs: [
      "snorkeling-with-turtles-cenote",
      "monkey-sanctuary",
      "sian-kaan",
    ],
    order: 5,
  },
  {
    slug: categoryIds.themeParks,
    accentColor: "#2563EB",
    name: {
      en: "Theme Parks",
      es: "Parques temáticos",
      fr: "Parcs à thème",
    },
    heading: {
      en: "Theme Parks",
      es: "Parques temáticos",
      fr: "Parcs à thème",
    },
    description: {
      en: "Iconic parks with nature, culture, water activities and entertainment.",
      es: "Parques icónicos con naturaleza, cultura, actividades acuáticas y entretenimiento.",
      fr: "Parcs emblématiques avec nature, culture, activités aquatiques et divertissement.",
    },
    bannerImage: "/hero-riviera-maya.jpg",
    bannerPosition: "center 35%",
    featuredProductSlugs: ["xcaret", "xel-ha", "xplor", "xenses", "xavage", "xoximilco"],
    order: 6,
  },
  {
    slug: categoryIds.localExperiences,
    accentColor: "#F97373",
    name: {
      en: "Local Experiences",
      es: "Experiencias locales",
      fr: "Expériences locales",
    },
    heading: {
      en: "Local Experiences",
      es: "Experiencias locales",
      fr: "Expériences locales",
    },
    description: {
      en: "Local-style experiences will appear here once they are complete in the catalog.",
      es: "Las experiencias locales aparecerán aquí cuando estén completas en el catálogo.",
      fr: "Les expériences locales apparaîtront ici lorsqu’elles seront complètes dans le catalogue.",
    },
    bannerImage: undefined,
    bannerPosition: undefined,
    featuredProductSlugs: [],
    order: 7,
  },
] as const satisfies ExperienceCategoryConfig[];

export function getExperienceCategoryConfig(slug: string) {
  return experienceCategoryConfigs.find((category) => category.slug === slug);
}

export function getExperienceCategoryText(
  category: ExperienceCategoryConfig,
  language: LanguageCode,
) {
  return {
    name: category.name[language],
    heading: category.heading[language],
    description: category.description[language],
  };
}
