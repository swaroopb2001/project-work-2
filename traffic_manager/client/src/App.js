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
import {  useDispatch, useSelector } from 'react-redux';
function App() {

  const {isAuthenticated}= useSelector(state=> state.user)

  return (
    !isAuthenticated?<LoginPage />: 
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



export default App;
