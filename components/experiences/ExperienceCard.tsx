import Image from "next/image";
import Link from "next/link";
import { buildLocalizedHref } from "@/lib/links";
import { getProductCardImage, getProductCardImageAlt } from "@/lib/products";
import type { LanguageCode } from "@/components/translations";
import type { ExperienceProduct } from "@/types/product";

type ExperienceCardProps = {
  categoryLabel?: string;
  comingSoonLabel: string;
  language: LanguageCode;
  product?: ExperienceProduct;
  title: string;
  viewExperienceLabel: string;
  variant: "preview" | "listing";
};

export default function ExperienceCard({
  categoryLabel,
  comingSoonLabel,
  language,
  product,
  title,
  viewExperienceLabel,
  variant,
}: ExperienceCardProps) {
  const isListing = variant === "listing";
  const content = product?.content[language];
  const href = product?.legacyPath
    ? buildLocalizedHref(product.legacyPath, language)
    : undefined;
  const image = getProductCardImage(product);
  const imageAlt = product ? getProductCardImageAlt(product, title) : title;
  const imageObjectPosition = product?.cardImageObjectPosition || "center";

  const card = (
    <article
      className={`experience-card experience-card-${variant}`}
      style={{
        height: "100%",
        overflow: "hidden",
        borderRadius: isListing ? "22px" : "18px",
        border: "1px solid rgba(2, 16, 36, 0.08)",
        backgroundColor: "#ffffff",
        boxShadow: isListing
          ? "0 18px 42px rgba(2, 16, 36, 0.08)"
          : "0 12px 28px rgba(2, 16, 36, 0.07)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          height: isListing ? "240px" : "168px",
          backgroundColor: "#d7edf0",
          overflow: "hidden",
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes={
              isListing
                ? "(max-width: 767px) calc(100vw - 44px), (max-width: 1200px) calc(50vw - 72px), 520px"
                : "(max-width: 767px) calc(100vw - 76px), (max-width: 1200px) 27vw, 250px"
            }
            className="experience-card-image"
            style={{
              objectFit: "cover",
              objectPosition: imageObjectPosition,
            }}
          />
        ) : (
          <div
            role="img"
            aria-label={title}
            className="experience-card-fallback"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, #dff7f6 0%, #b9e8e8 46%, #f5fbf9 100%)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                width: "120px",
                height: "120px",
                right: "-30px",
                top: "-28px",
                borderRadius: "999px",
                backgroundColor: "rgba(14,165,168,0.16)",
              }}
            />
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                width: "160px",
                height: "70px",
                left: "-35px",
                bottom: "10px",
                borderRadius: "999px",
                backgroundColor: "rgba(2,16,36,0.08)",
              }}
            />
          </div>
        )}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: image
              ? "linear-gradient(to bottom, rgba(2,16,36,0.01) 12%, rgba(2,16,36,0.5) 100%)"
              : "linear-gradient(to bottom, rgba(2,16,36,0) 10%, rgba(2,16,36,0.26) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: isListing ? "20px" : "14px",
            right: isListing ? "20px" : "14px",
            bottom: isListing ? "18px" : "14px",
            color: "#ffffff",
          }}
        >
          {categoryLabel && (
            <p
              style={{
                margin: "0 0 8px",
                fontSize: isListing ? "0.78rem" : "0.68rem",
                fontWeight: 800,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.86)",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              {categoryLabel}
            </p>
          )}
          <h3
            style={{
              margin: 0,
              fontSize: isListing ? "1.45rem" : "1.02rem",
              lineHeight: 1.12,
              fontWeight: 800,
              color: "#ffffff",
              textShadow: "0 2px 12px rgba(0,0,0,0.35)",
            }}
          >
            {content?.title || title}
          </h3>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: isListing ? "18px" : "12px",
          padding: isListing ? "22px" : "14px",
        }}
      >
        {isListing && content?.shortDescription && (
          <p
            style={{
              margin: 0,
              color: "#5f6b7a",
              fontSize: "0.98rem",
              lineHeight: 1.65,
            }}
          >
            {content.shortDescription}
          </p>
        )}

        <span
          aria-hidden={Boolean(href)}
          style={{
            marginTop: "auto",
            alignSelf: "flex-start",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: isListing ? "42px" : "34px",
            padding: isListing ? "10px 18px" : "8px 13px",
            borderRadius: "999px",
            border: href
              ? "1px solid rgba(14, 165, 168, 0.28)"
              : "1px solid rgba(100, 116, 139, 0.18)",
            backgroundColor: href
              ? "rgba(14, 165, 168, 0.08)"
              : "rgba(100, 116, 139, 0.08)",
            color: href ? "#047f82" : "#64748b",
            fontSize: isListing ? "0.94rem" : "0.8rem",
            fontWeight: 800,
          }}
        >
          {href ? viewExperienceLabel : comingSoonLabel}
        </span>
      </div>
    </article>
  );

  if (!href) {
    return (
      <div
        className="experience-card-disabled"
        aria-label={`${title}: ${comingSoonLabel}`}
      >
        {card}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="experience-card-link"
      aria-label={`${viewExperienceLabel}: ${content?.title || title}`}
      style={{
        color: "inherit",
        display: "block",
        height: "100%",
        textDecoration: "none",
      }}
    >
      {card}
    </Link>
  );
}
