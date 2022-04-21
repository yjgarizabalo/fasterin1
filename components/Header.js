import Image from 'next/image'

import Yweb from '../public/img/yweb.svg'
import favicon_yweb from '../public/img/favicon-yweb.svg'

const Header = () => (
    <header className="header">

        <div className="header__container">

            <Image loading="lazy" src={favicon_yweb} className="header__Image" width={40} height={40} alt="logo Yweb" title="Yweb Deserrollo web" />

            <a href="#" title="Diseño Web Barranquilla" ><Image loading="lazy" src={Yweb} className="header__logo" width={120} height={40} alt="Diseño Web Barranquilla" /></a>


            <div className="header__toggle">
                <i className='bx bx-menu' id="header-toggle"></i>
            </div>
        </div>
    </header>
)

export default Header;