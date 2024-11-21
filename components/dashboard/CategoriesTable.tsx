import React from 'react'

export const CategoriesTable = () => {
  return (
    <div className='bg-cards basis-1/2 py-4'>
      <div className='px-4 relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-300'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-2 py-3'>Categoría</th>
              <th className='px-2 py-3'>Monto gastado</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b'>
              <td className='px-2 py-3'>Servicios y suscripciones</td>
              <td className='px-2 py-3'>₡ 15000</td>
            </tr>
            <tr className='bg-white border-b'>
              <td className='px-2 py-3'>Alimentación</td>
              <td className='px-2 py-3'>₡ 15000</td>
            </tr>
            <tr className='bg-white border-b'>
              <td className='px-2 py-3'>Alimentación</td>
              <td className='px-2 py-3'>₡ 15000</td>
            </tr>
            <tr className='bg-white border-b'>
              <td className='px-2 py-3'>Alimentación</td>
              <td className='px-2 py-3'>₡ 15000</td>
            </tr>
            <tr className='bg-white border-b'>
              <td className='px-2 py-3'>Alimentación</td>
              <td className='px-2 py-3'>₡ 15000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
