import React from 'react'
import { CardPresupuesto } from './CardPresupuesto'
import DoughnutChart from '../ui/doughnutChart'

export const PresupuestoCategorias = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-3 justify-between'>
            <CardPresupuesto />
            <div className='bg-white py-3 px-4 rounded-md basis-1/2'>
                <div>
                    <h3 className='subtitulo'>Categorías</h3>
                </div>
                <DoughnutChart />
            </div>
        </div>
    )
}
