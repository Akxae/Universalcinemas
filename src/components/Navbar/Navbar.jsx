
import './Navbar.css'
import universal_icon from '../Assets/universal-logo.png'
import Sidebarr from './Sidebarr'
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from 'react'


const Navbar = () => {

  const [showNav , setShowNav] = useState (false)
  return (
    <>
    <div className='nav'>
      <div className='navbar'>
        <div className="nav-logo">
          <img src={universal_icon} alt="" />
        </div>
      <div className="nav-center">
          <ul className='nav-menu'>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>More</li>
          </ul>
        </div>
        
        <div className="nav-right">
          <div className="nav-search">
            <input className="searchinput" type="text" placeholder='Search' />
            <i className="ri-search-line"></i>
          </div>
          <div className="nav-login">
            <div className='hamburger'>
              <Hamburger color='white' onToggle={toggled => {
                  setShowNav(!showNav)
                }} />
            </div>         
            <button>Login</button>
          </div>
        </div>
      </div>
      <Sidebarr show={showNav} />
    </div>   
  </>
  )
}


export default Navbar
