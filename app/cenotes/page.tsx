import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { getLanguage } from "@/lib/language";
import { getProductMetadata, getRequiredProductById } from "@/lib/products";

type TourPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

const product = getRequiredProductById("cenotes");

export const metadata = getProductMetadata("cenotes");

export default async function CenotesPage({ searchParams }: TourPageProps) {
  const language = getLanguage((await searchParams).lang);

  return (
    <ProductPageTemplate
      currentPath="/cenotes"
      language={language}
      product={product}
    />
  );
}
