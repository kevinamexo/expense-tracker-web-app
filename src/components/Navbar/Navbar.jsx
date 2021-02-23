import React,{useState, useEffect}from 'react'
import {FaBars, FaClose,FaMoneyBillWave, FaRegUserCircle} from 'react-icons/fa'

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-section">
                <FaMoneyBillWave className="logo"/>
                <a className="logo-name">Expense.io</a>
            </div>
            <div className="user-section">
                <FaRegUserCircle className="user-icon"/>
                <p className="nav-sign-in"> Log in</p>
                <FaBars className="open-menu-btn"/>
            </div>
        </div>
    )
}

export default Navbar
