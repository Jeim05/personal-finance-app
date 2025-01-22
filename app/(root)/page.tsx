import MainCards from '@/components/dashboard/mainCards'
import Title from '@/components/Title'

const Home = () => {
  return (
    <section className='main-section'>
      <div className='home-content'>
        <Title text='Dashboard'variants='py-2'/>
        <MainCards />
      </div>
    </section>
  )
}

export default Home