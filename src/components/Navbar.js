import React from 'react'
import Logo from '../assets/images/logo.svg'
import NavbarCateg from './NavbarCateg'
import NavbarShop from './NavbarShop'


function Navbar() {
  return (
    <nav className='__navbar'>
        <div className='container'>
            <img src={Logo} alt=''/>
            <NavbarCateg />
            <NavbarShop />
        </div>
    </nav>
  )
}

export default Navbar