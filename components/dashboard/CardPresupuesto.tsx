import React from 'react'
import { Subtitles } from './Subtitles'

export const CardPresupuesto = () => {
    return (
        <div className='budged-card'>
            <Subtitles text='Presupuesto mensual' />
            <div className='budget-amounts-box'>
                <p className='card-amount py-1'>₡ 260000</p>
                <hr />
                <div className='py-1 mt-2'>
                    <p className='text-gray-600 text-sm font-mono'>Monto disponible</p>
                    <p className='text-gray-700 font-mono'>₡ 60000</p>
                </div>
            </div>
        </div>
    )
}
