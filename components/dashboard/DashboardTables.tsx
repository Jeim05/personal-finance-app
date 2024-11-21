import React from 'react'
import { CategoriesTable } from './CategoriesTable'
import { BudgedTable } from './BudgedTable'

export const DashboardTables = () => {
  return (
    <div className='dashboard-tables'>
        <CategoriesTable />
        <BudgedTable />
    </div>
  )
}
