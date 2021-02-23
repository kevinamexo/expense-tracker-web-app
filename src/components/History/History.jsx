
import React, {useContext, useState} from 'react'
import Transaction from './Transaction/Transaction'
import Header from './Header'
import './History.css'
import {TransactionContext}  from '/home/royal/expense-tracker/src/Context/TransactionContext'
import Pagination from './Pagination/Pagination'
import AddTransaction from './Transaction/AddTransaction/AddTransaction'
import ReactPaginate from 'react-paginate'
function History() {
    const {transactions}= useContext(TransactionContext)
    const [pageNumber, setPageNumber]= useState(0)
    const transactions_per_page=5;
    const pages_visited= pageNumber*transactions_per_page

    const pageCount= Math.ceil(transactions.length/ transactions_per_page)

    const changePage= ({selected})=>{
        setPageNumber(selected)
    }
    return (
        <>
            <div className="transaction-history-container">
                <Header/> 
                {transactions.slice(pages_visited, pages_visited+transactions_per_page).map((transaction)=>{
                    return <Transaction transac={transaction} className="transac-history"/>
                })}
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtns"}
                    previousLinkClassName={"prevBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
                
            </div>
        
            
        </>
    )
}

export default History








