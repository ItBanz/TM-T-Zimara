import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Login.css';

export default function Login() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    return (
        <>
            <div className="Login-Container">
                <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`} id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Đăng Ký</h1>
                            <div className="social-container">
                                <a href="#" className="social">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#" className="social">
                                    <FontAwesomeIcon icon={faGooglePlusG} />
                                </a>
                                <a href="#" className="social">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                            <input type="text" placeholder="Họ" />
                            <input type="text" placeholder="Tên" />
                            <input type="text" placeholder="Tên Đăng Nhập" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Mật Khẩu" />
                            <button>Đăng Ký</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Đăng Nhập</h1>
                            <div className="social-container">
                                <a href="#" className="social">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#" className="social">
                                    <FontAwesomeIcon icon={faGooglePlusG} />
                                </a>
                                <a href="#" className="social">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Mật Khẩu" />
                            <button className="Login">Đăng Nhập</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Chào Mừng</h1>
                                <p>Đăng nhập để có trải nghiệm tốt nhất</p>
                                <button className="ghost" onClick={handleSignInClick}>
                                    Đăng Nhập
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Chào Mừng</h1>
                                <p>Bắt Đầu Trải Nghiệm Bằng Việc Đăng Ký</p>
                                <button className="ghost" onClick={handleSignUpClick}>
                                    Đăng Ký
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
