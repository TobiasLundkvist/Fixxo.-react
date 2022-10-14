import React from 'react'
import LeftImage from '../assets/images/top-menu-girl.svg'
import RightImage from '../assets/images/top-menu-boy.svg'

function Showcase() {
  return (
    <section className='showcase'>
        <div className='container-fluid'>
            <img src={LeftImage} alt="" />
            <div className= 'showcase-text'>
                <h1><span>SALE UP</span>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>             
                <button>
                <div className='corner-top-left'></div>   
                <div className='corner-bottom-right'></div>SHOP NOW
                </button>
            </div>
            <img src={RightImage} alt="" />
        </div>

    </section>
  )
}

export default Showcase