// src/components/OfferDetailCard.js
import React from 'react';
// Import your actual icons here from their location
// For example:
// import { UserPlusIcon, CubeIcon, StarIconSolid, ClockIconSolid, PercentageIcon, CurrencyRupeeIcon, LightningBoltIcon, CalendarDaysIcon } from './Icons';


// Define other local fallbacks for PercentageIcon, CurrencyRupeeIcon, LightningBoltIcon, CalendarDaysIcon
// ---

const OfferDetailCard = ({
  mainIcon,
  title,
  description,
  detailsList, // Changed from 'features' to 'detailsList' to match general usage
  iconBgClass = "bg-sky-100",
  iconColorClass = "text-sky-500",
  cardMaxWidth = "max-w-md",
  cardMinHeight = "", // e.g., "min-h-[280px]" or "lg:min-h-[320px]"
}) => {
  // Use imported icons if available, otherwise use local fallbacks
  // This logic would ideally be handled by how you structure your icon imports
  // const ActualMainIcon = mainIcon || <div className="w-6 h-6 bg-gray-300 rounded-full" />; // Placeholder if no icon

  const iconCircleDiameter = 44;
  const cardPaddingTopValue = 24; // Default for p-6. Adjust if card's primary top padding is different
  const dotSize = 6;
  const dotOffsetFromEdge = 16;
  const gapBetweenTopRightDots = 4;

  const hrLineVerticalCenter = cardPaddingTopValue + (iconCircleDiameter / 2);

  return (
    <div className={`bg-white rounded-2xl shadow-lg w-full ${cardMaxWidth} ${cardMinHeight} relative overflow-hidden flex flex-col`}>
      {/* Horizontal Line */}
      <hr
        className="absolute left-0 right-0 border-slate-200 z-0"
        style={{ top: `${hrLineVerticalCenter}px`, transform: 'translateY(-50%)' }}
      />

      {/* Content Padding applied here */}
      <div className="p-6 md:p-8 relative flex flex-col flex-grow"> {/* flex-grow for height consistency */}
        {/* Top Section with Main Icon */}
        <div className="relative mb-5 md:mb-6"> {/* Adjusted margin for consistency */}
          <div className="relative z-10 inline-block">
            <div className={`${iconBgClass} p-2.5 rounded-full w-11 h-11 flex items-center justify-center`}>
              {mainIcon && React.cloneElement(mainIcon, { className: `w-6 h-6 ${iconColorClass}` })}
            </div>
          </div>
        </div>

        {/* Main Text Content */}
        <div className="space-y-3 md:space-y-4 relative z-10 flex flex-col flex-grow">
          <h2 className="text-2xl font-semibold text-slate-800"> {/* Adjusted font-size/weight slightly */}
            {title}
          </h2>
          {description && (
            <p className="text-slate-500 text-base leading-relaxed flex-grow"> {/* flex-grow for description */}
              {description}
            </p>
          )}
          {detailsList && detailsList.length > 0 && (
            <ul className="space-y-2.5 pt-2 md:pt-3"> {/* Adjusted spacing */}
              {detailsList.map((detail, index) => (
                <li key={index} className="flex items-center text-sm text-slate-600 font-medium"> {/* Adjusted text style */}
                  {detail.icon && React.cloneElement(detail.icon, { className: "w-5 h-5 text-sky-500 mr-2.5 shrink-0" })}
                  <span>{detail.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div> {/* End of p-6/p-8 content div */}

      {/* Corner Dots */}
      <div
        className="absolute w-1.5 h-1.5 bg-slate-300 rounded-full z-20"
        style={{ top: `${hrLineVerticalCenter - (dotSize / 2) - gapBetweenTopRightDots}px`, right: `${dotOffsetFromEdge}px`, transform: 'translateY(-50%)' }}
      ></div>
      <div
        className="absolute w-1.5 h-1.5 bg-slate-300 rounded-full z-20"
        style={{ top: `${hrLineVerticalCenter + (dotSize / 2) + gapBetweenTopRightDots}px`, right: `${dotOffsetFromEdge}px`, transform: 'translateY(-50%)' }}
      ></div>
      <div
        className="absolute w-1.5 h-1.5 bg-slate-300 rounded-full z-20"
        style={{ bottom: `${dotOffsetFromEdge}px`, left: `${dotOffsetFromEdge}px` }}
      ></div>
      <div
        className="absolute w-1.5 h-1.5 bg-slate-300 rounded-full z-20"
        style={{ bottom: `${dotOffsetFromEdge}px`, right: `${dotOffsetFromEdge}px` }}
      ></div>
    </div>
  );
};

export default OfferDetailCard;