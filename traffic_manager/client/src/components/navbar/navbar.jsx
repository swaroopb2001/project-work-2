import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';

import './navbar.css'
function Navbar() {
  const [tab,setTab]= useState(window.location.pathname)
  
  return (
    <div className='navbar'> 
      <Link to={'/'} onClick={()=>{setTab('/')}} >
        {tab==='/'?<HomeIcon fontSize='large' style={{color: 'black'}} />: <HomeOutlinedIcon fontSize='large' />}
       
            </Link>

            <Link to={'/all'} onClick={()=>{setTab('/all')}} >
             <span className='nav-titles'>View offences </span>
       
            </Link>

            <Link to={'/add'} onClick={()=>{setTab('/add')}} >
        {tab==='/add'?<AddBoxIcon fontSize='large' style={{color: 'black'}} />: <AddBoxOutlinedIcon fontSize='large' />}
       
            </Link>

    </div>
  )
}

export default Navbar