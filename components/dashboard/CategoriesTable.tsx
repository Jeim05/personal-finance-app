import React from 'react'

export const CategoriesTable = () => {
  return (
    <div className='bg-cards basis-1/2 '>
      <div className='px-4 py-4 relative overflow-x-auto'>
        <table className='table '>
          <thead className='table-header'>
            <tr>
              <th className='px-2 py-3'>Categoría</th>
              <th className='px-2 py-3'>Monto gastado</th>
            </tr>
          </thead>
          <tbody>
            <tr className='table-item '>
              <td className='px-2 py-3'>Servicios y suscripciones</td>
              <td className='px-2 py-3'>₡ 15000</td>
            </tr>
            <tr className='table-item'>
              <td className='px-2 py-3'>Alimentación</td>
              <td className='px-2 py-3'>₡ 15000</td>
            </tr>
            <tr className='table-item '>
              <td className='px-2 py-3'>Alimentación</td>
              <td className='px-2 py-3'>₡ 15000</td>
            </tr>
            <tr className='table-item '>
              <td className='px-2 py-3'>Alimentación</td>
              <td className='px-2 py-3'>₡ 15000</td>
            </tr>
            <tr className='table-item'>
              <td className='px-2 py-3'>Alimentación</td>
              <td className='px-2 py-3'>₡ 15000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
