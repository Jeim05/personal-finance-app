"use client"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins, PointElement, LineElement  } from "chart.js";
import { Subtitles } from '../dashboard/Subtitles';

ChartJS.register(ArcElement, Tooltip, Legend, plugins, PointElement, LineElement);

const datos = [
    { 'mes': 'Enero', 'utilidad': 10000 },
    { 'mes': 'Febrero', 'utilidad': 25000},
    { 'mes': 'Marzo', 'utilidad': 32000 },
    { 'mes': 'Abril', 'utilidad': 25500},
    { 'mes': 'Mayo', 'utilidad': 0 },
    { 'mes': 'Junio', 'utilidad': 5000},
]

export const LineChartUtility = () => {
    const labels = datos.map(mes => mes.mes);
    const utilidad = datos.map(utilidad => utilidad.utilidad);

    const data = {
        labels: labels,
        datasets: [{
          label: 'Utilidad por cada mes',
          data: utilidad,
          fill: false,
          borderColor: '#6366f1',
          tension: 0.1
        }]
      };

  return (
    <div className='bg-cards mt-4 p-4'>
        <Subtitles text='Análisis de la utilidad' />
        <div>
            <Line data={data} />
        </div>
    </div>
  )
}
