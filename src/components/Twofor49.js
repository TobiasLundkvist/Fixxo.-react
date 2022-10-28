import React from 'react'
import ProductCard from './ProductCard'

function Twofor49({products}) {
  return (
    <div className='twofor49 container'>
      <div className="card-grid">
        <ProductCard item={products[4]}/>
        <ProductCard item={products[5]} />
        <ProductCard item={products[6]}/>
        <ProductCard item={products[7]}/>
      </div>
      <div className="twofor-body49">
        <div className="twofor-text">
          2 FOR USD $49
        </div>
        <button className="btn-white">
          <div className="corner-top-left"></div>
          <div className="corner-bottom-right"></div>
          FLASH SALE
        </button>
      </div> 
    </div>
  )
}

export default Twofor49