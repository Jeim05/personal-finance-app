import { TableTransactions } from '@/components/transactions/TableTransactions'
import React from 'react'

const page = () => {
  return (
    <section className='home'>
      <div>
        <TableTransactions />
      </div>
    </section>
  )
}

export default page