'use client';
import React from 'react';
import Button from './Button'; 
import Image from 'next/image';
import Waves from './waves/Waves';

import dechargeMiniImage from '../assets/3963aed2e7506a6c050877cef54991ccd3921acf (1).png';
import avatar1 from '../assets/7434e1fc976ab12d28c8699b7b4c5ff7da776ac3.png';
import avatar2 from '../assets/395b3f2aacbcf95f8631a9e4375c18ab21482818.png';
import avatar3 from '../assets/186555ac12e80f3bcd8fa4974e632fe6eaf36fd9.png';
import avatar4 from '../assets/a41d9f2671c24506ef20d2de8b25344c95985b39.png';
import avatar5 from '../assets/e00d51d38e461d14f5865767cf51f18d2283ac5e.png';

// Placeholder avatars
const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5
];

const accentBlue = "text-[#4F80E8]"; // Eyedropped blue from the image

const TechSpecCard = ({ title, description }) => (
  <div className="bg-[#10151D] p-5 rounded-xl h-full min-h-[180px] w-full flex flex-col relative overflow-hidden group">
    {/* Waves background animation */}
    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
      <Waves 
        lineColor="rgba(79, 128, 232, 0.4)"
        backgroundColor="transparent"
        waveSpeedX={0.0075}
        waveSpeedY={0.003}
        waveAmpX={20}
        waveAmpY={10}
        xGap={15}
        yGap={20}
        maxCursorMove={50}
      />
    </div>

    {/* Enhanced Left border with glowing effect */}
    <div className="absolute left-0 top-0 w-1 h-full">
      {/* Removed the complex border structure */}
    </div>

    {/* Vertical glowing line on left side */}
    <span className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-400/0 via-blue-400/90 to-blue-400/0 opacity-60 transition-opacity duration-500 group-hover:opacity-90 shadow-[0_0_8px_2px_rgba(79,128,232,0.4)]"></span>

    {/* Hover glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-blue-400 via-transparent to-transparent 
              transition-opacity duration-700 pointer-events-none"></div>

    {/* Content */}
    <div className="pl-4 relative z-10">
      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{title}</h4>
      <p className="text-xs text-gray-400 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>

    {/* Corner accent */}
    <div className="absolute bottom-2 right-2 w-6 h-6 opacity-20 border-b border-r border-blue-400 rounded-br"></div>
  </div>
);

const CountdownSegment = ({ value }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      {/* Background with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1319] to-[#080B12] rounded-lg transform translate-y-0.5 blur-sm"></div>
      
      {/* Main display */}
      <div className="relative bg-[#0A0E16] overflow-hidden rounded-lg px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border-t border-[#1c2334] shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-900/5"></div>
        
        {/* Inner reflection */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        
        {/* Number display */}
        <span className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
          {value}
        </span>
      </div>
    </div>
  </div>
);

const DechargeMiniSection = () => {
  return (
    <div className="p-2 sm:p-4 md:p-6 bg-blue-50/90"> 
      <div className="bg-[#080B12] min-h-screen text-gray-200 rounded-xl md:rounded-2xl shadow-xl shadow-blue-900/20 p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
        
        {/* Header Section */}
        <div className="mb-6 md:mb-8 lg:mb-12 md:ml-16 ml-0"> 
          <div className="flex items-center mb-4">
            <div className="bg-[#10151D] inline-block px-2 sm:px-3 py-1 sm:py-1.5 rounded-md">
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-blue-400">
                What It Is?
              </span>
            </div>
            <div className="h-px w-10 sm:w-16 bg-gray-700 ml-2 sm:ml-3"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-3">
            Meet The <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-sky-100 to-blue-600 bg-clip-text text-transparent">DeCharge</span> <span className="text-blue-400">Mini</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg">
            The perfect 3.3kW street-level solution for India's growing EV market
          </p>
        </div>

        {/* Main Product and Specs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 ">
          {/* Product Image */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-start mb-6 lg:mb-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              <Image
                src={dechargeMiniImage}
                alt="DeCharge Mini Product"
                width={400}
                height={500}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.3))'
                }}
                className="mx-auto scale-125 sm:scale-150"
              />
            </div>
          </div>
          
          {/* Tech Specs Section */}
          <div className="lg:col-span-7">
            <h3 className={`text-xs font-bold uppercase ${accentBlue} mb-3 sm:mb-4 tracking-wider`}>TECH SPECS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <TechSpecCard
                title="3.3kw Charging Power"
                description="Perfect for 2-wheelers, 3-wheelers, and overnight charging for small 4-wheelers."
              />
              <TechSpecCard
                title="Universal Compatibility"
                description="Works with all Indian EV standards including Bharat AC-001."
              />
              <TechSpecCard
                title="Smart Metering"
                description="Accurate power consumption tracking and automatic billing."
              />
              <TechSpecCard
                title="Built-In Connectivity"
                description="4G/Wi-Fi connectivity with remote management capabilities."
              />
            </div>
          </div>
        </div>

        {/* Social Proof / Live Happening Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-10 lg:mb-16 mt-8 sm:mt-0 ">
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
            <div className="flex -space-x-2 sm:-space-x-3 mb-3 sm:mb-0 sm:mr-4">
              {avatars.slice(0, 5).map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`User avatar ${index + 1}`}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-[#080B12]"
                  style={{
                    width: '36px',
                    height: '36px',
                    objectFit: 'cover'
                  }}
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <span className={`block text-xs sm:text-sm md:text-base font-bold uppercase ${accentBlue} tracking-wider mb-0.5`}>LIVE HAPPENING</span>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap">200+ People Already Signed In India</p>
            </div>
          </div>
        </div>

        {/* Countdown Timer & CTA */}
        <div className="text-center mt-4 sm:mt-8">
          <p className="text-xs text-gray-500 mb-2 sm:mb-3">Offer Ends In</p>
          <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-6 sm:mb-8">
            {/* Days */}
            <CountdownSegment value="0" />
            <CountdownSegment value="4" />
            <span className="text-lg sm:text-xl font-semibold text-gray-500 mx-0.5 sm:mx-1">:</span>
            
            {/* Hours */}
            <CountdownSegment value="2" />
            <CountdownSegment value="1" />
            <span className="text-lg sm:text-xl font-semibold text-gray-500 mx-0.5 sm:mx-1">:</span>
            
            {/* Minutes */}
            <CountdownSegment value="4" />
            <CountdownSegment value="1" />
          </div>
          
          {/* Enhanced CTA Button */}
          <Button className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] mx-auto py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-6 md:px-8 text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-md transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30">
            Reserve Your Bundle Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DechargeMiniSection;