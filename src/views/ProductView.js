import React, { useContext } from 'react'
import Footer from '../section/FooterSection';
import Navbar from '../section/NavbarSection';
import ProductGridSection from '../section/ProductGridSection';
import {ProductContext } from '../contexts/contexts'


function ProductView() {

  const productContext = useContext(ProductContext) 

  return (
    <>
    <Navbar />
    <ProductGridSection title="Featured Products" items={productContext.all} />
    <Footer />
    </>
  )
}

export default ProductView