import { api } from "@/lib/axios";
interface MonthCanceledOrdersAmountType {
    amount: number;
    diffFromLastMonth: number;
}
export async function getMonthCanceledOrdersAmount(){
    const response = await api.get<MonthCanceledOrdersAmountType>("/metrics/month-canceled-orders-amount");
    return response.data;
}