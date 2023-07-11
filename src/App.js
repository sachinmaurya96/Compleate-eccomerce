import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './features/navbar/Navbar';
import Protected from './features/auth/components/Protected';


function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={ <Protected><Home/></Protected>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignupPage/>}/>
    <Route path='/cart' element={<Protected><CartPage/></Protected>}/>
    <Route path='/checkout' element={<Protected><CheckoutPage/></Protected>}/>
    <Route path='/productdetail/:id' element={<Protected><ProductDetailPage/></Protected>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
