import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import "../src/style/app.scss"

function App() {
  return (
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
