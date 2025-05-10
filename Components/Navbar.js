import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-24 bg-white w-full">
      <div className="flex-shrink-0">
        <a href="#" className="text-blue-800 font-bold text-2xl md:text-3xl">DECHarGE</a>
      </div>
      
      <div className="hidden md:flex items-center justify-center space-x-12 text-gray-700 flex-1 ml-16">
        <a href="#" className="hover:text-blue-600 transition-colors text-sm">The Offer</a>
        <a href="#" className="hover:text-blue-600 transition-colors text-sm">Charger Specs</a>
        <a href="#" className="hover:text-blue-600 transition-colors text-sm">EV Growth</a>
        <a href="#" className="hover:text-blue-600 transition-colors text-sm">How it works</a>
      </div>
      
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center min-w-[140px]" 
        style={{
          background: 'linear-gradient(to right, #3962D6, #2A4BB9)',
          boxShadow: '0 0 20px rgba(57, 98, 214, 0.7)'
        }}>
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;