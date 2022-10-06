import React from 'react'

export const Menu = () => {
    return (
        <div className="desktop-menu">
            <ul>
                <li>
                    <a href="/" className="title">
                        Mi Servicios
                    </a>
                </li>
                <li>
                    <a href="/">Mi cuenta</a>
                </li>
                <li>
                    <a href="/">Cerrar sesión</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
