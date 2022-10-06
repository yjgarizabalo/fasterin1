
import React, { useState } from 'react'
import logo from '../img/logo_fasterin.svg';
import SendMail from './SendMail';

const ForgetPassword = () => {

    let [authMode, setAuthMode] = useState("forgetPass")

    const sendMail = (e) => {
        e.preventDefault();
        setAuthMode(authMode === "forgetPass" ? "sendmail" : "forgetPass")
    }

  return (
    <>
    {authMode === "forgetPass" ? (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">Crear nueva contraseña</h1>
                <p className="subtitle">Ingresa tu nueva contraseña</p>
                <form action="/" className="form" onSubmit={sendMail}>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    className="input input-password"
                />
                <label htmlFor="new-password">Contraseña</label>
                <input
                    type="password"
                    name="new-password"
                    id="new-password"
                    placeholder="********"
                    className="input input-password"
                />
                <input
                    type="submit"
                    defaultValue="Corfirm"
                    className="primary-button login-button"
                />
                </form>
            </div>
        </div>
    ) : (<SendMail/>)
    }
    </>
  )
}

export default ForgetPassword