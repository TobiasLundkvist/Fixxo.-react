import React from 'react'

function ShoppingCart() {
  return (
    <div className="shoppingCart offcanvas offcanvas-end" tabindex="-1" id="shoppingCart" aria-labelledby="shoppingCartLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="shoppingCartLabel">Offcanvas right</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        ...
      </div>
    </div>
  )
}

export default ShoppingCart