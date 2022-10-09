import React from 'react'
import { Link } from 'react-router-dom'

export const Saibar = () => {
    return (
        <div className="saibar">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/">Trnasporte</Link>
                </li>
                <li>
                    <Link to="/">Nosotros</Link>
                </li>
            </ul>
        </div>
    )
}
export default Saibar