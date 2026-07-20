import { categoryIds, type ProductCategoryId } from "@/content/categories";
import { createTodoContent, createTodoSeo } from "@/content/products/shared";
import type { ServiceProduct } from "@/types/product";

export const eventsEntertainmentServices = [
  {
    id: "events-celebrations",
    slug: "events-celebrations",
    type: "service",
    category: categoryIds.eventsEntertainment,
    status: "draft",
    priority: "supporting",
    heroImage: "",
    heroAlt: "TODO: Add Events & Celebrations hero image alt text.",
    gallery: [],
    relatedProductIds: [],
    recommendedServiceIds: [],
    recommendedExperienceIds: [],
    tripBuilderEligible: true,
    seo: createTodoSeo("Events & Celebrations"),
    content: createTodoContent("Events & Celebrations"),
  },
] as const satisfies Array<ServiceProduct & { category: ProductCategoryId }>;
