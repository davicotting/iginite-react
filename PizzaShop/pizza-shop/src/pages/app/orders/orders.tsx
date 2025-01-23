import { getOrders } from "@/api/get-orders";
import { OrderTableFilters } from "@/components/order-table-filters";
import { OrderTableRow } from "@/components/order-table-row";
import { OrderTableSkeleton } from "@/components/order-table-skeleton";
import { Pagination } from "@/components/pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const customerName = searchParams.get("customerName");
  const status = searchParams.get("status");

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get("page") ?? "1");

  const { data: result, isFetching: isLoadingResults } = useQuery({
    queryKey: ["orders", pageIndex, orderId, customerName, status],
    queryFn: () =>
      getOrders({
        pageIndex,
        orderId,
        customerName,
        status: status === "all" ? null : status,
      }),
  });

  function handleChangePage(pageIndex: number) {
    setSearchParams((prevState) => {
      prevState.set("page", (pageIndex + 1).toString());
      return prevState;
    });
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoadingResults && <OrderTableSkeleton />}
              {result &&
                result.orders.map((order) => <OrderTableRow order={order} />)}
            </TableBody>
          </Table>
        </div>

        {result && (
          <Pagination
            onPageChange={handleChangePage}
            TotalCount={result.meta.totalCount}
            pageIndex={result.meta.pageIndex}
            perPage={result.meta.perPage}
          />
        )}
      </div>
    </>
  );
}
