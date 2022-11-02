import React from 'react'
import CustomerTerms from '../components/CustomerTerms'
import DeliveryTerms from '../components/DeliveryTerms'
import ReutersTerms from '../components/ReutersTerms'
import SecuredTerms from '../components/SecuredTerms'

function ShopTerms() {
  return (
    <div className='shop-terms container'>
      <CustomerTerms />
      <SecuredTerms />
      <DeliveryTerms />
      <ReutersTerms />
    </div>

  )
}

export default ShopTerms