import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import About from "./components/About";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout.jsx";
import ConfirmOrder from "./components/cart/ConfirmOrder.jsx";
import ErrorHandler from "./components/errorPages/ErrorHandler.jsx";
import PaymentSucceed from "./components/cart/PaymentSucceed.jsx";
import Login from "./login/Login.jsx";
import Profile from "./components/profile/Profile.jsx";
import MyOrders from "./components/order/MyOrders";
import OrderDetails from "./components/order/OrderDetails";
import "../src/style/app.scss"
import "../src/style/header.scss"
import "../src/style/home.scss"
import "../src/style/founder.scss"
import "../src/style/menu.scss"
import "../src/style/footer.scss"
import "../src/style/contact.scss"
import "../src/style/cart.scss"
import "../src/style/checkout.scss"
import "../src/style/confirmOrder.scss"
import "../src/style/paymentSucceed.scss"
import "../src/style/login.scss"
import "../src/style/profile.scss"
import "../src/style/table.scss"
import "../src/style/orderDetails.scss"

function App() {
  return (
    // routes 
     <BrowserRouter>
     <Header isAuthenticated='true'/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/confirmorder' element={<ConfirmOrder/>}/>
          <Route path='/paymentsucceed' element={<PaymentSucceed/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/me' element={<Profile/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
          <Route path='/order/:id' element={<OrderDetails/>}/>
          <Route path='*' element={<ErrorHandler/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
  );
}

export default App;
