"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const meses = [
  {
    'nombre': 'Enero',
    'valor': 50
  },
  {
    'nombre': 'Febrero',
    'valor': 30
  },
  {
    'nombre': 'Marzo',
    'valor': 45
  },
  {
    'nombre': 'Abril',
    'valor': 40
  },
  {
    'nombre': 'Mayo',
    'valor': 86
  },
]

const DoughnutChart = (/*{accounts}:DoughnutChartProps*/) => {
  const labels = meses.map(mes => mes.nombre);
  const values = meses.map(mes => mes.valor);
   
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
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
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <Bar data={data}/>
  )
}

export default DoughnutChart