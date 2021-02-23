import React, {useEffect, useState, useContext} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {TransactionContext}  from '/home/royal/expense-tracker/src/Context/TransactionContext'
import {IoFastFoodOutline} from 'react-icons/io5'
import {RiMovie2Line} from 'react-icons/ri'
import {BiReceipt} from 'react-icons/bi'
import {MdRestaurant} from 'react-icons/md'
import  {GrMoney} from 'react-icons/gr'
import {FcCancel} from 'react-icons/fc'
import './Transaction.css'

const Transaction = ({transac}) => {
    
    const [transacHover, setTransacHover]= useState(false)
    const [onMenuHover,setOnMenuHover]= useState(false)
    const {deleteTransaction}= useContext(TransactionContext)
    const handleMenuHover= () =>{
        console.log('added')
        setTransacHover(true)
        setOnMenuHover(true)
    }
    const handleTransacHover=()=>{
        console.log('added')
        setTransacHover(true)       
    }

    const handleRemoveHover =()=>{

        
        setTimeout(()=>{
            if (!onMenuHover){
                setTransacHover(false)
            }
        }, 2000)
       
      
        

    }
    return (
        <div className="transaction">
            <div className="transaction-icon">
                {transac.type =='food'&& <MdRestaurant className="t-icon"/>}
                {transac.type == 'entertainment'&& <RiMovie2Line  className="t-icon"/>}
                {transac.type == 'bills' && <BiReceipt  className="t-icon"/>}
                {transac.transactionType=='income'&&<GrMoney  className="t-icon"/> }
                <p className="date">{`${transac.date.getDate()}-${transac.date.getMonth() + 1}-${transac.date.getFullYear()}`}</p>
  
                
            </div>
            <div className="transaction-name">
                <p className="name">{transac.text}</p>
            </div>
            <div className={transac.transactionType=='expense'?"transaction-amount red": "transaction-amount green"}>
                <h3>${transac.amount}</h3>
            </div>
            <div className="edit-div">
                <BsThreeDotsVertical className="edit-icon" onClick={handleTransacHover} onMouseLeave={handleRemoveHover}/>
                <div className="edit-transaction">
                    <li onClick={()=>deleteTransaction(transac.id)}><a>Delete</a></li>
                </div> 
            </div>  
        </div>
    )
}

export default Transaction
