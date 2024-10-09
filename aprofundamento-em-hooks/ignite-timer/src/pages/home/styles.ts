import styled from "styled-components";

export const HomeContainer = styled.div`
flex: 1;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;





`

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

export const CountDownContainer = styled.div`
height: 100%;
font-family: "Roboto Mono", monospace;
font-size: 10rem;
line-height: 8rem;

display: flex;
align-items: center;
gap: 1rem;

span{
    background-color: ${props => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
}


`

export const Separator = styled.div`
padding: 2rem 0;
color: ${props => props.theme["green-500"]};
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;

`

export const BaseCountdownButton = styled.button`

width: 100%;
border: 0;
padding: 1rem;
border-radius: 8px;
display: flex;
gap: 0.5rem;
align-items: center;
justify-content: center;
font-weight: bold;
cursor: pointer;

color: ${props => props.theme["gray-100"]};



&:disabled{
    opacity: .7;
    cursor: not-allowed;
}


`

export const StartCountdownButton = styled(BaseCountdownButton)`

background-color: ${props => props.theme["green-500"]};

&:hover:not(:disabled){
    background-color: ${props => props.theme["green-700"]};
}


`

export const InterruptCountdownButton = styled(BaseCountdownButton)`


background-color: ${props => props.theme["red-500"]};

&:hover:not(:disabled){
    background-color: ${props => props.theme["red-700"]};
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