import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarCateg() {
  return (
    <div>
      <NavLink className='navbarlink' to="/" end>Home</NavLink>
      <NavLink className='navbarlink' to="/categories" end>Categories</NavLink>
      <NavLink className='navbarlink' to="/product" end>Products</NavLink>
      <NavLink className='navbarlink' to="/contacts" end>Contacts</NavLink>
    </div>
  )
}

export default NavbarCateg