import React from 'react'

export const Header = () => {
    return (
        <nav>
            {/* <img src="./src/assets/menu.svg" alt="menu" className="menu" /> */}
            <div className="navbar-left">
                {/* <img src="./src/assets/logo_fasterin.svg" alt="logo" className="logo" /> */}
                <ul>
                    <li>
                        <a href="/">Todo</a>
                    </li>
                    <li>
                        <a href="/">Nosotros</a>
                    </li>
                    <li>
                        <a href="/">Servicios</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">fasterin@ejemplo.com</li>
                    <li className="navbar-shopping-cart">
                        <img
                            src="./src/assets/shopping-cart-add-free-icon-font.svg"
                            alt="shopping cart"
                        />
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
