// src/components/JoinCommunityCTA.js
import React from 'react';
import { LightningBoltIcon } from './icons/Footer'; // Adjust path if needed

import productImage from '../assets/53baf68818f1e8506633646a7d5c478dbc07d3a4.png';


const JoinCommunityCTA = () => {
  return (

    <div className="bg-[#181719] rounded-3xl shadow-2xl  relative text-white max-w-6xl mx-auto translate-y-32 overflow-hidden">
      {/* overflow-visible is removed as image positioning is handled carefully */}
      <div className="flex flex-col md:flex-row items-center overflow-hidden">
        {/* Left Content */}
        <div className="md:w-3/5 lg:w-1/3 space-y-5 md:space-y-6 text-center md:text-left relative z-10 p-8 md:p-10">
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

          <div className='gradient-btn text-center shadow-[0_0_40px_rgba(59,130,246,0.9)]'>
            <button className=' text-center'>Reserve Your Bundle Now</button>
          </div>

          {/* Decorative Dots - bottom left of text area */}
          <div className="hidden md:flex absolute bottom-[-20px] left-[-10px] space-x-2 opacity-30">
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
          </div>
        </div>

        {/* Right Image - Positioned to visually break out of the card */}
        <div className="md:w-2/5 lg:w-2/3 mt-8 md:mt-0 flex justify-centr md:justify-end relative bg-pink-300 rounded-l-full overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #303035 0%, rgba(55, 55, 61, 0.04) 100%)'
          }}>
          <img
            src={productImage.src}
            alt="DeCharge EV Charger"
            className="h-full w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityCTA;