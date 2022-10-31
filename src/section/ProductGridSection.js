import React, { useContext, useState } from 'react'
import ProductCard from '../components/ProductCard'
import {ProductContext } from '../contexts/contexts'


function ProductGridSection({title, items=[]}) {

  const products = useContext(ProductContext) 

  return (
    <section>
      <div className="product-grid">
        <h1>{title}</h1>
        <div className="grid container">
          {
            items.map(product => <ProductCard key={product.articleNumber} item={product} />)
          }
        </div>
      </div>
    </section>
  
  )
}

export default ProductGridSection