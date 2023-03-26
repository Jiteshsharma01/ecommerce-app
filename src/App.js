import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './Pages/HomePage/Home';
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import ProductForm from './Components/ProductForm/ProductForm';
import './App.css'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/create-product" element={<ProductForm/>} />
      <Route path="/update-product/:id" element={<ProductForm/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="*" element={<div>
        <h1>404 PAGE NOT FOUND</h1>
      </div>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;