import React from 'react'
import { CardPresupuesto } from './CardPresupuesto'
import DoughnutChart from '../ui/doughnutChart'

export const PresupuestoCategorias = () => {
    return (
        <div className='flex flex-row gap-3 justify-between'>
            <CardPresupuesto />
            <DoughnutChart />
        </div>
    )
}
