import React, { useState } from 'react';
import logo from '../img/logo_fasterin.svg';
import Home from './Home';
import ForgetPassword from './ForgetPassword';

export const Login = () => {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = (e) => {
        e.preventDefault();
        setAuthMode(authMode === "signin" ? "home" : "signin")
    }

    const forgetPassword = (e) => {
        setAuthMode("forgetPass")
    }


        return (
            <>
            {authMode === "signin" ? (
                <div className="login">
                    <div className="form-container">
                        <img src={logo} alt="logo" className="logo" />
                        <img src={logo} alt="logo" style={{ paddingBottom: 40 }} />
                        <form action="/" className="form" onSubmit={changeAuthMode}>
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
                            <button type='submit' className="primary-button login-button">Inciar sesión</button>
                            <a onClick={forgetPassword} className="pointer">¿Olvidaste la Contraseña?</a>
                        </form>
                        {/* <button className="secondary-button signup-button">Registrate</button> */}
                    </div>
                </div>
                ) : authMode === "home" ? (<Home/>) : (<ForgetPassword/>)
            }
            </>
        )
}

export default Login;
