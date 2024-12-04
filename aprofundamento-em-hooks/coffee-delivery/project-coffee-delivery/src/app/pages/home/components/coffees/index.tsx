    import { ShoppingCart, Plus, Minus } from "phosphor-react";
    import "./index.css"
import { useState } from "react";
    interface CoffeType {
        id: number;
        name: string;
        tags: string[];
        paragraph: string;
        img: string;
    }
    
    export function Coffe({id, name, img, paragraph, tags}: CoffeType){

        const [coffeeQuantity, setCoffeeQuantity] = useState(1);

        function handleRemoveCoffee(){
            if(coffeeQuantity > 1){
                setCoffeeQuantity((state) => state - 1);
            }
        }

        function handleAddCoffee(){
            if(coffeeQuantity >= 0){
                setCoffeeQuantity((state) => state + 1);
            }
        }

        return(
            <div className="h-[310px] w-[256px] bg-base_card relative rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md">
                <div className="-mt-[50px] flex items-center justify-center">
                <img src={img} alt="" className="h-[120px] w-[120px]"/>
                </div>

                

                <div className="flex flex-col items-center justify-between text-center px-[18px] py-[24px]">

                <section className="flex w-full items-center justify-center gap-1">
                {
                    tags && tags.map((tag) => ( 
                        <div className="px-2 py-1 uppercase text-xs bg-yellow_light text-yellow_dark rounded-full">{tag}</div>
                    ))
                }
                </section>

                

                <div className="gap-2 mt-4">
                <h2 className="text-base_title font-Baloo text-xl font-bold">{name}</h2>

                <p className="text-base_label">{paragraph}</p>
                </div>

                

                <footer className="h-8 flex items-center gap-4 mt-8 ">
                    
                <h3 className="font-Baloo font-bold w-full text-xl text-base_text"><span className="text-base font-medium">R$</span>9,90</h3>
                <div className="flex items-center bg-base_button rounded-md">

                    <button 
                    onClick={handleRemoveCoffee} 
                    className="rounded-l-md p-2 flex items-center justify-center text-purple">
                    <Minus size={14}/>
                    </button>

                    <input type="number" className="w-4 h-9 bg-base_button text-center font-Inter font-normal" value={coffeeQuantity} min={1}  />

                    <button
                    onClick={handleAddCoffee}
                    className="rounded-r-md p-2 flex items-center justify-center text-purple"
                    >
                    <Plus size={14}/>
                    </button>
                    </div>

                    <div className="flex items-center gap-2 h-8">
                    <button className="bg-purple_dark h-full p-2 hover:bg-purple rounded-md transition-all">
                    <ShoppingCart className="text-white"/>
                    </button> 
                    </div>    
                </footer>

                </div>
                
            </div>
        )
    }