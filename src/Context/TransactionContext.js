import React ,{useContext, useReducer, useState}from 'react'
import AppReducer from './TransactionReducers'

const add_amounts = (obj)=>{
    obj.reduce(function(prev, cur){
        return prev +cur.amount
    }, 0)
}
export const TransactionContext= React.createContext()

export function useTransactionContext(){
    return useContext(TransactionContext)
}

const initialState={
    transactions:[]
    
}


export function TransacProvider({children}){

    const [state, dispatch]= useReducer(AppReducer,initialState)
    const [clickAdd, setClickAdd] = useState(false)
    const [openSidebar,setOpenSidebar]= useState(false)

    const handleClickAdd =()=>{
        setClickAdd(!clickAdd)
        console.log('Change')

    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    const balance=state.transactions.reduce(function(prev, cur) {
        return prev+cur.amount
    },0)
    
    

    // const transaction_type = state.transactions.map(transaction=>  {transaction.type, transaction.amount})
    const food= state.transactions.filter(transaction=> transaction.type =='food')
    const bills= state.transactions.filter(transaction=> transaction.type =='bills')
    const entertainment= state.transactions.filter(transaction=> transaction.type =='entertainment')

    const food_amount= food.map(f=> f.amount).reduce(function(a, b){
        return a + b;
    }, 0)
    const bills_amount= bills.map(f=> f.amount).reduce(function(a, b){
        return a + b;
    }, 0)

    const entertainment_amount= entertainment.map(f=> f.amount).reduce(function(a, b){
        return a + b;
    }, 0)

    const income_transacs= state.transactions.filter(transaction => transaction.transactionType =='income')
    const expenses= state.transactions.filter(transaction => transaction.transactionType =='expense')

    const income_sum = income_transacs.map(i=>i.amount).reduce(function(a,b) {
        return a+b
        
    },0)

    const expense_sum = expenses.map(i=>i.amount).reduce(function(a,b) {
        return a+b
        
    },0)

    
    
    const amounts = state.transactions.map(transaction=> transaction.amount)
    
    // const income= amounts.filter(acc=> acc  >0 ).reduce((acc, item)=> (acc+=item),0)
    // const expenses= amounts.filter(acc=> acc <0).reduce((acc, item)=>(acc+=item), 0)*-1

    return (<TransactionContext.Provider value={
        {transactions:state.transactions,
        addTransaction,
        deleteTransaction,
        clickAdd,
        handleClickAdd,
        balance,
        income_sum,
        expense_sum,
        food: food? food_amount:0, 
        entertainment:entertainment? entertainment_amount:0,
        bills:bills? bills_amount:0,
        openSidebar,
        setOpenSidebar

        
    }
    }>
        {children}
    </TransactionContext.Provider>)
    
}