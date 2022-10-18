import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import CategoriesView from './views/CategoriesView';
import CompareView from './views/CompareView';
import ProductView from './views/ProductView';
import SearchView from './views/SearchView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import NotFoundView from './views/NotFoundView';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomeView />} />
        <Route path='/contacts' element= {<ContactsView />} />
        <Route path='/categories' element= {<CategoriesView />} />
        <Route path='/compare' element= {<CompareView />} />
        <Route path='/product' element= {<ProductView />} />
        <Route path='/search' element= {<SearchView />} />
        <Route path='/shoppingcart' element= {<ShoppingCartView />} />
        <Route path='/wishlist' element= {<WishListView />} />

        <Route path='*' element= {<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
