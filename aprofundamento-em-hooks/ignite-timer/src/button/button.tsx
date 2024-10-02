import { ButtonContainer, VariantOptions } from "./button.styles";

interface ButtonProps {
    variant?: VariantOptions;
}

export function Button({variant = "default"}: ButtonProps){
    return(
        <ButtonContainer variant={variant}>
            Send
        </ButtonContainer>
    )
}