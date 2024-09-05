import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import ThumbnailGallery from '../Components/ThumbnailGallery';
import PercentageCalculator from '../Components/Props';
import StarRating from '../Components/StarRating';
import ProductList from '../Components/ProductList';

import '../Styles/ProductDetail.css';

interface ColorOption {
    color: string;
    price: string;
    pricediscount: string;
    sizes: { size: string; quantity: number }[];
    maxQuantity: number;
}

interface Product {
    shop?: {
        name: string;
        logo: string;
        rating: string;
        products: number;
        responseRate: string;
        joinTime: string;
        followers: string;
    };
    id: number;
    title: string;
    name: string;
    images: string[];
    rate: string;
    evaluate: string;
    selling: string;
    colorOptions: ColorOption[];
    category: string;
    promotionalQuantity: number;
    remainingStock: number;
    shippingFrom: string;
    description: string[];
    comments: Comment[];
}

interface Comment {
    id: number;
    username: string;
    content: string;
    date: string;
    ratingcomment: number;
    images?: string[];
    sellerfeedback: string;
}

const productData: Product[] = [
    {
        id: 1,
        shop: {
            name: 'Fuzzy Sneaker',
            logo: 'https://down-vn.img.susercontent.com/file/3b87d408bbcbe092ab38ad2c14c6e6c3_tn',
            rating: '14.9k',
            products: 82,
            responseRate: '95%',
            joinTime: '16 tháng trước',
            followers: '81.5k',
        },
        title: '[Cam Kết Chính Hãng] Giày Onitsuka Tiger Mexico 66 Đủ Mẫu Mới Nhất Cho Nam và Nữ Hàng Chuẩn Auth-Bao Check',
        name: '[Cam Kết Chính Hãng] Giày Onitsuka Tiger Mexico 66 Đủ Mẫu Mới Nhất Cho Nam và Nữ Hàng Chuẩn Auth-Bao Check',
        images: [
            'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxr3klk05gbfc1_tn',
            'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxr3klk06v2x1f_tn',
            'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxr3klk0kwkbb1_tn',
            'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxr3klk089nd14_tn',
            'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx2rxar1bj6he7_tn',
        ],
        rate: '3',
        evaluate: '1,7 Đánh Giá',
        selling: '8,7k Lượt Bán',
        colorOptions: [
            {
                color: 'Cream',
                price: '3.000.000',
                pricediscount: '1.030.000',
                sizes: [
                    { size: '36', quantity: 20 },
                    { size: '37', quantity: 30 },
                    { size: '38', quantity: 50 },
                ],
                maxQuantity: 100,
            },
            {
                color: 'Cream Black',
                price: '2.100.000',
                pricediscount: '1.130.000',
                sizes: [
                    { size: '36.5', quantity: 15 },
                    { size: '37.5', quantity: 25 },
                    { size: '38.5', quantity: 40 },
                ],
                maxQuantity: 80,
            },
            {
                color: 'Birch Green',
                price: '2.200.000',
                pricediscount: '1.230.000',
                sizes: [
                    { size: '39', quantity: 30 },
                    { size: '40', quantity: 20 },
                    { size: '41', quantity: 10 },
                ],
                maxQuantity: 60,
            },
            {
                color: 'Brich Black',
                price: '2.300.000',
                pricediscount: '1.330.000',
                sizes: [
                    { size: '38', quantity: 25 },
                    { size: '39', quantity: 30 },
                    { size: '40', quantity: 15 },
                ],
                maxQuantity: 70,
            },
            {
                color: 'Blue',
                price: '2.400.000',
                pricediscount: '1.430.000',
                sizes: [
                    { size: '36', quantity: 40 },
                    { size: '37', quantity: 35 },
                    { size: '38', quantity: 50 },
                    { size: '39', quantity: 20 },
                ],
                maxQuantity: 100,
            },
            {
                color: 'Green',
                price: '2.500.000',
                pricediscount: '1.530.000',
                sizes: [
                    { size: '37', quantity: 20 },
                    { size: '38', quantity: 25 },
                    { size: '39', quantity: 30 },
                    { size: '40', quantity: 15 },
                    { size: '41', quantity: 10 },
                    { size: '42', quantity: 5 },
                ],
                maxQuantity: 70,
            },
        ],

        category: 'Shopee > Giày Dép Nam > Giày Thể Thao/Sneakers',
        promotionalQuantity: 360,
        remainingStock: 70828,
        shippingFrom: 'Hà Nội',
        description: [
            'Chào mừng bạn đến vơi FUZZY Shop',
            'Cam Kết:-- Đồng kiểm khi nhận hàng -- Đổi trả (sản phẩm còn nguyên tem, tag, box, chưa qua sử dụng).',
            '-- Chọn size quý khách vui lòng đi đúng size, tăng lên 1 size so với size giày bth khi ( chân to ngang hoặc mu chân dày)',
            '-- Đa dạng mẫu mã, giá SALE RẺ nhất thị trường. Full box, tem, tag, giấy gói.',
            '-- Màu sản phẩm có thể sẽ chênh lệch thực tế một phần nhỏ, do ảnh hưởng về độ lệch màu của ánh sáng nhưng vẫn đảm bảo chất lượng.',
            '-- Cam kết chất lượng, hoàn tiền 100% khi không hài lòng về sản phẩm.',
            '-- Thời gian vận chuyển 3-5 ngày.',
            'Thông tin sản phẩm',
            '✪ Chất Liệu Upper: Da Lộn',
            '✪ Chất Liệu Đế: Cao Su',
            '✪ Kiểu Dáng : Cổ Thấp ( Low)',
            '✪ Tình Trạng: Mới 100% Fullbox',
            '𝐇𝐮̛𝐨̛́𝐧𝐠 𝐃𝐚̂̃𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 : -',
            '⛔ Không dùng hóa chất hay bột giặt có hoạt tính tẩy rửa mạnh ',
            '⛔ Không dùng bàn chải cứng để vệ sinh giày sẽ làm hư',
            '⛔ Không đi mưa ngâm nước lâu, không phơi giày trực tiếp dưới ngoài trời nắng gắt',
            '⛔Với các sàn phẩm sáng màu, nên vệ sinh thường xuyên',
            '⛔ Tránh cất giữ giày khi còn ướt, ẩm..',
            '1. Điều kiện đổi trả sản phẩm:',
            '- Sản phẩm mới 100%.',
            '- Sản phẩm còn nguyên tag, tem mác và túi zip',
            'Nếu sản phẩm không đúng quy định đổi trả, Shop xin phép không nhận.',
            '- Trường hợp sản phẩm hết size cần đổi thì khách đổi sang màu khác hoặc mẫu khác có giá bằng hoặc cao hơn',
            '2. Phí ship:',
            '- Phí ship đổi trả size khách thanh toán giúp Shop.',
            '- Phí ship đổi trả sản phẩm lỗi, Shop sẽ thanh toán.',
            '✅Hãy LIÊN HỆ VỚI CHÚNG TÔI. Chúng tôi sẽ tận tình giúp bạn giải quyết các vấn đề về thông tin sản phẩm và những thông tin khác ❌ ',
            'XIN đừng vội đánh giá 1 sao hãy LIÊN HỆ với SHOP qua kênh chat hoặc liên hệ qua số hotline trên đơn hàng, chúng tôi CAM KẾT phục vụ quý khách đến khi HÀI LÒNG 24/7',
        ],
        comments: [
            {
                id: 1233,
                username: 'lekhanggpn50121',
                content:
                    'Sản phẩm y hình. Hộp nguyên vẹn không méo mó. Shop nhiệt tình. Em rất hài lòng về sản phẩm. Sẽ ủng hộ shop lần sau.',
                date: '2024-07-13 00:51',
                ratingcomment: 4,
                images: [
                    'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lxoefq3p9tjtb2.webp',
                    'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lxoefq3pe1957e.webp',
                    'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lxoefq3pfftlda.webp',
                ],
                sellerfeedback:
                    'Cảm ơn bạn rất nhiều vì đã dành cho chúng tôi 5 sao! Chúng tôi rất vui khi biết rằng bạn hài lòng với sản phẩm của mình. Mong sớm được phục vụ bạn lần nữa!',
            },
            {
                id: 1234,
                username: 'thuongnhan123',
                content:
                    'Giày đẹp và chất lượng tốt. Tuy nhiên, thời gian giao hàng hơi lâu một chút. Nhưng overall là hài lòng với sản phẩm và dịch vụ của shop.',
                date: '2024-07-20 15:22',
                ratingcomment: 4,
                images: [
                    'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lxoefq3p9tjtb2.webp',
                ],
                sellerfeedback:
                    'Cảm ơn bạn đã phản hồi. Chúng tôi xin lỗi về sự chậm trễ trong giao hàng và sẽ cải thiện dịch vụ của mình. Rất vui khi bạn hài lòng với sản phẩm!',
            },
            {
                id: 1235,
                username: 'minhchau123',
                content:
                    'Sản phẩm đúng như mô tả. Rất hài lòng với chất lượng và màu sắc của giày. Shop có dịch vụ khách hàng tốt.',
                date: '2024-08-01 10:15',
                ratingcomment: 5,
                images: [
                    'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lxoefq3p9tjtb2.webp',
                ],
                sellerfeedback:
                    'Cảm ơn bạn đã dành thời gian để đánh giá và chia sẻ trải nghiệm của mình. Chúng tôi rất vui khi bạn hài lòng với sản phẩm và dịch vụ!',
            },
            {
                id: 1236,
                username: 'nguyenbichthuy',
                content:
                    'Hơi thất vọng vì sản phẩm không đúng kích thước như mô tả. Dịch vụ khách hàng của shop rất tốt và nhanh chóng xử lý vấn đề.',
                date: '2024-08-10 20:45',
                ratingcomment: 3,
                images: [],
                sellerfeedback:
                    'Chúng tôi xin lỗi vì sự bất tiện về kích thước sản phẩm. Chúng tôi sẽ xem xét lại mô tả và cải thiện để tránh những vấn đề như vậy trong tương lai.',
            },
            {
                id: 1237,
                username: 'hoangtuong123',
                content:
                    'Giày chất lượng cao, rất thoải mái khi đi. Tuy nhiên, giá cả có hơi cao một chút so với mặt bằng chung.',
                date: '2024-08-15 14:30',
                ratingcomment: 4,
                images: [
                    'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lxoefq3p9tjtb2.webp',
                ],
                sellerfeedback:
                    'Cảm ơn bạn đã phản hồi. Chúng tôi luôn cố gắng cung cấp sản phẩm chất lượng tốt nhất. Hy vọng bạn sẽ tiếp tục ủng hộ chúng tôi!',
            },
            {
                id: 1238,
                username: 'hoangtuong123',
                content:
                    'Giày chất lượng cao, rất thoải mái khi đi. Tuy nhiên, giá cả có hơi cao một chút so với mặt bằng chung.',
                date: '2024-08-15 14:30',
                ratingcomment: 4,
                images: [
                    'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lxoefq3p9tjtb2.webp',
                ],
                sellerfeedback:
                    'Cảm ơn bạn đã phản hồi. Chúng tôi luôn cố gắng cung cấp sản phẩm chất lượng tốt nhất. Hy vọng bạn sẽ tiếp tục ủng hộ chúng tôi!',
            },
        ],
    },
];

