import React from 'react'
import LeftImage from '../assets/images/top-menu-girl.svg'
import RightImage from '../assets/images/top-menu-boy.svg'

function Showcase() {
  return (
    <section className='showcase gradient-gray'>
        <div className='container-fluid'>
            <img src={LeftImage} alt="Showcase Girl" />
            <div className= 'showcase-text'>
                <h1><span>SALE UP</span>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>             
                <button className='btn-red'>
                <div className='corner-top-left'></div>   
                <div className='corner-bottom-right'></div>SHOP NOW
                </button>
            </div>
            <img src={RightImage} alt="Showcase Boy" />
        </div>

    </section>
  )
}

export default Showcase