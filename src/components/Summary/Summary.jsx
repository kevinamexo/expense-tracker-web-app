import React,{useContext, useEffect} from 'react'
import Section from './Section/Section'
import './Summary.css'
import {TransactionContext}  from '/home/royal/expense-tracker/src/Context/TransactionContext'
import ChartSection from '../Charts/ChartSection.jsx'
const add_array=(array) => {

    array.reduce(function(a, b){
        return a + b;
    }, 0);
}


function Summary() {
    const {transactions, income_sum, expense_sum, balance, food, bills, entertainment}= useContext(TransactionContext)
   
  

    return (
        <>
            <div className="summary-section">
            
                <Section name="Food & Drinks" type="food" amount={food}/> 
                <Section name="Bills" type="bills" amount={bills}/> 
                <Section name="Entertainment" type="entertainment" amount={entertainment}/>  
                <div className="current-balance"> 
                    <div>
                        <h4>Current Balance:</h4>
                        <p>${income_sum-expense_sum}</p>
                    </div>
                    <div>
                        <h4>Income:</h4>
                        <p>{income_sum}</p>
                    </div>
                    <div>
                        <h4>Expenses:</h4>
                        <p>{expense_sum}</p>
                    </div>
                </div>
            

            </div>
            <ChartSection/>
        </>
    )
}

export default Summary
