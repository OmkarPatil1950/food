import React, { useState } from 'react';

const StarRatingInput = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starStyle = {
        color: i <= rating ? 'yellow' : 'gray',
        cursor: 'pointer',
        fontSize: '30px'
      };

      stars.push(
        <span
          key={i}
          style={starStyle}
          onClick={() => handleStarClick(i)}
          
        >
            &#9733;
        </span>
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRatingInput;
