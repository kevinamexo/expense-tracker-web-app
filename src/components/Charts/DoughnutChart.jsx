import React, {useContext} from 'react'
import {DoughnutModel} from 'chart.js'
import {TransactionContext} from '../../Context/TransactionContext'
import {Doughnut} from 'react-chartjs-2'

function DoughnutChart({data}) {
    


    return (
        <div className="pie-chart">
            <Doughnut data={data}/>
        
            
        </div>
    )
}

export default DoughnutChart
