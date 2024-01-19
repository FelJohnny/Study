import React from "react";
import { NavLink } from "react-router-dom";
import HeaderCss from './Header.module.css'

const Header = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="contato">Contato</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header