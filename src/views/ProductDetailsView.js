import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../section/NavbarSection';
import Footer from '../section/FooterSection';
import { useParams } from 'react-router-dom';
import ProductDetails from '../section/ProductDetails';
import { RelatedProductContext } from '../contexts/contexts'

function ProductDetailsView() {

  const realatedProduct = useContext(RelatedProductContext)

  const {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect (() => {
    const fetchData = async () => {
      const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
      setProduct(await result.json())
    }
    fetchData()
  }, [])
  
 
  return (
    <>
      <Navbar />
      <ProductDetails product={product} items={realatedProduct}/>
      <Footer />
    </>

  )
}

export default ProductDetailsView