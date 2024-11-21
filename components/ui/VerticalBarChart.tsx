"use client"
import { Subtitles } from '../dashboard/Subtitles'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, plugins, CategoryScale, LinearScale, BarElement);

const datos = [
    { 'mes': 'Enero', 'ingreso': 1000000, 'egreso': 110000 },
    { 'mes': 'Febrero', 'ingreso': 500000, 'egreso': 325000 },
    { 'mes': 'Marzo', 'ingreso': 500000, 'egreso': 450000 },
    { 'mes': 'Abril', 'ingreso': 500000, 'egreso': 200000 },
    { 'mes': 'Mayo', 'ingreso': 500000, 'egreso': 145000 },
    { 'mes': 'Junio', 'ingreso': 500000, 'egreso': 500000 },
]

export const VerticalBarChart = () => {
    const labels = datos.map(mes => mes.mes);
    const ingresos = datos.map(ingreso => ingreso.ingreso);
    const egresos = datos.map(egreso => egreso.egreso);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Ingresos',
                data: ingresos,
                backgroundColor: '#6366f1',
            },
            {
                label: 'Egresos',
                data: egresos,
                backgroundColor: '#3b82f6',
            }
        ]
    };

    return (
            <div className='bg-cards mt-4 p-4'>
                <Subtitles text='Ingresos y gastos de los últimos 6 meses' />
                <div>
                    <Bar data={data} />
                </div>
            </div>
    )
}
