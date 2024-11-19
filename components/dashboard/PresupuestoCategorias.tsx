import React from 'react'
import { CardPresupuesto } from './CardPresupuesto'
import { Subtitles } from './Subtitles'

export const PresupuestoCategorias = () => {
    return (
        <div className='budget-doughnut-wrapper'>
            <CardPresupuesto />
            <div className='doughnut-box'>
                <div>
                    <Subtitles text='Categorías' />
                </div>
                
            </div>
        </div>
    )
}
