import type { LanguageCode } from "@/components/translations";

export type ProductType = "experience" | "service";

export type ProductPriority = "featured" | "standard" | "supporting";

export type ProductStatus = "draft" | "published";

export type ProductCategoryType = ProductType | "all";

export type LocalizedContent<T> = Record<LanguageCode, T>;

export type ProductCategory = {
  id: string;
  slug: string;
  type: ProductCategoryType;
  title: string;
  priority: ProductPriority;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ProductRecommendation = {
  productId: string;
  reason?: LocalizedContent<string>;
};

export type ProductSeoImage = {
  url: string;
  width?: number;
  height?: number;
  alt: string;
};

export type ProductSeo = {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    images: ProductSeoImage[];
  };
  twitter: {
    card: "summary" | "summary_large_image" | "app" | "player";
    title: string;
    description: string;
    images: Array<{
      url: string;
      alt: string;
    }>;
  };
};

export type ProductLocalizedPageContent = {
  title: string;
  subtitle: string;
  shortDescription?: string;
  longDescription?: string;
  galleryTitle: string;
  whatToExpectTitle: string;
  whatToExpect: string;
  highlightsTitle?: string;
  highlights?: string[];
  experienceStylesTitle?: string;
  experienceStyles?: string[];
  perfectForTitle: string;
  perfectFor: string[];
  includedTitle?: string;
  included?: string[];
  notIncludedTitle?: string;
  notIncluded?: string[];
  importantInformationTitle?: string;
  importantInformation?: string[];
  recommendationTitle: string;
  recommendation: string;
  ctaTitle?: string;
  ctaText?: string;
  whatsappButton: string;
  whatsappMessage: string;
  faq?: FAQItem[];
};

export type BaseProduct = {
  id: string;
  slug: string;
  legacyPath?: string;
  type: ProductType;
  category: string;
  subcategory?: string;
  status?: ProductStatus;
  priority: ProductPriority;
  assetBasePath?: string;
  cardImage?: string;
  cardImageAlt?: string;
  cardImageObjectPosition?: string;
  heroImage: string;
  heroImageObjectPosition?: string;
  heroAlt: string;
  gallery: string[];
  relatedProductIds: string[];
  recommendedServiceIds: string[];
  recommendedExperienceIds: string[];
  tripBuilderEligible: boolean;
  seo: ProductSeo;
  content: LocalizedContent<ProductLocalizedPageContent>;
};

export type ExperienceProduct = BaseProduct & {
  type: "experience";
};

export type ServiceProduct = BaseProduct & {
  type: "service";
};

export type Product = ExperienceProduct | ServiceProduct;
