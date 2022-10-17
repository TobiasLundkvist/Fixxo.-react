import React from 'react'
import Logo from '../assets/images/logo.svg'
import NavbarCateg from '../components/NavbarCateg'
import NavbarShop from '../components/NavbarShop'


function Navbar() {
  return (
    <nav className='__navbar'>
        <div className='container'>
            <img src={Logo} alt='Fixxo.'/>
            <NavbarCateg />
              <div className='navbarShop'>
                <NavbarShop link='/search' icon="fa-light fa-magnifying-glass"/>
                <NavbarShop link='/compare' icon="fa-light fa-code-compare"/>
                <NavbarShop link='/wishlist' icon="fa-light fa-heart"/>
                <NavbarShop link='/shoppingcart' icon="fa-light fa-bag-shopping"/>
              </div>
        </div>
    </nav>
  )
}

export default Navbar