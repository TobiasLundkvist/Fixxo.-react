import React from 'react'
import { useShoppingCart } from '../contexts/shoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormat'

function ShoppingCartItem({item}) {
  const {incrementQuantity, decrementQuantity, removeItem} = useShoppingCart()

  console.log(item.quantity)

  return (
    <div className='shoppingcart-item'>
      <div className='item-image'>
        <img src={item.product.imageName} alt={item.product.name} />
      </div>
      <div className='item-info'>
        <div className='item-info-name'>{item.product.name}</div>
        <div className='item-info-quantity'>
          <button className='button-left' onClick={() => incrementQuantity(item)}>+</button>
          <span>{item.quantity}</span>
          <button className='button-right' onClick={() => decrementQuantity(item)}>-</button>
        </div>
      </div>
      <div className='item-price'>
        <div>{currencyFormatter(item.product.price * item.quantity)}</div>
        <button onClick={() => removeItem(item.articleNumber)}><i className='fa-regular fa-trash'></i></button>
      </div>
    </div>
  )
}

export default ShoppingCartItem