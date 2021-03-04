import React, {useState} from 'react'
import {FaCrown} from 'react-icons/fa'
import './Sidebar.css'

function Sidebar() {
    
    return (
        <ul>
            <li className="sidebar-item"><a>Dashboard</a></li>
            <li className="sidebar-item"><a>Upgrade to Premium <FaCrown className="premium"/></a></li>
            <li className="sidebar-item"><a>Contact Us</a></li>
            <li className="sidebar-item"><a>FAQ</a></li>
        </ul>
       
    )
}

export default Sidebar
