
import { LandingMain } from "./components/landing-main";
import { Coffe } from "./components/coffees";
import { coffees } from "./components/coffees/mock";

export function Home() {
  return (
    <main className="flex flex-col">
        
    <LandingMain/>

    <section className="px-40 pb-40">
    <h1 className="font-Baloo text-3xl font-semibold mb-24">Nossos cafés</h1>
    

    <section className="grid grid-cols-4 gap-20 min-h-screen">
    
        {coffees && coffees.map(coffee => (
            <Coffe 
            id={coffee.id} 
            img={coffee.image} 
            name={coffee.name} 
            paragraph={coffee.paragraph} 
            tags={coffee.tags} 
            key={coffee.id}
            />
        ))}
    </section>
    </section>
    
    </main>
  );
}
