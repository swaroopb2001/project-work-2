import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {} from './reducers/user'
import './login.css'
import { loginUser } from './action/user'
function LoginPage() {
  const dispatch= useDispatch()
  const [username, setUsername]= useState([])
  const [password, setPassword]= useState([])
  const submithandler=(e)=>{
    e.preventDefault()
    dispatch(loginUser(username,password))
  }
  return (
   
    <div>
      <form action="" method="get">
      <input type="text" name="username" id="username" placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
      <input type="password" name="password" id="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
      <button type="submit" onClick={submithandler}>submit</button>
      </form>
   
         
        
        
    </div>
  )
}

export default LoginPage