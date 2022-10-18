import React from 'react'
import { NavLink } from 'react-router-dom'


function NavbarShop({link, icon, badge}) {
  return (
    <div className='navbarShop'>
      <div className='whiteCircle'>
          <NavLink to={link} className="quantity" end>
            <i className={icon}></i>
            <span className="badge rounded-pill">{badge}</span>
          </NavLink>
      </div> 
    </div>
  )
}

export default NavbarShop