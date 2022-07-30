import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
 import axios from './axios'
import ViewAll from './screens/view all/view';


import Navbar from './components/navbar/navbar';
import Landing from './screens/landing/landing';

import FooterComp from './components/footer/footer';
import ViewAll from './screens/view all/view';


import FooterComp from './components/footer/footer'
import AddScr from './screens/addEntry/add';
import LoginPage from './login';

function App() {
  //will check if user is logged in (need to imp backend auth)
  const [isloggedin, setIsloggedin]= useState(true) 
  
if(isloggedin) {
  return (

    <BrowserRouter>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />


      <Route path='/add' element={<AddScr />} /> 

      <Route path='/all' element={<ViewAll />} />
    </Routes>
    <FooterComp />
    </BrowserRouter>
   
  );
}
else{
  return(
    <LoginPage isloggedin={isloggedin} setIsloggedin={setIsloggedin} />
  )
}

}

export default App;
