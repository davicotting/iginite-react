import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import * as zod from "zod";

export function SignIn() {
  const SignInForm = zod.object({
    email: zod.string().email(),
  });

  type SignInFormType = zod.infer<typeof SignInForm>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormType>({});

  async function handleSignIn(data: SignInFormType) {
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Enviamos um link de autenticacao para o seu e-mail.", {
        action: {
          label: "Reenviar",
          onClick: () => {
            
            handleSignIn(data);
            
          },
        },
      });
    } catch {
      toast.error("Credenciais Invalidas, tente novamente mais tarde.");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
      <Button variant={"ghost"} className="absolute top-8 right-8" asChild>
          <Link to="/sign-up" >Novo estabelecimento</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl text-semibold tracking-tight">
              Acessar o painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-4">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
