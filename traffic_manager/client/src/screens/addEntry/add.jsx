import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import './add.css'
import Random from '../../random'

function AddScr() {
  const[dlno, setDlno]= useState([])
  const[offenceid, setOff] = useState('')
  const[name, setName]= useState([])
  const[location, setLocation]= useState([])
  const[Type, setType]= useState([])
  const[fine,setFine]= useState([])
  const [ispaid,setispaid]= useState()
  const d= new Date()
  const[reportNo, setReportNo] = useState([])
  useEffect(()=> {
     setReportNo(Random())
  },[])
  
  const date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
const time=new Date().toLocaleTimeString()
  
  

  
  const submitHandler=async(e)=>{
    e.preventDefault()
    console.log('done')

   await axios({
      method: "GET",
      url: `http://localhost:5000/offences/getOffenceID/${Type}`,
    }).then((response) => {
      const res = response.data
      setOff(res)
      
      console.log(res)
    })

    const data = { 
      repno: reportNo,
      dlno: dlno,
      offenceid: offenceid,
      time:date,
      location: location,
      paid: (ispaid === true)? 1 : 0,
    };
    console.log('submit');
    fetch('http://localhost:5000/offences/new/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => console.log(res));
      setDlno('')
      setName('')
      setLocation('')
      setFine('')
      setispaid(null)
      setType('')
  }
  return (
    <div className='add'>
      <form className='form' onSubmit={submitHandler}>
        <span className='report--no'>Report number: {reportNo}</span>
        <span className='report--date'> Date: {date}</span> 
        <span className='report--time'> Time: {time}</span><br></br>
        <label for="Dl-no">DL Number: </label>
        <input type="text" autoComplete='off' name='Dl-no' className="dl-no" value={dlno} onChange={(e)=>
        setDlno(e.target.value)} required />
        <label for="name">Name: </label>
        <input type="text" autoComplete='off' className="Dl-no" name='name' value={name} onChange={(e)=>
        setName(e.target.value)} required/>
        <label for="type">Offence Type:</label>
        <input type="text" autoComplete='off' className="Dl-no" name='type' value={Type} onChange={(e)=>
        setType(e.target.value)} required/>
        <label for="location">Location:</label>
        <input type="text" autoComplete='off' className="Dl-no" name='location' value={location} onChange={(e)=>
        setLocation(e.target.value)} required />
        <label for="fine">Fine:</label>
        <input type="number" autoComplete='off' className="Dl-no" name='type' value={fine} onChange={(e)=>
        setFine(e.target.value)} required />
        <div className="ispaid">
        <label for='ispaid'>Is Paid: </label>
        <select name="ispaid" id="ispaid" onChange={(e)=>setispaid(e.target.value)} required>
        <option value='select'>select {ispaid}</option>
          <option value='true'>true</option>
          <option value='false'>false</option>
        </select>
        </div>
        <button className="btn--" type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddScr