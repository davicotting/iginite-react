    import { styled } from "styled-components"

    export const FormContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font: bold;
    flex-wrap: wrap;
    font-size: 1.125rem;
    color: ${props => props.theme["gray-100"]};

    form{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    

`

export const BaseInput = styled.input`

background-color: transparent;
height: 2.5rem;
border: 0;
font-size: 1.125rem;
font-weight: bold;
padding: 0 0.5rem;
border-bottom: 1px solid ${props => props.theme["gray-500"]};
color: ${props => props.theme["gray-100"]};


&:focus{
    box-shadow: none !important;
    border-color: ${props => props.theme["green-500"]};
}


`

export const TaskInput = styled(BaseInput)`

flex: 1;



`

export const MinutesAmountInput = styled(BaseInput)`

width: 4rem;

`