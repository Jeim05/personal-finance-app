import React from 'react'
import { CardIcon } from './CardIcon'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import { Subtitles } from '../Subtitles'

export default function CardSavings() {
    return (
        <div className='card-savings'>
            <CardIcon icon={faPiggyBank} variant='rounded-full bg-white text-green p-3 text-5xl' />
            <div>
                <div className='container-total'>
                    <p className='total-amount '>₡500</p>
                    <Subtitles text="Total de Ahorros" variants='text-black uppercase dark:text-white' />
                </div>
                <div className='container-anual'>
                    <Subtitles text="Ahorro Año Actual" variants='text-black dark:text-white' />
                    <p className='anual-amount'>₡500</p>
                </div>
            </div>
        </div>
    )
}
