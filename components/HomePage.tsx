"use client";

import { useEffect, useRef, useState } from "react";
import Contact from "./Contact";
import FeaturedExperiences from "./FeaturedExperiences";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import PopularTours from "./PopularTours";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";
import { isLanguageCode } from "@/lib/language";
import { buildLocalizedHref } from "@/lib/links";
import { LanguageCode } from "./translations";

const storageKey = "mayan-xperience-language";

function getUrlLanguage() {
  return new URLSearchParams(window.location.search).get("lang");
}

type HomePageProps = {
  initialLanguage: LanguageCode;
};

export default function HomePage({ initialLanguage }: HomePageProps) {
  const [language, setLanguage] = useState<LanguageCode>(initialLanguage);
  const browserLanguageResolved = useRef(false);

  useEffect(() => {
    const urlLanguage = getUrlLanguage();

    if (isLanguageCode(urlLanguage)) {
      browserLanguageResolved.current = true;

      if (urlLanguage !== initialLanguage) {
        window.setTimeout(() => setLanguage(urlLanguage), 0);
      }

      return;
    }

    const savedLanguage = window.localStorage.getItem(storageKey);

    if (isLanguageCode(savedLanguage)) {
      window.setTimeout(() => setLanguage(savedLanguage), 0);
    }

    browserLanguageResolved.current = true;
  }, [initialLanguage]);

  useEffect(() => {
    if (!browserLanguageResolved.current) {
      return;
    }

    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState(
      null,
      "",
      `${url.pathname}?${url.searchParams}${url.hash}`,
    );
    window.dispatchEvent(
      new CustomEvent("mayan-xperience-language-change", {
        detail: language,
      }),
    );
  }, [language]);

  return (
    <main>
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        menuHrefs={{
          experiences: buildLocalizedHref("/experiences", language),
          about: "#about",
          contact: "#contact",
        }}
      />
      <Hero language={language} />
      <PopularTours language={language} />
      <FeaturedExperiences language={language} />
      <WhyUs language={language} />
      <Testimonials language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  );
}
