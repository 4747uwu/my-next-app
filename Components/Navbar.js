'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import navlogo from '@/assets/navlogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  // Navigation links
  const navLinks = [
    { text: "The Offer", href: "#" },
    { text: "Charger Specs", href: "#" },
    { text: "EV Growth", href: "#" },
    { text: "How it works", href: "#" },
  ];

  return (
    <nav className={`relative z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-blue-50/95 backdrop-blur-md shadow-md' : 'py-4 bg-blue-50/90'
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-50">
            <a href="#" className="block">
              <Image
                src={navlogo}
                alt="DECHarGE Logo"
                className="h-3 w-auto md:h-6"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 lg:space-x-12 text-gray-700 flex-1 ml-10 lg:ml-16">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button 
              className="bg-blue-600 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium text-sm"
              style={{
                background: 'linear-gradient(to right, #3962D6, #2A4BB9)',
                boxShadow: '0 0 20px rgba(57, 98, 214, 0.7)'
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-5">
                <span 
                  className={`absolute h-0.5 w-full bg-gray-800 transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-2'
                  }`}
                />
                <span 
                  className={`absolute h-0.5 w-full bg-gray-800 transition-opacity duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute h-0.5 w-full bg-gray-800 transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fixed overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-blue-50/98 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-8">
          <div className="flex flex-col space-y-6 mt-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                {link.text}
              </a>
            ))}
          </div>
          
          <div className="mt-auto">
            <button 
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-base"
              style={{
                background: 'linear-gradient(to right, #3962D6, #2A4BB9)',
                boxShadow: '0 0 20px rgba(57, 98, 214, 0.7)'
              }}
              onClick={toggleMenu}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
