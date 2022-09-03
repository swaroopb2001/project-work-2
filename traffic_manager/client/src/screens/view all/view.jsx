
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './view.css'

import { IconButton, List, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
function ViewAll() {
  const [searchid,setSearchid]= useState([])
  const [offData, setData] = useState([])
  useEffect(()=>{
    axios({
      method: "GET",
      url:"/offences/all",
    })
    .then((response) => {
      const res =response.data
      setData(res)
    })
  }, [])

/* 
  For the requests to work, create table 'commits' in mySQL with exactly these columns:
  repno (varchar), dlno(varchar), offenceid(varchar), time(date), location(varchar), paid(boolean)
*/

const searchHandler=()=>{
  //sends a request to fetch data of a driver
    axios({
      method: "GET",
      //Shows all offences when search entry is blank
      url: ((searchid === '')? 'offences/all' : `offences/search/${searchid}`),
    })
    .then((response) => {
      const res = response.data
      if(!res) alert('not found!')
      setData(res)
    })
}

const removeRow = (repno) => {
  //sends a request to fetch data of a driver
  console.log(repno)
  axios({
    method: "GET",
    url: `offences/del/${repno}`,
  })
  .then((response) => {
    console.log(response)
    axios({
      method: "GET",
      url: 'offences/all',
    })
    .then((response) => {
      const res = response.data
      setData(res)
    })
  })
}

  return (
    <> <div className="searchbar">
   
    <div className="search">
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
        value={searchid}
        onChange={(e)=> setSearchid(e.target.value)}
      />
    <IconButton onClick={searchHandler}>
      <SearchIcon  />
    </IconButton>
    </div>
    <List />
  </div><div className='cnt'>
        <table border="1" className='offence--tables'>
          <tr className='heading'>
          <td>Report Number</td>
            <td>Dl number</td>
            <td>Name</td>
            <td>Offence Type</td>
            <td>Time</td>
            <td>Location</td>
            <td>Fine</td>
            <td>Paid</td>
          </tr>

          {offData.map((item) => (
            <tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
              <td>{item[4]}</td>
              <td>{item[5]}</td>
              <td>{item[6]}</td>
              {/* <td>{item[5]} {<Link to={`/edit/${item[1]}`} className='edit--link'> edit</Link>}</td> */}
              <td>{item[6]} <button onClick={() => {removeRow(item[7])}}>delete</button></td>
            </tr>
          ))}

        </table>
      </div></>
  )

        }

export default ViewAll