
'use client'; // If needed by parent or client-side interactions
import React from 'react';
import Button from './Button'; // Assuming your Button component





const cardBackgroundColor = "bg-white";
const cardBorderColor = "border-gray-200/50"; // Very subtle border
const cardShadow = "shadow-[0_4px_25px_rgba(100,100,150,0.08)]"; // Soft, diffused shadow

const titleColor = "text-gray-700"; // e.g., "Infrastructure Gap"
const descriptionColor = "text-gray-500"; // e.g., "Unmet Demand"

const infraValueColor = "text-[#4A5FF1]"; // Bright Blue for "87%"
const infraPointerColor = "#374151"; // Dark Gray for pointer (Tailwind gray-700)

const peopleInterestValueColor = "text-[#4A5FF1]"; // Bright Blue for "68%"
const peopleInterestTrackColor = "#F3F4F6"; // Very light gray for track
const peopleInterestGradientStart = "#FACC15"; // Yellow (Tailwind yellow-400)
const peopleInterestGradientMid = "#86EFAC"; // Greenish (Tailwind green-300)
const peopleInterestGradientEnd = "#A78BFA";   // Purple (Tailwind violet-400)
const peopleInterestCenterTextColor = "text-gray-800";
const peopleInterestSubTextColor = "text-gray-500";

// Investment Growth
const investmentValueColor = "text-[#7C3AED]"; // Purple for "$1.7mil" (Tailwind purple-600)
const investmentLineColor = "#A78BFA"; // Lighter Purple for line (Tailwind violet-400)
const investmentPointFillColor = "#8B5CF6"; // (Tailwind violet-500)
const investmentPointStrokeColor = "white";
const investmentBadgeBgColor = "bg-green-100";
const investmentBadgeTextColor = "text-green-600"; // Darker green for better contrast
const investmentTooltipBg = "bg-white";
const investmentTooltipBorder = "border-gray-200/70";
const investmentTooltipShadow = "shadow-lg";

