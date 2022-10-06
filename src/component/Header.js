import React from 'react'
import menu from '../img/menu.png'
import logo from "../img/logo_fasterin.svg"

export const Header = () => {
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <a href="" className="logo-nav">
                    <img src={logo} alt="logo" />
                </a>
                <ul>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/">Categoria</a>
                    </li>
                    <li>
                        <a href="/">Nosotros</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">fasterin@ejemplo.com</li>
                </ul>
            </div>
        </nav>

    )
}

export default Header;
