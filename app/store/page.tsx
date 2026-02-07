export const dynamic = "force-dynamic";

import { fetchProducts } from "@/lib/products";
import { readThemeFromCookie } from "@/lib/theme.server";
import ProductGrid from "@/components/ProductGrid";
import ProductList from "@/components/ProductList";

export default async function StorePage() {
  const theme = await readThemeFromCookie();
  const products = await fetchProducts();
  const isClassic = theme.key === "classic-blue";

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-[44px] sm:leading-[56px] text-[var(--title-text)]">
        {theme.templateName}
      </h1>

      <section className="mt-6 rounded-xl p-4 shadow-card bg-[var(--section)] sm:mt-8 sm:p-6 lg:p-8">
        {isClassic ? (
          <ProductGrid products={products} />
        ) : (
          <ProductList products={products} />
        )}
      </section>
    </main>
  );
}
