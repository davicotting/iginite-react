    import { NavLink } from "react-router-dom";
    import { HeaderContainer } from "./styles";
    import { Timer, Scroll } from "phosphor-react";
    import igniteLogo from "../../assets/logo-ignite.svg";

    export function Header(){
        return(
            <HeaderContainer>

            <img src={igniteLogo} alt="" />

            <nav>
                <NavLink to="/">
                <Timer size={24}/>
                </NavLink>

                <NavLink to="/history">
                <Scroll size={24}/>
                </NavLink>
            </nav>

            </HeaderContainer>
        )
    }