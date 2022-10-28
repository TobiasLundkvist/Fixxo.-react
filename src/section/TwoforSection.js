import React from 'react'
import Twofor29 from '../components/Twofor29'
import Twofor49 from '../components/Twofor49'


function TwoforSection({products}) {
  return (
    <> 
      <Twofor29 products={products} />
      <Twofor49 products={products}/>
    </>
  )
}

export default TwoforSection