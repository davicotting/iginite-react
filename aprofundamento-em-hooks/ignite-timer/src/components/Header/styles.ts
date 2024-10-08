import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
        display: flex;
        align-items: center;
        gap: .5rem;
        
        

       

        a{
            height: 3rem;
            width: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 3px solid transparent;
            border-top: 3px solid transparent;
            box-shadow: none !important;
            
            color: ${props => props.theme["gray-100"]};
            
            &.active{
            color: ${props => props.theme["green-500"]};
            }
        }

       
        
        

        a:hover{
            
            border-bottom: 3px solid ${props => props.theme["green-500"]};
        }

        
    }

`