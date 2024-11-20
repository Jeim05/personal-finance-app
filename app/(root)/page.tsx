import MainCards from '@/components/dashboard/mainCards'
import { PresupuestoCategorias } from '@/components/dashboard/PresupuestoCategorias'
import { DashboardTables } from '@/components/dashboard/DashboardTables'
import { VerticalBarChart } from '@/components/ui/VerticalBarChart'

const Home = () => {
  return (
    <section className='home'>
      <div className='home-content'>
        <div className='home-content-right'>
          <MainCards />
          <VerticalBarChart />
        </div>
        <div className='home-content-left'>
          <PresupuestoCategorias />
          <DashboardTables />
        </div>
      </div>
    </section>
  )
}

export default Home