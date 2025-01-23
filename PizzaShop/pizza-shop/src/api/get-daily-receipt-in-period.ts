import { api } from "@/lib/axios";
interface DatePickerParams {
  from?: Date;
  to?: Date;
}
export type DailyReceiptInPeriodType = {
  date: string;
  receipt: number;
}[];
export async function getDailyReceiptInPeriod({ from, to }: DatePickerParams) {
  const response = await api.get<DailyReceiptInPeriodType>(
    "/metrics/daily-receipt-in-period",
    {
      params: {
        from,
        to,
      },
    }
  );
  return response.data;
}
