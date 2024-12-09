import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";

interface PaginationProps {
  pageIndex: number;
  TotalCount: number;
  perPage: number;
}

export function Pagination({
  TotalCount,
  pageIndex,
  perPage,
}: PaginationProps) {
  const pages = Math.ceil(TotalCount / perPage) || 1;
  return (
    <div className="flex items-center justify-between">
      <span>total de {TotalCount} items(s)</span>

      <div className="flex items-center gap-6 lg:gap-8">
        <span>
          pagina atual: {pageIndex + 1} de {pages}
        </span>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="xs">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant="outline" size="xs">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>

          <Button variant="outline" size="xs">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button variant="outline" size="xs">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Útima página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
