import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

function EmpCreate() {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [isactive, setIsactive] = useState(true)
    const [validation, setValidation] = useState(false)
    const navigate=useNavigate()

    const handelSubmit =(e)=>{
        e.preventDefault()
        const empdata ={name,email,phone,isactive}

        fetch(`http://localhost:8000/employee`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(empdata)
        })
        .then(res => {
            alert("Saved successfully..!")
            navigate('/employee/listing')
        })
        .catch(err => console.log("err",err.message))
    }

    return (
        <div>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handelSubmit}>
                        <div className='card' style={{textAlign:"left"}}>
                            <div className='card-title1'>
                                <h1>Employee Create</h1>

                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>ID</label>
                                            <input value={id} disabled  className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={(e)=>setValidation(true)} onChange={(e)=>setName(e.target.value)} className='form-control'></input>
                                            { name.length==0 && validation && <span className='text-danger'>Enter the name</span>}
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Email</label>
                                            <input value={email} onChange={(e)=>setEmail(e.target.value)}  className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Phone</label>
                                            <input value={phone} onChange={(e)=>setPhone(e.target.value)}  className='form-control'></input>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-check'>
                                            <input value={isactive} onChange={(e)=>setIsactive(e.target.checked)}  type="checkbox" className='form-check-input'></input>
                                            <label className='form-check-label'>Is Active</label>
                                        </div>

                                    </div>
                                    <div className='col-lg-12 m-3'>
                                        <button className='btn btn-success' type='submit'>Add +</button>
                                        <Link to="/" className="btn btn-danger" >Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmpCreate