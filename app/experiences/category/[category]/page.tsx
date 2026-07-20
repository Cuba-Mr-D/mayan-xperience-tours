import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExperienceCategoryPage from "@/components/experiences/ExperienceCategoryPage";
import {
  experienceCategoryConfigs,
  getExperienceCategoryConfig,
} from "@/content/experience-categories";
import { getLanguage } from "@/lib/language";

type ExperienceCategoryRouteProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateStaticParams() {
  return experienceCategoryConfigs.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: ExperienceCategoryRouteProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getExperienceCategoryConfig(categorySlug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name.en} | Riviera Maya Experiences`,
    description: category.description.en,
    openGraph: {
      title: `${category.name.en} | Mayan Xperience Tours`,
      description: category.description.en,
      url: `/experiences/category/${category.slug}`,
    },
  };
}

export default async function ExperienceCategoryRoute({
  params,
  searchParams,
}: ExperienceCategoryRouteProps) {
  const { category: categorySlug } = await params;
  const category = getExperienceCategoryConfig(categorySlug);

  if (!category) {
    notFound();
  }

  const language = getLanguage((await searchParams).lang);

  return <ExperienceCategoryPage category={category} language={language} />;
}
