import React, { useState, createContext, useContext } from 'react'
import Navbar from '../section/NavbarSection';
import Showcase from '../section/ShowcaseSection';
import Collabs from '../section/CollabsSection';
import Footer from '../section/FooterSection';
import ShopTerms from '../section/ShopTermsSection';
import TwoforSection from '../section/TwoforSection';
import ProductGridSection from '../section/ProductGridSection';
import {ProductContext } from '../contexts/contexts'


function HomeView() {
  window.top.document.title = 'Fixxo.'
  
  const productContext = useContext(ProductContext) 

  return (
    <>
      <div className='gradient-gray'>
      <Navbar />
      </div>
      <Showcase />
      <ProductGridSection title="Featured Products" items={productContext.featuredProducts} />
      <Collabs />
      <TwoforSection items={productContext.twoForProducts}/>
      <ShopTerms />
      <Footer />
    </>
  )
}

export default HomeView