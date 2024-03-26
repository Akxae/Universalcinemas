import React from 'react'
import './Navbar.css'

const Sidebarr = ({show}) => {
  return (
    <>
    <div className={show ? 'side-bar active' : 'side-bar'}>
        <div className='side-list'>
            <ul>
              <li>Home</li>
              <li>Movies</li>
              <li>Tv shows</li>
              <li>More</li>
            </ul>
        </div>
        <div className="side-login">
            <button>Login</button>
        </div>
    </div>
    </>
  )
}

export default Sidebarr
