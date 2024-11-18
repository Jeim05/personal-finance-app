"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, plugins);

const categorias = [
  { 'nombre': 'Disfrutar', 'valor': 20000 },
  { 'nombre': 'Alimentación', 'valor': 35000 },
  { 'nombre': 'Mascotas', 'valor': 45000 },
  { 'nombre': 'Suscripciones', 'valor': 15000 },
  { 'nombre': 'Otros', 'valor': 25000 },
  { 'nombre': 'Ahorro', 'valor': 5000 },
]

const DoughnutChart = (/*{accounts}:DoughnutChartProps*/) => {
  const labels = categorias.map(mes => mes.nombre);
  const values = categorias.map(mes => mes.valor);

  const data = {
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

    }],
    labels: labels,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Gastos por categoría'
      }
    }
  };

  return (
    <div className="bg-white py-4 rounded-md basis-1/2">
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default DoughnutChart