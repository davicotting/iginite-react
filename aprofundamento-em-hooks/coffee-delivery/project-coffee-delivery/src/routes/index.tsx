import { Routes, Route } from "react-router-dom";
import { Home } from "../app/pages/home";
import { Checkout } from "../app/pages/checkout";
import { Sucess } from "../app/pages/sucess";
import { DefaultLayout } from "../layout/defaultLayout";

export function Router(){
    return(
        <Routes>
        <Route element={<DefaultLayout/>}>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/checkout" element={<Checkout></Checkout>}/>
        <Route path="/sucess" element={<Sucess></Sucess>}/>
        </Route>
        </Routes>
    )
}