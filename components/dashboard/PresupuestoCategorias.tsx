import React from 'react'
import { CardPresupuesto } from './CardPresupuesto'
import DoughnutChart from '../ui/doughnutChart'

export const PresupuestoCategorias = () => {
    return (
        <div className='flex flex-row gap-3 justify-between'>
            <CardPresupuesto />
            <div className='bg-white py-3 px-4 rounded-md basis-1/2'>
                <div>
                    <h3 className='font-semibold text-gray-400 text-sm'>Categorías</h3>
                </div>
                <DoughnutChart />
            </div>
            
        </div>
    )
}
