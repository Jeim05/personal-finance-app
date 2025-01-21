import React from 'react'
import { CardPresupuesto } from './CardPresupuesto'
import { Subtitles } from '../Subtitles'
import DoughnutChart from '../ui/doughnutChart'

export const PresupuestoCategorias = () => {
    return (
        <div className='budget-doughnut-wrapper'>
            <CardPresupuesto />
            <div className='doughnut-box'>
                <div>
                    <Subtitles text='Monto gastado por categoría' variants='py-2' />
                </div>
                <DoughnutChart />
            </div>
        </div>
    )
}
