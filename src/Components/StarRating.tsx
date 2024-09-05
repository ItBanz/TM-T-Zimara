import React from 'react';
import '../Styles/Components/StarRating.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// Ensure you have this file for styling

interface StarRatingProps {
    rating: number; // Rating number from 1 to 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    // Create an array to hold star elements
    const stars = [];

    // Calculate full, half, and empty stars
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Push full stars to the array
    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={`full-${i}`} className="fa fa-star star full-star"></i>);
    }

    // Push half star if applicable
    if (hasHalfStar) {
        stars.push(<i key="half" className="fa fa-star-half-alt star half-star"></i>);
    }

    // Push empty stars to the array
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="fa fa-star star empty-star"></i>);
    }

    return (
        <div className="star-rating">
            <span className="rating-number">{rating.toFixed(1)}</span>
            {stars}
        </div>
    );
};

export default StarRating;
