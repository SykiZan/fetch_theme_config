"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";
import ProductList from "@/components/ProductList";

type Props = {
  isClassic: boolean;
};

export default function ProductsSection({ isClassic }: Props) {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          cache: "no-store",
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(`${res.status} ${res.statusText} ${text}`);
        }

        const data: Product[] = await res.json();
        if (!cancelled) setProducts(data);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to fetch products");
          setProducts([]);
        }
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  if (products === null) {
    return <p className="text-muted">Loading products…</p>;
  }

  if (error || products.length === 0) {
    return <p className="text-muted">Products unavailable right now.</p>;
  }

  return isClassic ? (
    <ProductGrid products={products} />
  ) : (
    <ProductList products={products} />
  );
}
