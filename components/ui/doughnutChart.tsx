"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const categorias = [
  {
    'nombre': 'Disfrutar',
    'valor': 20000
  },
  {
    'nombre': 'Alimentación',
    'valor': 35000
  },
  {
    'nombre': 'Mascotas',
    'valor': 45000
  },
  {
    'nombre': 'Suscripciones',
    'valor': 15000
  },
  {
    'nombre': 'Otros',
    'valor': 25000 
  },
]

const DoughnutChart = (/*{accounts}:DoughnutChartProps*/) => {
  const labels = categorias.map(mes => mes.nombre);
  const values = categorias.map(mes => mes.valor);
   
  const data = {
    labels: labels,
    datasets: [{
      label: 'Gastos por categoría',
      data: values,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
    }]
  };

  return (
    <Doughnut data={data} />
  )
}

export default DoughnutChart