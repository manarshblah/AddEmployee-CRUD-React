import React, { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'

function EmpDetails() {
  const { empid } = useParams()
  const [empData, setEmpData] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8000/employee/` + empid)
      .then(res => res.json())
      .then(data => setEmpData(data))
      .catch(err => console.log("err :", err))
  }, [])

  return (
    <div>
      <div className='card m-4 p-3' style={{ textAlign: "left" }}>
        <div className='card-title'>
          <h2>Employee Create</h2>
        </div>
        <div className='card-body'></div>
        {empData &&
          <div>
            <h1>The Employee name is : {empData.name} ({empData.id})</h1>
            <h3>Contant Details : {empData.phone} </h3>
            <h3>Email is : {empData.email} </h3>
            <Link to="/" className="btn btn-danger">Back To Listing</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default EmpDetails