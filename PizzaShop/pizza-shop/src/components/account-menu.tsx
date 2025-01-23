import { Building, ChevronDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useMutation, useQuery } from "react-query";
import { GetManagedRestaurant } from "@/api/get-managed-restaurants";
import { getProfile } from "@/api/get-user";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { EditProfileModal } from "./edit-profile-modal";
import { signOut } from "@/api/sign-out";
import { useNavigate } from "react-router-dom";

export function AccountMenu() {
  const navigate = useNavigate();
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    staleTime: Infinity,
  });

  const { data: restaurant, isLoading: isLoadingRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: GetManagedRestaurant,
    staleTime: Infinity,
  });

  const { mutateAsync: signOutfN } = useMutation({
    mutationFn: signOut,
    onSuccess() {
      navigate("/sign-in", { replace: true });
    },
  });

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-3 items-center">
          <Button variant={"outline"}>
            {isLoadingRestaurant ? <Skeleton /> : restaurant?.name}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingProfile ? (
              <div className="flex flex-col gap-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem className="cursor-pointer">
              <Building className="mr-2 h-4 w-4" />
              Perfil da loja
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => signOutfN()}
          >
            <LogOut className="mr-2 h-4 w-4 dark:text-red-500 text-red-400" />
            Sair da loja
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditProfileModal />
    </Dialog>
  );
}
