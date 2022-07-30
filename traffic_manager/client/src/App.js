import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar/navbar';
import Landing from './screens/landing/landing';
import FooterComp from './components/footer/footer'
function App() {
  return (

    <BrowserRouter>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      
    </Routes>
    <FooterComp />
    </BrowserRouter>
   
  );
}

export default App;
