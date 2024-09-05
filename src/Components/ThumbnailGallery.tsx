import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Components/ThumbnailGallery.css';

interface ThumbnailSliderProps {
    images: string[];
}

const ThumbnailSlider: React.FC<ThumbnailSliderProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<string>(images[0]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        afterChange: (index: number) => setSelectedImage(images[index]),
    };

    return (
        <div className="thumbnail-slider">
            <div className="main-image">
                <img src={selectedImage} alt="Selected" />
            </div>
            <Slider {...settings} className="thumbnail-carousel">
                {images.map((image, index) => (
                    <div key={index} className="thumbnail-slide">
                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ThumbnailSlider;
