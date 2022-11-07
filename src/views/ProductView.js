import React, { useContext } from 'react'
import Footer from '../section/FooterSection';
import Navbar from '../section/NavbarSection';
import ProductGridSection from '../section/ProductGridSection';
import { ProductContext } from '../contexts/contexts'


function ProductView() {
  window.top.document.title = 'Fixxo. | Products'

  const products = useContext(ProductContext);

  return (
    <>
    <Navbar />
    <ProductGridSection title="Products" items={products} />
    <Footer />
    </>
  )
}

export default ProductView