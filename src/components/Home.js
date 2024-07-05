import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Products from './Products';
import "./home.css"
import Nav from './Nav';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Login from './Login';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Category from './Category';
import CategoryProduct from './CategoryProduct';
import Account from './Account';
const Home = () => {
  return (
  
  <div className="container">
  <Router>
  <Nav />
  <Routes>
  
   <Route path="/products"  element={<Products />} />
   <Route path="/product/:id" element={<ProductDetail />} />
   <Route path="/" exact element={<Products />} />
   <Route path="/cart" exact element={<Cart />} />
   <Route path="/login" exact element={<Login/>} />
   <Route path="/categories" exact element={<Category/>} />
   <Route path="/categories/:category" element={<CategoryProduct/>} />
   <Route path="/account"  element={<Account/>} />
  </Routes>
  </Router>
    
    </div>
   
  )
}

export default Home
