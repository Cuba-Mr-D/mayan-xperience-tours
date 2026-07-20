import type { LanguageCode } from "@/components/translations";

export function buildLocalizedHref(path: string, language: LanguageCode): string {
  const [pathnameWithQuery, hash = ""] = path.split("#");
  const [pathname, query = ""] = pathnameWithQuery.split("?");
  const searchParams = new URLSearchParams(query);

  searchParams.set("lang", language);

  const search = searchParams.toString();
  const hashFragment = hash ? `#${hash}` : "";

  return `${pathname}${search ? `?${search}` : ""}${hashFragment}`;
}
