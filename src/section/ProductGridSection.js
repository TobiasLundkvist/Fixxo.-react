import React from 'react'
import ProductCard from '../components/ProductCard'

function ProductGridSection() {
  return (
    <section>
      <div className="product-grid border">
        <div className="grid container border">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>

  )
}

export default ProductGridSection