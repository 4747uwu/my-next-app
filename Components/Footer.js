// src/components/Footer.js
import React from 'react';
import { XIcon, TelegramIcon, LinkedInIcon, HeartIcon, MapPinIcon } from './icons/Footer'; // Adjust path

const Footer = ({ ctaOverlapAmount = 0 }) => {
  const socialLinks = [
    { Icon: XIcon, href: '#' },
    { Icon: TelegramIcon, href: '#' },
    { Icon: LinkedInIcon, href: '#' },
  ];

  const pageLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Terms and Condition', href: '#' },
  ];

  const locations = [
    { city: 'Hyderabad', Icon: MapPinIcon },
    { city: 'Bengaluru', Icon: MapPinIcon },
    // Note: The image shows "and Denver." separately.
  ];

  return (
    <footer
      className="bg-black text-slate-300 rounded-t-3xl relative pt-20 md:pt-28 lg:pt-32 h-screen flex justify-center items-center"
      style={{
        marginTop: `-${ctaOverlapAmount}px`,
        
        zIndex: 0,
      }}
    >
      
      <div className="absolute top-10 md:top-16 lg:top-20 mt-19 left-0 right-0 px-4 md:px-8">
        <div className="space-y-1 max-w-6xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-px bg-sky-500/30 w-full"></div>
          ))}
        </div>
      </div>

      {/* Main Footer Content Container */}
      <div className="container mx-auto px-6 py-12 md:py-16 lg:py-20 relative z-1"> {/* z-1 for content above big logo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: Powering India */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Powering India's EV Resolution
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="bg-slate-800 hover:bg-sky-500 p-2.5 rounded-full transition-colors duration-300"
                >
                  <Icon className="w-4 h-4 text-slate-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Pages */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Pages</h4>
            <ul className="space-y-2">
              {pageLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-sky-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Contact Us</h4>
            <p>
              <a href="mailto:support@decharge.network" className="hover:text-sky-400 transition-colors">
                support@decharge.network
              </a>
            </p>
            <p className="text-sm text-slate-500">
              All rights reserved with Decharge
            </p>
          </div>
        </div>

        {/* Big Decharge Logo - Positioned at the bottom, behind content */}
        <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 w-full text-center -z-0 pointer-events-none">
          <h1 className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[200px] font-bold text-sky-600 opacity-10 leading-none select-none">
            DECHARGE
          </h1>
        </div>

        {/* Made with line */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row justify-center items-center text-center text-sm space-y-2 sm:space-y-0 sm:space-x-2 text-slate-500 relative z-1">
          <span>Made with</span>
          <HeartIcon className="w-4 h-4 text-red-500 inline-block mx-1" />
          <span>in</span>
          {locations.map((loc, index) => (
            <React.Fragment key={loc.city}>
              <span className="flex items-center ml-1">
                <loc.Icon className="w-4 h-4 text-slate-400 mr-1" />
                {loc.city}
                {index < locations.length -1 && <span className="hidden sm:inline">,</span>}
              </span>
            </React.Fragment>
          ))}
          <span className="ml-1">and Denver.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;