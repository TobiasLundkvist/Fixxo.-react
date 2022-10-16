import React from 'react'

function NavbarShop() {
  return (
    <div className='navbarShop'>
        <div className='whiteCircle'>
            <a href='#'><i className="fa-light fa-magnifying-glass"></i></a> 
        </div>
        <div className='whiteCircle'>
            <a href='#'><i className="fa-light fa-code-compare"></i></a>
        </div>        
        <div className='whiteCircle'>
            <a id="quantity" href="#">
            <span class="badge rounded-pill">1</span>
            <i className="fa-light fa-heart"></i></a>
        </div>
        <div className='whiteCircle'>
            <a id="quantity" href="#">
            <span class="badge rounded-pill">3</span>
            <i className="fa-light fa-bag-shopping"></i></a>
        </div>

    </div>
  )
}

export default NavbarShop