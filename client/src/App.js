import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import About from "./components/About";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout.jsx";
import "../src/style/app.scss"
import "../src/style/header.scss"
import "../src/style/home.scss"
import "../src/style/founder.scss"
import "../src/style/menu.scss"
import "../src/style/footer.scss"
import "../src/style/contact.scss"
import "../src/style/cart.scss"
import "../src/style/checkout.scss"

function App() {
  return (
    // routes 
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
  );
}

export default App;
