import React from 'react'
import logo from '../img/logo_fasterin.svg'

export const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <img src={logo} alt="logo" style={{ paddingBottom: 40 }} />
                <form action="/" className="form">
                    <label htmlFor="email" className="label">
                        Correo Electronico
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="fasterin@ejemplo.com"
                        className="input input-email"
                    />
                    <label htmlFor="password" className="label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="input input-password"
                    />
                    <input
                        type="submit"
                        defaultValue="Inciar sesión"
                        className="primary-button login-button"
                    />
                    {/* <a href="/">¿Olvidaste la Contraseña?</a> */}
                </form>
                {/* <button className="secondary-button signup-button">Registrate</button> */}
            </div>
        </div>

    )
}

export default Login;
