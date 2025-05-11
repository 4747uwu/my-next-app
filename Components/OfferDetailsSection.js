'use client';
import React from 'react';
import Button from './Button'; // Assuming Button.js is in the same directory
import Image from 'next/image';


const PackageIcon = () => <span className="text-2xl text-blue-500">📦</span>;
const StarIcon = () => <span className="text-2xl text-blue-500">⭐</span>;
const ClockIcon = () => <span className="text-2xl text-blue-500">🕒</span>;

// Detail icons - ensuring they are blue
const CubeIcon = () => <span className="text-blue-500 text-lg">🧊</span>;
const PercentIcon = () => <span className="text-blue-500 text-lg">%</span>;
const RupeeIcon = () => <span className="text-blue-500 text-lg">₹</span>;
const LightningIcon = () => <span className="text-blue-500 text-lg">⚡</span>;
const CalendarIcon = () => <span className="text-blue-500 text-lg">📅</span>;

const OfferCard = ({ icon, title, description, details }) => {
  return (
    <div className="bg-white rounded-2xl p-6 pt-8 md:p-7 md:pt-9 shadow-md border border-gray-100 relative flex flex-col h-full mx-2">
      <span className="absolute top-3 right-3 w-1 h-1 bg-gray-200 rounded-full"></span>
      <span className="absolute top-3 right-6 w-1 h-1 bg-gray-200 rounded-full"></span>
      <span className="absolute bottom-3 left-3 w-1 h-1 bg-gray-200 rounded-full"></span>
      <span className="absolute bottom-3 left-6 w-1 h-1 bg-gray-200 rounded-full"></span>

      {/* Icon and Horizontal Line */}
      <div className="relative mb-5 w-full flex justify-start items-center">
        <div className="bg-blue-100 text-blue-500 inline-flex items-center justify-center p-3 rounded-full relative z-10">
          {icon}
        </div>
        <hr className="absolute left-0 right-0 w-full border-t border-gray-200 transform -translate-y-1/2 top-1/2 z-0" />
      </div>

      <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>

      <ul className="space-y-3">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            {detail.icon}
            <span className="ml-2">{detail.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const OfferDetailsSection = () => {
  const cardsData = [
    {
      icon: <PackageIcon />,
      title: 'Bundle Package',
      description: 'Each bundle includes 5 Decharge Mini (3.3kw) EV chargers with all necessary installation hardware.',
      details: [
        { icon: <CubeIcon />, text: '5 DeCharge Mini Units' },
      ],
    },
    {
      icon: <StarIcon />,
      title: 'Special Pricing',
      description: 'Exclusive bundle price with limited-time promotional discount for early adopters.',
      details: [
        { icon: <PercentIcon />, text: '10% Launch Discount' },
        { icon: <RupeeIcon />, text: 'Only $100 Per Charger' },
      ],
    },
    {
      icon: <ClockIcon />,
      title: 'Limited Availability',
      description: 'Our exclusive community launch is available for a limited time and quantity.',
      details: [
        { icon: <LightningIcon />, text: 'Only 400 Bundles Available' },
        { icon: <CalendarIcon />, text: 'Pre-Order Now For Priority' },
      ],
    },
  ];

  const handleReserveCTA = () => {
    console.log("CTA Reserve button clicked!");
    // Add your logic here
  }

  return (
    <div className="py-16 md:py-24 bg-blue-50/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Offer Details Badge */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex items-center">
            <span className="absolute left-0 top-1/2 w-8 h-px bg-indigo-300 -translate-y-1/2 -translate-x-full"></span>
            <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-md">
              Offer Details
            </span>
            <span className="absolute right-0 top-1/2 w-8 h-px bg-indigo-300 -translate-y-1/2 translate-x-full"></span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl text-black md:text-5xl font-medium text-center mb-5">
          Exclusive <span className="text-blue-600">Bundle Offer</span> Details
        </h2>
        <p className="text-gray-500 text-sm md:text-base text-center mb-12 md:mb-16 max-w-xl mx-auto">
          We're launching 400 bundles (5 devices per bundle at a special price for early community members in India.
        </p>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-16 max-w-6xl mx-auto">
          {cardsData.map((card, index) => (
            <OfferCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              details={card.details}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="bg-gradient-to-r rounded-2xl p-4 md:p-10 shadow-xl flex flex-col md:flex-row justify-between items-center w-[78%] mx-auto"
          style={{
            background: 'linear-gradient(93.78deg, #D8DDFF 61.9%, #3852FF 87.39%)',
          }}
        > {/* Removed fixed height, added mx-auto for centering */}
          <div className="text-black mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Ready To Secure Your Bundle?</h3> {/* Adjusted size, weight */}
            <p className="text-sm text-black-100 mt-1.5"> {/* Adjusted margin */}
              Lock In Your 5-Device Bundle Now Before They're Gone
            </p>
          </div>
          {/* Assuming Button component forwards className and handles styling */}
          <button
            onClick={handleReserveCTA}
            className="py-3 px-8 rounded-full text-base font-semibold text-white transition-all duration-300 ease-in-out hover:opacity-90 focus:outline-none focus:ring-2   focus:ring-opacity-50 transparentbutton cursor-pointer"
            style={{
              background: 'linear-gradient(93.36deg, #2236B8 -15.13%, #4D64FF 106.46%)'
            }}
          >
            Reserve Your Bundle Now
          </button>
        </div>
      </div>
    </div>
  );
};

const MyImageDisplay = () => {
  return (
    <div>
      {/* The src path starts from the public directory. */}
      {/* Ensure the image is located at: my-next-app/public/assets/3963aed2e7506a6c050877cef54991ccd3921acf (1).png */}
      <Image
        src="/assets/3963aed2e7506a6c050877cef54991ccd3921acf (1).png"
        alt="DeCharge Mini Product Image"
        width={1084} // Original width of the image
        height={902} // Original height of the image
      // You can add layout="responsive" if you want the image to scale with its parent container,
      // while maintaining aspect ratio. If using layout="responsive", width and height props define the aspect ratio.
      // layout="responsive" 
      />
    </div>
  );
};

export default OfferDetailsSection;
export { MyImageDisplay };