import { ArrowBigRight, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { TableCell, TableRow } from "./ui/table";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        23a408af7f89df0d8
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Michael Jordan</TableCell>
      <TableCell className="font-medium">R$ 225,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowBigRight />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
