import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCategories() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const number = 15;
    const item = 25;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + number, item - number));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - number, 0));
    };

    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (listRef.current) {
            const scrollAmount = listRef.current.clientWidth * (currentIndex / number);
            listRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    }, [currentIndex]);

    return (
        <div className="flex-auto mb-4">
            <div className="mx-auto max-w-[1200px]">
                <div className="min-h-[18.875rem]  bg-white">
                    <div className="pt-0">
                        <header className="text-lg">Danh mục</header>
                        <div>
                            <div className="h-full relative w-full">
                                <div className="h-full overflow-hidden touch-pan-y" ref={listRef}>
                                    <ul className="h-[302px] flex flex-col flex-wrap content-start relative m-0 p-0 ">
                                        {Array.from({ length: item }).map((_, index) => (
                                            <li
                                                key={index}
                                                className="float-none h-[                                        151px] w-[120px] touch-pan-y relative"
                                            >
                                                <Link to={''}>
                                                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
                                                        <div className="flex-shrink-[1] w-[70%] h-[70%] mt-[10%]">
                                                            <div className="h-full relative">
                                                                <img
                                                                    className="bg-contain bg-no-repeat"
                                                                    src="/images/categories1.png"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="w-[90%] h-[3.125rem] text-center">
                                                            <span className="text-black text-opacity-80 text-sm no-underline leading-5 h-10 mb-2.5 break-words overflow-hidden truncate block">
                                                                Thời Trang
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button
                                    onClick={handlePrev}
                                    className={`${currentIndex === 0 ? 'hidden' : ''} absolute top-1/2 left-0 rounded-full border-solid border-2 w-10 h-10 flex justify-center items-center opacity-100 visible translate-x-[calc(-50%+0px)] mt-[-12.5px]`}
                                >
                                    <FontAwesomeIcon icon="arrow-left" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className={`${currentIndex >= item - number ? 'hidden' : ''} absolute top-1/2 right-0 rounded-full border-solid border-2 w-10 h-10 flex justify-center items-center opacity-100 visible translate-x-[calc(50%+0px)] mt-[-12.5px]`}
                                >
                                    <FontAwesomeIcon icon="arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
