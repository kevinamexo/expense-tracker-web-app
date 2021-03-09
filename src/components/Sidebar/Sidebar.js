import React, {useState, useContext} from 'react'
import {FaCrown} from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'
import './Sidebar.css'
import {TransactionContext} from '../../Context/TransactionContext'
function Sidebar() {
    const {openSidebar,setOpenSidebar} = useContext(TransactionContext)
    return (
        <>
            <CgClose className="close-sidebar" onClick={()=>setOpenSidebar(!openSidebar)}/>
            <ul>
                
                <li className="sidebar-item"><a>Dashboard</a></li>
                <li className="sidebar-item"><a>Upgrade to Premium <FaCrown className="premium"/></a></li>
                <li className="sidebar-item"><a>Contact Us</a></li>
                <li className="sidebar-item"><a>FAQ</a></li>
            </ul>
        </>
       
    )
}

export default Sidebar
