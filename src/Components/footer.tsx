import React from 'react';
import '../Styles/Components/footer.css';
import { Iconoir } from 'iconoir-react';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>Thông Tin</h6>
                        <p className="text-justify">
                            Zimara là trang thương mại điện tử cung cấp đa dạng các sản phẩm từ thời trang, phụ kiện đến
                            đồ gia dụng và chăm sóc cá nhân. Với mục tiêu đáp ứng mọi nhu cầu mua sắm của khách hàng,
                            Zimara luôn cập nhật những xu hướng mới nhất và mang đến các mặt hàng chất lượng cao. Giao
                            diện trang web trực quan và dễ sử dụng giúp người dùng nhanh chóng tìm kiếm sản phẩm yêu
                            thích, đồng thời tận hưởng những ưu đãi đặc biệt. Zimara cam kết mang lại trải nghiệm mua
                            sắm trực tuyến tiện lợi, nhanh chóng và an toàn.
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Chăm Sóc Khách hàng</h6>
                        <ul className="footer-links">
                            <li>
                                <a href="">Trung Tâm Trợ Giúp</a>
                            </li>
                            <li>
                                <a href="">Hương Dẫn Mua Hàng</a>
                            </li>
                            <li>
                                <a href="">Hướng Dẫn Bán Hàng</a>
                            </li>
                            <li>
                                <a href="">Thanh Toán</a>
                            </li>
                            <li>
                                <a href="">Vận Chuyển</a>
                            </li>
                            <li>
                                <a href="">Liên Hệ Zimara</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Về Zimara</h6>
                        <ul className="footer-links">
                            <li>
                                <a href="">Giới Thiệu Về Zimara</a>
                            </li>
                            <li>
                                <a href="">Tuyển Dụng</a>
                            </li>
                            <li>
                                <a href="">Điều Khoản</a>
                            </li>
                            <li>
                                <a href="">Chính Hãng</a>
                            </li>
                            <li>
                                <a href="">Liên Hệ Với Truyền Thông</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container-bottom">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                            Copyright &copy; 2024 All Rights Reserved by <a href="#">Zimara</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li>
                                <a className="facebook" href="#">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a className="twitter" href="#">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a className="dribbble" href="#">
                                    <i className="fa-brands fa-dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a className="linkedin" href="#">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
