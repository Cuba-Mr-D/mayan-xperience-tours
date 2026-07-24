import Image from "next/image";
import Link from "next/link";
import { LanguageCode, translations } from "./translations";

type FooterProps = {
  language: LanguageCode;
};

export default function Footer({ language }: FooterProps) {
  const t = translations[language].footer;

  return (
    <footer
      className="site-footer"
      style={{
        backgroundColor: "var(--brand-deep-navy)",
        color: "white",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <Link
        href="/"
        aria-label="Mayan Xperience Tours home"
        className="footerBrandLogo"
      >
        <Image
          src="/images/branding/mayan-xperience-brand-button.png"
          alt="Mayan Xperience Tours"
          width={1536}
          height={1024}
          sizes="(max-width: 768px) 210px, 270px"
          className="footerBrandLogoImage"
        />
      </Link>

      <p
        style={{
          opacity: 0.8,
          marginBottom: "20px",
        }}
      >
        {t.description}
      </p>

      <p
        style={{
          marginBottom: "20px",
        }}
      >
        {t.links}
      </p>

      <p
        style={{
          fontSize: "14px",
          opacity: 0.7,
        }}
      >
        {t.rights}
      </p>
    </footer>
  );
}
