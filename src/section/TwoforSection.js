import React, { useContext } from 'react'
import Twofor29 from '../components/Twofor29'
import Twofor49 from '../components/Twofor49'
import {TwoForProductsContext} from '../contexts/contexts'


function TwoforSection() {

  const twoFor = useContext(TwoForProductsContext)

  return (
    <> 
      <Twofor29 items={twoFor} />
      <Twofor49 items={twoFor} />
    </>
  )
}

export default TwoforSection