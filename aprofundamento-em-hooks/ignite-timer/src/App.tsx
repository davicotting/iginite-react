
import { Button } from "./button/button";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
     <Button />
     <Button variant="danger"/>
     <Button variant="success"/>
    </ThemeProvider>
  )
}
