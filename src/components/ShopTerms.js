import React from 'react'
import CustomerTerms from './CustomerTerms'
import SecuredTerms from './SecuredTerms'

function ShopTerms() {
  return (
    <div className='shop-terms container border'>
        <CustomerTerms />
        <SecuredTerms />
        
    </div>
  )
}

export default ShopTerms