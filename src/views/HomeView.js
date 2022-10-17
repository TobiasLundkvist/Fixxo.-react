import React from 'react'
import Navbar from '../section/NavbarSection';
import Showcase from '../components/Showcase';
import Collabs from '../components/Collabs';
import Footer from '../components/Footer';
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