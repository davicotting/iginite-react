import { Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const customerName = searchParams.get("customerName");
  const status = searchParams.get("status");

  const orderFilterSchema = zod.object({
    OrderId: zod.string().optional(),
    customerName: zod.string().optional(),
    status: zod.string().optional(),
  });

  type OrderFilterType = zod.infer<typeof orderFilterSchema>;

  const { register, handleSubmit, control, reset } = useForm<OrderFilterType>({
    resolver: zodResolver(orderFilterSchema),
    defaultValues: {
      OrderId: orderId ?? "",
      customerName: customerName ?? "",
      status: status ?? "all",
    },
  });

  function handleFilter({ OrderId, customerName, status }: OrderFilterType) {
    setSearchParams((state) => {
      if (OrderId) {
        state.set("orderId", OrderId);
      } else {
        state.delete("orderId");
      }

      if (customerName) {
        state.set("customerName", customerName);
      } else {
        state.delete("customerName");
      }

      if (status) {
        state.set("status", status);
      } else {
        state.delete("status");
      }

      searchParams.set("page", "1");

      return state;
    });
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete("orderId");

      state.delete("customerName");

      state.delete("status");

      searchParams.set("page", "1");
      return state;
    });

    reset({
      customerName: "",
      OrderId: "",
      status: "all",
    });
    
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-semibold">Filtros</span>
      <Input
        placeholder="Id do cliente"
        className="h-8 w-[180px]"
        {...register("OrderId")}
      />
      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register("customerName")}
      />

      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="w-[180px] h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos pedidos</SelectItem>
                <SelectItem value="pending">Pendentes</SelectItem>
                <SelectItem value="canceled">Cancelados</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregues</SelectItem>
              </SelectContent>
            </Select>
          );
        }}
      ></Controller>

      <Button variant="secondary" type="submit" size="xs">
        <Search className="h-4 w-4 mr-2" />
        Filtrar resultados
      </Button>
      <Button
        onClick={handleClearFilters}
        variant="outline"
        type="button"
        size="xs"
      >
        <X className="h-4 w-4 mr-2" />
        Remover item
      </Button>
    </form>
  );
}
