import React from 'react'
import BreadcrumbSection from '../section/BreadcrumbSection'

function ProductDetails({product}) {
  return (
    <div className='productDetails container'>
      <h3>Get 25% OFF at the Fixxo Selection - Shop Now!</h3>
      <BreadcrumbSection link="/" currentPage="| Product Signal" />
      <div className='detailsBody'>
        <div>
          <img src={product.imageName} />
          <div className='smallImg'>
            <img src={product.imageName} />
            <img src={product.imageName} />
            <img src={product.imageName} />
          </div>
        </div>
        <div>
          <h1>{product.name}</h1>
          <p className='artnumb'>SKU: 12345670 BRAND: The Northland</p>
          <div className='body-rating'>
            <i className="rating fa-solid fa-star"></i>
            <i className="rating fa-solid fa-star"></i>
            <i className="rating fa-solid fa-star"></i>
            <i className="rating fa-solid fa-star"></i>
            <i className="rating fa-solid fa-star"></i>
          </div>      
          <p className='price'>${product.price}</p>
          <p className='productInfo'>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<a href='#'>read more</a>)</p>
        </div>
      </div>    
    </div>
  )
}

export default ProductDetails