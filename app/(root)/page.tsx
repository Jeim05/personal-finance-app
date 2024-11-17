import MainCards from '@/components/dashboard/mainCards'
import TableCategories from '@/components/dashboard/TableCategories'
import { BarCategoriesChart } from '@/components/ui/BarCategoriesChart'
import DoughnutChart from '@/components/ui/doughnutChart'

const Home = () => {
  return (
    <section className='home'>
      <div className='home-content'>
        <div className='home-header'>
          <MainCards />
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2 bg-white px-4'>
            <h3 className='font-bold py-4 text-xl'>Monto gastado por Categoría</h3>
            <div className='mx-auto'>
            <BarCategoriesChart />
            </div>
          </div>
          <div className='bg-white px-4'>
            <TableCategories />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home