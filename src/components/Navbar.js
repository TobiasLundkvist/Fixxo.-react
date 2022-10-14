import React from 'react'
import Logo from '../assets/images/logo.svg'


function Navbar() {
  return (
    <nav className='__navbar'>
        <div className='container'>
            <img src={Logo} alt='' />
            <div>Links</div>
            <div>Shopping</div>
        </div>
    </nav>
  )
}

export default Navbar