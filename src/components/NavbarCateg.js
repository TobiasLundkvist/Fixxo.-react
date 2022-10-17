import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarCateg() {
  return (
    <div className='navbarCateg'>
      <NavLink className='navbarlink' to="/">Home</NavLink>
      <NavLink className='navbarlink' to="/categories">Categories</NavLink>
      <NavLink className='navbarlink' to="/products">Products</NavLink>
      <NavLink className='navbarlink' to="/contacts">Contacts</NavLink>
    </div>
  )
}

export default NavbarCateg