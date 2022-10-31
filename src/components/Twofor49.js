import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import {ProductContext } from '../contexts/contexts'

function Twofor49({items=[]}) {

  const products = useContext(ProductContext) 

  return (
    <div className='twofor49 container'>
      <div className="card-grid">
      {
        items.map(product => <ProductCard key={product.articleNumber} item={product} />)
      }
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