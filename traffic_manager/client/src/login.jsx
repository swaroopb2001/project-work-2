import React from 'react'
import './login.css'
function LoginPage({isloggedin, setIsloggedin}) {
  return (
    <div>LoginPage
         
        <button onClick={()=>{setIsloggedin(true)}}>login</button>
        
    </div>
  )
}

export default LoginPage