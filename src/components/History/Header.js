import React from 'react'
import {BsCalendar} from 'react-icons/bs'
import './Header.css'
const Header = () => {
    return (
        <div className="transaction-history-header">
            <BsCalendar className="header-calendar"/>
            <p>Your Transaction History</p>
        </div>
    )
}

export default Header
