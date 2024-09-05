import React from 'react';
import '../Styles/Components/Props.css';

interface Props {
    number1: number; // Discounted price
    number2: number; // Original price
}

const PercentageCalculator: React.FC<Props> = ({ number1, number2 }) => {
    const calculatePercentage = (num1: number, num2: number): number | null => {
        if (num2 !== 0) {
            const discountPercentage = (num1 / num2) * 100;
            return 100 - discountPercentage; // Subtract from 100%
        } else {
            return null; // Handle division by zero
        }
    };

    const percentage = calculatePercentage(number1, number2);

    return (
        <div className="container-props">
            {percentage !== null && <p className="p-1">{percentage.toFixed(2)}% GIẢM</p>}
        </div>
    );
};

export default PercentageCalculator;
