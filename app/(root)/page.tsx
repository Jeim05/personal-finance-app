import MainCards from '@/components/dashboard/mainCards'
import TableCategories from '@/components/dashboard/TableCategories'
import { BarCategoriesChart } from '@/components/ui/BarCategoriesChart'
import DoughnutChart from '@/components/ui/doughnutChart'

const Home = () => {
  return (
    <section className='home'>
      <div className='home-content'>
        <div className='home-content-right'>
          <MainCards />
        </div>
        <div className='home-content-left'>
          
        </div>
      </div>
    </section>
  )
}

export default Home