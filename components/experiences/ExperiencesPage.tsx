import Link from "next/link";
import TourNavbar from "@/components/TourNavbar";
import ExperienceCard from "@/components/experiences/ExperienceCard";
import {
  experienceCategoryConfigs,
  getExperienceCategoryText,
} from "@/content/experience-categories";
import { buildLocalizedHref } from "@/lib/links";
import { getProductBySlug } from "@/lib/products";
import type { LanguageCode } from "@/components/translations";
import type { ExperienceProduct } from "@/types/product";

const pageCopy = {
  en: {
    title: "Explore the Best Experiences in the Riviera Maya",
    subtitle:
      "Caribbean islands, Mayan history, cenotes, adventure, nature, and unforgettable experiences selected for your vacation.",
    categoryLine:
      "Caribbean Islands • Mayan Ruins • Cenotes • Adventure • Nature • Theme Parks",
    intro:
      "Start with the style of experience you want, then choose the tour that fits your day in the Riviera Maya.",
    startExploring: "Start Exploring",
    viewMore: "View More",
    viewExperience: "View Experience",
    comingSoon: "Coming Soon",
    experienceCount: (count: number) =>
      `${count} ${count === 1 ? "Experience" : "Experiences"}`,
  },
  es: {
    title: "Explora las mejores experiencias de la Riviera Maya",
    subtitle:
      "Islas del Caribe, historia maya, cenotes, aventura, naturaleza y experiencias inolvidables seleccionadas para tus vacaciones.",
    categoryLine:
      "Islas del Caribe • Ruinas mayas • Cenotes • Aventura • Naturaleza • Parques temáticos",
    intro:
      "Comienza por el estilo de experiencia que buscas y después elige el tour ideal para tu día en la Riviera Maya.",
    startExploring: "Comenzar a explorar",
    viewMore: "Ver más",
    viewExperience: "Ver experiencia",
    comingSoon: "Próximamente",
    experienceCount: (count: number) =>
      `${count} ${count === 1 ? "experiencia" : "experiencias"}`,
  },
  fr: {
    title: "Explorez les meilleures expériences de la Riviera Maya",
    subtitle:
      "Îles des Caraïbes, histoire maya, cénotes, aventure, nature et expériences inoubliables sélectionnées pour vos vacances.",
    categoryLine:
      "Îles des Caraïbes • Ruines mayas • Cénotes • Aventure • Nature • Parcs à thème",
    intro:
      "Commencez par le style d’expérience que vous recherchez, puis choisissez le tour qui correspond à votre journée dans la Riviera Maya.",
    startExploring: "Commencer à explorer",
    viewMore: "Voir plus",
    viewExperience: "Voir l’expérience",
    comingSoon: "Bientôt disponible",
    experienceCount: (count: number) =>
      `${count} ${count === 1 ? "expérience" : "expériences"}`,
  },
} as const satisfies Record<
  LanguageCode,
  {
    categoryLine: string;
    comingSoon: string;
    experienceCount: (count: number) => string;
    intro: string;
    startExploring: string;
    subtitle: string;
    title: string;
    viewExperience: string;
    viewMore: string;
  }
>;

type ExperiencesPageProps = {
  language: LanguageCode;
};

