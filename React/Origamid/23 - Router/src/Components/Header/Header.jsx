import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = ()=>{
    return(
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>{' '}
                <NavLink to="sobre">Sobre</NavLink>{' '}
                <NavLink to="contato">Contato</NavLink>{' '}
                
            </nav>
        </header>
    )
}

export default Header