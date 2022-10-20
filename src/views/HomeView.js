import React from 'react'
import Navbar from '../section/NavbarSection';
import Showcase from '../section/ShowcaseSection';
import Collabs from '../section/CollabsSection';
import Footer from '../section/FooterSection';
import ShopTerms from '../section/ShopTermsSection';
import TwoforSection from '../section/TwoforSection';
import ProductGridSection from '../section/ProductGridSection';


function HomeView() {
  return (
    <>
      <div className='gradient-gray'>
      <Navbar />
      </div>
      <Showcase />
      <ProductGridSection title="Featured Products"/>
      <Collabs />
      <TwoforSection />
      <ShopTerms />
      <Footer />
    </>
  )
}

export default HomeView