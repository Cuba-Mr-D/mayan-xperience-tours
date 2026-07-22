import type { MetadataRoute } from "next";

const baseUrl = "https://mayanxperiencetours.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/isla-mujeres",
    "/cozumel",
    "/isla-contoy",
    "/tulum",
    "/chichen-itza",
    "/cenotes",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
