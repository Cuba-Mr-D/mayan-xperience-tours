import { categoryIds, type ProductCategoryId } from "@/content/categories";
import { createTodoContent, createTodoSeo } from "@/content/products/shared";
import type { ServiceProduct } from "@/types/product";

export const photographyMediaServices = [
  {
    id: "photography",
    slug: "photography",
    type: "service",
    category: categoryIds.photographyMedia,
    status: "draft",
    priority: "supporting",
    heroImage: "",
    heroAlt: "TODO: Add Photography hero image alt text.",
    gallery: [],
    relatedProductIds: [],
    recommendedServiceIds: ["drone-photography"],
    recommendedExperienceIds: [],
    tripBuilderEligible: true,
    seo: createTodoSeo("Photography"),
    content: createTodoContent("Photography"),
  },
  {
    id: "drone-photography",
    slug: "drone-photography",
    type: "service",
    category: categoryIds.photographyMedia,
    status: "draft",
    priority: "supporting",
    heroImage: "",
    heroAlt: "TODO: Add Drone Photography hero image alt text.",
    gallery: [],
    relatedProductIds: ["photography"],
    recommendedServiceIds: ["photography"],
    recommendedExperienceIds: [],
    tripBuilderEligible: true,
    seo: createTodoSeo("Drone Photography"),
    content: createTodoContent("Drone Photography"),
  },
] as const satisfies Array<ServiceProduct & { category: ProductCategoryId }>;
