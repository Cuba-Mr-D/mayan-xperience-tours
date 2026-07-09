import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayanxperiencetours.com"),
  title: "Mayan Xperience Tours | Riviera Maya Tours & Experiences",
  description:
    "Discover the best tours in Riviera Maya, including Isla Mujeres, Tulum, Chichén Itzá, cenotes and private experiences with local guides.",
  openGraph: {
    title: "Mayan Xperience Tours | Riviera Maya Tours & Experiences",
    description:
      "Discover the best tours in Riviera Maya, including Isla Mujeres, Tulum, Chichén Itzá, cenotes and private experiences with local guides.",
    url: "/",
    siteName: "Mayan Xperience Tours",
    images: [
      {
        url: "/hero-riviera-maya.jpg",
        width: 1200,
        height: 630,
        alt: "Riviera Maya coastline and turquoise Caribbean water",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayan Xperience Tours | Riviera Maya Tours & Experiences",
    description:
      "Discover the best tours in Riviera Maya, including Isla Mujeres, Tulum, Chichén Itzá, cenotes and private experiences with local guides.",
    images: [
      {
        url: "/hero-riviera-maya.jpg",
        alt: "Riviera Maya coastline and turquoise Caribbean water",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
