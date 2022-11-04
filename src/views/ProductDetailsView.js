import React from 'react'
import Navbar from '../section/NavbarSection';
import Footer from '../section/FooterSection';
import { useParams } from 'react-router-dom';

function ProductDetailsView() {
  
  const {id} = useParams()
 
  return (
    <>
        <Navbar />
          {/* <h1>{params.articleNumber}</h1> */}
          <div>{id}</div>
        <Footer />
    </>

  )
}

export default ProductDetailsView