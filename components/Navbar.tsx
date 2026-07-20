"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
    experiences: "/experiences",
    about: "#about",
    contact: "#contact",
  },
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);
  const t = translations[language].nav;
  const activeLanguage = languages.find(
    (languageOption) => languageOption.code === language,
  );

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (
        languageSelectorRef.current &&
        !languageSelectorRef.current.contains(event.target as Node)
      ) {
        setLanguageMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageMenuOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLanguageSelect = (nextLanguage: LanguageCode) => {
    onLanguageChange(nextLanguage);
    setLanguageMenuOpen(false);
  };

  return (
    <>
      <nav
        className="mayan-navbar"
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
          className="mayan-navbar-brand"
          style={{
            fontWeight: "bold",
            fontSize: "1.4rem",
            letterSpacing: "1px",
            whiteSpace: "nowrap",
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

        <div
          className="mayan-navbar-actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexShrink: 0,
          }}
        >
          {activeLanguage && (
            <div
              ref={languageSelectorRef}
              style={{
                position: "relative",
                flexShrink: 0,
              }}
            >
              <button
                type="button"
                aria-label={t.languageLabel}
                aria-expanded={languageMenuOpen}
                data-testid="language-selector"
                className="mayan-language-trigger"
                onClick={() => {
                  setLanguageMenuOpen((isOpen) => !isOpen);
                  setMenuOpen(false);
                }}
                style={{
                  height: "38px",
                  padding: "8px 10px",
                  borderRadius: "10px",
                  border: "1px solid #ffffff33",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}
              >
                <Image
                  className="mayan-language-flag"
                  src={activeLanguage.flagSrc}
                  alt={activeLanguage.flagAlt}
                  width={24}
                  height={16}
                  style={{
                    borderRadius: "3px",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.35)",
                    flexShrink: 0,
                    objectFit: "cover",
                  }}
                />
                <span>{activeLanguage.code.toUpperCase()}</span>
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: "0.75rem",
                    transform: languageMenuOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 140ms ease",
                  }}
                >
                  ▾
                </span>
              </button>

              <div
                aria-hidden={!languageMenuOpen}
                style={{
                  position: "absolute",
                  top: "48px",
                  right: 0,
                  minWidth: "170px",
                  backgroundColor: "#021024",
                  color: "white",
                  padding: "8px",
                  borderRadius: "14px",
                  border: "1px solid #ffffff24",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.32)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  zIndex: 1001,
                  opacity: languageMenuOpen ? 1 : 0,
                  transform: languageMenuOpen
                    ? "translateY(0)"
                    : "translateY(-6px)",
                  pointerEvents: languageMenuOpen ? "auto" : "none",
                  transition:
                    "opacity 140ms ease, transform 140ms ease",
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
                      onClick={() => handleLanguageSelect(languageOption.code)}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "9px",
                        border: isSelected
                          ? "1px solid #f2c94c"
                          : "1px solid transparent",
                        backgroundColor: isSelected
                          ? "#f2c94c"
                          : "transparent",
                        color: isSelected ? "#021024" : "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.98rem",
                        fontWeight: isSelected ? "700" : "500",
                        textAlign: "left",
                      }}
                    >
                      <Image
                        className="mayan-language-flag"
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

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-testid="mobile-menu-button"
            onClick={() => {
              setMenuOpen((isOpen) => !isOpen);
              setLanguageMenuOpen(false);
            }}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
              padding: 0,
              lineHeight: 1,
            }}
          >
            ☰
          </button>
        </div>
      </nav>

      <style>
        {`
          @media (max-width: 480px) {
            .mayan-navbar {
              padding: 18px 12px !important;
            }

            .mayan-navbar-brand {
              font-size: 1.14rem !important;
            }

            .mayan-navbar-actions {
              gap: 8px !important;
            }
          }

          @media (max-width: 360px) {
            .mayan-navbar-brand {
              font-size: 0.96rem !important;
              letter-spacing: 0.5px !important;
            }

            .mayan-language-trigger {
              height: 34px !important;
              padding: 6px !important;
              gap: 4px !important;
              font-size: 0.78rem !important;
            }

            .mayan-language-flag {
              width: 20px !important;
              height: 14px !important;
            }
          }
        `}
      </style>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "15px",
            backgroundColor: "#021024",
            color: "white",
            padding: "22px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            zIndex: 999,
            minWidth: "150px",
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
        </div>
      )}
    </>
  );
}
