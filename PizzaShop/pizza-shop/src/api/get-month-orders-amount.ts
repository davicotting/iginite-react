import { api } from "@/lib/axios";
interface MonthOrdersAmountType {
    amount: number;
    diffFromLastMonth: number;
}
export async function getMonthOrdersAmount(){
    const response = await api.get<MonthOrdersAmountType>("/metrics/month-orders-amount");
    return response.data;
}