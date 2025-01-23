import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";

import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import * as zod from "zod";
import { useMutation } from "react-query";
import { signIn } from "@/api/sign-in";

export function SignIn() {
  const [searchParams] = useSearchParams()
  const SignInForm = zod.object({
    email: zod.string().email(),
  });

  type SignInFormType = zod.infer<typeof SignInForm>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormType>({
    defaultValues: {
      email: searchParams.get('email') ?? ''
    }
  });

  const { mutateAsync } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInFormType) {
    
    try {
      await mutateAsync({ email: data.email });

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
          <Link to="/sign-up">Novo estabelecimento</Link>
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
