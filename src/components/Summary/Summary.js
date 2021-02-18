import React,{useContext} from 'react'
import Section from './Section/Section'
import './Summary.css'
import {TransactionContext}  from '/home/royal/expense-tracker/src/Context/TransactionContext'
  



function Summary() {
    const {transactions, income,expenses, balance, food}= useContext(TransactionContext)

   
    return (
        <div className="summary-section">
            <Section name="Food & Drinks" type="food"/> 
            <Section name="Bills & Payments" type ="bills"/> 
            <Section name="Entertainment" type="entertainment"/> 
            <div className="current-balance">
                <div>
                    <h4>Current Balance:</h4>
                    <p>{income+expenses}</p>
                </div>
                <div>
                    <h4>Income:</h4>
                    <p>{food}</p>
                </div>
                <div>
                    <h4>Expenses:</h4>
                    <p>{balance}</p>
                </div>
            </div>
        </div>
    )
}

export default Summary
