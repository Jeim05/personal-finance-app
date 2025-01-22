"use client"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins, PointElement, LineElement, CategoryScale, LinearScale  } from "chart.js";
import { Subtitles } from '../Subtitles';

ChartJS.register(ArcElement, Tooltip, Legend, plugins, PointElement, LineElement, CategoryScale, LinearScale);

const datos = [
    { 'mes': 'Enero', 'ingreso': 10000, 'egreso': 12000 },
    { 'mes': 'Febrero', 'ingreso': 25000,'egreso': 12000},
    { 'mes': 'Marzo', 'ingreso': 32000,'egreso': 12000 },
    { 'mes': 'Abril', 'ingreso': 25500,'egreso': 12000},
    { 'mes': 'Mayo', 'ingreso': 0, 'egreso': 0 },
    { 'mes': 'Junio', 'ingreso': 55000,'egreso': 12000},
    { 'mes': 'Julio', 'ingreso': 12000,'egreso': 12000 },
    { 'mes': 'Agosto', 'ingreso': 27000,'egreso': 12000},
    { 'mes': 'Setiembre', 'ingreso': 30000,'egreso': 12000 },
    { 'mes': 'Octubre', 'ingreso': 25500,'egreso': 12000},
    { 'mes': 'Noviembre', 'ingreso': 65000,'egreso': 12000 },
    { 'mes': 'Diciembre', 'ingreso': 74100,'egreso': 12000},
]

export const LineChartUtility = () => {
    const labels = datos.map(mes => mes.mes);
    const ingreso = datos.map(ingreso => ingreso.ingreso);
    const egreso = datos.map(egreso=>egreso.egreso)

    const data = {
        labels: labels,
        datasets: [{
          label: 'Ingreso',
          data: ingreso,
          fill: false,
          borderColor: '#A168D3',
          tension: 0.1
        },
        {
          label: 'Egreso',
          data: egreso,
          fill: false,
          borderColor: '#FD8B63',
          tension: 0.1
        }
      ]
      };

  return (
    <div className='bg-cards mt-4 p-4'>
        <Subtitles text='Ingreso y gasto Mensual' />
        <div>
            <Line data={data} />
        </div>
    </div>
  )
}
