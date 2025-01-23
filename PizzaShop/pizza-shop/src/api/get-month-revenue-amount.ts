import { api } from "@/lib/axios";
interface MonthRevenueOrdersAmountType {
    receipt: number;
    diffFromLastMonth: number;
}
export async function getMonthRevenueOrdersAmount(){
    const response = await api.get<MonthRevenueOrdersAmountType>("/metrics/month-receipt");
    return response.data;
}