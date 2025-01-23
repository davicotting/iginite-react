import { getMonthCanceledOrdersAmount } from "@/api/get-month-cancelled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { useQuery } from "react-query";
import { MetricsCardSkeleton } from "./metrics-card-skeleton";

export function MonthCancelledOrdersAmountCard() {
  const { data: canceledOrders } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ["metrics", "month-canceled-orders-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {canceledOrders ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {canceledOrders.amount.toLocaleString("pt-BR")}
            </span>

            <p className="text-xs text-muted-foreground">
              {canceledOrders.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-em-400">
                    {canceledOrders.diffFromLastMonth}
                  </span>{" "}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {canceledOrders.diffFromLastMonth}
                  </span>{" "}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricsCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
