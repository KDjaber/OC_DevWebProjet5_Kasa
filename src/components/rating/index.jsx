import React, { useState } from 'react';
import './index.scss';
import ActiveStar from '../../assets/active-star.svg';
import InactiveStar from '../../assets/inactive-star.svg';

function Rating() {
  const [rating, setRating] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const stars = [];
  const maxRating = 5;

  for (let index = 0; index < maxRating; index++) {
    const currentRating = index + 1;
    stars.push(
      <label key={index}>
        <input
          key={index}
          type="radio"
          name={`Note de ${currentRating}/${maxRating}`}
          value={index + 1}
          onChange={() => setRating(currentRating)}
        />
        <img
          src={
            currentRating <= (hoveredIndex || rating)
              ? ActiveStar
              : InactiveStar
          }
          alt="Note"
          onMouseEnter={() => setHoveredIndex(currentRating)}
          onMouseLeave={() => setHoveredIndex(null)}
          onChange={() => setRating(currentRating)}
        />
      </label>,
    );
  }

  return <div className="rating-stars">{stars}</div>;
}

export default Rating;
