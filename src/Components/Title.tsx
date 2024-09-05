import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
export default function MainBanner() {
    return (
        <div className="flex-auto h-64 mb-4">
            <div className="mx-auto max-w-[1200px] h-full w-full">
                <div className="flex min-h-[235px] max-h-[235px] h-full w-full">
                    <div className="flex justify-center flex-grow-[2] flex-shrink-[1] basis-0 h-full mr-[-7px] w-3/5">
                        <Carousel data-bs-theme="gray">
                            <Carousel.Item>
                                <Link to={'/'}>
                                    <img className="d-block w-full" src="/images/Group-8.png" alt="First slide" />
                                </Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to={'/'}>
                                    <img className="d-block w-full" src="/images/Group-8.png" alt="Second slide" />
                                </Link>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="grow-[1] shrink-[1] basis-0 flex flex-col items-end ml-[.3125rem] h-full m-0 w-2/5">
                        <Link to={'/'}>
                            <img className="h-[95%]" src="/images/Group-8.png" alt="" />
                        </Link>

                        <Link to={'/'} className="flex items-end">
                            <img className="h-[95%]" src="/images/Group-8.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
