import MainCards from '@/components/dashboard/mainCards'
import SecondSection from '@/components/dashboard/SecondSection'
import Title from '@/components/Title'

const Home = () => {
  return (
    <section className='main-section'>
      <div className='home-content'>
        <Title text='Dashboard'variants='py-2'/>
        <MainCards />
        <SecondSection />
      </div>
    </section>
  )
}

export default Home