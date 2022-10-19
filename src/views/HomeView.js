import React from 'react'
import Navbar from '../section/NavbarSection';
import Showcase from '../section/ShowcaseSection';
import Collabs from '../section/CollabsSection';
import Footer from '../section/FooterSection';
import ShopTerms from '../section/ShopTermsSection';
import TwoforSection from '../section/TwoforSection';


function HomeView() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Collabs />
      <TwoforSection />
      <ShopTerms />
      <Footer />
    </>
  )
}

export default HomeView