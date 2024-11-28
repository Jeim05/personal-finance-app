
import TableTransactions from '@/components/transactions/TableTransactions'

const page = () => {
  return (
    <section className='main-section'>
      <div className='px-4 py-7 sm:px-8 lg:py-8'>
        <TableTransactions />
      </div>
    </section>
  )
}

export default page