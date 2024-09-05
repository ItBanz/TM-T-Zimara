import React from 'react';
import ProductCard from './Card';
import '../Styles/Components/ProductList.css';

const products = [
    {
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyeyt8zhmo9912_tn.webp',
        name: 'Mắt kính máy cận thời trang nam nữ chống UV chống ánh sáng xanh gọng kính cao cấp titan Mắt Kính MEME 149',
        price: '150.000 VNĐ',
        purchases: 120,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image2',
        name: 'Quần Tây Nam BENZ Quần Âu Nam Kiếu Ống Rộng Phong Cách Hàn Quốc Cao Cấp Dễ Phối Đồ Hottren QD13',
        price: '220.000 VNĐ',
        purchases: 150,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image3',
        name: 'Quần Tây Nam BENZ Quần Âu Nam Kiếu Ống Rộng Phong Cách Hàn Quốc Cao Cấp Dễ Phối Đồ Hottren QD13',
        price: '170.000 VNĐ',
        purchases: 90,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image4',
        name: 'Product D',
        price: '200.000 VNĐ',
        purchases: 200,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image5',
        name: 'Product E',
        price: '240.000 VNĐ',
        purchases: 250,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image6',
        name: 'Product F',
        price: '300.000 VNĐ',
        purchases: 300,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image1',
        name: 'Product G',
        price: '180.000 VNĐ',
        purchases: 180,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image2',
        name: 'Product H',
        price: '210.000 VNĐ',
        purchases: 220,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image3',
        name: 'Product I',
        price: '160.000 VNĐ',
        purchases: 160,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image4',
        name: 'Product J',
        price: '130.000 VNĐ',
        purchases: 130,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image1',
        name: 'Product A',
        price: '145.000 VNĐ',
        purchases: 120,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image2',
        name: 'Product B',
        price: '195.000 VNĐ',
        purchases: 150,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image3',
        name: 'Product C',
        price: '135.000 VNĐ',
        purchases: 90,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image4',
        name: 'Product D',
        price: '225.000 VNĐ',
        purchases: 200,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image5',
        name: 'Product E',
        price: '250.000 VNĐ',
        purchases: 250,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image6',
        name: 'Product F',
        price: '285.000 VNĐ',
        purchases: 300,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image1',
        name: 'Product G',
        price: '170.000 VNĐ',
        purchases: 180,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image2',
        name: 'Product H',
        price: '230.000 VNĐ',
        purchases: 220,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image3',
        name: 'Product I',
        price: '155.000 VNĐ',
        purchases: 160,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image4',
        name: 'Product J',
        price: '120.000 VNĐ',
        purchases: 130,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image1',
        name: 'Product A',
        price: '165.000 VNĐ',
        purchases: 120,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image2',
        name: 'Product B',
        price: '205.000 VNĐ',
        purchases: 150,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image3',
        name: 'Product C',
        price: '145.000 VNĐ',
        purchases: 90,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image4',
        name: 'Product D',
        price: '215.000 VNĐ',
        purchases: 200,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image5',
        name: 'Product E',
        price: '275.000 VNĐ',
        purchases: 250,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image6',
        name: 'Product F',
        price: '290.000 VNĐ',
        purchases: 300,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image1',
        name: 'Product G',
        price: '180.000 VNĐ',
        purchases: 180,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image2',
        name: 'Product H',
        price: '220.000 VNĐ',
        purchases: 220,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image3',
        name: 'Product I',
        price: '150.000 VNĐ',
        purchases: 160,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image4',
        name: 'Product J',
        price: '140.000 VNĐ',
        purchases: 130,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image1',
        name: 'Product A',
        price: '135.000 VNĐ',
        purchases: 120,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image2',
        name: 'Product B',
        price: '195.000 VNĐ',
        purchases: 150,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image3',
        name: 'Product C',
        price: '125.000 VNĐ',
        purchases: 90,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image4',
        name: 'Product D',
        price: '210.000 VNĐ',
        purchases: 200,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image5',
        name: 'Product E',
        price: '260.000 VNĐ',
        purchases: 250,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image6',
        name: 'Product F',
        price: '320.000 VNĐ',
        purchases: 300,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image1',
        name: 'Product G',
        price: '190.000 VNĐ',
        purchases: 180,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image2',
        name: 'Product H',
        price: '225.000 VNĐ',
        purchases: 220,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image3',
        name: 'Product I',
        price: '165.000 VNĐ',
        purchases: 160,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image4',
        name: 'Product J',
        price: '130.000 VNĐ',
        purchases: 130,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image4',
        name: 'Product J',
        price: '130.000 VNĐ',
        purchases: 130,
    },
    {
        image: 'https://via.placeholder.com/300?text=Image4',
        name: 'Product J',
        price: '130.000 VNĐ',
        purchases: 130,
    },
];

const ProductList: React.FC = () => {
    return (
        <div className="ProductList-Container">
            <div className="Product-list">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        purchases={product.purchases}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
