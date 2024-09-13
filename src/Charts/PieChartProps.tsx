import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../Styles/Charts/PieChart.css'; // Import the CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

interface ProductData {
    name: string;
    totalrevenproduct: number;
}

interface PieChartProps {
    productData: ProductData[];
}

const generateColors = (numColors: number) => {
    const colors = [];
    const baseColors = [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#FF6F61',
        '#6B5B95',
        '#88B04B',
        '#F7CAC9',
        '#92A8D1',
        '#F6C1C1',
        '#FFB347',
        '#6A0572',
        '#D5AAFF',
        '#6F9D8F',
        '#D4A5A5',
        '#FFA07A',
        '#A9A9A9',
        '#00BFFF',
        '#DCDCDC',
    ];

    for (let i = 0; i < numColors; i++) {
        colors.push(baseColors[i % baseColors.length]);
    }

    return colors;
};

const PieChart: React.FC<PieChartProps> = ({ productData }) => {
    const labels = productData.map((product) => product.name);
    const dataValues = productData.map((product) => product.totalrevenproduct);

    const totalRevenue = dataValues.reduce((acc, value) => acc + value, 0);

    const colors = generateColors(productData.length);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Doanh Thu Sản Phẩm',
                data: dataValues,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem: any) {
                        const value = tooltipItem.raw || 0;
                        const percentage = ((value / totalRevenue) * 100).toFixed(2) + '%';
                        return `${value.toLocaleString('vi-VN')} VNĐ (${percentage})`;
                    },
                },
            },
            title: {
                display: true,
                text: 'Biểu Đồ Doanh Thu Sản Phẩm',
            },
        },
    };

    return (
        <div className="pie-chart-container">
            <div className="pie-chart-content">
                <Pie data={data} options={options} />
            </div>
            <div className="pie-chart-total-revenue">Tổng Doanh Thu: {totalRevenue.toLocaleString('vi-VN')} VNĐ</div>
        </div>
    );
};

export default PieChart;
