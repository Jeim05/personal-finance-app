import MainCards from '@/components/dashboard/mainCards'
import { PresupuestoCategorias } from '@/components/dashboard/PresupuestoCategorias'
import { DashboardTables } from '@/components/dashboard/DashboardTables'
import { VerticalBarChart } from '@/components/ui/VerticalBarChart'
import { LineChartUtility } from '@/components/ui/LineChartUtility'

const Home = () => {
  return (
    <section className='home'>
      <div className='home-content'>
        <div className='home-content-right'>
          <MainCards />
          <VerticalBarChart />
          <DashboardTables />
        </div>
        <div className='home-content-left'>
          <PresupuestoCategorias />
          <LineChartUtility />
        </div>
      </div>
    </section>
  )
}

export default Home