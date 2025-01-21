import MainCards from '@/components/dashboard/mainCards'
import { PresupuestoCategorias } from '@/components/dashboard/PresupuestoCategorias'
import { DashboardTables } from '@/components/dashboard/DashboardTables'
import { VerticalBarChart } from '@/components/ui/VerticalBarChart'
import { LineChartUtility } from '@/components/ui/LineChartUtility'
import { SavingDebts } from '@/components/dashboard/SavingDebts'
import Title from '@/components/Title'

const Home = () => {
  return (
    <section className='main-section'>
        <Title text='Dashboard'/>
      <div className='home-content'>
        <MainCards />
        {/* <div className='home-content-right'>
          
          <VerticalBarChart />
          <DashboardTables />
        </div>
        <div className='home-content-left'>
          <PresupuestoCategorias />
          <LineChartUtility />
          <SavingDebts />
        </div> */}
      </div>
    </section>
  )
}

export default Home