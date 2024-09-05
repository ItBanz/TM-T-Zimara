import React from 'react';

interface ProgressBarProps {
    totalItems: number;
    soldItems: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ totalItems, soldItems }) => {
    const percentage = (soldItems / totalItems) * 100;

    return (
        <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', padding: '5px' }}>
            <div
                style={{
                    width: `${percentage}%`,
                    backgroundColor: '#76c7c0',
                    height: '20px',
                    borderRadius: '5px',
                    transition: 'width 0.5s ease-in-out',
                }}
            />
            <div style={{ textAlign: 'center', marginTop: '5px' }}>
                {soldItems} / {totalItems} ({percentage.toFixed(2)}%)
            </div>
        </div>
    );
};

export default ProgressBar;
