"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend,);

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
  {
    'nombre': 'Ahorro',
    'valor': 5000
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
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(25, 20, 120)',
        'rgb(55, 162, 201)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    }]
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  )
}

export default DoughnutChart