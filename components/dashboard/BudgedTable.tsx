import React from 'react'
import { Subtitles } from './Subtitles'

export const BudgedTable = () => {
  return (
    <div className='bg-cards py-4 basis-1/2'>
      <div className='px-4'>
        <Subtitles text='Marca tu gasto cancelado' />
      </div>
      <div className='px-4 py-4 relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-300'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-2 py-3'>Gasto</th>
              <th className='px-2 py-3'>Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b'>
              <td className='px-2 py-3'>Servicios y suscripciones</td>
              <td className='px-2 py-3 text-center'>
                <input type="checkbox" />
              </td>
            </tr>
            <tr className='bg-white border-b'>
              <td className='px-2 py-3'>Alimentación</td>
              <td className='px-2 py-3 text-center'>
                <input type="checkbox" />
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}
