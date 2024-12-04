import { Helmet, HelmetProvider } from "react-helmet-async"
import { ThemeProvider } from "./components/theme/theme-provider";
import { Router } from "./routes";
import { Toaster } from "sonner";

export function App() {
  return (
    <>
    <ThemeProvider defaultTheme="light" storageKey="pizzashop-theme">
    <Toaster richColors />
    <HelmetProvider>
    <Helmet titleTemplate="%s | Pizza.shop"/>
    <Router/>
    </HelmetProvider>
    </ThemeProvider>
    </>
  )
}
