import React, { useState } from 'react';
import './index.scss';
import ActiveStar from '../../assets/active-star.svg';
import InactiveStar from '../../assets/inactive-star.svg';

function Rating({ currentRating }) {
  const stars = [];
  const maxRating = 5;
  let computedRating;

  computedRating = parseInt(currentRating);
  if (isNaN(computedRating)) {
    computedRating = 0;
  }

  for (let index = 0; index < maxRating; index++) {
    stars.push(
      <img
        key={`rating-${index + 1}`}
        src={index + 1 <= computedRating ? ActiveStar : InactiveStar}
        alt="Note"
      />,
    );
  }

  return <div className="rating-stars">{stars}</div>;
}

export default Rating;
