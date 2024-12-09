import colors from "tailwindcss/colors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { BarChart } from "lucide-react";

export function PopularProductsChart() {
  const data = [
    { product: "Calabresa", revenue: 34 },
    { product: "Mussarela", revenue: 32 },
    { product: "Bacon", revenue: 44 },
    { product: "Frango com catupiry", revenue: 54 },
    { product: "Chocolate", revenue: 43 },
  ];

  const COLORS = [
    colors.sky["500"],
    colors.amber["500"],
    colors.red["500"],
    colors.green["500"],
    colors.orange["500"],
  ]

  return (
    <Card className="col-span-3">
      <CardContent>
        <CardHeader className="pb-8">
          <div className="flex items-center justify-between">
            <CardTitle>Produtos populares</CardTitle>
            <BarChart className={"h-4 w-4 text-muted-foreground"} />
          </div>
        </CardHeader>
        <ResponsiveContainer width={"100%"} height={250}>
          <PieChart>
            
            
            <Pie 
            data={data}
            labelLine={false}
            dataKey={"revenue"}
            nameKey={"product"}
            outerRadius={86}
            innerRadius={64}
            strokeWidth={8}
            className="stroke-background font-bold"
            label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)
              
                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
                {
                    data.map((_, index) => (
                        <Cell 
                        key={`cell-${COLORS}`} 
                        fill={COLORS[index]} 
                        className="stroke-background hover:opacity-70 cursor-pointer"/>
                    ))

                }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
