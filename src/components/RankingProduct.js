import React from 'react'
import ProductCard from './ProductCard'

function RankingProduct({sectionTitle, items=[]}) {
  return (
    <>
    <div className='ranking container'>
        <h1>{sectionTitle}</h1>
        <div className='test'>
            {items.map(product => <ProductCard key={product.articleNumber} item={product} />)}
        </div>
    </div>
    </>
  )
}

export default RankingProduct