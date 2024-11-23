import React from 'react'
import { Subtitles } from './Subtitles'

export const CardPresupuesto = () => {
    return (
        <div className='budged-card'>
            <Subtitles text='Presupuesto mensual' variants='py-2' />
            <div className='budget-amounts-box'>
                <p className='card-amount py-2'>₡ 260000</p>
                <hr className='h-px border-0 bg-indigo-600 dark:bg-indigo-500'/>
                <div className='py-2 mt-2'>
                    <p className='text-gray-600 text-sm py-0.5 dark:text-zinc-300'>Monto disponible en el mes</p>
                    <p className='text-gray-700 font-mono text-lg dark:text-white'>₡ 60000</p>
                </div>
            </div>
        </div>
    )
}