export default function ExperiencesPage({ language }: ExperiencesPageProps) {
  const t = pageCopy[language];

  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <TourNavbar currentPath="/experiences" initialLanguage={language} />

      <section
        className="experiences-hero"
        style={{
          position: "relative",
          minHeight: "58vh",
          padding: "136px 24px 78px",
          backgroundImage:
            "linear-gradient(to bottom, rgba(2,16,36,0.3) 0%, rgba(2,16,36,0.48) 64%, rgba(2,16,36,0.72) 100%), url('/hero-riviera-maya.jpg')",
          backgroundPosition: "center 34%",
          backgroundSize: "cover",
          color: "#ffffff",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1, maxWidth: "960px", margin: "0 auto" }}>
          <h1
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(2.25rem, 5vw, 4.2rem)",
              lineHeight: 1.08,
              fontWeight: 850,
              letterSpacing: 0,
            }}
          >
            {t.title}
          </h1>
          <p
            style={{
              margin: "0 auto",
              maxWidth: "760px",
              color: "rgba(255,255,255,0.88)",
              fontSize: "clamp(1.02rem, 2vw, 1.22rem)",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            {t.subtitle}
          </p>
          <p
            style={{
              margin: "22px auto 0",
              maxWidth: "820px",
              color: "rgba(255,255,255,0.82)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              fontWeight: 750,
              letterSpacing: "0.02em",
            }}
          >
            {t.categoryLine}
          </p>
          <a
            className="experiences-start-button"
            href="#experience-category-caribbean-islands"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
              minHeight: "46px",
              padding: "12px 22px",
              borderRadius: "999px",
              backgroundColor: "#0EA5A8",
              color: "#ffffff",
              fontSize: "0.98rem",
              fontWeight: 850,
              textDecoration: "none",
              boxShadow: "0 14px 30px rgba(14,165,168,0.28)",
            }}
          >
            {t.startExploring}
          </a>
        </div>
      </section>

      <section style={{ padding: "46px 24px 104px" }}>
        <p
          style={{
            maxWidth: "780px",
            margin: "0 auto 54px",
            color: "#526071",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            textAlign: "center",
          }}
        >
          {t.intro}
        </p>

        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "72px",
          }}
        >
          {experienceCategoryConfigs.map((category) => {
            const categoryText = getExperienceCategoryText(category, language);
            const cards = category.featuredProductSlugs.map((slug) => {
              const catalogProduct = getProductBySlug(slug);
              const experienceProduct =
                catalogProduct?.type === "experience" ? catalogProduct : undefined;

              return {
                product: experienceProduct,
                slug,
                title:
                  experienceProduct?.content[language].title ||
                  slug
                    .split("-")
                    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                    .join(" "),
              };
            });

            return (
              <section
                key={category.slug}
                id={`experience-category-${category.slug}`}
                className="experience-category-section"
                aria-labelledby={`${category.slug}-title`}
                style={{ scrollMarginTop: "96px" }}
              >
                <div
                  className="experience-category-banner"
                  style={{
                    position: "relative",
                    minHeight: "132px",
                    marginBottom: "24px",
                    borderRadius: "22px",
                    overflow: "hidden",
                    backgroundColor: "#06333d",
                    backgroundImage: category.bannerImage
                      ? `linear-gradient(90deg, rgba(2,16,36,0.72) 0%, rgba(2,16,36,0.44) 48%, rgba(2,16,36,0.18) 100%), url("${category.bannerImage}")`
                      : "linear-gradient(135deg, #021024 0%, #07515c 58%, #0EA5A8 100%)",
                    backgroundPosition: category.bannerPosition || "center",
                    backgroundSize: "cover",
                    boxShadow: "0 18px 44px rgba(2,16,36,0.08)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(2,16,36,0.08))",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "22px",
                    marginBottom: "26px",
                  }}
                  className="experience-section-header"
                >
                  <div>
                    <h2
                      id={`${category.slug}-title`}
                      style={{
                        margin: "0 0 10px",
                        color: "#111827",
                        fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                        lineHeight: 1.12,
                        fontWeight: 850,
                      }}
                    >
                      {categoryText.heading}
                    </h2>
                    <span
                      style={{
                        display: "inline-flex",
                        width: "fit-content",
                        marginBottom: "12px",
                        padding: "6px 11px",
                        borderRadius: "999px",
                        backgroundColor: "rgba(14,165,168,0.1)",
                        color: "#047f82",
                        fontSize: "0.78rem",
                        fontWeight: 850,
                      }}
                    >
                      {t.experienceCount(cards.length)}
                    </span>
                    <p
                      style={{
                        margin: 0,
                        color: "#64748b",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        maxWidth: "620px",
                      }}
                    >
                      {categoryText.description}
                    </p>
                  </div>

                  <Link
                    className="experience-view-more"
                    href={buildLocalizedHref(
                      `/experiences/category/${category.slug}`,
                      language,
                    )}
                    style={{
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "42px",
                      padding: "10px 18px",
                      borderRadius: "999px",
                      border: "1px solid rgba(14, 165, 168, 0.28)",
                      backgroundColor: "#0EA5A8",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      textDecoration: "none",
                      boxShadow: "0 10px 24px rgba(14, 165, 168, 0.18)",
                    }}
                  >
                    {t.viewMore}
                    <span aria-hidden="true" style={{ marginLeft: "8px" }}>
                      →
                    </span>
                  </Link>
                </div>

                {cards.length > 0 ? (
                  <div className="experience-preview-grid">
                    {cards.map((card) => (
                      <ExperienceCard
                        key={card.slug}
                        categoryLabel={categoryText.name}
                        comingSoonLabel={t.comingSoon}
                        language={language}
                        product={card.product as ExperienceProduct | undefined}
                        title={card.title}
                        viewExperienceLabel={t.viewExperience}
                        variant="preview"
                      />
                    ))}
                  </div>
                ) : (
                  <p
                    style={{
                      margin: 0,
                      color: "#64748b",
                      fontWeight: 700,
                    }}
                  >
                    {t.comingSoon}
                  </p>
                )}
              </section>
            );
          })}
        </div>
      </section>

      <style>
        {`
          .experience-preview-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 18px;
          }

          .experiences-start-button,
          .experience-view-more {
            transition:
              transform 170ms ease,
              box-shadow 170ms ease,
              background-color 170ms ease;
          }

          .experiences-start-button:hover,
          .experience-view-more:hover {
            transform: translateY(-2px);
            background-color: #0b8f92 !important;
          }

          .experiences-start-button:focus-visible,
          .experience-view-more:focus-visible {
            outline: 3px solid rgba(14, 165, 168, 0.48);
            outline-offset: 4px;
          }

          .experience-card-link .experience-card {
            transition:
              transform 180ms ease,
              box-shadow 180ms ease,
              border-color 180ms ease;
          }

          .experience-card-link:hover .experience-card {
            transform: translateY(-4px) scale(1.01);
            border-color: rgba(14, 165, 168, 0.22);
            box-shadow: 0 18px 42px rgba(2, 16, 36, 0.1);
          }

          .experience-card-link .experience-card-image,
          .experience-card-disabled .experience-card-fallback {
            transition: transform 320ms ease, filter 320ms ease;
          }

          .experience-card-link:hover .experience-card-image {
            transform: scale(1.045);
          }

          .experience-card-disabled:hover .experience-card-fallback {
            filter: saturate(1.08);
          }

          .experience-card-link:focus-visible {
            outline: 3px solid #0EA5A8;
            outline-offset: 4px;
            border-radius: 18px;
          }

          @media (max-width: 920px) {
            .experience-preview-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 640px) {
            .experiences-hero {
              min-height: 52vh !important;
              padding: 122px 20px 62px !important;
            }

            .experience-category-banner {
              min-height: 104px !important;
              margin-bottom: 20px !important;
              border-radius: 18px !important;
            }

            .experience-section-header {
              align-items: flex-start !important;
              flex-direction: column !important;
              gap: 18px !important;
            }
          }

          @media (max-width: 430px) {
            .experience-preview-grid {
              gap: 12px;
            }

            .experience-card-preview h3 {
              font-size: 0.94rem !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            html:focus-within {
              scroll-behavior: auto;
            }

            .experiences-start-button,
            .experience-view-more,
            .experience-card-link .experience-card,
            .experience-card-link .experience-card-image,
            .experience-card-disabled .experience-card-fallback {
              animation: none !important;
              transition: none !important;
            }
          }

          @media (prefers-reduced-motion: no-preference) {
            html {
              scroll-behavior: smooth;
            }
          }
        `}
      </style>
    </main>
  );
}
