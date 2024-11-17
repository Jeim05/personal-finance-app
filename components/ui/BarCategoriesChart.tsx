"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

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

export const BarCategoriesChart = () => {
    const labels = categorias.map(categoria => categoria.nombre);
    const values = categorias.map(categorias => categorias.valor);

    const data = {
        labels: labels,
        datasets: [{
            data: values,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(25, 20, 120)',
                'rgb(55, 162, 201)',
                'rgb(255, 205, 86)',
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
        <Bar data={data} />
    )
}
