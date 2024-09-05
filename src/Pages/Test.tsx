import React, { useState } from 'react';
import '../Styles/test.css';
import Header from '../Components/Header';

export default function Test() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Mảng chứa các thẻ div với nội dung khác nhau
    const contentDivs = [
        <div key="1">
            <div className=""></div>
        </div>,
        <div key="2">Nội dung cho Item 2</div>,
        <div key="3">Nội dung cho Item 3</div>,
        <div key="4">Nội dung cho Item 4</div>,
        <div key="5">Nội dung cho Item 5</div>,
        <div key="6">Nội dung cho Item 1 cccc</div>,
        <div key="7">Nội dung cho Item 2</div>,
        <div key="8">Nội dung cho Item 3</div>,
        <div key="9">Nội dung cho Item 4</div>,
        <div key="10">Nội dung cho Item 5</div>,
        <div key="11">Nội dung cho Item 4</div>,
        <div key="12">Nội dung cho Item 5</div>,
    ];

    // Mảng chứa tên và icon cho từng item
    const items = [
        { name: 'Bảng Điều Khiển', icon: 'fas fa-tachometer-alt' },
        { name: 'Đặt Hàng', icon: 'fas fa-cart-plus' },
        { name: 'Khách Hàng', icon: 'fas fa-users' },
        { name: 'Tin Nhắn', icon: 'fas fa-envelope' },
        { name: 'Sản Phẩm', icon: 'fas fa-box' },
        { name: 'Tích hợp', icon: 'fas fa-plug' },
        { name: 'Phân tích', icon: 'fas fa-chart-line' },
        { name: 'Hóa đơn', icon: 'fas fa-file-invoice' },
        { name: 'Giảm Giá', icon: 'fas fa-tags' },
        { name: 'Cài Đặt', icon: 'fas fa-cogs' },
        { name: 'Bảo Mật', icon: 'fas fa-shield-alt' },
        { name: 'Hỗ Trợ', icon: 'fas fa-life-ring' },
    ];

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="sidebar">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} onClick={() => handleClick(index)}>
                                <i className={item.icon}></i> {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content">
                    {contentDivs.map((content, index) => (
                        <div key={index} className={`content-div ${activeIndex === index ? 'visible' : 'hidden'}`}>
                            {content}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
