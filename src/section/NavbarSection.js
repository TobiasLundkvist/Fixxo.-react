import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import NavbarCateg from '../components/NavbarCateg'
import NavbarShop from '../components/NavbarShop'


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <NavLink to="/" end><img src={Logo} alt='Fixxo.'/></NavLink>
        </div>
        <div className='menulinks'>
          <NavbarCateg />
        </div>
        <div className='navbarShop'>
          <NavbarShop link='/search' icon="fa-light fa-magnifying-glass"/>
          <NavbarShop link='/compare' icon="fa-light fa-code-compare"/>
          <NavbarShop hideOnMobile={true} link='/wishlist' icon="fa-light fa-heart" badge="3"/>
          <NavbarShop link='/shoppingcart' icon="fa-light fa-bag-shopping" badge="2"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar