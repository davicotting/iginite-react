import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "@/pages/app/dashboard/dashboard";
import { SignIn } from "@/pages/auth/sign-in";
import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth.";
import { SignUp } from "@/pages/auth/sign-up";
import { Orders } from "@/pages/app/orders/orders";

export function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout/>}>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/orders" element={<Orders/>} />
            </Route>
            <Route path="/" element={<AuthLayout/>}>
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}