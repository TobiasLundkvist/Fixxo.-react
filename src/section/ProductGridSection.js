import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

function ProductGridSection({title}) {
  const [products, setProduct] = useState ([
    {id: 1, name: "Modern Black", category: "Fashion", price: "$35.00", rating: 5,}, 
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5,}, 
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5,}, 
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5,} 
  ])
  
  return (
    <section>
      <div className="product-grid">
        <h1>{title}</h1>
          <div className="grid container">
            {
              products.map(products => <ProductCard item={products} />)
            }


            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </div>
      </div>
    </section>

  )
}

export default ProductGridSection