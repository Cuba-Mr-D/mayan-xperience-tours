"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buildLocalizedHref } from "@/lib/links";
import { LanguageCode, translations } from "./translations";

type PopularToursProps = {
  language: LanguageCode;
};

const tourCards = [
  {
    key: "islaMujeres",
    title: "Isla Mujeres",
    href: "/isla-mujeres",
    image: "/tours/isla-mujeres.png",
    alt: "Catamaran tour in Isla Mujeres with turquoise Caribbean water",
    objectPosition: "center 56%",
  },
  {
    key: "chichenItza",
    title: "Chichén Itzá",
    href: "/chichen-itza",
    image: "/tours/chichen.jpg",
    alt: "Chichén Itzá Mayan ruins tour",
    objectPosition: "center 48%",
  },
  {
    key: "tulum",
    title: "Tulum",
    href: "/tulum",
    image: "/tours/tulum.jpg",
    alt: "Tulum ruins overlooking the Caribbean Sea",
    objectPosition: "center 52%",
  },
  {
    key: "cenotes",
    title: "Cenotes Experience",
    href: "/cenotes",
    image: "/tours/cenotes.jpg",
    alt: "Cenote swimming experience in the Riviera Maya jungle",
    objectPosition: "center 50%",
  },
] as const;

type TourKey = (typeof tourCards)[number]["key"];

