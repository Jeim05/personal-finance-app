"use client"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins, PointElement, LineElement, CategoryScale, LinearScale  } from "chart.js";
import { Subtitles } from '../Subtitles';

ChartJS.register(ArcElement, Tooltip, Legend, plugins, PointElement, LineElement, CategoryScale, LinearScale);

const datos = [
    { 'mes': 'Enero', 'ingreso': 373000, 'egreso': 372000 },
    { 'mes': 'Febrero', 'ingreso': 373000,'egreso': 295000},
    { 'mes': 'Marzo', 'ingreso': 373000,'egreso': 305200 },
    { 'mes': 'Abril', 'ingreso': 373000,'egreso': 371200},
    { 'mes': 'Mayo', 'ingreso': 373000, 'egreso': 299555 },
    { 'mes': 'Junio', 'ingreso': 375000,'egreso': 373000},
    { 'mes': 'Julio', 'ingreso': 373000,'egreso': 295000 },
    { 'mes': 'Agosto', 'ingreso': 373000,'egreso': 250000},
    { 'mes': 'Setiembre', 'ingreso': 373000,'egreso': 245500 },
    { 'mes': 'Octubre', 'ingreso': 373000,'egreso': 267480},
    { 'mes': 'Noviembre', 'ingreso': 373000,'egreso': 291700 },
    { 'mes': 'Diciembre', 'ingreso': 373000,'egreso': 315200},
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
    <div className='mt-4 p-2'>
        <Subtitles text='Ingreso y gasto Mensual' />
        <div>
            <Line data={data} height={100}/>
        </div>
    </div>
  )
}
