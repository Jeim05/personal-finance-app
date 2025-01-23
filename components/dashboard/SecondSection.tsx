import React from 'react'
import { LineChartUtility } from '../ui/LineChartUtility'
import SumaDeudaAhorro from './SumaDeudaAhorro';


export default function SecondSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 py-5 lg:py-10">
      <div className="lg:col-span-2 bg-white rounded-md">
        <LineChartUtility />
      </div>
      <div className=''>
        <SumaDeudaAhorro />
      </div>

    </div>
  );
}
