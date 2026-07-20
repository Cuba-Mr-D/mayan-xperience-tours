import Image from "next/image";
import Gallery from "@/components/Gallery";
import TourNavbar from "@/components/TourNavbar";
import type { LanguageCode } from "@/components/translations";
import { buildWhatsAppHref } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

type ProductPageTemplateProps = {
  currentPath: string;
  language: LanguageCode;
  product: Product;
};

export default function ProductPageTemplate({
  currentPath,
  language,
  product,
}: ProductPageTemplateProps) {
  const t = product.content[language];

  return (
    <main
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <TourNavbar currentPath={currentPath} initialLanguage={language} />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "70vh",
        }}
      >
        <Image
          src={product.heroImage}
          alt={product.heroAlt}
          fill
          style={{
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            {t.title}
          </h1>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
          }}
        >
          {t.galleryTitle}
        </h2>

        <Gallery images={product.gallery} />
      </section>

      {/* Content */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h2>{t.whatToExpectTitle}</h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "#4b5563",
          }}
        >
          {t.whatToExpect}
        </p>

        {t.highlightsTitle && t.highlights && (
          <>
            <h2 style={{ marginTop: "50px" }}>
              {t.highlightsTitle}
            </h2>

            <ul style={{ lineHeight: "2" }}>
              {t.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {t.experienceStylesTitle && t.experienceStyles && (
          <>
            <h2 style={{ marginTop: "50px" }}>
              {t.experienceStylesTitle}
            </h2>

            <ul style={{ lineHeight: "2" }}>
              {t.experienceStyles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <h2 style={{ marginTop: "50px" }}>
          {t.perfectForTitle}
        </h2>

        <ul style={{ lineHeight: "2" }}>
          {t.perfectFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 style={{ marginTop: "50px" }}>
          {t.recommendationTitle}
        </h2>

        <p
          style={{
            lineHeight: "1.8",
            color: "#4b5563",
          }}
        >
          {t.recommendation}
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          {t.ctaTitle && (
            <h2
              style={{
                marginBottom: "15px",
              }}
            >
              {t.ctaTitle}
            </h2>
          )}

          {t.ctaText && (
            <p
              style={{
                color: "#4b5563",
                marginBottom: "30px",
              }}
            >
              {t.ctaText}
            </p>
          )}

          <a
            href={buildWhatsAppHref(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#25D366",
              color: "white",
              padding: "18px 35px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            {t.whatsappButton}
          </a>
        </div>
      </section>
    </main>
  );
}
