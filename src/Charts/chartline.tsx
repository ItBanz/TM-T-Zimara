import React from 'react';
import { Line } from 'react-chartjs-2';
import '../Styles/Charts/QuantitySoldChart.css'; // Import the CSS file
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface QuantitySoldChartProps {
    labels: string[];
    salesData: number[];
    returnsData: number[];
}

const QuantitySoldChart: React.FC<QuantitySoldChartProps> = ({ labels, salesData, returnsData }) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Số Lượng Bán',
                data: salesData,
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                fill: true,
                tension: 0.1,
            },
            {
                label: 'Số Lượng Trả Hàng',
                data: returnsData,
                borderColor: '#ff0000',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                fill: true,
                tension: 0.1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                display: false,
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value: string | number) {
                        if (typeof value === 'number') {
                            return value.toLocaleString('vi-VN') + ' sản phẩm';
                        }
                        return value;
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Số Lượng Bán và Trả Hàng Theo Tháng',
            },
        },
    };

    return (
        <div className="chart-container">
            <Line data={chartData} options={options} />
        </div>
    );
};

export default QuantitySoldChart;
