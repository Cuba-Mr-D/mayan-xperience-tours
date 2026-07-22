import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { getLanguage } from "@/lib/language";
import { getProductMetadata, getRequiredProductById } from "@/lib/products";

type TourPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

const product = getRequiredProductById("holbox");

export const metadata = getProductMetadata("holbox");

export default async function HolboxPage({ searchParams }: TourPageProps) {
  const language = getLanguage((await searchParams).lang);

  return (
    <ProductPageTemplate
      currentPath="/holbox"
      language={language}
      product={product}
    />
  );
}
