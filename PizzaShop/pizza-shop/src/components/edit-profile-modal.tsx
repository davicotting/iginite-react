import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  GetManagedRestaurant,
  GetManagedRestaurantProps,
} from "@/api/get-managed-restaurants";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile, updateProfileProps } from "@/api/update-profile";
import { toast } from "sonner";

export function EditProfileModal() {
  const queryClient = useQueryClient();

  const { data: restaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: GetManagedRestaurant,
    staleTime: Infinity,
  });

  

  
  const editProfileInputs = zod.object({
    name: zod.string().min(1),
    description: zod.string().nullable(),
  });

  function handleGetCachedData({ name, description }: editProfileInputsType){
    const cachedData = queryClient.getQueryData(['managed-restaurant']);

    if(cachedData){
      queryClient.setQueryData<editProfileInputsType>(['managed-restaurant'], {
        ...cachedData,
        name,
        description
      })
    }

    return { ProfileData: cachedData }
  }
  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({name, description} ){
      const { ProfileData: ChachedProfileData } = handleGetCachedData({name, description});
      return { ChachedProfileData };
      
    },
    onError(_, __, context){
      
      if(context?.ChachedProfileData){
        queryClient.setQueryData(['managed-restaurant'], {
          ...context.ChachedProfileData
        });

      }
    }
  });

  type editProfileInputsType = zod.infer<typeof editProfileInputs>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<editProfileInputsType>({
    resolver: zodResolver(editProfileInputs),
    values: {
      name: restaurant?.name ?? "",
      description: restaurant?.description ?? "",
    },
  });

  async function handleEditProfile(data: editProfileInputsType) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      });

      toast.success("Atulização do seu perfil feita com sucesso!");
    } catch {
      toast.error("Erro ao atualizar seu perfil, tente novamente!");
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Editar preferencias</DialogTitle>
        <DialogDescription>
          Edite suas preferencias, elas serao visiveis para os usuarios.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleEditProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register("name")} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register("description")}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"ghost"} type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant={"sucess"} disabled={isSubmitting}>
            Enviar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
