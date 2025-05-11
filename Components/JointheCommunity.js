// src/components/JoinCommunityCTA.js
import React from 'react';
import { LightningBoltIcon } from './icons/Footer'; // Adjust path if needed
import productImage from '../assets/53baf68818f1e8506633646a7d5c478dbc07d3a4.png';

const JoinCommunityCTA = () => {
  // Constants for the corner detail - these apply to both top and bottom
  const detailOffsetFromEdge = {
    mobile: 12,
    tablet: 16,
    desktop: 24
  };
  const centralCircleDiameter = {
    mobile: 24,
    tablet: 28,
    desktop: 32
  };
  const centralCircleIconSize = {
    mobile: 'w-4 h-4',
    tablet: 'w-4 h-4',
    desktop: 'w-5 h-5'
  };
  const rivetSize = {
    mobile: 6,
    tablet: 7,
    desktop: 8
  };
  const rivetBgColor = "bg-slate-600";
  const rivetBorderRadius = "rounded-sm";
  const horizontalGapRivetToCircleEdge = {
    mobile: 8,
    tablet: 10,
    desktop: 12
  };
  const verticalGapRivetCenterToLine = {
    mobile: 8,
    tablet: 9,
    desktop: 10
  };

  // Helper function to render a rivet with responsive positioning
  const Rivet = ({ position }) => (
    <>
      {/* Mobile rivet */}
      <div
        className={`absolute w-1.5 h-1.5 ${rivetBgColor} ${rivetBorderRadius} z-20 sm:hidden`}
        style={position.mobile}
      />
      {/* Tablet rivet */}
      <div
        className={`absolute w-1.5 h-1.5 ${rivetBgColor} ${rivetBorderRadius} z-20 hidden sm:block md:hidden`}
        style={position.tablet}
      />
      {/* Desktop rivet */}
      <div
        className={`absolute w-2 h-2 ${rivetBgColor} ${rivetBorderRadius} z-20 hidden md:block`}
        style={position.desktop}
      />
    </>
  );

  // Helper function to render circles with responsive positioning
  const Circle = ({ type, position }) => {
    const CircleComponent = type === 'empty' ? (
      <>
        {/* Mobile empty circle */}
        <div
          className="absolute rounded-full border-2 border-slate-700 bg-gray-900 z-10 sm:hidden"
          style={{
            ...position.mobile,
            width: `${centralCircleDiameter.mobile}px`,
            height: `${centralCircleDiameter.mobile}px`,
          }}
        />
        {/* Tablet empty circle */}
        <div
          className="absolute rounded-full border-2 border-slate-700 bg-gray-900 z-10 hidden sm:block md:hidden"
          style={{
            ...position.tablet,
            width: `${centralCircleDiameter.tablet}px`,
            height: `${centralCircleDiameter.tablet}px`,
          }}
        />
        {/* Desktop empty circle */}
        <div
          className="absolute rounded-full border-2 border-slate-700 bg-gray-900 z-10 hidden md:block"
          style={{
            ...position.desktop,
            width: `${centralCircleDiameter.desktop}px`,
            height: `${centralCircleDiameter.desktop}px`,
          }}
        />
      </>
    ) : (
      <>
        {/* Mobile central circle */}
        <div
          className="absolute bg-slate-800/60 rounded-full shadow-inner flex items-center justify-center z-10 sm:hidden"
          style={{
            ...position.mobile,
            width: `${centralCircleDiameter.mobile}px`,
            height: `${centralCircleDiameter.mobile}px`,
          }}
        >
          <div className="bg-slate-700/80 p-1 rounded-lg shadow-md">
            <LightningBoltIcon className={`${centralCircleIconSize.mobile} text-sky-400`} />
          </div>
        </div>
        {/* Tablet central circle */}
        <div
          className="absolute bg-slate-800/60 rounded-full shadow-inner flex items-center justify-center z-10 hidden sm:block md:hidden"
          style={{
            ...position.tablet,
            width: `${centralCircleDiameter.tablet}px`,
            height: `${centralCircleDiameter.tablet}px`,
          }}
        >
          <div className="bg-slate-700/80 p-1 rounded-lg shadow-md">
            <LightningBoltIcon className={`${centralCircleIconSize.tablet} text-sky-400`} />
          </div>
        </div>
        {/* Desktop central circle */}
        <div
          className="absolute bg-slate-800/60 rounded-full shadow-inner flex items-center justify-center z-10 hidden md:block"
          style={{
            ...position.desktop,
            width: `${centralCircleDiameter.desktop}px`,
            height: `${centralCircleDiameter.desktop}px`,
          }}
        >
          <div className="bg-slate-700/80 p-1.5 rounded-lg shadow-md">
            <LightningBoltIcon className={`${centralCircleIconSize.desktop} text-sky-400`} />
          </div>
        </div>
      </>
    );

    return CircleComponent;
  };

  // Calculate positions for all screen sizes
  const calcPositions = () => {
    const positions = {
      topLine: {},
      bottomLine: {},
      topCircle: {
        mobile: {},
        tablet: {},
        desktop: {}
      },
      bottomCircle: {
        mobile: {},
        tablet: {},
        desktop: {}
      },
      rivets: {
        topLeft: {
          mobile: {},
          tablet: {},
          desktop: {}
        },
        topRight: {
          mobile: {},
          tablet: {},
          desktop: {}
        },
        bottomLeft: {
          mobile: {},
          tablet: {},
          desktop: {}
        },
        bottomRight: {
          mobile: {},
          tablet: {},
          desktop: {}
        }
      }
    };

    // For each screen size
    ['mobile', 'tablet', 'desktop'].forEach(size => {
      const offset = detailOffsetFromEdge[size];
      const circleDiam = centralCircleDiameter[size];
      const hGap = horizontalGapRivetToCircleEdge[size];
      const vGap = verticalGapRivetCenterToLine[size];
      const rSize = rivetSize[size];

      // Line positions
      const linePos = offset + (circleDiam / 2);
      positions.topLine[size] = {
        top: `${linePos}px`,
        transform: 'translateY(-50%)'
      };
      positions.bottomLine[size] = {
        bottom: `${linePos}px`,
        transform: 'translateY(50%)'
      };

      // Circle positions
      const circleLeftPos = offset + rSize + hGap;
      positions.topCircle[size] = {
        top: `${offset}px`,
        left: `${circleLeftPos}px`
      };
      positions.bottomCircle[size] = {
        bottom: `${offset}px`,
        left: `${circleLeftPos}px`
      };

      // Rivet positions
      // Top left rivets
      positions.rivets.topLeft[size] = {
        top: `${linePos - vGap - (rSize / 2)}px`,
        left: `${offset}px`
      };
      positions.rivets.topRight[size] = {
        top: `${linePos + vGap - (rSize / 2)}px`,
        left: `${offset}px`
      };

      // Top right rivets
      positions.rivets.bottomLeft[size] = {
        top: `${linePos - vGap - (rSize / 2)}px`,
        left: `${circleLeftPos + circleDiam + hGap}px`
      };
      positions.rivets.bottomRight[size] = {
        top: `${linePos + vGap - (rSize / 2)}px`,
        left: `${circleLeftPos + circleDiam + hGap}px`
      };

      // Bottom left rivets
      positions.rivets.topLeft[size] = {
        bottom: `${linePos - vGap - (rSize / 2)}px`,
        left: `${offset}px`
      };
      positions.rivets.topRight[size] = {
        bottom: `${linePos + vGap - (rSize / 2)}px`,
        left: `${offset}px`
      };

      // Bottom right rivets
      positions.rivets.bottomLeft[size] = {
        bottom: `${linePos - vGap - (rSize / 2)}px`,
        left: `${circleLeftPos + circleDiam + hGap}px`
      };
      positions.rivets.bottomRight[size] = {
        bottom: `${linePos + vGap - (rSize / 2)}px`,
        left: `${circleLeftPos + circleDiam + hGap}px`
      };
    });

    return positions;
  };

  const positions = calcPositions();

  return (
    <div className="bg-[#181719] flex items-center rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl sm:shadow-2xl relative text-white max-w-6xl mx-auto translate-y-10 sm:translate-y-16 md:translate-y-24 lg:translate-y-32 overflow-hidden h-auto sm:h-[400px] md:h-[450px] lg:h-[500px]">
      {/* --- TOP HORIZONTAL LINE --- */}
      <hr
        className="absolute left-0 right-0 border-slate-700/50 z-0 hidden sm:block"
        style={{
          top: positions.topLine.desktop.top,
          transform: positions.topLine.desktop.transform
        }}
      />
      
      {/* --- BOTTOM HORIZONTAL LINE --- */}
      <hr
        className="absolute left-0 right-0 border-slate-700/50 z-0 hidden sm:block"
        style={{
          bottom: positions.bottomLine.desktop.bottom,
          transform: positions.bottomLine.desktop.transform
        }}
      />

      {/* --- TOP-LEFT CORNER DETAIL --- */}
      <Circle 
        type="central" 
        position={{
          mobile: positions.topCircle.mobile,
          tablet: positions.topCircle.tablet,
          desktop: positions.topCircle.desktop
        }} 
      />
      
      {/* --- BOTTOM-LEFT CORNER DETAIL --- */}
      <Circle 
        type="empty" 
        position={{
          mobile: positions.bottomCircle.mobile,
          tablet: positions.bottomCircle.tablet,
          desktop: positions.bottomCircle.desktop
        }} 
      />

      {/* All the rivets (only visible on tablet and up) */}
      <div className="hidden sm:block">
        {/* Top left rivets */}
        <Rivet position={{
          mobile: { top: positions.rivets.topLeft.mobile.top, left: positions.rivets.topLeft.mobile.left },
          tablet: { top: positions.rivets.topLeft.tablet.top, left: positions.rivets.topLeft.tablet.left },
          desktop: { top: positions.rivets.topLeft.desktop.top, left: positions.rivets.topLeft.desktop.left }
        }} />
        <Rivet position={{
          mobile: { top: positions.rivets.topRight.mobile.top, left: positions.rivets.topRight.mobile.left },
          tablet: { top: positions.rivets.topRight.tablet.top, left: positions.rivets.topRight.tablet.left },
          desktop: { top: positions.rivets.topRight.desktop.top, left: positions.rivets.topRight.desktop.left }
        }} />
        
        {/* Top right rivets */}
        <Rivet position={{
          mobile: { top: positions.rivets.bottomLeft.mobile.top, left: positions.rivets.bottomLeft.mobile.left },
          tablet: { top: positions.rivets.bottomLeft.tablet.top, left: positions.rivets.bottomLeft.tablet.left },
          desktop: { top: positions.rivets.bottomLeft.desktop.top, left: positions.rivets.bottomLeft.desktop.left }
        }} />
        <Rivet position={{
          mobile: { top: positions.rivets.bottomRight.mobile.top, left: positions.rivets.bottomRight.mobile.left },
          tablet: { top: positions.rivets.bottomRight.tablet.top, left: positions.rivets.bottomRight.tablet.left },
          desktop: { top: positions.rivets.bottomRight.desktop.top, left: positions.rivets.bottomRight.desktop.left }
        }} />
        
        {/* Bottom rivets */}
        <Rivet position={{
          mobile: { bottom: positions.rivets.topLeft.mobile.bottom, left: positions.rivets.topLeft.mobile.left },
          tablet: { bottom: positions.rivets.topLeft.tablet.bottom, left: positions.rivets.topLeft.tablet.left },
          desktop: { bottom: positions.rivets.topLeft.desktop.bottom, left: positions.rivets.topLeft.desktop.left }
        }} />
        <Rivet position={{
          mobile: { bottom: positions.rivets.topRight.mobile.bottom, left: positions.rivets.topRight.mobile.left },
          tablet: { bottom: positions.rivets.topRight.tablet.bottom, left: positions.rivets.topRight.tablet.left },
          desktop: { bottom: positions.rivets.topRight.desktop.bottom, left: positions.rivets.topRight.desktop.left }
        }} />
        <Rivet position={{
          mobile: { bottom: positions.rivets.bottomLeft.mobile.bottom, left: positions.rivets.bottomLeft.mobile.left },
          tablet: { bottom: positions.rivets.bottomLeft.tablet.bottom, left: positions.rivets.bottomLeft.tablet.left },
          desktop: { bottom: positions.rivets.bottomLeft.desktop.bottom, left: positions.rivets.bottomLeft.desktop.left }
        }} />
        <Rivet position={{
          mobile: { bottom: positions.rivets.bottomRight.mobile.bottom, left: positions.rivets.bottomRight.mobile.left },
          tablet: { bottom: positions.rivets.bottomRight.tablet.bottom, left: positions.rivets.bottomRight.tablet.left },
          desktop: { bottom: positions.rivets.bottomRight.desktop.bottom, left: positions.rivets.bottomRight.desktop.left }
        }} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row items-center w-full relative z-10">
        {/* Left Text Content */}
        <div className="md:w-3/5 lg:w-2/3 space-y-3 sm:space-y-4 md:space-y-6 text-center md:text-left p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <div className="bg-slate-700 p-1 sm:p-1.5 rounded-full">
              <LightningBoltIcon className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400" />
            </div>
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              Don't Wait
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Join The Community
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Get Early Access, Welcome to the future of EV revolution
          </p>
          
          <div className="flex justify-center md:justify-start">
            <div
              className="text-center w-full max-w-xs sm:max-w-sm md:w-auto md:min-w-[180px] shadow-[0_0_20px_rgba(59,130,246,0.7)] sm:shadow-[0_0_30px_rgba(59,130,246,0.8)] md:shadow-[0_0_40px_rgba(59,130,246,0.9)] py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-full cursor-pointer"
              style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)' }}
            >
              <button className="text-white font-semibold text-xs sm:text-sm md:text-base bg-transparent border-none">
                Reserve Your Bundle Now
              </button>
            </div>
          </div>
          
          {/* Decorative dots (only visible on md+ screens) */}
          <div className="hidden md:flex absolute bottom-[-20px] left-[calc(50%-1.5rem)] md:left-[-10px] space-x-2 opacity-30">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-slate-600 rounded-full"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-slate-600 rounded-full"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-slate-600 rounded-full"></div>
          </div>
        </div>

        {/* Right Image Content */}
        <div
          className="w-full md:w-2/5 lg:w-1/3 mt-4 md:mt-0 flex justify-center md:justify-end relative self-stretch py-4 md:py-0 md:rounded-l-full rounded-t-full md:rounded-t-none"
          style={{
            background: 'linear-gradient(180deg, #303035 0%, rgba(55, 55, 61, 0.04) 100%)',
            borderTopLeftRadius: { md: '9999px' },
            borderBottomLeftRadius: { md: '9999px' },
          }}
        >
          <img
            src={productImage.src}
            alt="DeCharge EV Charger"
            className="w-auto h-full object-contain 
                      max-h-[150px] sm:max-h-[200px] md:max-h-[300px] lg:max-h-[380px] 
                      scale-[150%] sm:scale-[175%] md:scale-[200%] lg:scale-[225%]"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityCTA;