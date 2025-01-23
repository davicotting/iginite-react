import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as zod from "zod";
import { useMutation } from "react-query";
import { registerRestaurant } from "@/api/register-restaurant";

export function SignUp() {
  const navigate = useNavigate();

  const SignUpForm = zod.object({
    restaurantName: zod.string(),
    managerName: zod.string(),
    phone: zod.string(),
    email: zod.string().email(),
  });

  type SignUpFormType = zod.infer<typeof SignUpForm>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormType>({});

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  });

  async function handleSignUp(data: SignUpFormType) {
    try {
      await registerRestaurantFn({
        email: data.email,
        phone: data.phone,
        restaurantName: data.restaurantName,
        managerName: data.managerName,
      });

      toast.success("Restaurante criado com sucesso!", {
        action: {
          label: "Fazer login",
          onClick: () => {
            navigate(`/sign-in?email=${data.email}`);
          },
        },
      });
    } catch {
      toast.error("Erro ao cadastrar restaurante, tente novamente mais tarde.");
    }
  }

  return (
    <>
      <Helmet title="Register" />
      <div className="p-8">
        <Button variant={"ghost"} className="absolute top-8 right-8" asChild>
          <Link to="/sign-in">Tenho uma conta</Link>
        </Button>

        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl text-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-4">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-4">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="text" {...register("phone")} />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="text-muted-foreground text-center">
              Ao continuar, você concorda com os nossos{" "}
              <a className="underline underline-offset-4" href="">
                termos de uso
              </a>{" "}
              e{" "}
              <a href="" className="underline underline-offset-4">
                politicas de privacidade.
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
