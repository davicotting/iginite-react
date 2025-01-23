import { api } from "@/lib/axios";
interface getOrdersQuery {
  pageIndex?: number | null;
  orderId: string | null;
  customerName: string | null;
  status: string | null;
}

export interface OrderProps {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}
export async function getOrders({
  pageIndex,
  customerName,
  orderId,
  status,
}: getOrdersQuery) {
  const response = await api.get<OrderProps>("/orders", {
    params: {
      pageIndex,
      customerName,
      orderId,
      status,
    },
  });
  return response.data;
}
