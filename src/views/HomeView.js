import React, { useState } from 'react'
import Navbar from '../section/NavbarSection';
import Showcase from '../section/ShowcaseSection';
import Collabs from '../section/CollabsSection';
import Footer from '../section/FooterSection';
import ShopTerms from '../section/ShopTermsSection';
import TwoforSection from '../section/TwoforSection';
import ProductGridSection from '../section/ProductGridSection';


function HomeView() {

  window.top.document.title = 'Fixxo.'

  const [featuredProducts, setFeaturedProduct] = useState ([
    {id: 1, name: "Modern Black", category: "Fashion", price: "$35.00", rating: 5,}, 
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5,}, 
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5,}, 
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5,}, 
    {id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5,},
    {id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5,}, 
    {id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5,}, 
    {id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5,} 

  ])

  return (
    <>
      <div className='gradient-gray'>
      <Navbar />
      </div>
      <Showcase />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <Collabs />
      <TwoforSection />
      <ShopTerms />
      <Footer />
    </>
  )
}

export default HomeView