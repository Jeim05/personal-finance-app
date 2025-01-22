import React from 'react'
import { LineChartUtility } from '../ui/LineChartUtility'
import Card from './card'
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'

export default function SecondSection() {
    return (
        <div className='grid grid-cols-2 py-10 gap-4 '>
            <div className='bg-white rounded-md'>
                <LineChartUtility />
            </div>
            <div className='flex flex-row'>
                <Card title='Ahorro' amount={1240000} icon={faFileInvoiceDollar} />
            </div>
        </div>
    )
}
