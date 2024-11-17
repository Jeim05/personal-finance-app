import MainCards from '@/components/dashboard/mainCards'
import TableCategories from '@/components/dashboard/TableCategories'
import DoughnutChart from '@/components/ui/doughnutChart'

const Home = () => {
  return (
    <section className='home'>
      <div className='home-content'>
        <div className='home-header'>
          <MainCards />
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <div className='col-span-2 px-4'>

          </div>
          <div>
            <DoughnutChart />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home