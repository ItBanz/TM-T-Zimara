import React, { useState } from 'react';
import '../Styles/Components/TopSearch.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Time from './Time';

const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const cardData = [
    {
        id: 1,
        title: 'BÁN 15K+ / THÁNG',
        description: 'MÁY CẠO RÂU',
        image: 'https://down-vn.img.susercontent.com/file/d4753cf42de9eafe152c5ca32b862076',
    },
    {
        id: 2,
        title: '370.000 VNĐ',
        description: 'Description for card 2',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 3,
        title: '370.000 VNĐ',
        description: 'Description for card 3',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 4,
        title: '370.000 VNĐ',
        description: 'Description for card 4',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 5,
        title: '370.000 VNĐ',
        description: 'Description for card 5',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 6,
        title: '370.000 VNĐ',
        description: 'Description for card 6',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 7,
        title: '370.000 VNĐ',
        description: 'Description for card 7',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 8,
        title: '370.000 VNĐ',
        description: 'Description for card 8',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 9,
        title: '370.000 VNĐ',
        description: 'Description for card 8',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 10,
        title: '370.000 VNĐ',
        description: 'Description for card 8',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 11,
        title: '370.000 VNĐ',
        description: 'Description for card 8',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 12,
        title: '370.000 VNĐ',
        description: 'Description for card 8',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 7,
        title: '370.000 VNĐ',
        description: 'Description for card 7',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 8,
        title: '370.000 VNĐ',
        description: 'Description for card 8',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 9,
        title: '370.000 VNĐ',
        description: 'Description for card 8',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 10,
        title: '370.000 VNĐ',
        description: 'Description for card 8',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 11,
        title: '370.000 VNĐ',
        description: 'Description for card 8',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: 12,
        title: '370.000 VNĐ',
        description: 'Description for card 8',
        image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
];

const TopSearch: React.FC = () => {
    return (
        <>
            <div className="TopSearch">
                <div className="title-TopSearch">
                    <div className="title-TopSearch-container">
                        <h4>Tìm Kiếm Hàng Đầu</h4>
                    </div>
                </div>
                <div className="slide-card-container">
                    <Slider {...sliderSettings}>
                        {cardData.map((card) => (
                            <div key={card.id} className="slide-card-TopSearch">
                                <div className="image-site">
                                    <img src={card.image} alt={card.title} className="slide-card-image" />
                                </div>
                                <h5>{card.title}</h5>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default TopSearch;
