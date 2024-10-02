import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme["green-500"]};
}

body{
    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    min-height: 100vh;
}

body, button, text-area, input{
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}


`