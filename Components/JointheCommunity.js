import React from 'react';
import { Zap } from 'lucide-react';

export default function JoinCommunitySection() {
  return (
    <div className="w-full bg-black text-white relative overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between relative">
        {/* Left Content */}
        <div className="z-10 mb-8 md:mb-0 md:w-1/2">
          {/* Small Highlight Badge */}
          <div className="flex items-center mb-4">
            <div className="bg-blue-900 rounded-full p-1 mr-2">
              <Zap className="h-4 w-4 text-blue-400" />
            </div>
            <span className="text-blue-400 text-sm font-medium tracking-wide">DON'T WAIT</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Join The Community</h2>
          
          {/* Subtitle */}
          <p className="text-gray-400 mb-6">
            Get Early Access, Welcome to the <span className="text-white">future of EV revolution</span>
          </p>
          
          {/* CTA Button with Glow Effect */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium shadow-lg transition-all duration-300 border border-blue-500 relative">
            <span className="relative z-10">Reserve Your Bundle Now</span>
            <div className="absolute inset-0 rounded-full bg-blue-600 blur-md opacity-70"></div>
          </button>
        </div>
        
        {/* Right Image - EV Charger */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative z-10">
          <div className="relative w-64 h-80">
            {/* EV Charger Device */}
            <div className="bg-gray-200 rounded-lg p-4 w-full h-full flex items-center justify-center relative">
              {/* The Charger Body */}
              <div className="bg-white rounded-lg w-48 h-64 relative shadow-lg flex flex-col">
                {/* Top of Charger - Logo and Plug */}
                <div className="flex justify-between p-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 text-gray-600">⚡</div>
                  </div>
                  <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                    <span className="text-xs text-white">DeCharge</span>
                  </div>
                </div>
                
                {/* Middle Section - Glow Effect */}
                <div className="flex-grow flex items-center justify-center relative">
                  <div className="w-32 h-24 bg-green-500 relative overflow-hidden">
                    {/* Lightning Bolt */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg width="40" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 3L4 14H11L10 21L19 10H12L13 3Z" fill="purple" stroke="cyan" strokeWidth="0.5" />
                      </svg>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50"></div>
                  </div>
                </div>
                
                {/* Bottom of Charger */}
                <div className="h-6 flex justify-center items-end pb-2">
                  <span className="text-xs text-gray-500">DeCharge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Dark Circle in Background */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-gray-800 rounded-full blur-md"></div>
        
        {/* Small Dots Pattern */}
        <div className="absolute left-24 top-16 w-4 h-4 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute left-12 top-48 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute left-32 bottom-24 w-5 h-5 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute right-1/4 top-12 w-3 h-3 bg-blue-500 rounded-full opacity-20"></div>
      </div>
      
      {/* Bottom Border */}
      <div className="h-2 w-full bg-gradient-to-r from-blue-900 via-purple-700 to-blue-900"></div>
    </div>
  );
}