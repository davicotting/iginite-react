import { Building, ChevronDown, LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-3 items-center">
        <Button variant={"outline"}>
          Pizza Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="flex flex-col">
            <span>Davi Thomeny Cotting</span>
            <span className="text-xs font-normal text-muted-foreground">davicotting2323@gmail.com</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem className="cursor-pointer">
            <Building className="mr-2 h-4 w-4"/>
            Perfil da loja
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4 dark:text-red-500 text-red-400"/>
            Sair da loja
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
