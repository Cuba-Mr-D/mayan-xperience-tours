import type { LanguageCode } from "@/components/translations";

export const defaultLanguage: LanguageCode = "en";

export function isLanguageCode(value: string | null | undefined): value is LanguageCode {
  return value === "en" || value === "es" || value === "fr";
}

export function getLanguage(value: string | string[] | null | undefined): LanguageCode {
  const language = Array.isArray(value) ? value[0] : value;

  return isLanguageCode(language) ? language : defaultLanguage;
}
