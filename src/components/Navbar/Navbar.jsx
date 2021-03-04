import React,{useState, useEffect, useContext}from 'react'
import {FaBars, FaClose,FaMoneyBillWave, FaRegUserCircle} from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar'
import './Navbar.css'
import {TransactionContext} from '../../Context/TransactionContext'
function Navbar() {
    const {openSidebar,setOpenSidebar} = useContext(TransactionContext)
    return (
        <div className="navbar">
            <div className="logo-section">
                <FaMoneyBillWave className="logo"/>
                <a className="logo-name">Expense.io</a>
            </div>
            <ul className="nav-items">
                <li className="nav-item"><a>Home</a></li>
                <li className="nav-item"><a>About</a></li>
                <li className="nav-item"><a>Contact Us</a></li>
            </ul>
            <div className="user-section">
                <FaRegUserCircle className="user-icon"/>
                <p className="nav-sign-in"> Log in</p>
                <FaBars className={openSidebar? 'open-menu-btn white':'open-menu-btn'} onClick={()=>setOpenSidebar(!openSidebar)}/>
            </div>
            <div className={openSidebar?"sidebar":"sidebar-hidden"}>
                <Sidebar/>  
            </div>
            
        </div>
    )
}

export default Navbar
