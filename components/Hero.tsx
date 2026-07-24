import Image from "next/image";
import { buildLocalizedHref } from "@/lib/links";
import { LanguageCode, translations } from "./translations";

type HeroProps = {
  language: LanguageCode;
};

export default function Hero({ language }: HeroProps) {
  const t = translations[language].hero;
  const experiencesHref = buildLocalizedHref("/experiences", language);

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 76px",
      }}
    >
      <Image
        className="hero-image"
        src="/images/hero/holbox-main.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center 30%",
          transform: "scale(1.06)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(2, 16, 36, 0.04) 0%, rgba(2, 16, 36, 0.08) 35%, rgba(2, 16, 36, 0.16) 65%, rgba(2, 16, 36, 0.28) 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "980px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="hero-glass-panel"
          style={{
            width: "min(100%, 800px)",
            padding: "32px 42px 24px",
            borderRadius: "28px",
            backgroundColor: "rgba(0,0,0,0.2)",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 18px 48px rgba(0,0,0,0.18)",
            backdropFilter: "blur(7px)",
            WebkitBackdropFilter: "blur(7px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            className="hero-title"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              fontWeight: 800,
              margin: "0 0 24px",
              maxWidth: "900px",
              textShadow: "0 3px 14px rgba(0,0,0,0.35)",
            }}
          >
            {t.title}
          </h1>

          <p
            className="hero-subtitle"
            style={{
              fontSize: "clamp(1.16rem, 2vw, 1.48rem)",
              lineHeight: 1.7,
              margin: "0 0 42px",
              maxWidth: "720px",
              color: "rgba(255,255,255,0.96)",
              fontWeight: 500,
              textShadow: "0 2px 12px rgba(0,0,0,0.34)",
            }}
          >
            {t.subtitle}
          </p>

          <div
            className="hero-actions"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              className="hero-button hero-button-primary"
              href={experiencesHref}
              style={{
                backgroundColor: "#0EA5A8",
                color: "white",
                padding: "18px 36px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                minWidth: "170px",
                boxShadow: "0 12px 26px rgba(6,182,212,0.28)",
              }}
            >
              {t.exploreTours}
            </a>

            <a
              className="hero-button hero-button-secondary"
              href="#contact"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "white",
                padding: "16px 30px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.72)",
                textDecoration: "none",
                fontWeight: "bold",
                minWidth: "170px",
                backdropFilter: "blur(4px)",
              }}
            >
              {t.contactUs}
            </a>
          </div>

          <a
            className="hero-scroll-indicator"
            href="#popular-tours"
            aria-label={t.exploreTours}
            style={{
              marginTop: "22px",
              color: "white",
              textDecoration: "none",
              fontSize: "2rem",
              lineHeight: 1,
              opacity: 0.9,
              textShadow: "0 1px 12px rgba(0,0,0,0.3)",
            }}
          >
            ↓
          </a>
        </div>
      </div>

      <style>
        {`
          .hero-content {
            --hero-content-offset: 0px;
            transform: translateY(var(--hero-content-offset));
            animation: heroFadeUp 700ms ease-out both;
          }

          .hero-button {
            transition:
              transform 160ms ease,
              box-shadow 160ms ease,
              background-color 160ms ease,
              border-color 160ms ease;
          }

          .hero-button:hover {
            transform: translateY(-2px);
          }

          .hero-button:active {
            transform: translateY(0) scale(0.98);
          }

          .hero-button-primary:hover {
            background-color: #0b8f92 !important;
            box-shadow: 0 14px 30px rgba(14,165,168,0.34) !important;
          }

          .hero-button-secondary:hover {
            background-color: rgba(255,255,255,0.16) !important;
            border-color: rgba(255,255,255,0.92) !important;
          }

          .hero-scroll-indicator {
            animation: heroScrollCue 1.8s ease-in-out infinite;
          }

          @keyframes heroFadeUp {
            from {
              opacity: 0;
              transform: translateY(calc(var(--hero-content-offset) + 14px));
            }
            to {
              opacity: 1;
              transform: translateY(var(--hero-content-offset));
            }
          }

          @keyframes heroScrollCue {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(8px);
            }
          }

          @media (max-width: 768px) {
            .hero-section {
              min-height: 78vh !important;
              padding: 108px 20px 62px !important;
              align-items: center !important;
            }

            .hero-content {
              --hero-content-offset: 0px;
            }

            .hero-image {
              object-position: center 30% !important;
            }

            .hero-title {
              font-size: clamp(2.35rem, 12vw, 3.5rem) !important;
              line-height: 1.08 !important;
              margin-bottom: 18px !important;
            }

            .hero-glass-panel {
              width: min(100%, 360px) !important;
              padding: 24px 20px 28px !important;
              border-radius: 26px !important;
            }

            .hero-subtitle {
              font-size: 1.04rem !important;
              line-height: 1.6 !important;
              margin-bottom: 30px !important;
              max-width: 34rem !important;
              font-weight: 500 !important;
            }

            .hero-actions {
              width: 100% !important;
              max-width: 360px !important;
              gap: 12px !important;
            }

            .hero-button {
              width: 100% !important;
              padding: 16px 28px !important;
            }
          }

          @media (max-width: 380px), (max-height: 680px) {
            .hero-section {
              min-height: 82vh !important;
              padding-bottom: 48px !important;
            }
          }

          @media (min-width: 1200px) {
            .hero-section {
              min-height: 100vh !important;
              align-items: center !important;
            }
          }

          @media (min-width: 1800px) {
            .hero-image {
              object-position: center 30% !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-content,
            .hero-scroll-indicator,
            .hero-button {
              animation: none !important;
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}
