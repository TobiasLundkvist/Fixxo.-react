import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import NavbarCateg from '../components/NavbarCateg'
import NavbarShop from '../components/NavbarShop'
import { useShoppingCart } from '../contexts/shoppingCartContext'


function Navbar() {
  const [showMenu, setShowMenu] = useState(false) 
  const { cartQuantity } = useShoppingCart()


  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <nav className='navbar'>
      <section className='container'>
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
          <button className="whiteCircle" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <i className="fa-light fa-bag-shopping"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">{cartQuantity}</span>
          </button>

          <button onClick={toggleMenu} className='d-lg-none whiteCircle btn-menu-icon'><i className='fa-light fa-bars'></i></button>
        </div>
      </section>
    </nav>
  )
}

export default Navbar