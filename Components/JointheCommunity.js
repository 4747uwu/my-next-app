// src/components/JoinCommunityCTA.js
import React from 'react';
import { LightningBoltIcon } from './icons/Footer'; // Adjust path if needed

// IMPORTANT: Replace with your actual image path. Place in `public/images/`
const productImage = '/images/decharge-device.png';

const JoinCommunityCTA = () => {
  return (
   
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-8 md:p-10 relative text-white max-w-6xl mx-auto">
      {/* overflow-visible is removed as image positioning is handled carefully */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-3/5 lg:w-1/2 space-y-5 md:space-y-6 text-center md:text-left relative z-10">
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

          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 text-sm sm:text-base"
          >
            Reserve Your Bundle Now
          </button>

          {/* Decorative Dots - bottom left of text area */}
          <div className="hidden md:flex absolute bottom-[-20px] left-[-10px] space-x-2 opacity-30">
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
          </div>
        </div>

        {/* Right Image - Positioned to visually break out of the card */}
        <div className="md:w-2/5 lg:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative">
          <img
            src={productImage}
            alt="DeCharge EV Charger"
            className="w-60 h-auto sm:w-72 md:w-80 lg:w-[350px] object-contain relative md:absolute md:right-[-30px] lg:right-[-50px] md:bottom-[-40px] lg:bottom-[-60px]"
            // The image is positioned relative to this container.
            // It will naturally appear on top of the footer if this CTA card overlaps.
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityCTA;