"use client";

import { useState } from "react";
import { LanguageCode, languages, translations } from "./translations";

type NavbarProps = {
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
  logoHref?: string;
  menuHrefs?: {
    experiences: string;
    about: string;
    contact: string;
  };
};

export default function Navbar({
  language,
  onLanguageChange,
  logoHref,
  menuHrefs = {
    experiences: "#experiences",
    about: "#about",
    contact: "#contact",
  },
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language].nav;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#021024",
          color: "white",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.4rem",
            letterSpacing: "1px",
          }}
        >
          {logoHref ? (
            <a
              href={logoHref}
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MAYAN XPERIENCE
            </a>
          ) : (
            "MAYAN XPERIENCE"
          )}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          data-testid="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "15px",
            backgroundColor: "#021024",
            color: "white",
            padding: "30px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            zIndex: 999,
            minWidth: "220px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <a
            href={menuHrefs.experiences}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "500",
            }}
            onClick={() => setMenuOpen(false)}
          >
            {t.experiences}
          </a>

          <a
            href={menuHrefs.about}
            style={{
              color: "white",
              textDecoration: "none",
            }}
            onClick={() => setMenuOpen(false)}
          >
            {t.about}
          </a>

          <a
            href={menuHrefs.contact}
            style={{
              color: "white",
              textDecoration: "none",
            }}
            onClick={() => setMenuOpen(false)}
          >
            {t.contact}
          </a>

          <hr
            style={{
              width: "100%",
              borderColor: "#ffffff33",
            }}
          />

          <div
            aria-label={t.languageLabel}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {languages.map((languageOption) => {
              const isSelected = language === languageOption.code;

              return (
                <button
                  key={languageOption.code}
                  type="button"
                  aria-pressed={isSelected}
                  data-testid={`language-${languageOption.code}`}
                  onClick={() => onLanguageChange(languageOption.code)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: isSelected
                      ? "1px solid #f2c94c"
                      : "1px solid #ffffff33",
                    backgroundColor: isSelected ? "#f2c94c" : "transparent",
                    color: isSelected ? "#021024" : "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1rem",
                    fontWeight: isSelected ? "700" : "500",
                    textAlign: "left",
                  }}
                >
                  <img
                    src={languageOption.flagSrc}
                    alt={languageOption.flagAlt}
                    width={24}
                    height={16}
                    style={{
                      borderRadius: "3px",
                      boxShadow: "0 0 0 1px rgba(255,255,255,0.35)",
                      flexShrink: 0,
                      objectFit: "cover",
                    }}
                  />
                  <span>{languageOption.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
