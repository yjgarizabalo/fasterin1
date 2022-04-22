import Image from 'next/image';
import Link from 'next/link';

import Yweb from '../public/img/yweb.svg'
import favicon_yweb from '../public/img/favicon-yweb.svg'

const Header = () => (
    <header className="header">

        <div className="header__container">
            <Link href="/">
                <a itle="Desarrollo web Barranquilla"><Image loading="lazy" src={favicon_yweb} className="header__Image" width={40} height={40} alt="logo Yweb" title="Yweb Deserrollo web" /></a>
            </Link>

            <Link href="/">
                <a title="Diseño Web Barranquilla" ><Image loading="lazy" src={Yweb} className="header__logo" width={120} height={40} alt="Diseño Web Barranquilla" /></a>
            </Link>


            <div className="header__toggle">
                <i className='bx bx-menu' id="header-toggle"></i>
            </div>
        </div>
    </header>
)

export default Header;