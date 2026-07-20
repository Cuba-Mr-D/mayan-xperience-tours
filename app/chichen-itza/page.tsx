import ProductPageTemplate from "@/components/product/ProductPageTemplate";
import { getLanguage } from "@/lib/language";
import { getProductMetadata, getRequiredProductById } from "@/lib/products";

type TourPageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

const product = getRequiredProductById("chichen-itza");

export const metadata = getProductMetadata("chichen-itza");

export default async function ChichenItzaPage({ searchParams }: TourPageProps) {
  const language = getLanguage((await searchParams).lang);

  return (
    <ProductPageTemplate
      currentPath="/chichen-itza"
      language={language}
      product={product}
    />
  );
}
