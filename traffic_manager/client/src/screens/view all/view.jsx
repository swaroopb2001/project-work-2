import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ViewAll() {
  const [all,setAll] = useState('cri')
  useEffect(()=>{
    axios.get('all').then(res=> setAll(res.data))
    
  })
 return(
  <h1>hi {all}</h1>
 )
}

export default ViewAll