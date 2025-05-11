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


const accentBlue = "text-[#4F80E8]"; // Eyedropped this blue from the image, slightly different from default blue-500
const TechSpecCard = ({ title, description }) => (
  <div className="bg-[#10151D] p-5 rounded-xl h-[200px] w-full flex flex-col relative overflow-hidden group">
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
    
    {/* Left border with sharper fade effect at top and bottom */}
    <div className="absolute left-0 top-0 w-1 h-full">
      {/* Glowing border */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-600
                    shadow-[0_0_12px_4px_rgba(79,128,232,0.4)] group-hover:shadow-[0_0_16px_6px_rgba(79,128,232,0.5)] 
                    transition-all duration-500"></div>
      
      {/* More aggressive fade mask for thinner appearance */}
      <div className="absolute inset-0 bg-gradient-to-b 
                    from-[#10151D] from-0% 
                    via-[#10151D] via-15% 
                    to-[#10151D] to-85%">
        <div className="absolute inset-0 bg-gradient-to-b 
                      from-transparent from-15% 
                      via-transparent via-40% 
                      to-transparent to-60%"></div>
      </div>
    </div>
    
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
      <div className="relative bg-[#0A0E16] overflow-hidden rounded-lg px-4 py-2.5 border-t border-[#1c2334] shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-900/5"></div>
        
        {/* Inner reflection */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        
        {/* Number display */}
        <span className="relative text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
          {value}
        </span>
      </div>
    </div>
  </div>
);


const DechargeMiniSection = () => {
  return (
    <div className="p-6 sm:p-2 md:p-6 bg-white"> 
      <div className="bg-[#080B12] h-screen text-gray-200 rounded-xl md:rounded-2xl shadow-xl shadow-blue-900/20 p-6 sm:p-8 md:p-10 relative">
        
      <div className="mb-10 md:mb-12"> 
        <div className="flex items-center mb-4">
          <div className="bg-[#10151D] inline-block px-3 py-1.5 rounded-md">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
              What It Is?
            </span>
          </div>
          <div className="h-px w-16 bg-gray-700 ml-3"></div>
        </div>
        <h2 className="text-6xl sm:text-4xl md:text-7xl lg:text-7xl font- text-white mb-3">
          Meet The <span className="text-7xl  bg-gradient-to-r from-sky-100 to-blue-600 bg-clip-text text-transparent">DeCharge</span> <span className="text-blue-400">Mini</span>
        </h2>
        <p className="text-sm text-gray-400 max-w-lg">
          The perfect 3.3kW street-level solution for India's growing EV market
        </p>
      </div>

        {/* Main Product and Specs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 ml-0 md:ml-0">
          {/* Product Image - Takes 5/12 columns */}
          <div className="lg:col-span-5 flex items-center justify-center mt-10 ml-0">
            <div className="relative">
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
                className="mx-auto scale-[150%] mr-"
              />
            </div>
          </div>
          
          {/* Tech Specs Section - Takes 7/12 columns */}
          <div className="lg:col-span-7 h-[10px]">
            <h3 className={`text-xs font-bold uppercase ${accentBlue} mb-4 tracking-wider`}>TECH SPECS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <div className="flex flex-col h-[10px] md:flex-row items-center justify-center mt-30 mb-20">
          <div className="flex items-center mb-4 md:mb-0 h-[30px]">
            <div className="flex -space-x-3 mr-4">
              {avatars.slice(0, 8).map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`User avatar ${index + 1}`}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-[#080B12]"
                  style={{
                    width: '64px',
                    height: '64px'
                  }}
                />
              ))}
            </div>
            <div className="text-center md:text-left">
              <span className={`block text-[20px] font-bold uppercase ${accentBlue} tracking-wider mb-0.5`}>LIVE HAPPENING</span>
              <p className="text-lg font-semibold text-white whitespace-nowrap">200+ People Already Signed In India</p>
            </div>
          </div>
        </div>

        {/* Countdown Timer & CTA */}
        <div className="text-center mt-10">
          <p className="text-xs text-gray-500 mb-3">Offer Ends In</p>
          <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-8">
            {/* Days */}
            <CountdownSegment value="0" />
            <CountdownSegment value="4" />
            <span className="text-xl font-semibold text-gray-500 mx-1">:</span>
            
            {/* Hours */}
            <CountdownSegment value="2" />
            <CountdownSegment value="1" />
            <span className="text-xl font-semibold text-gray-500 mx-1">:</span>
            
            {/* Minutes */}
            <CountdownSegment value="4" />
            <CountdownSegment value="1" />
          </div>
          
          {/* Enhanced CTA Button */}
          <Button className="w-full max-w-[280px] mx-auto py-3.5 px-8 text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-md transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30">
            Reserve Your Bundle Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DechargeMiniSection;