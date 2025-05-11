// src/components/DechargeMiniSection.js
import React from 'react';
import Button from './Button'; 
import Image from 'next/image';

import dechargeMiniImage from '../assets/3963aed2e7506a6c050877cef54991ccd3921acf (1).png';

// Placeholder avatars
const avatars = [
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  
];

const accentBlue = "text-[#4F80E8]"; // Eyedropped this blue from the image, slightly different from default blue-500

const TechSpecCard = ({ title, description }) => (
  // Darker background for cards, more aligned with the image
  <div className="bg-[#10151D] p-5 rounded-xl h-full flex flex-col">
    <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
    <p className="text-xs text-gray-400 leading-relaxed flex-grow">{description}</p>
  </div>
);

const CountdownSegment = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-3xl md:text-4xl font-bold text-white bg-[#0A0E16] px-3 py-2 rounded-md"> {/* Even darker bg for digits */}
      {value < 10 ? `0${value}` : value}
    </span>
    <span className="text-[10px] text-gray-500 uppercase mt-1.5 tracking-wider">{label}</span>
  </div>
);

const DechargeMiniSection = () => {
  return (
    <div className="p-6 sm:p-2 md:p-6 bg-blue-50/90"> 
      <div className="bg-[#080B12] text-gray-200 rounded-xl md:rounded-2xl shadow-xl shadow-blue-900/20 p-6 sm:p-8 md:p-10 relative">
        
        <div className="mb-10 md:mb-12"> 
          <div className="flex items-center justify-start mb-3">
            <span className="inline-block px-2.5 py-1 rounded-full font-bold uppercase text-[12px] bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              What It Is?
            </span>
            <span className="h-px w-10 bg-gray-700 ml-3"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Meet The DeCharge <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Mini</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-lg"> {/* Slightly increased max-width */}
            The perfect 3.3kW street-level solution for India's growing EV market
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16 items-center">
          {/* Left: Image (takes approx 5/12 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[600px] sm:max-w-[400px] md:max-w-[920px] mx-auto">
              <Image
                src={dechargeMiniImage}
                alt="DeCharge Mini Product"
                layout="responsive" 
                
                
                priority 
                className="filter drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)] w-full h-full" // Custom drop shadow for product
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className={`text-xs font-bold uppercase ${accentBlue} mb-4 tracking-wider`}>Tech Specs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-10 md:mb-12 py-4 px-1 border-t border-b border-gray-800/50">
          <div className="flex items-center">
            <div className="flex -space-x-2.5 mr-3">
              {avatars.slice(0, 8).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-[#080B12] object-cover" // Border matches main bg
                />
              ))}
            </div>
            <div>
              <span className={`block text-[10px] font-bold uppercase ${accentBlue} tracking-wider mb-0.5`}>Live Happening</span>
              <p className="text-md font-semibold text-white">200+ People Already Signed In India</p>
            </div>
          </div>
        </div>

        {/* Countdown Timer & CTA */}
        <div className="text-center pt-6 pb-4">
          <p className="text-xs text-gray-500 mb-3">Offer Ends In</p>
          <div className="flex justify-center items-end space-x-2 sm:space-x-3 md:space-x-4 mb-6 md:mb-8">
            <CountdownSegment value={4} label="Days" />
            <span className="text-2xl md:text-3xl font-semibold text-gray-700 pb-4 relative -top-0.5">:</span>
            <CountdownSegment value={21} label="Hrs" />
            <span className="text-2xl md:text-3xl font-semibold text-gray-700 pb-4 relative -top-0.5">:</span>
            <CountdownSegment value={41} label="Mins" />
          </div>
          <Button className="w-full max-w-[280px] mx-auto py-3 px-6 text-sm font-semibold"> {/* Slightly larger button */}
            Reserve Your Bundle Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DechargeMiniSection;