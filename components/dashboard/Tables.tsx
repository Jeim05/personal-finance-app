import React from 'react'
import { CategoriesTable } from './CategoriesTable'
import { BudgedTable } from './BudgedTable'

export const Tables = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <BudgedTable />
        <CategoriesTable />
    </div>
  )
}
