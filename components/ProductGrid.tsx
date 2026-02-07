import Image from "next/image";
import type { Product } from "@/lib/products";
import { ShoppingCart } from "lucide-react";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
      {products.slice(0, 6).map((p, idx) => (
        <article
          key={p.id}
          className="flex flex-col overflow-hidden rounded-xl
                     bg-[var(--card)] text-[var(--cardText)]
                     border-2 border-[var(--ink)]
                     shadow-[6px_6px_0_var(--ink)]"
        >
          {/* Image */}
          <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] bg-[var(--tile)] border-b-2 border-[var(--ink)]">
            {idx === 0 && (
              <div
                className="absolute left-3 top-3 z-10
                           bg-[var(--primary)] text-[var(--primaryText)]
                           border-2 border-[var(--ink)]
                           px-3 py-1 text-[12px] font-semibold"
              >
                NEW ARRIVAL
              </div>
            )}

            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-contain p-5 sm:p-6"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
            />
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 flex flex-col flex-1">
            <h3 className="uppercase font-extrabold tracking-wide text-[16px] leading-[20px] sm:text-[18px] sm:leading-[22px] line-clamp-3">
              {p.title}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="text-[16px] sm:text-[18px] font-bold">
                ${p.price.toFixed(2)}
              </div>

              <div
                className="flex items-center gap-1
                           bg-[var(--primary)] text-[var(--primaryText)]
                           border-2 border-[var(--ink)]
                           px-2 py-[2px] text-[12px] font-bold"
              >
                ★ {p.rating.rate.toFixed(1)}
              </div>
            </div>

            <p className="mt-3 text-[13px] leading-[18px] text-[var(--cardMuted)] line-clamp-3">
              {p.description}
            </p>

            <div className="mt-auto pt-4 sm:pt-5">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2
                           bg-[var(--primary)] text-[var(--primaryText)]
                           border-2 border-[var(--ink)]
                           py-2.5 sm:py-3 font-extrabold uppercase tracking-wide
                           shadow-[3px_3px_0_var(--ink)]
                           active:translate-x-[1px] active:translate-y-[1px]
                           active:shadow-none"
              >
                ADD TO CART <ShoppingCart className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
