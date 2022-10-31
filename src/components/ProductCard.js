import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductCard({item}) {
    
    const addToWishList = (e) => {
        console.log("added to wish list")
    }
    const addToCompare = (e) => {
        console.log("added to compare")
    }
    const addToCart = (e) => {
        console.log("added to shoppingcart")
    }


  return (
    <div className="the-product">
        <div className="product-card">
        <img src={item.imageName} alt={item.name}/>
            <div className="card-img">
                <div className="card-menu">
                    <button onClick={addToWishList} className='card-icon'><i className="fa-light fa-heart"></i></button> 
                    <button onClick={addToCompare} className='card-icon'><i className="fa-light fa-code-compare"></i></button> 
                    <button onClick={addToCart} className='card-icon'><i className="fa-light fa-bag-shopping"></i></button> 
                </div>
                <NavLink to={`/product/${item.id}`} className='btn-red'>
                    <div className="corner-top-left"></div>
                    <div className="corner-bottom-right"></div>
                    QUICK VIEW
                </NavLink>
            </div>
        </div>
        <div className="card-body">
            <div className='body-rubrik'>{item.category}</div>
            <p className='body-text'>{item.name}</p>
            <div className='body-rating'>
                <i className="rating fa-solid fa-star"></i>
                <i className="rating fa-solid fa-star"></i>
                <i className="rating fa-solid fa-star"></i>
                <i className="rating fa-solid fa-star"></i>
                <i className="rating fa-solid fa-star"></i>
            </div>
            <p className="price"><span></span>{item.price}</p>
        </div>
    </div>
  )
}

export default ProductCard