import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import About from "./components/About";
import Footer from "./components/layout/Footer";
import "../src/style/app.scss"
import "../src/style/header.scss"
import "../src/style/home.scss"
import "../src/style/founder.scss"
import "../src/style/menu.scss"
import "../src/style/footer.scss"

function App() {
  return (
    // routes 
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
  );
}

export default App;
