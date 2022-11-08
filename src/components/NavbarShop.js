import React from 'react'
import { NavLink } from 'react-router-dom'


function NavbarShop({link, icon, badge, hideOnMobile}) {
  return (
    <div className='whiteCircle'>
        <NavLink className={ `navbarShop ${hideOnMobile ? "d-none d-md-flex" : ""}`} to={link} end>
          <i className={icon}></i>
          <span className="badge rounded-pill">{badge}</span>
        </NavLink>
    </div> 
  )
}

export default NavbarShop