const discountCodes = ['Giảm 5k', 'Giảm ₫10k', 'Giảm ₫50k', 'Giảm ₫100k'];

const ProductDetail: React.FC = () => {
    const { id } = useParams();
    const product = productData.find((p) => p.id === parseInt(id!));

    if (!product) {
        return <div>Product not found</div>;
    }

    const [selectedColor, setSelectedColor] = useState<ColorOption>(
        product.colorOptions[0],
    );
    const [selectedSize, setSelectedSize] = useState<string>(
        selectedColor.sizes[0].size,
    );
    const [quantity, setQuantity] = useState<number>(1);

    const price = parseInt(selectedColor.price.replace(/\./g, ''));
    const pricediscount = parseInt(
        selectedColor.pricediscount.replace(/\./g, ''),
    );

    const handleColorChange = (color: string) => {
        const newColorOption = product.colorOptions.find(
            (option) => option.color === color,
        );
        if (newColorOption) {
            setSelectedColor(newColorOption);
            setSelectedSize(newColorOption.sizes[0].size); // Reset size when color changes
            setQuantity(1); // Reset quantity when color changes
        }
    };

    const handleSizeChange = (size: string) => {
        setSelectedSize(size);
    };

    const increaseQuantity = () => {
        const sizeQuantity =
            selectedColor.sizes.find((s) => s.size === selectedSize)
                ?.quantity || 0;
        if (quantity < sizeQuantity) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQuantityChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const trimmedValue = event.target.value.replace(/^0+/, '');
        const value = trimmedValue === '' ? 0 : parseInt(trimmedValue, 10);

        const sizeQuantity =
            selectedColor.sizes.find((s) => s.size === selectedSize)
                ?.quantity || 0;
        if (value >= 0 && value <= sizeQuantity) {
            setQuantity(value);
        } else if (value > sizeQuantity) {
            setQuantity(sizeQuantity);
        }
    };

    const rating = parseFloat(product.rate);

    const commentsPerPage = 3; // Số lượng bình luận mỗi trang
    const [currentPage, setCurrentPage] = useState<number>(1);

    const paginateComments = (
        comments: Comment[],
        page: number,
        perPage: number,
    ) => {
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        return comments.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(product.comments.length / commentsPerPage);
    const currentComments = paginateComments(
        product.comments,
        currentPage,
        commentsPerPage,
    );

    return (
        <>
            <Header />
            <div className="product-detail-site">
                <div className="row g-0 product-detail-container">
                    <div className="col-5 p-2 product-detail-image">
                        <ThumbnailGallery images={product.images} />
                    </div>
                    <div className="col-7 p-2 ps-4 product-detail-info">
                        <h1>{product.name}</h1>

                        <div className="row g-0 pt-2 RES">
                            <div className="col RES-container">
                                <p className="product-detail-description">
                                    <StarRating rating={rating} />
                                </p>
                            </div>
                            <div className="col ps-4 RES-container">
                                <p className="product-detail-description">
                                    {product.evaluate}
                                </p>
                            </div>
                            <div className="col ps-4 RES-container">
                                <p className="product-detail-description">
                                    {product.selling}
                                </p>
                            </div>
                        </div>
                        <div className="row price-productdetail">
                            <div className="col-md-auto price-nm">
                                <p className="product-detail-price">
                                    {selectedColor.price} VNĐ
                                </p>
                            </div>
                            <div className="col price-ds">
                                <p className="product-detail-price-discound">
                                    {selectedColor.pricediscount} VNĐ
                                </p>
                            </div>
                            <div className="col col-lg-2 Propys">
                                <PercentageCalculator
                                    number1={pricediscount}
                                    number2={price}
                                />
                            </div>
                        </div>
                        <div className="discount-codes-container">
                            <p>Mã Giảm Giá Của Shop</p>
                            <div className="discount-codes">
                                {discountCodes.map((code, index) => (
                                    <button
                                        key={index}
                                        className="discount-code"
                                    >
                                        {code}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="product-detail-color-selection">
                            <p>Màu Sắc:</p>
                            {product.colorOptions.map((option) => (
                                <button
                                    key={option.color}
                                    onClick={() =>
                                        handleColorChange(option.color)
                                    }
                                    className={
                                        selectedColor.color === option.color
                                            ? 'selected'
                                            : ''
                                    }
                                >
                                    {option.color}
                                </button>
                            ))}
                        </div>
                        <div className="product-detail-size-selection">
                            <p>Kích Thước:</p>
                            <div className="size-options">
                                {selectedColor.sizes.map((size) => (
                                    <button
                                        key={size.size}
                                        onClick={() =>
                                            handleSizeChange(size.size)
                                        }
                                        className={
                                            selectedSize === size.size
                                                ? 'selected'
                                                : ''
                                        }
                                    >
                                        {size.size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="row g-0 pt-4 product-detail-quantity">
                            <div className="col col-lg-3 title-quality">
                                <p>Số Lượng:</p>
                            </div>
                            <div className="col quantity-controls">
                                <button onClick={decreaseQuantity}>-</button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min="1"
                                    max={
                                        selectedColor.sizes.find(
                                            (s) => s.size === selectedSize,
                                        )?.quantity || 0
                                    }
                                />
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                            <div className="col detail-quality-info">
                                <p className="product-detail-quantity-info">
                                    {`${selectedColor.sizes.find((s) => s.size === selectedSize)?.quantity || 0} sản phẩm có sẵn`}
                                </p>
                            </div>
                        </div>
                        <div className="button-container-productdetail">
                            <button className="add-to-cart-button-productdetail">
                                <i className="fas fa-shopping-cart"></i> Thêm
                                Vào Giỏ Hàng
                            </button>
                            <button className="buy-now-button-productdetail">
                                Mua Ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0 shop-infor">
                <div className="col-4 Logo-Shop-Product-Detail">
                    <div className="row">
                        <div className="col-5 LSPD-Left">
                            <img
                                src={product.shop?.logo}
                                alt="Logo Shop"
                                className="shop-logo"
                            />
                        </div>
                        <div className="col-7 LSPD-Right">
                            <h3 className="pb-2">{product.shop?.name}</h3>
                            <div className="row BTN-LSPD">
                                <div className="col">
                                    <button className="chat-now-button">
                                        Chat Ngay
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="view-shop-button">
                                        Xem Shop
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7 Infor-Shop-Product-Detail">
                    <div className="row">
                        <div className="col-4 p-2 ISPD">
                            <p>
                                <span>Đánh Giá: </span>
                                {product.shop?.rating}
                            </p>
                        </div>
                        <div className="col-4 p-2 ISPD">
                            <p>
                                <span>Sản Phẩm: </span>
                                {product.shop?.products}
                            </p>
                        </div>
                        <div className="col-4 p-2 ISPD">
                            <p>
                                <span>Tỉ Lệ Phản Hồi: </span>
                                {product.shop?.responseRate}
                            </p>
                        </div>
                        <div className="col-4 p-2 ISPD">
                            <p>
                                <span>Tham Gia: </span>
                                {product.shop?.joinTime}
                            </p>
                        </div>
                        <div className="col-4 p-2 ISPD">
                            <p>
                                <span>Người Theo Dõi: </span>
                                {product.shop?.followers}
                            </p>
                        </div>
                        <div className="col-4 p-2 ISPD">
                            <p>
                                <span>Người Theo Dõi: </span>
                                {product.shop?.followers}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-3 product-detail-text">
                <div className="row container-product-detail-text">
                    <div className="p-5 col-10 CPDT-Left">
                        <div className="chitietsanpham">
                            <div className="pb-5 tieude-chitietsanpham">
                                <h2>Chi Tiết Sản Phẩm</h2>
                            </div>
                            <div className="noidung-chitietsanpham">
                                <p className="row pb-3 NDCTSP">
                                    <span className="col-4 PNDCTSP">
                                        Danh Mục:{' '}
                                    </span>{' '}
                                    {product.category}
                                </p>
                                <p className="row pb-3 NDCTSP">
                                    <span className="col-4 PNDCTSP">
                                        Số lượng hàng khuyến mãi:{' '}
                                    </span>{' '}
                                    {product.promotionalQuantity}
                                </p>
                                <p className="row pb-3 NDCTSP">
                                    <span className="col-4 PNDCTSP">
                                        Số sản phẩm còn lại:{' '}
                                    </span>{' '}
                                    {product.remainingStock}
                                </p>
                                <p className="row pb-3 NDCTSP">
                                    <span className="col-4 PNDCTSP">
                                        Gửi từ:{' '}
                                    </span>{' '}
                                    {product.shippingFrom}
                                </p>
                            </div>
                        </div>
                        <div className="motasanpham">
                            <div className="pb-5 tieude-chitietsanpham">
                                <h2>Mô Tả Sản Phẩm</h2>
                            </div>
                            <div className="noidung-motasanpham">
                                {product.description.length > 0 ? (
                                    <ul>
                                        {product.description.map(
                                            (desc, index) => (
                                                <li key={index}>{desc}</li>
                                            ),
                                        )}
                                    </ul>
                                ) : (
                                    <p>Chưa có mô tả cho sản phẩm.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="p-5 col-2 CPDT-Right"></div>
                </div>
            </div>
            <div className="comment-container">
                <div className="px-4 pt-5 tieude-chitietsanpham">
                    <h2>Đánh Giá Sản Phẩm</h2>
                </div>
                {currentComments.map((comment) => (
                    <div key={comment.id} className="comment-section">
                        <div className="pt-4 px-4 comment-header">
                            <strong>{comment.username}</strong> -{' '}
                            <span>{comment.date}</span>
                            <div className="pt-2 ratting-commnet">
                                <StarRating rating={comment.ratingcomment} />
                            </div>
                        </div>
                        <div className="px-4 comment-body">
                            <p className="py-2">{comment.content}</p>
                            <div className="py-2 comment-images">
                                {comment.images &&
                                    comment.images.length > 0 && (
                                        <div className="comment-images">
                                            {comment.images.map(
                                                (image, index) => (
                                                    <img
                                                        key={index}
                                                        src={image}
                                                        alt={`Comment image ${index}`}
                                                    />
                                                ),
                                            )}
                                        </div>
                                    )}
                            </div>
                        </div>
                        <div className="my-2 seller-feedback">
                            <div className="py-2 container-seller-feedback">
                                <h4 className="py-2 px-3">
                                    <strong>Phản hồi của người bán</strong>
                                </h4>
                                <h4 className="pb-2 px-3">
                                    {comment.sellerfeedback}
                                </h4>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="pagination">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="pagination-button"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="pagination-button"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div className="SanPhamLienQuan">
                <div className="pt-5 Title-Product-Container">
                    <h3>SẢN PHẨM LIÊN QUAN</h3>
                </div>
                <ProductList></ProductList>
            </div>
        </>
    );
};

export default ProductDetail;
