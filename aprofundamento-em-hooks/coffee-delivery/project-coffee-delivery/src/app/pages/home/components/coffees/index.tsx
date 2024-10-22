    import { ShoppingCart } from "phosphor-react";
    import './styles.css';
    
    interface CoffeType {
        id: number;
        name: string;
        tags: string[];
        paragraph: string;
        img: string;
    }
    
    export function Coffe({id, name, img, paragraph, tags}: CoffeType){
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

                

                <footer className="h-8 flex items-center gap-6 mt-8 ">
                    
                <h3 className="font-Baloo font-bold w-full text-xl"><span className="text-base font-medium">R$</span> 9,90</h3>
                    <div className="flex items-center gap-2 h-8 ">
                    <input type="number" className="h-full w-[72px] bg-base_button rounded-md"/>
                    <button className="bg-purple_dark h-full p-2 hover:bg-purple rounded-md transition-all">
                    <ShoppingCart className="text-white"/>
                    </button> 
                    </div>    
                </footer>

                </div>
                
            </div>
        )
    }