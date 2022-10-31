import React, { useContext } from 'react'
import Twofor29 from '../components/Twofor29'
import Twofor49 from '../components/Twofor49'
import {ProductContext } from '../contexts/contexts'


function TwoforSection() {

  const productContext = useContext(ProductContext) 

  return (
    <> 
      <Twofor29 items={productContext.twoForProducts} />
      <Twofor49 items={productContext.twoForProducts} />
    </>
  )
}

export default TwoforSection