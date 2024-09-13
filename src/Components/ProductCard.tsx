import React from 'react';
import '../Styles/Components/ProductCard.css';

interface ProductCardProps {
    title: string;
    image: string;
    priceDiscount: string; // Giá giảm
    name: string;
    quantitySold: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, priceDiscount, name, quantitySold }) => {
    return (
        <div className="ProductCardShop">
            <img src={image} alt={title} className="product-image" />
            <h3 className="productshop-name">{name}</h3>
            <p className="productshop-discount">Giá Giảm: {priceDiscount}</p>
            <p className="productshop-quantity">Số lượng bán: {quantitySold}</p>
        </div>
    );
};

export default ProductCard;
