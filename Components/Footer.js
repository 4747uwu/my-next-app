// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import denver from '@/assets/denver.png';
import hyderabad from '@/assets/hyderabad.png';
import bengaluru from '@/assets/bengaluru.png';
import footerlogo from '@/assets/footerlogo.png';

const Footer = () => {
  return (
    <footer className='sm:p-5 p-0 pt-0'>
      <div className="bg-black text-white w-full relative overflow-x-hidden rounded-xl sm:rounded-2xl pt-32">
        {/* Blue horizontal lines decoration */}
        <div className="h-4 w-full relative">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-400 w-full"
              style={{ top: i * 10, height: `${2 + i}px`, opacity: 0.7 + i * 0.1 }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-16 pb-5">
          <div className="flex flex-col md:flex-row relative">
            {/* Gradient dividers */}
            <div className="hidden md:block absolute left-1/3 top-8 bottom-8 w-px">
              <span className="absolute inset-0 bg-gradient-to-b from-gray-800/0 via-blue-400/70 to-gray-800/0 transition-opacity duration-500 hover:opacity-80"></span>
            </div>
            <div className="hidden md:block absolute left-2/3 top-8 bottom-8 w-px">
              <span className="absolute inset-0 bg-gradient-to-b from-gray-800/0 via-blue-400/70 to-gray-800/0 transition-opacity duration-500 hover:opacity-80"></span>
            </div>

            {/* Left section - Company info */}
            <div className="space-y-6 md:w-1/3 py-4 md:pr-12">
              <h3 className="text-2xl font-bold">
                Powering India&apos;s EV Resolution
              </h3>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {/* SVG icons here */}
                {/* X (Twitter) */}
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Middle section - Pages */}
            <div className="md:w-1/3 py-4 md:px-12 mt-6 md:mt-0">
              <h3 className="text-lg font-bold mb-6">PAGES</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="hover:text-blue-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-blue-400">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-blue-400">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-blue-400">
                    Terms and Condition
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right section - Contact */}
            <div className="md:w-1/3 py-4 md:pl-12 mt-6 md:mt-0">
              <h3 className="text-lg font-bold mb-6">CONTACT US</h3>
              <p className="mb-4">
                <a href="mailto:support@decharge.network" className="hover:text-blue-400">
                  support@decharge.network
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                All rights reserved with Decharge
              </p>
            </div>
          </div>

          {/* Bottom logo and locations */}
          <div className="pt-10 px-4">
            {/* Logo */}
            <div className="mb-8 flex justify-center items-center relative w-full h-30 bg-black z-10 overflow-hidden">
              {/* Gradient Shadow Layer from Bottom to Top */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/70 to-transparent z-20 pointer-events-none"></div>

              {/* Logo Image */}
              <div className="relative w-full h-20 md:scale-125 lg:scale-150 z-10">
                <Image
                  src={footerlogo.src}
                  alt="Decharge Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>


            {/* Location line */}
            <div className="flex flex-wrap items-center justify-center text-sm text-gray-400 gap-3">
              <span className="text-white">Made with ❤️ in</span>

              {/* Hyderabad */}
              <div className="flex items-center gap-1">
                <span className='sm:mr-3'>Hyderabad</span>
                <div className="relative w-10 h-10 rotate-12 hidden sm:flex">
                  <Image
                    src={hyderabad.src}
                    alt="Hyderabad map"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg hidden sm:flex"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:flex" >
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bengaluru */}
              <div className="flex items-center gap-1">
                <span className=' sm:mr-3'>Bengaluru</span>
                <div className="relative w-10 h-10 -rotate-12 hidden sm:flex">
                  <Image
                    src={bengaluru.src}
                    alt="Bengaluru map"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg hidden sm:flex"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:flex">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Denver */}
              <div className="flex items-center gap-1">
                <span className='sm:mr-3'>Denver</span>
                <div className="relative w-10 h-10 rotate-3 hidden sm:flex">
                  <Image
                    src={denver.src}
                    alt="Denver map"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg hidden sm:flex"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:flex">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
