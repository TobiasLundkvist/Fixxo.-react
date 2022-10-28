import React from 'react'
import ProductGridSection from '../section/ProductGridSection'
import ProductCard from './ProductCard'

function Twofor29({products}) {
  return (
        <div className='twofor29 container'>
            <div className="twofor-body">
                <div className="twofor-text">
                    2 FOR USD $29
                </div>
                <button className="btn-white">
                    <div className="corner-top-left"></div>
                    <div className="corner-bottom-right"></div>
                FLASH SALE</button>
            </div> 
            <div className="card-grid">
                <ProductCard item={{name:'SnyggBlus', category: 'Mode', price: "$11.00"}} />
                <ProductCard item={products[0]}/>
                <ProductCard item={products[1]}/>
                <ProductCard item={products[2]}/>
            </div>
        </div>
    )
}

export default Twofor29