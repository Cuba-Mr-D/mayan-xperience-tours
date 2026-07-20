import type { ProductCategory } from "@/types/product";

export const productCategories = [
  {
    id: "caribbean-islands",
    slug: "caribbean-islands",
    type: "experience",
    title: "Caribbean Islands",
    priority: "featured",
  },
  {
    id: "mayan-ruins-culture",
    slug: "mayan-ruins-culture",
    type: "experience",
    title: "Mayan Ruins & Culture",
    priority: "featured",
  },
  {
    id: "cenotes",
    slug: "cenotes",
    type: "experience",
    title: "Cenotes",
    priority: "featured",
  },
  {
    id: "adventure",
    slug: "adventure",
    type: "experience",
    title: "Adventure",
    priority: "standard",
  },
  {
    id: "nature-wildlife",
    slug: "nature-wildlife",
    type: "experience",
    title: "Nature & Wildlife",
    priority: "standard",
  },
  {
    id: "theme-parks",
    slug: "theme-parks",
    type: "experience",
    title: "Theme Parks",
    priority: "standard",
  },
  {
    id: "transportation-rentals",
    slug: "transportation-rentals",
    type: "service",
    title: "Transportation & Rentals",
    priority: "supporting",
  },
  {
    id: "photography-media",
    slug: "photography-media",
    type: "service",
    title: "Photography & Media",
    priority: "supporting",
  },
  {
    id: "events-entertainment",
    slug: "events-entertainment",
    type: "service",
    title: "Events & Entertainment",
    priority: "supporting",
  },
  {
    id: "private-services",
    slug: "private-services",
    type: "service",
    title: "Private Services",
    priority: "supporting",
  },
  {
    id: "local-experiences",
    slug: "local-experiences",
    type: "all",
    title: "Local Experiences",
    priority: "supporting",
  },
] as const satisfies ProductCategory[];

export type ProductCategoryId = (typeof productCategories)[number]["id"];

export const categoryIds = {
  caribbeanIslands: "caribbean-islands",
  mayanRuinsCulture: "mayan-ruins-culture",
  cenotes: "cenotes",
  adventure: "adventure",
  natureWildlife: "nature-wildlife",
  themeParks: "theme-parks",
  transportationRentals: "transportation-rentals",
  photographyMedia: "photography-media",
  eventsEntertainment: "events-entertainment",
  privateServices: "private-services",
  localExperiences: "local-experiences",
} as const satisfies Record<string, ProductCategoryId>;
