import React, { useEffect } from 'react';
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
import { fetchloggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminHome from './pages/AdminHome';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminProductFormPage from './pages/AdminProductFormPage';


function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUsers)
  const items = useSelector(selectItems)
  console.log(items.length)
  useEffect(()=>{
    if(user !== null){
      dispatch(fetchItemsByUserIdAsync(user?.id))
      dispatch(fetchloggedInUserAsync(user?.id))
    }
  },[user,dispatch])

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
    <Route path='/admin/productdetail/:id' element={<ProtectedAdmin><AdminProductDetailPage/></ProtectedAdmin>}/>
    <Route path='/orderSuccess/:id' element={<OrderSuccess/>}/>
    <Route path='/orders' element={<UserOrderPage/>}/>
    <Route path='/profile' element={<Protected><UserProfilePage/></Protected>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/admin' element={<ProtectedAdmin><AdminHome/></ProtectedAdmin>}/>
    <Route path='/admin/productform' element={<ProtectedAdmin><AdminProductFormPage/></ProtectedAdmin>}/>
    <Route path='/admin/productform/edit/:id' element={<ProtectedAdmin><AdminProductFormPage/></ProtectedAdmin>}/>
    <Route path='/forgotpassword' element={<ForgotPasswordPage/>}/>
    <Route path='*' element={<PagenotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
