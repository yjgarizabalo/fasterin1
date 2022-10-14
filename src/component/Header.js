import React from 'react'
import Saibar from './Saibar';
import Navabar from './Navabar';
import '../css/main.css'

export const Header = () => {
    return (
        <div>
            <Navabar/>
            <div className='flex'>
                <Saibar/>
            </div>
        </div>
    )
}

export default Header;
