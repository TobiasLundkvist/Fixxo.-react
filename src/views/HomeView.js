import React from 'react'
import Navbar from '../section/NavbarSection';
import Showcase from '../components/Showcase';
import Collabs from '../section/Collabs';
import Footer from '../section/Footer';
import ShopTerms from '../components/ShopTerms';


function HomeView() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Collabs />
      <ShopTerms />
      <Footer />
    </>
  )
}

export default HomeView