import React from 'react';
import '../Styles/Components/AllProductCard.css';

export interface ProductCardProps {
    name: string;
    imageUrl: string;
    originalPrice: number;
    discountedPrice?: number;
    salesQuantity: number;
}

const ProductCardAll: React.FC<ProductCardProps> = ({
    name,
    imageUrl,
    originalPrice,
    discountedPrice,
    salesQuantity,
}) => {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <div className="product-prices">
                {discountedPrice ? (
                    <>
                        <span className="pe-2 product-original-price">{originalPrice.toLocaleString()}</span>
                        <span className="ps-2 product-discounted-price">{discountedPrice?.toLocaleString()}</span>
                    </>
                ) : (
                    <span className="product-original-price">{originalPrice.toLocaleString()}</span>
                )}
            </div>
            <span className="product-sales-quantity">Đã bán: {salesQuantity.toLocaleString()}</span>
        </div>
    );
};

export default ProductCardAll;
