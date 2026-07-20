import HomePage from "../components/HomePage";
import { getLanguage } from "@/lib/language";

type HomeProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const language = getLanguage((await searchParams).lang);

  return <HomePage initialLanguage={language} />;
}
