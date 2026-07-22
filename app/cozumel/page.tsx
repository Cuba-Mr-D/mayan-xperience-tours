import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { getLanguage } from "@/lib/language";
import { getProductMetadata, getRequiredProductById } from "@/lib/products";

type TourPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

const product = getRequiredProductById("cozumel");

export const metadata = getProductMetadata("cozumel");

export default async function CozumelPage({ searchParams }: TourPageProps) {
  const language = getLanguage((await searchParams).lang);

  return (
    <ProductPageTemplate
      currentPath="/cozumel"
      language={language}
      product={product}
    />
  );
}
