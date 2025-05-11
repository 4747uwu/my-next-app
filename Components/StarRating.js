// src/components/StarRating.js
import React from 'react';
import { StarFilledIcon, StarOutlineIcon } from './icons/AudienceIcons'; // Adjust path as needed

const StarRating = ({ ratingValue, maxStars = 5 }) => {
  const fullStars = Math.floor(ratingValue);
  // The image seems to show 4 full stars and one outline for 4.2, not a half star.
  // So, we'll show `fullStars` and the rest as outlines up to `maxStars`.

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[...Array(maxStars)].map((_, index) => {
          if (index < fullStars) {
            return <StarFilledIcon key={`star-filled-${index}`} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />;
          }
          // For 4.2, image shows 4 filled, 1 outline.
          // If rating was 4.5 or 4.8, it still shows 4 filled.
          // The design implies the 5th star is outline if not a full 5.0.
          return <StarOutlineIcon key={`star-outline-${index}`} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />;
        })}
      </div>
      <span className="ml-1.5 text-sm font-semibold text-gray-700">{ratingValue.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;