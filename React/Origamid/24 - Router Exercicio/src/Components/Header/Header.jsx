import React from "react";
import { NavLink } from "react-router-dom";
import HeaderCss from './Header.module.css'

const Header = () =>{
    console.log(HeaderCss)
    return(
            <nav className={HeaderCss.nav}>
                <ul className="container">
                    <li>
                        <NavLink className={HeaderCss.btnNav} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={HeaderCss.btnNav} to="contato">Contato</NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Header