"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins, ChartOptions, Colors } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, plugins, Colors);

const categorias = [
  { 'nombre': 'Disfrutar', 'valor': 20 },
  { 'nombre': 'Alimentación', 'valor': 35 },
  { 'nombre': 'Mascotas', 'valor': 45 },
  { 'nombre': 'Suscripciones', 'valor': 15 },
  { 'nombre': 'Otros', 'valor': 25 },
  { 'nombre': 'Ahorro', 'valor': 50},
  { 'nombre': 'Deuda', 'valor': 10},
]

const DoughnutChart = (/*{accounts}:DoughnutChartProps*/) => {
  const labels = categorias.map(mes => mes.nombre);
  const values = categorias.map(mes => mes.valor)

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
        'rgb(99, 162, 145)',
        'rgb(143, 20, 222)',
      ],

    }],
    labels: labels,
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 10,
          },
        }
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="text-black dark:text-black py-4">
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default DoughnutChart