import React from 'react';

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    purchases: number;
    onClick: () => void;
}

const ProductCardd: React.FC<ProductCardProps> = ({
    image,
    name,
    price,
    purchases,
    onClick,
}) => {
    return (
        <div className="product-card" onClick={onClick}>
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">{price.toLocaleString()} VNĐ</p>
                <p className="product-purchases">Số lượng bán: {purchases}</p>
            </div>
        </div>
    );
};

export default ProductCardd;
