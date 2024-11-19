import MainCards from '@/components/dashboard/mainCards'
import { PresupuestoCategorias } from '@/components/dashboard/PresupuestoCategorias'

const Home = () => {
  return (
    <section className='home'>
      <div className='home-content'>
        <div className='home-content-right'>
          <MainCards />
          
        </div>
        <div className='home-content-left'>
          <PresupuestoCategorias />
        </div>
      </div>
    </section>
  )
}

export default Home