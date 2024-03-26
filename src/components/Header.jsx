import React, { useState } from 'react'
import './Header.css'
import universal_icon from './Assets/universal-logo.png'
import navlistData from '../Data/NavlistData'
import NavlistItem from './NavlistItem'


const Header = () => {

    const [navlist, setNavList] = useState(navlistData)



    return (
        <header>
            <div className='navbar'>
                <a href="#" className='nav-logo' >
                    <img src={universal_icon} alt="" />
                </a>
                <ul className='nav'>
                    {navlist.map(nav => (
                        <NavlistItem key={nav.id} nav={nav} />
                    ))}
                </ul>
                <div className='nav-right'>
                    <div className="nav-search">
                        <input className="searchinput" type="text" placeholder='Search' />
                        <i className="ri-search-line"></i>
                    </div>
                    <div className='nav-login'>
                        <i className="bi bi-person-circle"></i>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
