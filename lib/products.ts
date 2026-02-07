export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    // for test task: simplest
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
