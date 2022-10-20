import React from 'react'
import Navbar from '../section/NavbarSection';
import Footer from '../section/FooterSection';
import { useParams } from 'react-router-dom';

function ProductDetailsView() {
  
  const params = useParams()
 
  return (
    <>
        <Navbar />
          <h1>{params.id}</h1>
        <Footer />
    </>

  )
}

export default ProductDetailsView