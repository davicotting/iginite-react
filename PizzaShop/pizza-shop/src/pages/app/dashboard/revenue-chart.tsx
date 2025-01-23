import colors from "tailwindcss/colors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ResponsiveContainer,
  LineChart,
  YAxis,
  XAxis,
  Line,
  CartesianGrid,
} from "recharts";
import { useQuery } from "react-query";
import { getDailyReceiptInPeriod } from "@/api/get-daily-receipt-in-period";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";
import { Loader2 } from "lucide-react";

export function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date()
  })
  const { data: dailyReceiptInPeriod } = useQuery({
    queryKey: ["metrics", "daily-revenue-in-period", dateRange],
    queryFn: () =>  getDailyReceiptInPeriod({
      from: dateRange?.from,
      to: dateRange?.to
    }),
  });

  const chartData = useMemo(() => {
    return dailyReceiptInPeriod?.map(chartItem => {
      return {
        date: chartItem.date,
        receipt: chartItem.receipt / 100
      }
    })
  }, [dailyReceiptInPeriod])

  return (
    <Card className="col-span-6">
      <CardContent>
        <CardHeader className="px-0">
          <CardTitle>Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
          <div className="flex items-center gap-3">
            <Label>Período</Label>
            <DateRangePicker date={dateRange} onDateChange={setDateRange}/>
          </div>
        </CardHeader>

        <ResponsiveContainer width={"100%"} height={250}>
          {dailyReceiptInPeriod ? (
            <LineChart data={chartData}>
              <YAxis
                dataKey="receipt"
                tickLine={false}
                axisLine={false}
                stroke="#888"
                fontSize={12}
                tickFormatter={(value: number) =>
                  value.toLocaleString("BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }
              />
              <CartesianGrid vertical={false} className="stroke-muted" />
              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.violet["500"]}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                fontSize={12}
                dy={16}
              />
            </LineChart>
          ) : (
            <div className="h-[240px] w-full flex items-center justify-center">
              <Loader2 className="h-8 w-8 text-muted-foreground animate-spin"/>
            </div>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
