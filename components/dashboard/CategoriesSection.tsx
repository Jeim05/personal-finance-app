import React from 'react'
import TableCategories from './TableCategories'
import DoughnutChart from '../ui/doughnutChart'

export default function CategoriesSection() {
    return (
        <div className='flex flex-row gap-6 py-5 lg:py-10'>
            <div>
                <TableCategories />
            </div>
            <div className='col-span-2 bg-white rounded-md'>
                
            </div>
            <div></div>
        </div>
    )
}

