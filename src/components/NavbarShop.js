import React from 'react'
import { NavLink } from 'react-router-dom'


function NavbarShop({link, icon}) {
  return (
    <div className='navbarShop'>
        <div className='whiteCircle'>
            <NavLink to={link} id="quantity">
                <i className={icon}></i>
                <span class="badge rounded-pill">1</span>
            </NavLink>
        </div> 
    </div>
  )
}

export default NavbarShop