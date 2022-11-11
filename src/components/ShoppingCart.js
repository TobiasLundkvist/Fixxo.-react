import React from 'react'
import { useShoppingCart } from '../contexts/shoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'


function ShoppingCart() {
  
  const { cartItems } = useShoppingCart()
  
  return (
    <div className="shoppingCart offcanvas offcanvas-end" tabIndex="-1" id="shoppingCart" aria-labelledby="shoppingCartLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="shoppingCartLabel" ><i className='fa-light fa-bag-shopping'></i> Shopping Cart</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
          {
            cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />)) 
          }
      </div>
    </div>
  )
}

export default ShoppingCart