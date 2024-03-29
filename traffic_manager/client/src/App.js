import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'




import Navbar from './components/navbar/navbar';
import Landing from './screens/landing/landing';

import FooterComp from './components/footer/footer';
import ViewAll from './screens/view all/view';



import AddScr from './screens/addEntry/add';
import LoginPage from './login';
import Edit from './screens/edit/edit';
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
      <Route path='/edit/:id' element={<Edit />} />
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
