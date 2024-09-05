import React from 'react';
import '../Styles/Components/Card.css';

interface ProductCardProps {
    image: string;
    name: string;
    price: string;
    purchases: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    name,
    price,
    purchases,
}) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h2 className="product-name">{name}</h2>
            <div className="row Price">
                <p className="col-8 product-price">{price}</p>
                <p className="col-4 product-purchases">Đã bán {purchases}</p>
            </div>
        </div>
    );
};

export default ProductCard;
