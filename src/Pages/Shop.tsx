import React from 'react';
import { useParams } from 'react-router-dom';
import shopData from '../Data/Store.json';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard'; // Đảm bảo import đúng ProductCard
import '../Styles/Pages/Shop.css';
import DiscountCode from '../Components/Discound';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Cấu hình slider
const settingsdis = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
};

export default function Shops() {
    const { id } = useParams<{ id: string }>();
    const shop = shopData.Shops.find((shop) => shop.id === id);

    if (!shop) {
        return <p>Shop not found</p>;
    }

    return (
        <>
            <Header />
            <div className="shop-introduce">
                <div className="row info-shop-container">
                    <div className="col-4 shop-left">
                        <div className="row i4-shop">
                            <div className="col-4">
                                <img src={shop.logo} alt={`${shop.sName} logo`} className="shop-logo" />
                            </div>
                            <div className="col-8">
                                <h1 className="shop-name">{shop.sName}</h1>
                                <p className="shop-online">Online 13 phút trước</p>
                            </div>
                        </div>

                        <div className="row shop-buttons">
                            <div className="col">
                                <button className="follow-btn">+ THEO DÕI</button>
                            </div>
                            <div className="col">
                                <button className="chat-btn">CHAT</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 px-5 shop-right">
                        <div className="row test-src">
                            <div className="col shop-right-container">
                                <div className="stat-item">
                                    <i className="fa-solid fa-inbox"></i> Sản Phẩm:{' '}
                                    <span className="stat-number">{shop.product}</span>
                                </div>
                                <div className="stat-item">
                                    <i className="fa-regular fa-heart"></i> Đang Theo:{' '}
                                    <span className="stat-number">9</span>
                                </div>
                                <div className="stat-item">
                                    <i className="fas fa-users"></i> Người Theo Dõi:{' '}
                                    <span className="stat-number">{shop.followers}</span>
                                </div>
                            </div>
                            <div className="col shop-right-container">
                                <div className="stat-item">
                                    <i className="fas fa-star"></i> Đánh Giá:{' '}
                                    <span className="stat-number">{shop.rating} (4.5k Đánh Giá)</span>
                                </div>
                                <div className="stat-item">
                                    <i className="fas fa-comments"></i> Tỉ Lệ Phản Hồi Chat:{' '}
                                    <span className="stat-number">{shop.responseRate}% (Trong vài giờ)</span>
                                </div>
                                <div className="stat-item">
                                    <i className="fas fa-calendar-day"></i> Tham Gia:{' '}
                                    <span className="stat-number">4 Năm Trước</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 discountCodes">
                <Slider {...settingsdis}>
                    {shop.discountCodes.map((code) => (
                        <div key={code['id-discountCodes']}>
                            <DiscountCode
                                id={code['id-discountCodes']}
                                name={code['name-discountCodes']}
                                condition={code['condition-discountCodes']}
                                expiryDate={code['date-discountCodes']}
                                quantity={code['quality-discountCodes']}
                                value={code['value-discountCodes']}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="shop-product">
                {/* <h2>Sản Phẩm Của Cửa Hàng</h2> */}
                <div className="product-list">
                    {shop.products.map((ProductShop) => (
                        <ProductCard
                            key={ProductShop['id-product']}
                            title={ProductShop['title-product']}
                            image={ProductShop['image-product'][0]}
                            priceDiscount={ProductShop.colorOptions[0].pricediscount}
                            name={ProductShop['title-product']}
                            quantitySold={ProductShop.quantitySold}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
