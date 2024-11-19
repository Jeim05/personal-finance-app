import React from 'react'
import { CardPresupuesto } from './CardPresupuesto'
import DoughnutChart from '../ui/doughnutChart'

export const PresupuestoCategorias = () => {
    return (
        <div className='budget-doughnut-wrapper'>
            <CardPresupuesto />
            <div className='doughnut-box'>
                <div>
                    <h3 className='subtitulo'>Categorías</h3>
                </div>
                <DoughnutChart />
            </div>
        </div>
    )
}
