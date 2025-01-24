import React from 'react'
import { CardIcon } from './CardIcon'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import { Subtitles } from '../Subtitles'

export default function CardSavings() {
    return (
        <div className='relative shadow-lg'>
            <CardIcon icon={faPiggyBank}
                variant='absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-[#9265ba] px-2 py-3 text-white text-5xl' />
            <div className='mt-8 bg-[#A168D3] text-black w-full h-full rounded-md pt-8 pb-6'>
                <div className='flex flex-col text-center mt-4 py-4'>
                    <p className='card-amount py-2 '>₡500</p>
                    <Subtitles text="Total de Ahorros" variants='uppercase' />
                </div>
                <div className='border-t-2 grid grid-cols-2 gap-2 py-4 px-4 items-center'>
                    <Subtitles text="Suma ahorro Año Actual"/>
                    <p className='font-semibold text-2xl py-1 text-end'>₡500</p>
                </div>
            </div>
        </div>
    )
}
