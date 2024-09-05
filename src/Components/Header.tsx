import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>();
    const [searchValue, setSearchValue] = useState<string>('');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleClearClick = () => {
        setSearchValue('');
    };

    const navigate = useNavigate();

    return (
        <div className="flex-auto mb-4 top-0" style={{ background: 'var(--primary-color)' }}>
            <div className="mx-auto max-w-[1200px] ">
                <div className="flex justify-center items-center h-[5.5rem] z-10">
                    <div className="flex justify-center items-center ml-4 mr-2 cursor-pointer">
                        <img className="w-48" src="/images/logo_3.png" alt="" />
                    </div>
                    <div className="flex flex-auto mx-2 h-14 relative">
                        <div className="flex flex-auto">
                            <input
                                className={`flex-auto text-black pl-4 ${!isOpen && 'rounded-full'} `}
                                placeholder="Search"
                                value={searchValue}
                                onFocus={() => setIsOpen(true)}
                                onChange={handleInputChange}
                                onBlur={() => setIsOpen(false)}
                            />
                            <button className="absolute right-0 top-2 h-10 mr-4 w-10 rounded-full bg-[#0033A0] flex items-center justify-center hover:bg-[#0025a0]">
                                <FontAwesomeIcon icon="search" color="white" />
                            </button>
                            {searchValue && (
                                <button
                                    className="absolute right-10 top-2 h-10 w-10  flex items-center"
                                    onClick={handleClearClick}
                                >
                                    <FontAwesomeIcon icon="times" color="black" />
                                </button>
                            )}
                        </div>
                    </div>
                    <nav aria-label="Account and Cart" className="mr-4 ml-2 h-full flex justify-center items-center">
                        <div className="flex flex-row ">
                            <div className="mx-2 px-2 flex items-center justify-center relative">
                                <button onClick={() => navigate('/cart')}>
                                    <FontAwesomeIcon icon="shopping-cart" size="xl" color="white" />
                                    <span className="rounded-full min-w-[15px] min-h-[15px] text-xs bottom-[60%] left-[60%] px-1 bg-yellow-400 flex items-center justify-center absolute text-[#2e2f32]">
                                        10
                                    </span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* <div className="pb-2">
          <nav className="flex items-center">
            <ul className="flex text-white text-sm">
              <li className="flex justify-center mr-4">
                <Link to={"/"}>Start selling</Link>
              </li>
              <li className="flex justify-center mr-4 ">
                <Link to={"/"}>b </Link>
              </li>
              <li className="flex justify-center mr-4">
                <Link to={"/"}>c </Link>
              </li>
            </ul>
            <div className="flex-1"></div>
            <ul className="flex text-white text-sm">
              <li className="flex items-center ml-4">
                <Link to={"/"}>Login</Link>
              </li>
              <li className="flex items-center ml-4">
                <Link to={"/"}>Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div> */}
            </div>
        </div>
    );
}
