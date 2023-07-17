import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync, selectItems } from './features/cart/cartSlice';
import { selectLoggedInUsers } from './features/auth/authSlice';
import PagenotFound from './pages/404';
import OrderSuccess from './pages/OrderSuccess';
import UserOrderPage from './pages/UserOrderPage';
import UserProfilePage from './pages/UserProfilePage';


function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUsers)
  const items = useSelector(selectItems)
  console.log(items.length)
  useEffect(()=>{
    if(user !== null){
      dispatch(fetchItemsByUserIdAsync(user?.id))
    }
  },[(user !== null),dispatch])

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
    <Route path='/orderSuccess/:id' element={<OrderSuccess/>}/>
    <Route path='/orders' element={<UserOrderPage/>}/>
    <Route path='/profile' element={<Protected><UserProfilePage/></Protected>}/>
    <Route path='*' element={<PagenotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
