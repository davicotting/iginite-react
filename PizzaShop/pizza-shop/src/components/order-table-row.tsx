import { ArrowBigRight, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { TableCell, TableRow } from "./ui/table";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { OrderDetails } from "./order-details";
import { orderStatus, OrderStatus } from "./order-status";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { cancelOrder } from "@/api/cancel-order";
import { OrderProps } from "@/api/get-orders";
import { approveOrder } from "@/api/approve-order";
import { dispatchOrder } from "@/api/dispatch-order";
import { deliverOrder } from "@/api/deliver-order";

interface OrderTableRowProps {
  order: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  };
}

export function OrderTableRow({ order }: OrderTableRowProps) {
  const queryClient = useQueryClient();

  function changeStatus(orderId: string, status: orderStatus) {
    
    const cachedOrders = queryClient.getQueriesData<OrderProps>({
      queryKey: "orders",
    });
    cachedOrders.map(([QueryKey, OrderProps]) => {
      if (!OrderProps) {
        return;
      }

      queryClient.setQueryData<OrderProps>(QueryKey, {
        ...OrderProps,
        orders: OrderProps.orders.map((order) => {
          if (order.orderId === orderId) {
            return { ...order, status };
          }
          return order;
        }),
      });
    });
  }

  const { mutateAsync: cancelOrderFn, isLoading: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrder,
      onSuccess(_, { orderId }) {
        changeStatus(orderId, "canceled");
      },
    });

  const { mutateAsync: approveOrderFn, isLoading: isApprovingOrder } =
    useMutation({
      mutationFn: approveOrder,
      onSuccess(_, { orderId }) {
        changeStatus(orderId, "processing");
      },
    });

  const { mutateAsync: dispatchOrderFn, isLoading: isDispatchingOrder } =
    useMutation({
      mutationFn: dispatchOrder,
      onSuccess(_, { orderId }) {
        changeStatus(orderId, "delivering");
      },
    });

  const { mutateAsync: deliverOrderFn, isLoading: isDeliveringOrder } =
    useMutation({
      mutationFn: deliverOrder,
      onSuccess(_, { orderId }) {
        changeStatus(orderId, "delivered");
      },
    });

  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <TableRow key={order.orderId}>
      <TableCell>
        <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails orderId={order.orderId} dialogIsOpen={dialogIsOpen} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(new Date(order.createdAt), {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {(order.total / 100).toLocaleString("PT-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </TableCell>
      <TableCell>
        {order && order.status === "pending" && (
          <Button
            onClick={() => approveOrderFn({ orderId: order.orderId })}
            disabled={isApprovingOrder}
            variant="outline"
            size="xs"
          >
            <ArrowBigRight />
            Aprovar
          </Button>
        )}

        {order && order.status === "processing" && (
          <Button
            onClick={() => dispatchOrderFn({ orderId: order.orderId })}
            disabled={isDispatchingOrder}
            variant="outline"
            size="xs"
          >
            <ArrowBigRight />
            Em entrega
          </Button>
        )}

        {order && order.status === "delivering" && (
          <Button
            onClick={() => deliverOrderFn({ orderId: order.orderId })}
            disabled={isDeliveringOrder}
            variant="outline"
            size="xs"
          >
            <ArrowBigRight />
            Em entrega
          </Button>
        )}
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="xs"
          onClick={() => cancelOrderFn({ orderId: order.orderId })}
          disabled={
            !["pending", "processing"].includes(order.status) ||
            isCancelingOrder
          }
        >
          <X />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
