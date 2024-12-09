import { DialogContent, DialogDescription, DialogHeader } from "./ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>Pedido: 1a8s3ds64sd13dasd</DialogHeader>
      <DialogDescription>Detalhes do pedido</DialogDescription>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium">Pendente</span>
                </div>
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Davi Thomeny Cotting
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                +55 (85) 9 8848-3936
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                davicotting2323@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Realizado há</TableCell>
              <TableCell className="flex justify-end">
                15 minutos
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead className="text-right">Quantidade</TableHead>
                    <TableHead className="text-right">Preço</TableHead>
                    <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>
                        Pizza de frango com bacon
                    </TableCell>
                    <TableCell className="text-right">
                        2
                    </TableCell>
                    <TableCell className="text-right">
                        R$ 68,00
                    </TableCell>
                    <TableCell className="text-right">
                        R$ 136,00
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        Pizza de calabresa
                    </TableCell>
                    <TableCell className="text-right">
                        6
                    </TableCell>
                    <TableCell className="text-right">
                        R$ 54,00
                    </TableCell>
                    <TableCell className="text-right">
                        R$ 324,00
                    </TableCell>
                </TableRow>
            </TableBody>

            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>
                        Total do pedido
                    </TableCell>
                    <TableCell className="text-right font-medium">
                        R$ 460,00
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