export default function PopularTours({ language }: PopularToursProps) {
  const [isMobile, setIsMobile] = useState(false);
  const t = translations[language].popularTours;
  const cardRadius = isMobile ? "22px" : "24px";
  const imageHeight = isMobile ? "260px" : "310px";

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <section
      id="popular-tours"
      style={{
        scrollMarginTop: "80px",
        padding: isMobile ? "86px 22px" : "120px 40px",
        textAlign: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
        }}
      >
        {t.title}
      </h2>

      <p
        style={{
          color: "#6b7280",
          margin: "0 auto 70px",
          maxWidth: "640px",
          fontSize: "1.05rem",
          lineHeight: 1.7,
        }}
      >
        {t.subtitle}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "minmax(0, 1fr)"
            : "repeat(2, minmax(0, 1fr))",
          gap: isMobile ? "24px" : "34px",
          maxWidth: isMobile ? "620px" : "1120px",
          margin: "0 auto",
        }}
      >
        {tourCards.map((tour) => {
          const key = tour.key as TourKey;

          return (
            <Link
              key={tour.href}
              href={buildLocalizedHref(tour.href, language)}
              className="popular-tour-link"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                height: "100%",
                minWidth: 0,
              }}
            >
              <article
                className="popular-tour-card"
                style={{
                  height: "100%",
                  minWidth: 0,
                  border: "1px solid rgba(2, 16, 36, 0.08)",
                  borderRadius: cardRadius,
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 18px 45px rgba(2, 16, 36, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: imageHeight,
                    aspectRatio: "16 / 10",
                    overflow: "hidden",
                    backgroundColor: "#e5edf0",
                  }}
                >
                  <Image
                    src={tour.image}
                    alt={tour.alt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 44px), (max-width: 1200px) calc(50vw - 57px), 543px"
                    className="popular-tour-image"
                    style={{
                      objectFit: "cover",
                      objectPosition: tour.objectPosition,
                    }}
                  />

                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(2, 16, 36, 0) 24%, rgba(2, 16, 36, 0.22) 58%, rgba(2, 16, 36, 0.72) 100%)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: isMobile ? "18px" : "24px",
                      right: isMobile ? "18px" : "24px",
                      bottom: isMobile ? "18px" : "24px",
                      color: "#ffffff",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        width: "fit-content",
                        marginBottom: "16px",
                        padding: "4px 9px",
                        borderRadius: "999px",
                        border: "1px solid rgba(255, 255, 255, 0.26)",
                        background: "rgba(255, 255, 255, 0.18)",
                        boxShadow: "0 10px 26px rgba(2, 16, 36, 0.22)",
                        backdropFilter: "blur(10px)",
                        fontSize: "0.69rem",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                        transition:
                          "background-color 420ms ease, border-color 420ms ease, opacity 420ms ease",
                      }}
                    >
                      {t.badges[key]}
                    </span>

                    <h3
                      style={{
                        margin: "0 0 12px",
                        fontSize: isMobile ? "1.55rem" : "1.84rem",
                        lineHeight: 1.08,
                        fontWeight: 800,
                        letterSpacing: 0,
                        textShadow: "0 2px 14px rgba(0, 0, 0, 0.38)",
                      }}
                    >
                      {tour.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "rgba(255, 255, 255, 0.92)",
                        fontSize: isMobile ? "0.92rem" : "0.98rem",
                        lineHeight: 1.45,
                        fontWeight: 600,
                        textShadow: "0 2px 12px rgba(0, 0, 0, 0.34)",
                        overflowWrap: "break-word",
                      }}
                    >
                      {t.highlights[key]}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: isMobile ? "20px 22px 22px" : "24px 26px 26px",
                  }}
                >
                  <span
                    className="popular-tour-cta"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "9px",
                      minHeight: "46px",
                      padding: "12px 22px",
                      borderRadius: "999px",
                      border: "1px solid rgba(2, 132, 199, 0.24)",
                      backgroundColor: "rgba(14, 165, 168, 0.06)",
                      color: "#047f82",
                      fontSize: "0.98rem",
                      fontWeight: 750,
                      transition:
                        "background-color 420ms ease, border-color 420ms ease, color 420ms ease, transform 420ms ease",
                    }}
                  >
                    {t.viewExperience}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      <div
        style={{
          margin: isMobile ? "38px auto 0" : "48px auto 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: isMobile ? "0.97rem" : "1.02rem",
            lineHeight: 1.5,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {t.viewAllPrompt}
        </p>

        <Link
          href={buildLocalizedHref("/experiences", language)}
          className="popular-tours-all-link"
          aria-label={t.viewAllExperiences}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            width: isMobile ? "min(100%, 360px)" : "auto",
            minWidth: isMobile ? "0" : "320px",
            minHeight: isMobile ? "60px" : "64px",
            padding: isMobile ? "18px 28px" : "20px 42px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#0EA5A8",
            color: "#ffffff",
            boxShadow: "0 12px 26px rgba(6,182,212,0.28)",
            textDecoration: "none",
            fontSize: isMobile ? "1.02rem" : "1.1rem",
            fontWeight: 700,
            lineHeight: 1.2,
            transition:
              "transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
            whiteSpace: "nowrap",
          }}
        >
          <span>{t.viewAllExperiences}</span>
          <span className="popular-tours-all-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      <style jsx>{`
        .popular-tour-card {
          transition:
            transform 480ms ease,
            box-shadow 480ms ease,
            border-color 480ms ease;
        }

        .popular-tour-image {
          transition: transform 520ms ease;
        }

        .popular-tour-link:focus-visible {
          outline: none;
        }

        .popular-tour-link:focus-visible .popular-tour-card {
          outline: 3px solid rgba(14, 165, 168, 0.45);
          outline-offset: 5px;
        }

        .popular-tours-all-link:focus-visible {
          outline: 3px solid rgba(14, 165, 168, 0.38);
          outline-offset: 5px;
        }

        .popular-tours-all-arrow {
          display: inline-flex;
          transform: translateX(0);
          animation: popularToursArrowNudge 4.6s ease-in-out infinite;
          transition: transform 160ms ease;
        }

        @keyframes popularToursArrowNudge {
          0%,
          72%,
          100% {
            transform: translateX(0);
          }

          82% {
            transform: translateX(5px);
          }

          90% {
            transform: translateX(0);
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .popular-tour-link:hover .popular-tour-card {
            transform: translateY(-6px);
            border-color: rgba(14, 165, 168, 0.22);
            box-shadow: 0 26px 60px rgba(2, 16, 36, 0.14);
          }

          .popular-tour-link:hover .popular-tour-image {
            transform: scale(1.04);
          }

          .popular-tour-link:hover .popular-tour-cta {
            background-color: rgba(14, 165, 168, 0.12);
            border-color: rgba(14, 165, 168, 0.42);
            color: #086f72;
            transform: translateX(2px);
          }

          .popular-tour-link:hover article > div:first-child span {
            background-color: rgba(255, 255, 255, 0.24);
            border-color: rgba(255, 255, 255, 0.34);
            opacity: 0.98;
          }

          .popular-tours-all-link:hover {
            transform: translateY(-2px);
            background-color: #0b8f92 !important;
            box-shadow: 0 14px 30px rgba(14, 165, 168, 0.34);
          }

          .popular-tours-all-link:hover .popular-tours-all-arrow {
            transform: translateX(7px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .popular-tour-card,
          .popular-tour-image,
          .popular-tour-cta,
          .popular-tours-all-link,
          .popular-tours-all-arrow {
            transition:
              background-color 180ms ease,
              border-color 180ms ease,
              color 180ms ease;
            animation: none;
          }

          .popular-tour-link:hover .popular-tour-card,
          .popular-tour-link:hover .popular-tour-image,
          .popular-tour-link:hover .popular-tour-cta,
          .popular-tours-all-link:hover,
          .popular-tours-all-link:hover .popular-tours-all-arrow {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
