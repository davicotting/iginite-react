import { api } from "@/lib/axios";
interface DayOrdersAmountType {
    amount: number;
    diffFromYesterday: number;
}
export async function getDayOrdersAmount(){
    const response = await api.get<DayOrdersAmountType>("/metrics/day-orders-amount");
    return response.data;
}