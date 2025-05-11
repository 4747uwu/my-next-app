// src/components/BundlePackageCard.js
import React from 'react';

// --- Fallback: Define icons here if not imported from a separate file ---
const UserPlusIconLocal = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
  </svg>
);

const CubeIconLocal = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);
// --- End Fallback ---

const BundlePackageCard = () => {
  const UserPlus = typeof UserPlusIcon !== 'undefined' ? UserPlusIcon : UserPlusIconLocal;
  const Cube = typeof CubeIcon !== 'undefined' ? CubeIcon : CubeIconLocal;

  const iconCircleDiameter = 44; // For a w-11 h-11 (44px) icon container
  const cardPaddingTopValue = 24; // Corresponds to p-6 (1.5rem = 24px). For md:p-8, this would be 32px.
                                 // This value is crucial for line and dot positioning.
                                 // If your card primarily uses md:p-8, set this to 32.
  const dotSize = 6; // w-1.5 h-1.5 => 0.375rem => 6px if 1rem = 16px
  const dotOffsetFromEdge = 16; // top-4 right-4 bottom-4 left-4 => 1rem => 16px
  const gapBetweenTopRightDots = 4; // Visual gap between the two top-right dots

  // Calculate the vertical center of the HR line from the card's top edge
  const hrLineVerticalCenter = cardPaddingTopValue + (iconCircleDiameter / 2);

  return (
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-md relative overflow-hidden">
      {/* Horizontal Line - Full Width, Behind Icon, relative to the outermost card div */}
      <hr
        className="absolute left-0 right-0 border-slate-200 z-0 mt-2"
        style={{
          top: `${hrLineVerticalCenter}px`,
          transform: 'translateY(-50%)', // Center the 1px line
        }}
      />

      {/* Content Padding applied here */}
      <div className="p-6 md:p-8 relative"> {/* All content is within this padded div */}
        {/* Top Section with Icon */}
        <div className="relative mb-6">
          <div className="relative z-10 inline-block"> {/* Icon wrapper on top of HR */}
            <div className="bg-sky-100 p-2.5 rounded-full w-11 h-11 flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-sky-500" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4 relative z-10"> {/* Content on top of HR */}
          <h2 className="text-3xl font-bold text-slate-800">
            Bundle Package
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Each bundle includes 5 Decharge Mini (3.3Kw) Ev chargers with all necessary installation hardware.
          </p>
          <div className="flex items-center text-slate-700 font-medium text-lg">
            <Cube className="w-6 h-6 text-sky-500 mr-3" />
            5 DeCharge Mini Units
          </div>
        </div>
      </div> {/* End of p-6/p-8 content div */}

      {/* Corner Dots - Positioned relative to the outermost card div */}
      {/* Top-Right Dot 1 (Above HR line) */}
      <div
        className="absolute w-1.5 h-1.5 bg-slate-300 rounded-full z-20"
        style={{
          top: `${hrLineVerticalCenter - (dotSize / 2) - gapBetweenTopRightDots - (dotSize/2)}px`, // Positioned above the line
          right: `${dotOffsetFromEdge}px`,
          transform: 'translateY(-50%)', // Center dot vertically on its calculated 'top'
        }}
      ></div>
      {/* Top-Right Dot 2 (Below HR line) */}
      <div
        className="absolute w-1.5 h-1.5 bg-slate-300 rounded-full z-20 mt-4"
        style={{
          top: `${hrLineVerticalCenter + (dotSize / 2) + gapBetweenTopRightDots + (dotSize/2)}px`, // Positioned below the line
          right: `${dotOffsetFromEdge}px`,
          transform: 'translateY(-50%)', // Center dot vertically on its calculated 'top'
        }}
      ></div>

      {/* Bottom-Left Dot */}
      <div
        className="absolute w-1.5 h-1.5 bg-slate-300 rounded-full z-20"
        style={{
          bottom: `${dotOffsetFromEdge}px`,
          left: `${dotOffsetFromEdge}px`,
        }}
      ></div>

      {/* Bottom-Right Dot */}
      <div
        className="absolute w-1.5 h-1.5 bg-slate-300 rounded-full z-20"
        style={{
          bottom: `${dotOffsetFromEdge}px`,
          right: `${dotOffsetFromEdge}px`,
        }}
      ></div>
    </div>
  );
};

export default BundlePackageCard;