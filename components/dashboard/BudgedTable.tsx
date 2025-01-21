import React from 'react'
import { Subtitles } from '../Subtitles'

export const BudgedTable = () => {
  return (
    <div className='bg-cards py-4 basis-1/2'>
      <div className='px-4'>
        <Subtitles text='Marca tu gasto cancelado' />
      </div>
      <div className='px-4 py-4 relative overflow-x-auto'>
        <table className='table'>
          <thead className='table-header'>
            <tr>
              <th className='px-2 py-3'>Gasto</th>
              <th className='px-2 py-3'>Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr className='table-item '>
              <td className='px-2 py-3'>Servicios y suscripciones</td>
              <td className='px-2 py-3 text-center'>
                <input type="checkbox" />
              </td>
            </tr>
            <tr className='table-item'>
              <td className='px-2 py-3'>Disfrutar</td>
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
