import { api } from "@/lib/axios";

export interface PopularProductsType {
  product: string | null;
  amount: number;
}

export async function getPopularProducts() {
  const response = await api.get<PopularProductsType>(
    "/metrics/popular-products"
  );
  return response.data;
}
