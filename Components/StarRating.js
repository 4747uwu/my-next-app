import React from 'react';
import { StarFilledIcon, StarOutlineIcon } from './icons/AudienceIcons'; // Adjust path as needed

const StarRating = ({ ratingValue, maxStars = 5 }) => {
  const fullStars = Math.floor(ratingValue);
 

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[...Array(maxStars)].map((_, index) => {
          if (index < fullStars) {
            return <StarFilledIcon key={`star-filled-${index}`} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />;
          }
         
          return <StarOutlineIcon key={`star-outline-${index}`} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />;
        })}
      </div>
      <span className="ml-1.5 text-sm font-semibold text-gray-700">{ratingValue.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;