import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

function ProductGridSection({title, products}) {
  return (
    <section>
      <div className="product-grid">
        <h1>{title}</h1>
          <div className="grid container">
            {
              products.map(products => <ProductCard key={products.id} item={products} />)
            }
          </div>
      </div>
    </section>

  )
}

export default ProductGridSection