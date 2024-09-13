import React from 'react';

interface SizeSelectionProps {
    sizes: { size: string; quantity: number }[];
    selectedSize: string;
    onSizeChange: (size: string) => void;
}

const SizeSelection: React.FC<SizeSelectionProps> = ({ sizes, selectedSize, onSizeChange }) => (
    <div className="product-detail-size-selection">
        <p>Kích Thước:</p>
        <div className="size-options">
            {sizes.map((size) => (
                <button
                    key={size.size}
                    onClick={() => onSizeChange(size.size)}
                    className={selectedSize === size.size ? 'selected' : ''}
                >
                    {size.size}
                </button>
            ))}
        </div>
    </div>
);

export default SizeSelection;
