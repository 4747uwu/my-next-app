import React from 'react';
import Image from 'next/image';
import navlogo from '@/assets/navlogo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-24 bg-blue-50/90 w-full">
      <div className="flex-shrink-0">
        <a href="#">
          <Image
            src={navlogo}
            alt="DECHarGE Logo"
            className="h-3 w-auto md:h-6"
            priority
          />
        </a>
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
