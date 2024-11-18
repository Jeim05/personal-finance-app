import React from 'react'
import { CardPresupuesto } from './CardPresupuesto'
import DoughnutChart from '../ui/doughnutChart'

export const PresupuestoCategorias = () => {
    return (
        <div className='flex flex-row gap-2 justify-center'>
            <CardPresupuesto />
            <DoughnutChart />
        </div>
    )
}
