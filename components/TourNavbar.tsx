"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { buildLocalizedHref } from "@/lib/links";
import Navbar from "./Navbar";
import type { LanguageCode } from "./translations";

const storageKey = "mayan-xperience-language";

type TourNavbarProps = {
  currentPath: string;
  initialLanguage: LanguageCode;
};

export default function TourNavbar({
  currentPath,
  initialLanguage,
}: TourNavbarProps) {
  const router = useRouter();
  const [language, setLanguage] = useState<LanguageCode>(initialLanguage);

  useEffect(() => {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    window.dispatchEvent(
      new CustomEvent("mayan-xperience-language-change", {
        detail: language,
      }),
    );
  }, [language]);

  const handleLanguageChange = (nextLanguage: LanguageCode) => {
    setLanguage(nextLanguage);
    router.replace(`${currentPath}?lang=${nextLanguage}`, { scroll: false });
  };

  return (
    <Navbar
      language={language}
      onLanguageChange={handleLanguageChange}
      logoHref={buildLocalizedHref("/", language)}
      menuHrefs={{
        experiences: buildLocalizedHref("/experiences", language),
        about: buildLocalizedHref("/#about", language),
        contact: buildLocalizedHref("/#contact", language),
      }}
    />
  );
}
