import React, { useContext } from 'react'
import RankingProduct from '../components/RankingProduct'
import RankingSale from '../components/RankingSale'
import { ProductsRankContext } from '../contexts/contexts'

function RankingProducts() {

  const productsRank = useContext(ProductsRankContext)

  return (
    <>
       <RankingSale />
       <div className='rankProducts container'>
        <RankingProduct sectionTitle = 'Latest Product' items={productsRank}/> 
        <RankingProduct sectionTitle = 'Best Selling Product' items={productsRank}/> 
        <RankingProduct sectionTitle = 'Top Reacted Product' items={productsRank}/> 
       </div>
    </>
  )
}

export default RankingProducts