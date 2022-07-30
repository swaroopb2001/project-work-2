import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ViewAll() {
  const [offData, setData] = useState([{}])
  /*useEffect(() => {
    fetch('http://localhost:5000/offences/all').then(
      response => response.json()
    ).then(data => setData(data.myData))
  });
  */

  axios({
    method: "GET",
    url:"/offences/all",
  })
  .then((response) => {
    const res =response.data
    setData(res)
  })

  console.log(offData)

  return (
    <div>
      <table border="1">
        <tr>
           <td>Offence ID</td>
           <td>Type</td>
           <td>Fine</td>
        </tr>
        
        {offData.map((item) => (
          <tr>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
          </tr>
        ))}
        
       </table>
    </div>
  )
}

export default ViewAll