
    import styled, {css} from "styled-components";

    export type VariantOptions = "default" | "success" | "danger";

    interface ButtonVariants {
        variant: VariantOptions;
    }

    const buttonVariantOptions = {
        default: "#191414",
        success: "#1DB954",
        danger: "#dc4545",
    }

    export const ButtonContainer = styled.button<ButtonVariants>`
    
    height: 40px;
    width: 100px;
    border: none;
    color: white;
    border-radius: 9999px;
    cursor: pointer;

    background-color: ${props => props.theme.secondary};


    /* ${props => {
        return css`background-color: ${buttonVariantOptions[props.variant]}`
    }} */

    `