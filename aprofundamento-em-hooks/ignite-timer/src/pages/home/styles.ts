import styled from "styled-components";

export const HomeContainer = styled.div`
flex: 1;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


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

