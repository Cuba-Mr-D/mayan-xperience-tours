import type {
  LocalizedContent,
  ProductLocalizedPageContent,
  ProductSeo,
} from "@/types/product";

type LocalizedProductName = {
  en: string;
  es: string;
  fr: string;
};

export function createTodoSeo(productName: string): ProductSeo {
  return {
    title: `TODO: SEO title for ${productName}`,
    description: `TODO: SEO description for ${productName}`,
    openGraph: {
      title: `TODO: Open Graph title for ${productName}`,
      description: `TODO: Open Graph description for ${productName}`,
      url: "",
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      title: `TODO: Twitter title for ${productName}`,
      description: `TODO: Twitter description for ${productName}`,
      images: [],
    },
  };
}

export function createTodoContent(
  productName: string | LocalizedProductName,
): LocalizedContent<ProductLocalizedPageContent> {
  const names =
    typeof productName === "string"
      ? { en: productName, es: productName, fr: productName }
      : productName;

  return {
    en: createLanguageTodoContent(names.en, "en"),
    es: createLanguageTodoContent(names.es, "es"),
    fr: createLanguageTodoContent(names.fr, "fr"),
  };
}

function createLanguageTodoContent(
  title: string,
  languageCode: string,
): ProductLocalizedPageContent {
  return {
    title,
    subtitle: `TODO (${languageCode}): Add product subtitle.`,
    shortDescription: `TODO (${languageCode}): Add short description.`,
    longDescription: `TODO (${languageCode}): Add long description.`,
    galleryTitle: "TODO: Gallery title",
    whatToExpectTitle: "TODO: What to expect title",
    whatToExpect: `TODO (${languageCode}): Add what-to-expect content.`,
    highlightsTitle: "TODO: Highlights title",
    highlights: [],
    experienceStylesTitle: "TODO: Experience style title",
    experienceStyles: [],
    perfectForTitle: "TODO: Perfect for title",
    perfectFor: [],
    includedTitle: "TODO: Included title",
    included: [],
    notIncludedTitle: "TODO: Not included title",
    notIncluded: [],
    recommendationTitle: "TODO: Recommendation title",
    recommendation: `TODO (${languageCode}): Add recommendation content.`,
    whatsappButton: "TODO: WhatsApp button label",
    whatsappMessage: `TODO (${languageCode}): Add WhatsApp message for ${title}.`,
    faq: [],
  };
}
