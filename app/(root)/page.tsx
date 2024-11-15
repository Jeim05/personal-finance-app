import MainCards from '@/components/dashboard/mainCards'
import DoughnutChart from '@/components/ui/doughnutChart'
import React from 'react'

const Home = () => {
  return (
    <section className='home'>
        <div className='home-content'>
            <MainCards />
        </div>
    </section>
  )
}

export default Home