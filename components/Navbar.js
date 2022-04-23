import Link from 'next/link';

const Navbar = () => (

    <nav className="nav" id="navbar">
        <nav className="nav__container">
            <div>

                <Link href="/">
                    <a  className="nav__link nav__logo">
                        <i className='bx bx-git-commit nav__icon'></i>
                        <span className="nav__logo-name">Yweb</span>
                    </a>
                </Link>

                <div className="nav__list">
                    <div className="nav__items">
                        <h3 className="nav__subtitle">Potafolio</h3>

                        <Link href="/nosotros">
                            <a className="nav__link">
                                <i className='bx bx-group nav__icon'></i>
                                <span className="nav__name">Nosotros</span>
                            </a>
                        </Link>

                        <Link href="/proyectos">
                            <a className="nav__link">
                                <i className='bx bx-navigation nav__icon' ></i>
                                <span className="nav__name">Proyectos</span>
                            </a>
                        </Link>

                        <Link href="/holamundo">
                            <a className="nav__link">
                                <i className='bx bx-world nav__icon' ></i>
                                <span className="nav__name">¡Hola mundo!</span>
                            </a>
                        </Link>

                    </div>

                    <div className="nav__items">
                        <h3 className="nav__subtitle">Destacado</h3>

                        <div className="nav__dropdown">
                            <a href="./src/views/proyectos.html" className="nav__link">
                                <i className='bx bx-star nav__icon'></i>
                                <span className="nav__name">Proyectos</span>
                                <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                            </a>

                            <div className="nav__dropdown-collapse">
                                <div className="nav__dropdown-content">
                                    <a href="http://dolmenusa.com/" target="_blank"className="nav__dropdown-item">DolmenUsa</a>
                                    <a href="https://controlt.com.co/" target="_blank" className="nav__dropdown-item">ControlT</a>
                                    <a href="https://multillantascolombia.com/" target="_blank" className="nav__dropdown-item">Multillantas</a>
                                    <a href="https://corp.recursoconfiable.com/" target="_blank" className="nav__dropdown-item">RecursosConfiables</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="nav__list">
                <a href="https://github.com/yjgarizabalo/Yweb" target="_blank" className="nav__link">
                    <i className='bx bxl-github nav__icon' ></i>
                    <span className="nav__name">Github</span>
                </a>

            </div>
        </nav>
    </nav>
)

export default Navbar;