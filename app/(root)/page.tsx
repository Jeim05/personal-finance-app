import DoughnutChart from '@/components/ui/doughnutChart'
import React from 'react'

const Home = () => {
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <DoughnutChart />
            </header>
        </div>
    </section>
  )
}

export default Home