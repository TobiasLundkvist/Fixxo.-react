import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState, createContext, useEffect } from 'react'
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import CategoriesView from './views/CategoriesView';
import CompareView from './views/CompareView';
import ProductView from './views/ProductView';
import ProductDetailsView from './views/ProductDetailsView';
import SearchView from './views/SearchView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import NotFoundView from './views/NotFoundView';
import {ProductContext } from './contexts/contexts'



function App() {
  const [products, setProducts] = useState ({
    all: [],
    featuredProducts: [],
    twoForProducts: []
  })


  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts()

    const twoForProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, twoForProducts: await result.json()})
    }
    twoForProducts()
  }, [setProducts])




  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path='/' element= {<HomeView />} />
          <Route path='/contacts' element= {<ContactsView />} />
          <Route path='/categories' element= {<CategoriesView />} />
          <Route path='/compare' element= {<CompareView />} />
          <Route path='/product' element= {<ProductView />} />
          <Route path='/product/:id' element= {<ProductDetailsView />} />
          <Route path='/search' element= {<SearchView />} />
          <Route path='/shoppingcart' element= {<ShoppingCartView />} />
          <Route path='/wishlist' element= {<WishListView />} />

          <Route path='*' element= {<NotFoundView />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
