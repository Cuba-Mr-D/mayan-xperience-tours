"use client";

import { useEffect, useState } from "react";
import Contact from "./Contact";
import FeaturedExperiences from "./FeaturedExperiences";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import PopularTours from "./PopularTours";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";
import { LanguageCode } from "./translations";

const storageKey = "mayan-xperience-language";

function isLanguageCode(value: string | null): value is LanguageCode {
  return value === "en" || value === "es" || value === "fr";
}

export default function HomePage() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLanguage = window.localStorage.getItem(storageKey);

    if (isLanguageCode(savedLanguage)) {
      return savedLanguage;
    }

    return "en";
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main>
      <Navbar language={language} onLanguageChange={setLanguage} />
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
