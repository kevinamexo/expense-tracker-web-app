import React,{useContext} from 'react'
import {TransactionContext} from '../../Context/TransactionContext'
import { Pie } from 'react-chartjs-2'
import DoughnutChart from './DoughnutChart'
import PieChart from './PieChart'
import './ChartSection.css'
function ChartSection() {

    const {entertainment, bills,food, income_sum, expense_sum}= useContext(TransactionContext)
    const expenseTypeData= {
        datasets:[{
            label: '% split of expenses',
            data:[entertainment,bills, food],
            backgroundColor: [
                'rgb(242, 86, 86)',
                'rgb(242, 214, 103)',
                'rgb(132, 182, 235)',
            ],
            hoverBackgroundColor: [
              'rgb(240, 0, 0)',
              'rgb(240, 192, 0)',
              'rgb(32, 131, 237)',
            ],
        }],
        labels:['Entertainment', 'Bills', 'Food']

        }
    const options={
        rotation:{
            from: 0*Math.PI,
            to: 2*Math.PI,
            duration:2000
        }


    }

    const income_expense_data={

        datasets:[{
            label: '% split of income and expensee',
            data:[income_sum,expense_sum],
            backgroundColor: [
                'rgb(242, 86, 86)',
                'rgb(242, 214, 103)'
            ],
            hoverBackgroundColor: [
                'rgb(240, 0, 0)',
                'rgb(240, 192, 0)'
            ],
        }],
        labels:['Income', 'Expenses']

        }
    
    return (
        <div className="charts-section">
            <div className="expense-doughnut">
                <DoughnutChart aspectRatio={1} data={expenseTypeData}  height ={'100%'} width={'90%'} options={{ maintainAspectRatio: false }}/>
            
            </div>
            <div className="income-expense-pie">
                <PieChart data={income_expense_data}/>
            </div>
            
         
            
            
        </div>
    )
}

export default ChartSection
