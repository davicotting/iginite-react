
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-3">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Você deseja voltar para o {" "}
        <Link to={"/"} className="text-blue-500 hover:underline">
          dashboard
        </Link>
        ?
      </p>
    </div>
  );
}
