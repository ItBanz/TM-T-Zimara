import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../Styles/Components/Mall.css';

const sliderLeftM = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const cardDataMallL = [
    { id: 1, image: 'https://cf.shopee.vn/file/sg-11134258-7rdyb-lzga0s3ulqcq28' },
    { id: 2, image: 'https://cf.shopee.vn/file/sg-11134258-7rdxj-lzga79naug16d9' },
    { id: 3, image: 'https://cf.shopee.vn/file/sg-11134258-7rdve-lzga0sia0lsyec' },
];

export default function Mall() {
    return (
        <>
            <div className="Mall-Contract">
                <div className="row g-0 Mall-Container">
                    <div className="col-4 LeftM-container">
                        <Slider {...sliderLeftM}>
                            {cardDataMallL.map((card) => (
                                <div key={card.id} className="slide-card-Mall-L">
                                    <img
                                        src={card.image}
                                        alt={`Slide ${card.id}`}
                                        className="slide-card-image-Mall-L"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="col-8 RightM-container">{/* Content for RightM-container */}</div>
                </div>
            </div>
        </>
    );
}
