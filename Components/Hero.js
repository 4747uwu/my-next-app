import React from 'react';
import { Zap, Activity, ChevronRight } from 'lucide-react';
import chargerImage from '../assets/7710bf1e92e594edc4b5057539b74f85f9532463 (1).png';
import blueGlowImage from '../assets/753046369971ebc7edb3c73571b5dbb191a7f4d7.png';

const Hero = () => {
  return (
    <div className="bg-blue-50 py-4">
      <div className="bg-gray-900 text-white relative overflow-hidden pt-10 pb-16 rounded-3xl mx-4 md:mx-6">
        {/* Yaman Saini label at the top */}
        <div className="absolute top-4 right-1/2 transform translate-x-1/2">
          <div className="bg-yellow-400 px-3 py-1 rounded-md text-xs font-medium text-black">
            Yaman Saini
          </div>
        </div>
        
        {/* Decorative icons */}
        <div className="absolute left-1/4 top-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gray-800 p-4 rounded-full">
            <Zap className="text-white" size={24} />
          </div>
        </div>
        <div className="absolute right-1/4 top-1/4 transform translate-x-1/2 -translate-y-1/2">
          <div className="bg-gray-800 p-4 rounded-full">
            <Activity className="text-white" size={24} />
          </div>
        </div>
        
        {/* Early access notification */}
        <div className="flex justify-center mb-6">
          <div className="bg-black bg-opacity-40 rounded-full px-6 py-2 inline-flex items-center">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-sm text-gray-200">Early access available from May 10th 2025</span>
            <ChevronRight className="ml-1 text-gray-400" size={16} />
          </div>
        </div>
        
        {/* Main content */}
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Power India's EV Revolution
            <br />
            With Decharge Mini Bundles
          </h1>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the decentralised EV charging movement and earn passive
            income with our India-exclusive community deployment program
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium"
              style={{
                background: 'linear-gradient(to right, #3962D6, #2A4BB9)',
                boxShadow: '0 0 20px rgba(57, 98, 214, 0.7)'
              }}>
              Reserve Your Bundle Now
            </button>
            <button className="bg-transparent border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-full font-medium">
              Learn How It Works
            </button>
          </div>
        </div>
        
        {/* Charger image with blue glow effects */}
        <div className="max-w-xl mx-auto mt-12 relative">
          {/* Blue glow background - larger and more visible */}
          <div className="absolute inset-0 z-0" 
            style={{ 
              backgroundImage: `url(${blueGlowImage.src})`,
              backgroundSize: '150% 150%',  // Make the glow larger
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 1,
              transform: 'scale(1.5)',  // Make the glow extend beyond the charger
              filter: 'blur(5px)'  // Add slight blur to mimic the glow effect
            }}>
          </div>
          
          {/* Charger image with improved positioning */}
          <div className="relative z-10 flex justify-center items-center">
            <img 
              src={chargerImage.src} 
              alt="Decharge Mini Bundle Charger" 
              className="w-3/4 h-auto"  // Sizing to match the reference image
              style={{
                filter: 'drop-shadow(0 0 8px rgba(0, 162, 255, 0.5))'  // Add subtle glow to charger
              }}
            />
          </div>
          
          {/* Users indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between bg-black bg-opacity-50 px-4 py-2 mx-4 rounded-full z-20">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white"></div>
              </div>
              <span className="ml-2 text-sm text-gray-200">+3K users earning from DeCharge</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-200">View more</span>
              <div className="ml-1 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <span className="text-black text-xs font-bold">i</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;