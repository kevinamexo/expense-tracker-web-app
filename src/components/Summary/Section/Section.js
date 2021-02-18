import React from 'react'
import {IoFastFoodOutline} from 'react-icons/io5'
import {RiMovie2Line} from 'react-icons/ri'
import {BiReceipt} from 'react-icons/bi'
import {MdRestaurant} from 'react-icons/md'
import './Section.css'

function Section({name, type}) {
    return (
        <div className="section">
            <div className="section-details">
                <a>{name}</a>
                <a className="section-amount">$200</a> 
            </div>
            <div className="section-icon">
                {type ==='food'&& <MdRestaurant/>}
                {type == 'entertainment'&& <RiMovie2Line/>}
                {type == 'bills' && <BiReceipt/>}
            </div>
            
        </div>
    )
}

export default Section
