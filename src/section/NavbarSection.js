import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import NavbarCateg from '../components/NavbarCateg'
import NavbarShop from '../components/NavbarShop'


function Navbar() {
  const [showMenu, setShowMenu] = useState(false) 

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <NavLink to="/" end><img src={Logo} alt='Fixxo.'/></NavLink>
        </div>
        <div className={`menulinks ${ showMenu ? "d-grid": ""}`}>
          <NavbarCateg />
        </div>
        <div className='navbarShop'>
          <NavbarShop link='/search' icon="fa-light fa-magnifying-glass"/>
          <NavbarShop link='/compare' icon="fa-light fa-code-compare"/>
          <NavbarShop link='/wishlist' icon="fa-light fa-heart" badge="3"/>
          <NavbarShop link='/shoppingcart' icon="fa-light fa-bag-shopping" badge="2"/>

          <button onClick={toggleMenu} className='d-lg-none whiteCircle btn-menu-icon'><i className='fa-light fa-bars'></i></button>


        </div>
      </div>
    </nav>
  )
}

export default Navbar