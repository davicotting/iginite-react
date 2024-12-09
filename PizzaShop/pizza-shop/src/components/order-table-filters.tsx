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

export function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros</span>
      <Input placeholder="Id do cliente" className="h-8 w-[180px]" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />

      <Select defaultValue="all">
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
      <Button variant="secondary" type="submit" size="xs">
        <Search className="h-4 w-4 mr-2" />
        Filtrar resultados
      </Button>
      <Button variant="outline" type="button" size="xs" >
        <X className="h-4 w-4 mr-2"/>
        Remover item
      </Button>
    </form>
  );
}
