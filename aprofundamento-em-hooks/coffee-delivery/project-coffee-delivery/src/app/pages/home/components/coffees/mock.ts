import expresso from "../../../../../assets/coffees/expresso.svg";
import expressoAmericano from "../../../../../assets/coffees/americano.svg";
import expressoCremoso from "../../../../../assets/coffees/expresso-cremoso.svg";
import expressoGelado  from "../../../../../assets/coffees/cafe-gelado.svg";
import cafeComLeite from "../../../../../assets/coffees/cafe-com-leite.svg";
import latte from "../../../../../assets/coffees/latte.svg";
import capuccino from "../../../../../assets/coffees/capuccino.svg";
import macchiato from "../../../../../assets/coffees/macchiato.svg";
import mocaccino from "../../../../../assets/coffees/mochaccino.svg";
import chocolateQuente from "../../../../../assets/coffees/chocolate-quente.svg";
import cubano from "../../../../../assets/coffees/cubano.svg";
import havaiano from "../../../../../assets/coffees/havaiano.svg";

import arabe from "../../../../../assets/coffees/arabe.svg";
import irlandes from "../../../../../assets/coffees/irlandes.svg";

export const coffees = [
{
    id: 1,
    name: "Expresso Tradicional",
    paragraph: "O tradicional café feito com água quente e grãos moídos",
    tags: ["tradicional"],
    image: expresso,
},

{
    id: 2,
    name: "Expresso Americano",
    paragraph: "Expresso diluído, menos intenso que o tradicional",
    tags: ["tradicional"],
    image: expressoAmericano,
},

{
    id: 3,
    name: "Expresso Cremoso",
    paragraph: "Café expresso tradicional com espuma cremosa",
    tags: ["tradicional"],
    image: expressoCremoso,

},

{
    id: 4,
    name: "Expresso Gelado",
    paragraph: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["tradicional", "gelado"],
    image: expressoGelado,
},

{
    id: 5,
    name: "Café com Leite",
    paragraph: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["tradicional", "com leite"],
    image: cafeComLeite,
},

{
    id: 6,
    name: "Latte",
    paragraph: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["tradicional", "com leite"],
    image: latte,
},

{
    id: 7,
    name: "Capuccino",
    paragraph: "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["tradicional", "com leite"],
    image: capuccino,
},

{
    id: 8,
    name: "Macchiato",
    paragraph: "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["tradicional", "com leite"],
    image: macchiato,
},

{
    id: 9,
    name: "Mocaccino",
    paragraph: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["tradicional", "com leite"],
    image: mocaccino,
},

{
    id: 10,
    name: "Chocolate Quente",
    paragraph: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["especial", "com leite"],
    image: chocolateQuente,
},

{
    id: 11,
    name: "Cuabano",
    paragraph: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["especial", "alcoólico", "gelado"],
    image: cubano,
},

{
    id: 12,
    name: "Havaiano",
    paragraph: "Bebida adocicada preparada com café e leite de coco",
    tags: ["especial"],
    image: havaiano,
},

{
    id: 13,
    name: "Árabe",
    paragraph: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["especial"],
    image: arabe,
},

{
    id: 13,
    name: "Irlandês",
    paragraph: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["especial", "alcoólico"],
    image: irlandes,
},

]
