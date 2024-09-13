import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../Styles/Charts/Charts.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface RevenueChartProps {
    currentMonthRevenue: number;
    lastMonthRevenue: number;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ currentMonthRevenue, lastMonthRevenue }) => {
    const data = {
        labels: ['Tháng trước', 'Tháng này'],
        datasets: [
            {
                label: 'Doanh Thu (VNĐ)',
                data: [lastMonthRevenue, currentMonthRevenue],
                backgroundColor: ['#007bff', '#007bff'],
                borderColor: ['#007bff', '#007bff'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value: string | number) {
                        if (typeof value === 'number') {
                            return value.toLocaleString('vi-VN') + ' VNĐ';
                        }
                        return value;
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Doanh Thu Tháng Này Với Tháng Trước',
            },
        },
    };

    return (
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    );
};

export default RevenueChart;
