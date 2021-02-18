import React ,{useContext, useReducer, useState}from 'react'
import AppReducer from './TransactionReducers'

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
    const food= state.transactions.filter((transaction)=> transaction.type==='food')

    const amounts = state.transactions.map(transaction=> transaction.amount)
    console.log(amounts)
    const income= amounts.filter(acc=> acc  >0 ).reduce((acc, item)=> (acc+=item),0)
    const expenses= amounts.filter(acc=> acc <0).reduce((acc, item)=>(acc+=item), 0)*-1

    return (<TransactionContext.Provider value={
        {transactions:state.transactions,
        addTransaction,
        deleteTransaction,
        clickAdd,
        handleClickAdd,
        balance,
        income,
        expenses,
        food

        
    }
    }>
        {children}
    </TransactionContext.Provider>)
    
}