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

export function RevenueChart() {
  const data = [
    { date: "16/12", revenue: 150 },
    { date: "17/12", revenue: 750 },
    { date: "18/12", revenue: 950 },
    { date: "19/12", revenue: 120 },
    { date: "20/12", revenue: 1309 },
    { date: "21/12", revenue: 1840 },
  ];

  return (
    <Card className="col-span-6">
      <CardContent>
        <CardHeader className="px-0">
          <CardTitle>Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </CardHeader>
        <ResponsiveContainer width={"100%"} height={250}>
          <LineChart data={data}>
            <YAxis
              dataKey="revenue"
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
              dataKey="revenue"
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
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
