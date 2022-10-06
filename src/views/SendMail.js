
import React, { useState } from 'react'
import logo from '../img/logo_fasterin.svg';
import sobre from '../img/sobre.png';
import Login from './Login';

export const SendMail = () => {

  let [authMode, setAuthMode] = useState("sendmail")

  const singIn = () => {
    setAuthMode("login")
  }

  return (
    <>
      {authMode === "sendmail" ? (
        <div className="login">
          <div className="form-container-email">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="title">¡E-mail ha sido enviado!</h1>
            <p className="subtitle">
              Consulte su bandeja de entrada para obtener instrucciones sobre cómo
              restablecer la contraseña.
            </p>
            <div className="email-image">
              <img src={sobre} alt="email" />
            </div>
            <button className="primary-button login-button" onClick={singIn}>Ingresar</button>
            <p className="resend">
              <span>¿No recibiste el correo electrónico?</span>
              <a href="/">reenviar</a>
            </p>
          </div>
        </div>
      ) : (<Login />)
      }
    </>
  )
}

export default SendMail

