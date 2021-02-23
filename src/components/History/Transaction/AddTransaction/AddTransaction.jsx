import React, {useContext, useState} from 'react'
import './AddTransaction.css'
import {MdAddBox} from 'react-icons/md'
import {FcCancel} from 'react-icons/fc'
import {FormProvider, useForm} from 'react-hook-form'
import {TransactionContext}  from '/home/royal/expense-tracker/src/Context/TransactionContext'
import 'react-datepicker/dist/react-datepicker.css'
import DaterPicker from 'react-datepicker'
function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(null);
    const {register, handleSubmit, errors}= useForm()
    const {handleClickAdd, clickAdd, addTransaction} =useContext(TransactionContext)
    const [expenseType, setExpenseType]= useState('food')
    const [transactionType, setTransactionType]= useState("income")
    const [expense, setExpense]= useState(false)
    const [selectedDate, setSelectedDate]= useState(null)

    const onSubmit=(data)=>{
        console.log(data)

    }

    const changeSelectOptionHandler =(e)=>{
        if (e.target.value=='expense'){
            setExpense(true)
            setTransactionType('expense')
            setExpenseType('food')
            console.log('trued')
        } else if (e.target.value=='income'){
            setTransactionType('income')
            setExpense(false)
            setExpenseType(null)
        }
}  

    const handleFormSubmit =(e)=>{
        
        e.preventDefault()
        handleClickAdd()
        
        const newTransaction ={
            text,
            id: Math.floor(Math.random()*100000),
            amount:+amount,
            type: expenseType,
            transactionType,
            date:selectedDate
        }

        addTransaction(newTransaction)
        setAmount(0)
        setText('')
        setExpenseType('food')
    }
    return (
        <div className="add-transaction">
            <form onSubmit={handleFormSubmit} className={clickAdd? "add-transaction-form":"hidden"}>
                {/* <input type="text" value={text} placeholder="Name" ref={register}/>
                <input type="number" value ={amount} placeholder="Amount" ref={register}/> */}
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Transaction Name..." />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Transaction Amount..." />
                <div className="form-select-fields">   
                    <select className="income-expense" onChange={(e)=>{
                        changeSelectOptionHandler(e)
                    }}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
        
                    </select>
                    {expense&&
                        
                        <select className="transaction-type" onChange={(e)=>{
                            const selectedType= e.target.value
                            setExpenseType(selectedType)
                            console.log(selectedType)
                        }}>
                            <option value="food">Food & Drinks</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="bills">Bills & Payment</option>
                        </select>}
                </div>
                <section className="select-date-section">
                    <p>Date</p><DaterPicker className="select-date" 
                        selected={selectedDate} 
                        onChange={date => setSelectedDate(date)} 
                        maxDate={new Date()} 
                        isClearable={true} 
                        showYearDropdown
                        scrollableMonthYearDropdown
                        dateFormat= 'yyyy/MM/dd'
                    />
                </section>

            </form>
          
            
            <button onClick={handleClickAdd} className="add-button"><a>{clickAdd?"Cancel":"Add Transaction"}</a></button> 
            <button onClick={handleFormSubmit} className={clickAdd? "confirm-button":"hidden"}><a>Confirm Transaction</a><MdAddBox className="add-icon"/></button> 
    
        </div>
    )
}

export default AddTransaction
