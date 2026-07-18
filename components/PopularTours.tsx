"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageCode, translations } from "./translations";

type PopularToursProps = {
  language: LanguageCode;
};

export default function PopularTours({ language }: PopularToursProps) {
  const [isMobile, setIsMobile] = useState(false);
  const t = translations[language].popularTours;

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
        padding: "100px 40px",
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
          marginBottom: "50px",
        }}
      >
        {t.subtitle}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(2, 1fr)",
          gap: "30px",
          maxWidth: isMobile ? "600px" : "1000px",
          margin: "0 auto",
        }}
      >
        {/* Isla Mujeres */}
        <Link
          href={`/isla-mujeres?lang=${language}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="/tours/isla-mujeres.png"
              alt="Isla Mujeres"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>🏝️ Isla Mujeres</h3>
              <p>{t.tours.islaMujeres}</p>

              <p
                style={{
                  marginTop: "15px",
                  color: "#0284c7",
                  fontWeight: "bold",
                }}
              >
                {t.viewExperience} →
              </p>
            </div>
          </div>
        </Link>

        {/* Chichen Itza */}
        <Link
          href={`/chichen-itza?lang=${language}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="/tours/chichen.jpg"
              alt="Chichén Itzá"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>🏛️ Chichén Itzá</h3>
              <p>{t.tours.chichenItza}</p>

              <p
                style={{
                  marginTop: "15px",
                  color: "#0284c7",
                  fontWeight: "bold",
                }}
              >
                {t.viewExperience} →
              </p>
            </div>
          </div>
        </Link>

        {/* Tulum */}
        <Link
          href={`/tulum?lang=${language}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="/tours/tulum.jpg"
              alt="Tulum"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>🌴 Tulum</h3>
              <p>{t.tours.tulum}</p>

              <p
                style={{
                  marginTop: "15px",
                  color: "#0284c7",
                  fontWeight: "bold",
                }}
              >
                {t.viewExperience} →
              </p>
            </div>
          </div>
        </Link>

        {/* Cenotes */}
        <Link
          href={`/cenotes?lang=${language}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="/tours/cenotes.jpg"
              alt="Cenotes"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>

              <h3>💦 Cenotes Experience</h3>
              <p>{t.tours.cenotes}</p>

              <p
                style={{
                  marginTop: "15px",
                  color: "#0284c7",
                  fontWeight: "bold",
                }}
              >
                {t.viewExperience} →
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
