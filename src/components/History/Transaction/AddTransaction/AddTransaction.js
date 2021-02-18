import React, {useContext, useState} from 'react'
import './AddTransaction.css'
import {MdAddBox} from 'react-icons/md'
import {FormProvider, useForm} from 'react-hook-form'
import {TransactionContext}  from '/home/royal/expense-tracker/src/Context/TransactionContext'

function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(null);
    const {register, handleSubmit, errors}= useForm()
    const {handleClickAdd, clickAdd, addTransaction} =useContext(TransactionContext)
    const [expenseType, setExpenseType]= useState("food")
    const onSubmit=(data)=>{
        console.log(data)

    }

    const handleFormSubmit =(e)=>{
        
        e.preventDefault()
        handleClickAdd()
        
        const newTransaction ={
            text,
            id: Math.floor(Math.random()*100000),
            amount:+amount,
            type: expenseType,
        }

        addTransaction(newTransaction)
        setAmount(0)
        setText('')
    }
    return (
        <div className="add-transaction">
            <form onSubmit={handleFormSubmit} className={clickAdd? "add-transaction-form":"hidden"}>
                {/* <input type="text" value={text} placeholder="Name" ref={register}/>
                <input type="number" value ={amount} placeholder="Amount" ref={register}/> */}
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Transaction Name..." />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Transaction Amount..." />
                <select className="transaction-type" onChange={(e)=>{
                    const selectedType= e.target.value
                    setExpenseType(selectedType)
                    console.log(selectedType)
                }}>
                    <option value="food">Food & Drinks</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="bills">Bills & Payment</option>
                </select>
            </form>
            
            <button onClick={handleClickAdd} className="add-button"><a>{clickAdd?"Cancel":"Add Transaction"}</a><MdAddBox className="add-icon"/></button> 
            <button onClick={handleFormSubmit} className={clickAdd? "confirm-button":"hidden"}><a>Confirm Transaction</a><MdAddBox className="add-icon"/></button> 
    
        </div>
    )
}

export default AddTransaction
