
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { History } from "../pages/history/history";
import { DefaultLayout } from "../layout/defaultLayout";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
            </Route>
        </Routes>
    )
}