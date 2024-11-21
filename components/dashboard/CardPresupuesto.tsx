import React from 'react'
import { Subtitles } from './Subtitles'

export const CardPresupuesto = () => {
    return (
        <div className='budged-card'>
            <Subtitles text='Presupuesto mensual' variants='py-2' />
            <div className='budget-amounts-box'>
                <p className='card-amount py-2'>₡ 260000</p>
                <hr className='h-px border-0 bg-indigo-600'/>
                <div className='py-2 mt-2'>
                    <p className='text-gray-600 text-xs font-mono'>Monto disponible para gastar</p>
                    <p className='text-gray-700 font-mono'>₡ 60000</p>
                </div>
            </div>
        </div>
    )
}
