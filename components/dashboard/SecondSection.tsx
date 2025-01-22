import React from 'react'
import { LineChartUtility } from '../ui/LineChartUtility'
import SumaDeudaAhorro from './SumaDeudaAhorro';


export default function SecondSection() {
    return (
      <div className="grid lg:grid-cols-3  lg:py-10 gap-4 ">
        <div className="col-span-2 bg-white rounded-md">
          <LineChartUtility />
        </div>
        <div className='py-6 '>
        <SumaDeudaAhorro />
        </div>
        
      </div>
    );
}
