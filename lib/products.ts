import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import { productCategories } from "@/content/categories";
import { experienceProducts } from "@/content/products/experiences";
import { serviceProducts } from "@/content/products/services";
import type { ExperienceProduct, Product, ProductCategory } from "@/types/product";

const cardImageFileName = "card.jpg";

export const products = [
  ...experienceProducts,
  ...serviceProducts,
] as const satisfies Product[];

validateProductCatalog(products);

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getRequiredProductById(id: string): Product {
  const product = getProductById(id);

  if (!product) {
    throw new Error(`Product not found: ${id}`);
  }

  return product;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function isPublishedProduct(product: Product): boolean {
  return product.status === "published";
}

export function getProductCardImage(product?: Product): string {
  if (!product) {
    return "";
  }

  const conventionImage = product.assetBasePath
    ? `${product.assetBasePath}/${cardImageFileName}`
    : "";

  if (isPublicImageAvailable(conventionImage)) {
    return conventionImage;
  }

  if (isPublicImageAvailable(product.cardImage)) {
    return product.cardImage;
  }

  if (isPublicImageAvailable(product.heroImage)) {
    return product.heroImage;
  }

  return "";
}

export function getProductCardImageAlt(product: Product, fallback: string): string {
  return product.cardImageAlt || product.heroAlt || fallback;
}

export function getPublishedExperienceBySlug(
  slug: string,
): ExperienceProduct | undefined {
  const product = getProductBySlug(slug);

  if (
    product?.type !== "experience" ||
    !isPublishedProduct(product) ||
    !product.heroImage
  ) {
    return undefined;
  }

  return product;
}

export function getPublishedExperiencesByCategory(
  category: string,
): ExperienceProduct[] {
  return (products as readonly Product[]).filter(
    (product): product is ExperienceProduct =>
      product.type === "experience" &&
      product.category === category &&
      isPublishedProduct(product) &&
      Boolean(product.heroImage),
  );
}

export function getCategoryById(id: string): ProductCategory | undefined {
  return productCategories.find((category) => category.id === id);
}

export function getProductMetadata(id: string): Metadata {
  const product = getProductById(id);

  if (!product) {
    return {};
  }

  return product.seo;
}

function validateProductCatalog(catalog: readonly Product[]) {
  const validCategoryIds = new Set<string>(
    productCategories.map((category) => category.id),
  );
  const productIds = new Set<string>();
  const productSlugs = new Set<string>();

  for (const product of catalog) {
    if (productIds.has(product.id)) {
      throw new Error(`Duplicate product id: ${product.id}`);
    }

    if (productSlugs.has(product.slug)) {
      throw new Error(`Duplicate product slug: ${product.slug}`);
    }

    if (!validCategoryIds.has(product.category)) {
      throw new Error(
        `Product ${product.id} references an invalid category: ${product.category}`,
      );
    }

    productIds.add(product.id);
    productSlugs.add(product.slug);
  }

  for (const product of catalog) {
    const referencedProductIds = [
      ...product.relatedProductIds,
      ...product.recommendedServiceIds,
      ...product.recommendedExperienceIds,
    ];

    for (const referencedProductId of referencedProductIds) {
      if (!productIds.has(referencedProductId)) {
        throw new Error(
          `Product ${product.id} references an unknown product: ${referencedProductId}`,
        );
      }
    }
  }
}

function isPublicImageAvailable(assetPath?: string): assetPath is string {
  if (!assetPath) {
    return false;
  }

  const normalizedAssetPath = assetPath.replace(/^\/+/, "");

  return existsSync(path.join(process.cwd(), "public", normalizedAssetPath));
}
