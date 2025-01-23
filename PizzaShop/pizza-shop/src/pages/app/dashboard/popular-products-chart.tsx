import colors from "tailwindcss/colors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { BarChart, Loader2 } from "lucide-react";
import { useQuery } from "react-query";
import { getPopularProducts } from "@/api/get-popular-products";

const COLORS = [
  colors.sky["500"],
  colors.amber["500"],
  colors.red["500"],
  colors.green["500"],
  colors.orange["500"],
];

export function PopularProductsChart() {
  const { data: popularProducts } = useQuery({
    queryFn: getPopularProducts,
    queryKey: ["metrics", "popular-products"],
  });

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
            {popularProducts ? (
              <Pie
                data={popularProducts}
                labelLine={false}
                dataKey={"amount"}
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
                  const RADIAN = Math.PI / 180;
                  const radius = 12 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      className="fill-muted-foreground text-xs"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {popularProducts[index].product.length > 12
                        ? popularProducts[index].product
                            .substring(0, 12)
                            .concat("...")
                        : popularProducts[index].product}{" "}
                      ({value})
                    </text>
                  );
                }}
              >
                {popularProducts.map((_, index) => (
                  <Cell
                    key={`cell-${COLORS}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-70 cursor-pointer"
                  />
                ))}
              </Pie>
            ) : (
              <div className="h-[240px] w-full flex items-center justify-center">
                <Loader2 className="h-8 w-8 text-muted-foreground animate-spin"/>
              </div>
            )}
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
