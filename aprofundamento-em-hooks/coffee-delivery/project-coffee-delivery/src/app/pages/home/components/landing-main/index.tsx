
import CoffeeImage from "../../../../../assets/main-image/image-coffee-main.svg";
import { TextIcon } from "../text-icons/index";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import background from "../../../../../assets/main-image/Background.svg";

export function LandingMain(){
    return(
        <section
      className="flex h-max items-center justify-between px-40"
      style={{
        height: "calc(100vh - 112px)",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[588px]">
        <div className="flex flex-col gap-4">
          <h1 className="font-Baloo text-5xl text-base_title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-base_subtitle text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <aside className="mt-16 grid grid-cols-2 gap-5">
          <TextIcon
            color="yellow-dark"
            content="Compra simples e segura"
            icon={<ShoppingCart />}
          />
          <TextIcon
            color="base-text"
            content="Compra simples e segura"
            icon={<Package />}
          />
          <TextIcon
            color="yellow"
            content="Compra simples e segura"
            icon={<Timer />}
          />
          <TextIcon
            color="purple"
            content="Compra simples e segura"
            icon={<Coffee />}
          />
        </aside>
      </div>

      <img src={CoffeeImage} alt="" />

      
    </section>
    )
}