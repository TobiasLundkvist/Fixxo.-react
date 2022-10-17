import React from 'react'
import CustomerTerms from './CustomerTerms'
import DeliveryTerms from './DeliveryTerms'
import ReutersTerms from './ReutersTerms'
import SecuredTerms from './SecuredTerms'

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