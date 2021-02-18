import React, {useContext}from 'react'
import Transaction from './Transaction/Transaction'
import Header from './Header'
import './History.css'
import {TransactionContext}  from '/home/royal/expense-tracker/src/Context/TransactionContext'

import AddTransaction from './Transaction/AddTransaction/AddTransaction'
const History = () => {
    const {transactions} = useContext(TransactionContext)
    console.log(transactions)
    return (
            <div className="transaction-history-container"> 
                <Header/> 
                {
                    transactions.map(transaction=>(
                        <Transaction transac={transaction} className="transac-history"/>
                    ))
                }
            </div>
        )
    }

export default History
