import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container text-center" >
                    <p className='text-logo'>
                        <img className="navbar-brand logo fs-5" src={logo}></img>
                        <div className='d-inline mt-3'>
                            <span className='fs-3 me-1 '>M</span>anage
                            <span className='fs-3 me-1 ms-2'>E</span>mployee
                        </div>
                    </p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="list collapse navbar-collapse listing-item" id="navbarSupportedContent">
                        <ul className="navbar-nav ul-item me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="item me-5" to='/employee/listing'>Listing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="item" to='/employee/create'>Create</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header