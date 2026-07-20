import Link from "next/link";
import TourNavbar from "@/components/TourNavbar";
import ExperienceCard from "@/components/experiences/ExperienceCard";
import {
  getExperienceCategoryText,
  type ExperienceCategoryConfig,
} from "@/content/experience-categories";
import { buildLocalizedHref } from "@/lib/links";
import { getProductsByCategory } from "@/lib/products";
import type { LanguageCode } from "@/components/translations";
import type { ExperienceProduct } from "@/types/product";

const categoryCopy = {
  en: {
    back: "Explore All Experiences",
    comingSoon: "Coming Soon",
    empty: "Published experiences for this category are coming soon.",
    experienceCount: (count: number) =>
      `${count} ${count === 1 ? "Experience" : "Experiences"}`,
    viewExperience: "View Experience",
  },
  es: {
    back: "Explorar todas las experiencias",
    comingSoon: "Próximamente",
    empty: "Las experiencias publicadas para esta categoría estarán disponibles próximamente.",
    experienceCount: (count: number) =>
      `${count} ${count === 1 ? "experiencia" : "experiencias"}`,
    viewExperience: "Ver experiencia",
  },
  fr: {
    back: "Explorer toutes les expériences",
    comingSoon: "Bientôt disponible",
    empty: "Les expériences publiées pour cette catégorie seront bientôt disponibles.",
    experienceCount: (count: number) =>
      `${count} ${count === 1 ? "expérience" : "expériences"}`,
    viewExperience: "Voir l’expérience",
  },
} as const satisfies Record<
  LanguageCode,
  {
    back: string;
    comingSoon: string;
    empty: string;
    experienceCount: (count: number) => string;
    viewExperience: string;
  }
>;

type ExperienceCategoryPageProps = {
  category: ExperienceCategoryConfig;
  language: LanguageCode;
};

export default function ExperienceCategoryPage({
  category,
  language,
}: ExperienceCategoryPageProps) {
  const categoryText = getExperienceCategoryText(category, language);
  const t = categoryCopy[language];
  const products = getProductsByCategory(category.slug).filter(
    (product): product is ExperienceProduct => product.type === "experience",
  );
  const count = products.length;

  return (
    <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <TourNavbar
        currentPath={`/experiences/category/${category.slug}`}
        initialLanguage={language}
      />

      <section
        style={{
          padding: "132px 24px 62px",
          backgroundColor: "#021024",
          backgroundImage: category.bannerImage
            ? `linear-gradient(90deg, rgba(2,16,36,0.82) 0%, rgba(2,16,36,0.58) 58%, rgba(2,16,36,0.28) 100%), url("${category.bannerImage}")`
            : "linear-gradient(135deg, #021024 0%, #06333d 58%, #0e7f84 100%)",
          backgroundPosition: category.bannerPosition || "center",
          backgroundSize: "cover",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Link
            href={buildLocalizedHref("/experiences", language)}
            style={{
              color: "rgba(255,255,255,0.82)",
              display: "inline-flex",
              fontSize: "0.95rem",
              fontWeight: 800,
              marginBottom: "28px",
              textDecoration: "none",
            }}
          >
            {t.back}
          </Link>
          <h1
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: 1.08,
              fontWeight: 850,
            }}
          >
            {categoryText.heading}
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "760px",
              color: "rgba(255,255,255,0.88)",
              fontSize: "clamp(1.02rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            {categoryText.description}
          </p>
          <p
            style={{
              display: "inline-flex",
              margin: "24px 0 0",
              padding: "7px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.18)",
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.86rem",
              fontWeight: 850,
            }}
          >
            {t.experienceCount(count)}
          </p>
        </div>
      </section>

      <section style={{ padding: "58px 24px 100px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          {products.length > 0 ? (
            <div className="experience-listing-grid">
              {products.map((product) => (
                <ExperienceCard
                  key={product.id}
                  categoryLabel={categoryText.name}
                  comingSoonLabel={t.comingSoon}
                  language={language}
                  product={product}
                  title={product.content[language].title}
                  viewExperienceLabel={t.viewExperience}
                  variant="listing"
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                border: "1px solid rgba(2, 16, 36, 0.08)",
                borderRadius: "22px",
                backgroundColor: "#ffffff",
                padding: "34px",
                color: "#64748b",
                fontSize: "1rem",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              {t.empty}
            </div>
          )}
        </div>
      </section>

      <style>
        {`
          .experience-listing-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 26px;
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
            box-shadow: 0 22px 48px rgba(2, 16, 36, 0.1);
          }

          .experience-card-link .experience-card-image {
            transition: transform 320ms ease;
          }

          .experience-card-link:hover .experience-card-image {
            transform: scale(1.045);
          }

          .experience-card-link:focus-visible {
            outline: 3px solid #0EA5A8;
            outline-offset: 4px;
            border-radius: 22px;
          }

          @media (max-width: 980px) {
            .experience-listing-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 620px) {
            .experience-listing-grid {
              grid-template-columns: minmax(0, 1fr);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .experience-card-link .experience-card,
            .experience-card-link .experience-card-image {
              transition: none !important;
            }
          }
        `}
      </style>
    </main>
  );
}
