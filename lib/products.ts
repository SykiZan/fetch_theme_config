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
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(
        "fetchProducts failed:",
        res.status,
        await res.text()
      );
      return [];
    }

    return res.json();
  } catch (err) {
    console.error("fetchProducts exception:", err);
    return [];
  }
}

