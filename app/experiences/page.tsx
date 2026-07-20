import type { Metadata } from "next";
import ExperiencesPage from "@/components/experiences/ExperiencesPage";
import { getLanguage } from "@/lib/language";

type ExperiencesRouteProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export const metadata: Metadata = {
  title: "Riviera Maya Tours & Experiences | Mayan Xperience Tours",
  description:
    "Explore Caribbean islands, Mayan ruins, cenotes, adventure tours, nature experiences, and theme parks across the Riviera Maya.",
  openGraph: {
    title: "Riviera Maya Tours & Experiences | Mayan Xperience Tours",
    description:
      "Explore Caribbean islands, Mayan ruins, cenotes, adventure tours, nature experiences, and theme parks across the Riviera Maya.",
    url: "/experiences",
  },
};

export default async function ExperiencesRoute({
  searchParams,
}: ExperiencesRouteProps) {
  const language = getLanguage((await searchParams).lang);

  return <ExperiencesPage language={language} />;
}
