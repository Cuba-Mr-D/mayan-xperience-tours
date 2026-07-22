import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { getLanguage } from "@/lib/language";
import { getProductMetadata, getRequiredProductById } from "@/lib/products";

type TourPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

const product = getRequiredProductById("isla-contoy");

export const metadata = getProductMetadata("isla-contoy");

export default async function IslaContoyPage({ searchParams }: TourPageProps) {
  const language = getLanguage((await searchParams).lang);

  return (
    <ProductPageTemplate
      currentPath="/isla-contoy"
      language={language}
      product={product}
    />
  );
}
