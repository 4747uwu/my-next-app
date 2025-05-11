// src/components/JoinCommunityCTA.js
import React from 'react';
import { LightningBoltIcon } from './icons/Footer'; // Adjust path if needed
import productImage from '../assets/53baf68818f1e8506633646a7d5c478dbc07d3a4.png';

const JoinCommunityCTA = () => {
  // Constants for the corner detail - these apply to both top and bottom
  const detailOffsetFromEdge = 24;     // How far the detail's content area is from card edge (e.g. p-6 -> 24px)
                                       // This will also be the padding for the main content text.
  const centralCircleDiameter = 32;    // e.g., w-12, h-12
  const centralCircleIconSize = 'w-5 h-5'; // Size of the icon inside the central circle
  const rivetSize = 8;                 // e.g., w-2, h-2
  const rivetBgColor = "bg-slate-600"; // Or bg-slate-500 for more contrast
  const rivetBorderRadius = "rounded-sm";
  const horizontalGapRivetToCircleEdge = 12; // Horizontal gap from rivet edge to circle edge
  const verticalGapRivetCenterToLine = 10;   // Vertical gap from rivet center to the horizontal line

  // Calculate line position: it's vertically centered with the centralCircle.
  // The line is `detailOffsetFromEdge` from the card's top/bottom, then the circle is placed.
  const linePositionFromCardEdge = detailOffsetFromEdge + (centralCircleDiameter / 2);

  const centralCircleLeftPosition = detailOffsetFromEdge + rivetSize + horizontalGapRivetToCircleEdge;


  // Helper function to render a rivet
  const Rivet = ({ top, bottom, left }) => (
    <div
      className={`absolute w-2 h-2 ${rivetBgColor} ${rivetBorderRadius} z-20`} // z-20 to be on top
      style={{ top, bottom, left: `${left}px` }}
    />
  );

  const EmptyCircle = ({ top, bottom, left }) => (
    <div
      className="absolute rounded-full border-2 border-slate-700 bg-gray-900 z-10" // z-10 on top of line
      style={{
        top,
        bottom,
        left: `${left}px`,
        width: `${centralCircleDiameter}px`,
        height: `${centralCircleDiameter}px`,
      }}
    />
  );


  // Helper function to render the central circle with icon
  const CentralCircle = ({ top, bottom, left }) => (
    <div
      className="absolute bg-slate-800/60 rounded-full shadow-inner flex items-center justify-center z-10" // z-10 on top of line
      style={{
        top,
        bottom,
        left: `${left}px`,
        width: `${centralCircleDiameter}px`,
        height: `${centralCircleDiameter}px`,
      }}
    >
      <div className="bg-slate-700/80 p-1.5 rounded-lg shadow-md"> {/* Inner slightly raised part */}
        <LightningBoltIcon className={`${centralCircleIconSize} text-sky-400`} />
      </div>
    </div>
  );


  return (
    <div className="bg-[#181719] flex items-center rounded-3xl shadow-2xl relative text-white max-w-6xl h-[500px] mx-auto translate-y-32 overflow-hidden">

      {/* --- TOP HORIZONTAL LINE --- */}
      <hr
        className="absolute left-0 right-0 border-slate-700/50 z-0"
        style={{
          top: `${linePositionFromCardEdge}px`,
          transform: 'translateY(-50%)',
        }}
      />
      {/* --- BOTTOM HORIZONTAL LINE --- */}
      <hr
        className="absolute left-0 right-0 border-slate-700/50 z-0"
        style={{
          bottom: `${linePositionFromCardEdge}px`, // Same offset from bottom
          transform: 'translateY(50%)', // Adjust transform for bottom alignment
        }}
      />

      {/* --- TOP-LEFT CORNER DETAIL --- */}
      <CentralCircle top={`${detailOffsetFromEdge}px`} left={centralCircleLeftPosition} />
       
      {/* Rivets for Top-Left (TL) */}
      <Rivet top={`${linePositionFromCardEdge - verticalGapRivetCenterToLine - (rivetSize / 2)}px`} left={detailOffsetFromEdge} /> {/* TL - Topmost */}
      <Rivet top={`${linePositionFromCardEdge + verticalGapRivetCenterToLine - (rivetSize / 2)}px`} left={detailOffsetFromEdge} /> {/* TL - Bottommost */}
      <Rivet top={`${linePositionFromCardEdge - verticalGapRivetCenterToLine - (rivetSize / 2)}px`} left={centralCircleLeftPosition + centralCircleDiameter + horizontalGapRivetToCircleEdge} /> {/* TR - Topmost */}
      <Rivet top={`${linePositionFromCardEdge + verticalGapRivetCenterToLine - (rivetSize / 2)}px`} left={centralCircleLeftPosition + centralCircleDiameter + horizontalGapRivetToCircleEdge} /> {/* TR - Bottommost */}


      {/* --- BOTTOM-LEFT CORNER DETAIL --- */}
      <EmptyCircle bottom={`${detailOffsetFromEdge}px`} left={centralCircleLeftPosition} />
      {/* Rivets for Bottom-Left (BL) */}
      <Rivet bottom={`${linePositionFromCardEdge - verticalGapRivetCenterToLine - (rivetSize / 2)}px`} left={detailOffsetFromEdge} /> {/* BL - Topmost (relative to bottom line) */}
      <Rivet bottom={`${linePositionFromCardEdge + verticalGapRivetCenterToLine - (rivetSize / 2)}px`} left={detailOffsetFromEdge} /> {/* BL - Bottommost (relative to bottom line) */}
      <Rivet bottom={`${linePositionFromCardEdge - verticalGapRivetCenterToLine - (rivetSize / 2)}px`} left={centralCircleLeftPosition + centralCircleDiameter + horizontalGapRivetToCircleEdge} /> {/* BR - Topmost (relative to bottom line) */}
      <Rivet bottom={`${linePositionFromCardEdge + verticalGapRivetCenterToLine - (rivetSize / 2)}px`} left={centralCircleLeftPosition + centralCircleDiameter + horizontalGapRivetToCircleEdge} /> {/* BR - Bottommost (relative to bottom line) */}


      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row items-center relative z-10">
        {/* Left Text Content - needs enough padding top AND bottom */}
        <div
          className="md:w-3/5 lg:w-2/3 space-y-5 md:space-y-6 text-center md:text-left p-8 md:p-10"
          style={{
            // Ensure content padding is greater than the space taken by corner details
            paddingTop: `${detailOffsetFromEdge + centralCircleDiameter + detailOffsetFromEdge / 2}px`,
            paddingBottom: `${detailOffsetFromEdge + centralCircleDiameter + detailOffsetFromEdge / 2}px`,
            paddingLeft: `${detailOffsetFromEdge + rivetSize + horizontalGapRivetToCircleEdge + centralCircleDiameter + horizontalGapRivetToCircleEdge + rivetSize + detailOffsetFromEdge /2 }px`
            // paddingLeft is to clear the widest part of the corner detail.
            // This can be simplified if the text content area has its own max-width or is centered.
            // For now, just a large left padding example.
          }}
        >
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <div className="bg-slate-700 p-1.5 rounded-full">
              <LightningBoltIcon className="w-4 h-4 text-sky-400" />
            </div>
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              Don't Wait
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Join The Community
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Get Early Access, Welcome to the future of EV revolution
          </p>
          <div
            className='text-center w-1/2 shadow-[0_0_40px_rgba(59,130,246,0.9)] py-3 px-6 rounded-full cursor-pointer'
            style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)' }}
          >
            <button className='text-white  h-1/2 font-semibold text-sm sm:text-base bg-transparent border-none'>
              Reserve Your Bundle Now
            </button>
          </div>
          {/* Original decorative dots (different from corner rivets) */}
          <div className="hidden md:flex absolute bottom-[-20px] left-[calc(50%-1.5rem)] md:left-[-10px] space-x-2 opacity-30">
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
          </div>
        </div>

        {/* Right Image Content */}
        <div
          className="md:w-2/5 lg:w-1/3 mt-8 md:mt-0 flex justify-center md:justify-end relative self-stretch" // self-stretch for equal height
          style={{
            background: 'linear-gradient(180deg, #303035 0%, rgba(55, 55, 61, 0.04) 100%)',
            borderTopLeftRadius: '9999px',
            borderBottomLeftRadius: '9999px',
          }}
        >
          <img
            src={productImage.src}
            alt="DeCharge EV Charger"
            className="w-auto h-full scale-[225%] object-contain py-8 md:py-0 md:max-h-[380px] lg:max-h-[420px]" // Adjust max height
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityCTA;