export type orderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: orderStatus;
}

const OrderStatusMap: Record<orderStatus, string> = {
  canceled: "Cancelado",
  delivered: "Entregue",
  delivering: "Em entrega",
  pending: "Pendente",
  processing: "Em preparo",
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === "canceled" && (
        <span className="h-2 w-2 rounded-full bg-rose-400" />
      )}
      {status === "delivered" && (
        <span className="h-2 w-2 rounded-full bg-green-400" />
      )}
      {status === "delivering"  && (
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
      )}
      {status === "processing"  && (
        <span className="h-2 w-2 rounded-full bg-yellow-600" />
      )}

      <span className="font-medium">{OrderStatusMap[status]}</span>
    </div>
  );
}
