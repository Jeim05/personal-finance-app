import React from 'react'
import { LineChartUtility } from '../ui/LineChartUtility'
import SumaDeudaAhorro from './SumaDeudaAhorro';
import CardSavings from './CardSavings';


export default function SecondSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 py-5 lg:py-10">
      <div className="basis-2/3 bg-white rounded-md">
      
      </div>
      <div className='basis-1/4'>
        <SumaDeudaAhorro />
      </div>
      <div className='basis-1/4'>
      <CardSavings />
      </div>

    </div>
  );
}
