
import React from 'react';
import { Zap, TrendingUp, HandCoins, Factory, ChevronRight, PlusCircle } from 'lucide-react';


import dechargeDevice from '../assets/7710bf1e92e594edc4b5057539b74f85f9532463 (1).png';
import cShape from '../assets/753046369971ebc7edb3c73571b5dbb191a7f4d7.png';


const avatar1 = "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";
const avatar2 = "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";
const avatar3 = "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";

const HeroSection = () => {
  return (
    <div
      className="relative min-fit text-white flex flex-col items-center justify-center py-0 px-5  z-10 bg-blue-50/90 overflow-hidden"

    >
      {/* Main Content Box */}
      <div className="relative bg-[#10141D] h-fit p-0 sm:p-0 md:pt-16 sm:pb-0 rounded-3xl shadow-2xl w-full max-w-8xl mx-auto border border-slate-700/50 z-20 py-0 mb-0 overflow-hidden">

        {/* Floating Decorative Icons */}
        <div className="absolute top-[10%] left-[5%] md:left-[8%] text-slate-500 opacity-30 select-none pointer-events-none transform -rotate-12">
          <div className="bg-slate-800/50 p-2 rounded-lg inline-block">
            <Zap size={24} />
          </div>
        </div>
        <div className="absolute top-[12%] right-[5%] md:right-[8%] text-slate-500 opacity-30 select-none pointer-events-none transform rotate-12">
          <div className="bg-slate-800/50 p-2 rounded-lg inline-block">
            <TrendingUp size={24} />
          </div>
        </div>
        <div className="absolute top-[45%] left-[2%] md:left-[5%] text-slate-500 opacity-30 select-none pointer-events-none transform rotate-8">
          <div className="bg-slate-800/50 p-2 rounded-lg inline-block">
            <HandCoins size={24} />
          </div>
        </div>
        <div className="absolute top-[48%] right-[2%] md:right-[5%] text-slate-500 opacity-30 select-none pointer-events-none transform -rotate-8">
          <div className="bg-slate-800/50 p-2 rounded-lg inline-block">
            <Factory size={24} />
          </div>
        </div>

        {/* Early Access Banner */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-black/70 border border-slate-700 text-gray-300 py-2 px-5 rounded-full text-xs sm:text-sm font-medium inline-flex items-center z-10">
            <span className="text-green-400 mr-2 text-lg leading-none animate-pulse">●</span>
            Early access available from May 10th 2025
            <ChevronRight size={16} className="ml-1 text-gray-500" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-5 max-w-4xl mx-auto text-center z-10">
          Power India's EV Revolution
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            With Decharge Mini Bundles
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto text-center z-10">
          Join the decentralised EV charging movement and earn passive
          income with our India-exclusive community deployment program
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20 sm:mb-20 z-10">
          <button
            className="py-3 px-8 rounded-full text-base font-semibold text-white transition-all duration-300 ease-in-out hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            style={{
              background: 'linear-gradient(to right, #3B82F6, #1D4ED8)',
              boxShadow: '0px 0px 22px 0px rgba(59, 130, 246, 0.65)'
            }}
          >
            Reserve Your Bundle Now
          </button>
          <button className="py-3 px-8 rounded-full text-base font-semibold bg-[#1F2937] text-gray-300 hover:bg-[#374151] transition-colors">
            Learn How It Works
          </button>
        </div>


        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center py-0  mt-40 z-0 ">
          
          {/* Left Glow */}
          <img
            src={cShape.src}
            alt="Glow"
            className="absolute left-[15%] sm:left-[50%] top-[30%] w-[50%] sm:w-[45%] md:w-[28%] h-auto opacity-100 z-0 -rotate-12 filter brightness-[150%] drop-shadow-xl"
          />
          {/* Right Glow */}
          <img
            src={cShape.src}
            alt="Glow"
            className="absolute right-[5%] sm:right-[50%] bottom-[30%] w-[50%] sm:w-[45%] md:w-[28%] h-auto opacity-100 z-0 rotate-12 scale-x-[-1] filter brightness-125 drop-shadow-lg"
          />

          {/* Charger Image */}
          <img
            src={dechargeDevice.src}
            alt="Decharge Mini Bundle"
            className="relative w-[100%] scale-[170%] sm:w-[60%] md:w-[55%] h-auto z-10"
            style={{
              filter: 'drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.5))',
              clipPath: 'inset(0 0 25% 0)'
            }}
          />
        </div>

        {/* User Stats Bar */}

      </div>
      <div className="bg-black border border-slate-700/70 py-3 px-4 sm:px-5 rounded-full flex flex-col sm:flex-row items-center justify-between gap-3 backdrop-blur-sm relative z-40 w-full max-w-lg mx-auto transform -translate-y-1/2">
        <div className="flex items-center">
          <div className="flex -space-x-2 mr-2">
            <img src={avatar1} alt="User 1" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-700 object-cover" />
            <img src={avatar2} alt="User 2" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-700 object-cover" />
            <img src={avatar3} alt="User 3" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-700 object-cover" />
          </div>
          <p className="text-xs sm:text-sm text-gray-300 m-0">
            +3k users earning from DeCharge
          </p>
        </div>
        <a href="#view-more" className="text-gray-300 no-underline text-xs sm:text-sm font-medium flex items-center hover:text-white group">
          View more
          <PlusCircle size={20} className="ml-1.5 text-white bg-slate-700 rounded-full p-0.5 group-hover:bg-slate-600 transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;