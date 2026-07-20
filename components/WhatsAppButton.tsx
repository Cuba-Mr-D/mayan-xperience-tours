"use client";

import { useEffect, useState } from "react";
import { LanguageCode } from "./translations";

const storageKey = "mayan-xperience-language";

const whatsappMessages: Record<LanguageCode, string> = {
  en: "Hi! I would like more information about Mayan Xperience Tours.",
  es: "Hola, me gustaría recibir más información sobre Mayan Xperience Tours.",
  fr: "Bonjour, j’aimerais recevoir plus d’informations sur Mayan Xperience Tours.",
};

function isLanguageCode(value: unknown): value is LanguageCode {
  return value === "en" || value === "es" || value === "fr";
}

export default function WhatsAppButton() {
  const [language, setLanguage] = useState<LanguageCode>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(storageKey);

    if (isLanguageCode(savedLanguage)) {
      window.setTimeout(() => setLanguage(savedLanguage), 0);
    }

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<unknown>;

      if (isLanguageCode(customEvent.detail)) {
        setLanguage(customEvent.detail);
      }
    };

    window.addEventListener(
      "mayan-xperience-language-change",
      handleLanguageChange,
    );

    return () => {
      window.removeEventListener(
        "mayan-xperience-language-change",
        handleLanguageChange,
      );
    };
  }, []);

  const message = encodeURIComponent(whatsappMessages[language]);

  return (
    <a
      href={`https://wa.me/529842467762?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        textDecoration: "none",
        zIndex: 9999,
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      💬
    </a>
  );
}
