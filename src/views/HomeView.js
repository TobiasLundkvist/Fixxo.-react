import React, { useState, createContext, useContext } from 'react'
import Navbar from '../section/NavbarSection';
import Showcase from '../section/ShowcaseSection';
import Collabs from '../section/CollabsSection';
import Footer from '../section/FooterSection';
import ShopTerms from '../section/ShopTermsSection';
import TwoforSection from '../section/TwoforSection';
import ProductGridSection from '../section/ProductGridSection';
import { FeaturedProductsContext, TwoForProductsContext, ProductsRankContext } from '../contexts/contexts'
import NewArrivalsSection from '../section/NewArrivalsSection';
import SpecialitySection from '../section/SpecialitySection';
import RankingProducts from '../section/RankingProducts';


function HomeView() {
  window.top.document.title = 'Fixxo.'
  
  const products = useContext(FeaturedProductsContext);
  const twoFor = useContext(TwoForProductsContext)
  const productsRank = useContext(ProductsRankContext)

  return (
    <>
      <div className='gradient-gray'>
      <Navbar />
      </div>
      <Showcase />
      <NewArrivalsSection />
      <ProductGridSection title="Featured Products" items={products} />
      <Collabs />
      <SpecialitySection />
      <TwoforSection items={twoFor} />
      <RankingProducts items={productsRank} />
      <ShopTerms />
      <Footer />
    </>
  )
}

export default HomeView