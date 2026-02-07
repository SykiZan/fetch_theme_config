import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
      {products.slice(0, 10).map((p) => (
        <article key={p.id} className="min-w-0">
          <div className="relative aspect-square bg-[var(--tile)] rounded-xl overflow-hidden mb-3">
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
            />
          </div>

          <h3 className="text-sm font-semibold text-[var(--text)] line-clamp-2">
            {p.title}
          </h3>

          <div className="mt-1 text-[13px] sm:text-[14px] leading-[21px] text-[var(--muted)]">
            ${p.price.toFixed(2)} • {p.rating.rate.toFixed(1)} ({p.rating.count}
            )
          </div>
        </article>
      ))}
    </section>
  );
}
