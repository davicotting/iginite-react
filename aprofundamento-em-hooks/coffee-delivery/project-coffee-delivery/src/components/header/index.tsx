    import coffeeDeliveryLogo from "../../assets/logo/logo-coffee-Delivery.svg";
    import { ShoppingCart, MapPin } from "phosphor-react";

    export function Header(){
        return(
            <header className="flex items-center justify-between py-8 px-40">
                <img src={coffeeDeliveryLogo} alt="logo" />

                <div className="flex items-center gap-3">

                <div className="bg-purple_light text-purple_dark p-3 flex items-center rounded-lg gap-[4px]">
                <MapPin className="text-purple_dark h-5 w-5"/>
                <p className="font-Baloo">Porto Alegre, RS</p>
                </div>

                <div className="bg-yellow_light p-3 w-max rounded-lg">
                <ShoppingCart className="text-yellow_dark h-5 w-5" />
                </div>

                </div>

            </header>
        )
    }