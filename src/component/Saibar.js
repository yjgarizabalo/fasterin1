import React from 'react'
import { Link } from 'react-router-dom'

export const Saibar = () => {
    return (
        <div className="saibar">
            <ul>
                <li>
                    <Link to="/Home">Inicio</Link>
                </li>
                <li>
                    <Link to="/Transporte">Transporte</Link>
                </li>
                <li>
                    <Link to="/Nosotros">Nosotros</Link>
                </li>
                <li>
                    <Link to="/Login">Cerrar sesión</Link>
                </li>
            </ul>
        </div>
    )
}
export default Saibar