const InfrastructureChart = () => {
 
  const barData = [
    { color: '#D1FAE5' }, { color: '#A7F3D0' }, { color: '#6EE7B7' }, // Mints
    { color: '#FDBA74' }, { color: '#FB923C' }, { color: '#F97316' }, // Oranges
    { color: '#FDE047' }, { color: '#FACC15' }, { color: '#EAB308' }, // Yellows
    { color: '#DDD6FE' }, { color: '#C4B5FD' }, { color: '#A78BFA' }, // Purples
    { color: '#BFDBFE' }, { color: '#93C5FD' }, { color: '#60A5FA' }, // Blues
    { color: '#6EE7B7' }, { color: '#34D399' }, { color: '#10B981' }, // Greens
    { color: '#059669' }, { color: '#047857' },                     // Darker Greens
  ];
  const pointerIndex = 5; // 6th bar (0-indexed)

  const barWidthPercentage = 4.6;
  const gapPercentage = 0.8;
  const totalBars = barData.length;
  const svgViewBoxHeight = 35; // Keep SVG height
  const svgViewBoxWidth = totalBars * (barWidthPercentage + gapPercentage) - gapPercentage;

  // Define a constant height for all bars
  const constantBarHeight = 25; // You can adjust this value as needed

  // Pointer dimensions (triangle pointing down)
  const pointerVisualGap = 1.5; // Gap between bar top and pointer tip
  const pointerHeight = 5;
  const pointerBaseWidth = 7;

  // Calculate pointer position based on the constant bar height
  const barTopY = svgViewBoxHeight - constantBarHeight;
  const pointerTipTargetY = barTopY - pointerVisualGap;
  const pointerBaseActualY = pointerTipTargetY - pointerHeight;
  const pointerCenterX = (pointerIndex * (barWidthPercentage + gapPercentage)) + (barWidthPercentage / 2);

  return (
    <div className="relative w-full h-12 my-1.5">
      <svg viewBox={`0 0 ${svgViewBoxWidth} ${svgViewBoxHeight}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {barData.map((bar, index) => (
          <rect
            key={index}
            x={index * (barWidthPercentage + gapPercentage)}
            y={svgViewBoxHeight - constantBarHeight} // Use constant height for Y position
            width={barWidthPercentage}
            height={constantBarHeight} // Use constant height
            fill={bar.color}
            rx="1.5" // Rounded corners for bars
          />
        ))}
        <polygon
          points={`
            ${pointerCenterX - pointerBaseWidth / 2},${pointerBaseActualY}
            ${pointerCenterX + pointerBaseWidth / 2},${pointerBaseActualY}
            ${pointerCenterX},${pointerTipTargetY}
          `}
          fill={infraPointerColor}
        />
      </svg>
    </div>
  );
};



const PeopleInterestChart = () => {
  const percentage = 68;
  const svgViewBoxWidth = 100;
  const svgViewBoxHeight = 50;

  const arcStrokeWidth = 18; // Target stroke is much thicker
  
  
  const radiusForPath = 48; 
  const cyForPath = 56; 

  const circumference = 2 * Math.PI * radiusForPath;
  const arcActualLength = circumference / 2;
  const strokeDashoffsetValue = arcActualLength - (percentage / 100) * arcActualLength;

  return (
    <div className="relative w-[120px] h-[60px] mx-auto my-1.5"> {/* Adjusted margin */}
      <svg 
        viewBox={`${svgViewBoxWidth/2 - radiusForPath - arcStrokeWidth/2} ${cyForPath - radiusForPath - arcStrokeWidth/2} ${2*radiusForPath + arcStrokeWidth} ${radiusForPath + arcStrokeWidth/2}`} // Dynamically adjust viewBox to fit
        className="w-full h-full transform  origin-center" 
        style={{overflow: 'visible'}} // Allow stroke to go slightly out if linecaps make it so
      >
        <defs>
          <linearGradient id="peopleInterestGradientFinal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={peopleInterestGradientStart} />
            <stop offset="40%" stopColor={peopleInterestGradientMid} /> 
            <stop offset="100%" stopColor={peopleInterestGradientEnd} />
          </linearGradient>
        </defs>
        <path
          d={`M ${svgViewBoxWidth/2 - radiusForPath} ${cyForPath} A ${radiusForPath} ${radiusForPath} 0 0 1 ${svgViewBoxWidth/2 + radiusForPath} ${cyForPath}`}
          fill="none"
          stroke={peopleInterestTrackColor}
          strokeWidth={arcStrokeWidth}
          strokeLinecap="round"
        />
        <path
          d={`M ${svgViewBoxWidth/2 - radiusForPath} ${cyForPath} A ${radiusForPath} ${radiusForPath} 0 0 1 ${svgViewBoxWidth/2 + radiusForPath} ${cyForPath}`}
          fill="none"
          stroke="url(#peopleInterestGradientFinal)"
          strokeWidth={arcStrokeWidth}
          strokeLinecap="round"
          strokeDasharray={arcActualLength}
          strokeDashoffset={strokeDashoffsetValue}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center transform mt-10 origin-center">
        <span className={`text-xl font-bold ${peopleInterestCenterTextColor}`}>{percentage}%</span>
        <span className={`text-[10px] ${peopleInterestSubTextColor} tracking-tight mt-[-2px]`}>2024 Survey</span>
      </div>
    </div>
  );
};


const InvestmentChart = () => {
  // New path and point based on target visual
  const pathData = "M5 28 Q 20 33, 45 18 T 75 25 L 85 12 Q 90 8, 95 15"; // Adjusted path
  const pointCx = 45; // Highlighted point X
  const pointCy = 18; // Highlighted point Y

  const tooltipWidth = 80; // Adjusted for potentially longer text
  const tooltipHeight = 34; // Adjusted for two lines of text

  return (
    <div className="relative w-full h-[65px] my-1.5"> {/* Adjusted height and margin */}
      <svg viewBox="0 0 100 40" className="w-full h-full" style={{overflow: 'visible'}}>
        <path d={pathData} fill="none" stroke={investmentLineColor} strokeWidth="2" />
        <circle cx={pointCx} cy={pointCy} r="3.5" fill={investmentPointFillColor} stroke={investmentPointStrokeColor} strokeWidth="2" />
        <foreignObject
          x={pointCx - tooltipWidth / 2}
          y={pointCy + 7} // Position tooltip below the point (cy + radius + buffer)
          width={tooltipWidth}
          height={tooltipHeight}
        >
          <div className={`${investmentTooltipBg} p-1.5 rounded-md ${investmentTooltipBorder} border ${investmentTooltipShadow} text-[9px] leading-tight whitespace-nowrap text-center`}>
            <div className={`font-semibold ${titleColor} text-[10px]`}>April 05, 2025</div>
            <div className={`${descriptionColor} flex items-center justify-center mt-0.5 text-[9px]`}>
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
              EVs bought: 167,629
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

const StatCard = ({ title, chart, value, description, valueColorClass, valueTextSize = "text-2xl", descriptionClass = "" }) => {
  return (
    <div className={`${cardBackgroundColor} rounded-xl p-4 ${cardBorderColor} border ${cardShadow} relative flex flex-col w-full h-full min-h-[210px]`}> {/* Adjusted padding slightly */}
      {/* Corner dots */}
      <span className="absolute top-2.5 right-2.5 w-1 h-1 bg-gray-200/70 rounded-full"></span>
      <span className="absolute top-2.5 right-5 w-1 h-1 bg-gray-200/70 rounded-full"></span>
      <span className="absolute bottom-2.5 left-2.5 w-1 h-1 bg-gray-200/70 rounded-full"></span>
      <span className="absolute bottom-2.5 left-5 w-1 h-1 bg-gray-200/70 rounded-full"></span>

      <h3 className={`text-sm font-semibold ${titleColor} mb-1.5`}>{title}</h3> {/* Adjusted margin */}
      <div className="flex-grow flex items-center justify-center">{chart}</div>
      <div className={`font-bold ${valueColorClass} ${valueTextSize} mt-1.5`}>{value}</div> {/* Adjusted margin */}
      {description && <p className={`text-xs ${descriptionColor} ${descriptionClass} mt-0.5`}>{description}</p>}
    </div>
  );
};


const MarketGrowthSection = () => {
  const accentTitleBlue = "text-[#4338CA]"; 

  const handleReserveCTA = () => {
    console.log("Market Growth CTA Reserve button clicked!");
  };

  return (
    <div className="py-16 md:py-20 flex items-center justify-center h-screen bg-gradient-to-br from-[#F9FAFB] via-[#F3F4F6] to-white"> {/* Very light gray gradient */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="relative inline-flex items-center">
            <span className="absolute left-0 top-1/2 w-6 h-px bg-indigo-300/80 -translate-y-1/2 -translate-x-full"></span>
            <span className="bg-indigo-100 text-indigo-700 text-[9px] font-bold uppercase px-3.5 py-1.5 rounded-md tracking-wider">
              Why This Matters?
            </span>
            <span className="absolute right-0 top-1/2 w-6 h-px bg-indigo-300/80 -translate-y-1/2 translate-x-full"></span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[58px] text-gray-800 text-center mb-4">
          India's <span className={`${accentTitleBlue}`}>EV Market</span> Growth
        </h2>
        <p className="text-gray-600 text-sm md:text-[15px] text-center mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
          With over 4 million new EVs expected on Indian roads by 2025, the demand for accessible charging is exploding. DeCharger Mini bundle owners are positioned to capture this growth.
        </p>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-20 max-w-5xl mx-auto">
          <StatCard
            title="Infrastructure Gap"
            chart={<InfrastructureChart />}
            value="87%"
            description="Unmet Demand"
            valueColorClass={infraValueColor}
            valueTextSize="text-[28px]" // Specific font size for "87%"
            descriptionClass={`ml-1 ${descriptionColor}`}
          />
          <StatCard
            title="People Interest"
            chart={<PeopleInterestChart />}
            value="68%"
            description="growth in EVs"
            valueColorClass={peopleInterestValueColor}
            valueTextSize="text-[28px]"
            descriptionClass={`ml-1 ${descriptionColor}`}
          />
          <StatCard
            title="Investment Growth"
            chart={<InvestmentChart />}
            value={
              <span className="flex items-baseline">
                $1.7<span className="text-[22px] font-semibold ml-0.5 mr-1">mil</span>
                <span className={`text-[10px] font-semibold ${investmentBadgeTextColor} ${investmentBadgeBgColor} px-1.5 py-0.5 rounded-full flex items-center ml-1.5 whitespace-nowrap`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  +37.05%
                </span>
              </span>
            }
            valueColorClass={investmentValueColor}
            valueTextSize="text-[28px]"
            description=""
          />
        </div>

        {/* CTA Section (reusing structure from OfferDetailsSection) */}
        <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-indigo-500 rounded-2xl p-4 md:p-10 shadow-xl flex flex-col md:flex-row justify-between items-center w-[78%] mx-auto"> {/* Removed fixed height, added mx-auto for centering */}
                  <div className="text-black mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold">Ready To Secure Your Bundle?</h3> {/* Adjusted size, weight */}
                    <p className="text-sm text-black-100 mt-1.5"> {/* Adjusted margin */}
                      Lock In Your 5-Device Bundle Now Before They're Gone
                    </p>
                  </div>
                  {/* Assuming Button component forwards className and handles styling */}
                  <Button 
                    onClick={handleReserveCTA} 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 rounded-lg shadow-md text-base transition-colors duration-150"
                  >
                    Reserve Your Bundle Now
                  </Button>
                </div>
      </div>
    </div>
  );
};

export default MarketGrowthSection;
// You can also export StatCard and chart components if they are in a separate file
// export { StatCard, InfrastructureChart, PeopleInterestChart, InvestmentChart };