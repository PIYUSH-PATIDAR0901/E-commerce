import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Signup from './Pages/SignUp';
import ResetPassword from './Pages/ResetPassword';
import SingleBlog from './Pages/SingleBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import TermsCondition from './Pages/TermsCondition';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='OurStore' element={<OurStore/>}/>
        <Route path='/SingleProduct' element={<SingleProduct/>}/>
        <Route path='Blog' element={<Blog/>}/>
        <Route path='/SingleBlog' element={<SingleBlog/>}/>
        <Route path='Compare-Product' element={<CompareProduct/>}/>
        <Route path='Wishlist' element={<Wishlist/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='/Forgot-Password' element={<ForgotPassword/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Reset-Password' element={<ResetPassword/>}/>
        <Route path='Privacy' element={<PrivacyPolicy/>}/>
        <Route path='RefundPolicy' element={<RefundPolicy/>}/>
        <Route path='ShippingPolicy' element={<ShippingPolicy/>}/>
        <Route path='TermsCondition' element={<TermsCondition/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
