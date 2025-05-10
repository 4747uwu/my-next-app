'use client';   
import React from 'react';
import Button from './Button'; // Assuming Button.js is in the same directory

// Placeholder icons (replace with actual SVGs or icon components for best results)
// Ensure these icons can inherit color or are styled directly if they are SVGs
const PackageIcon = () => <span className="text-2xl">📦</span>; // text-blue-500 applied by wrapper
const StarIcon = () => <span className="text-2xl">⭐</span>;   // text-blue-500 applied by wrapper
const ClockIcon = () => <span className="text-2xl">🕒</span>;  // text-blue-500 applied by wrapper

// Detail icons - ensuring they are blue
const CubeIcon = () => <span className="text-blue-500 text-lg">🧊</span>; 
const PercentIcon = () => <span className="text-blue-500 text-lg">%</span>;
const RupeeIcon = () => <span className="text-blue-500 text-lg">₹</span>;
const LightningIcon = () => <span className="text-blue-500 text-lg">⚡</span>;
const CalendarIcon = () => <span className="text-blue-500 text-lg">📅</span>;

const OfferCard = ({ icon, title, description, details }) => {
  return (
    <div className="bg-white rounded-2xl p-6 pt-8 md:p-7 md:pt-9 shadow-lg shadow-indigo-500/10 border border-gray-200/60 relative flex flex-col h-full min-h-[320px] w-[400px]"> 
      <span className="absolute top-3.5 right-3.5 w-1.5 h-1.5 bg-gray-200/50 rounded-full"></span>
      <span className="absolute top-3.5 right-7 w-1.5 h-1.5 bg-gray-200/50 rounded-full"></span>
      <span className="absolute bottom-3.5 left-3.5 w-1.5 h-1.5 bg-gray-200/50 rounded-full"></span>
      <span className="absolute bottom-3.5 left-7 w-1.5 h-1.5 bg-gray-200/50 rounded-full"></span>


      {/* Icon and Horizontal Line */}
      <div className="relative mb-5 w-full flex justify-start items-center"> 
        {/* Icon div: z-10 to be on top of the line. */}
        <div className="bg-blue-100 text-blue-500 inline-flex scale-[80%] items-start justify-start p-3.5 rounded-full relative z-10"> 
          {icon}
        </div>
        <hr className="absolute left-0 right-0 w-full border-t border-gray-300/70 transform -translate-y-1/2 top-1/2 z-0" /> 

       
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2.5">{title}</h3> {/* Darker title, adjusted margin */}
      <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p> {/* Lighter description, adjusted margin */}
      
      <ul className="space-y-3"> {/* Increased spacing */}
        {details.map((detail, index) => (
          <li key={index} className="flex items-center text-sm text-gray-800"> {/* Darker detail text */}
            {detail.icon} {/* Icon color is handled by its own component */}
            <span className="ml-2.5">{detail.text}</span>
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
      description: 'Each bundle includes 5 Decharge Mini (3.3Kw) EV chargers with all necessary installation hardware.',
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
    <div className="py-16 md:py-24 bg-gradient-to-br from-indigo-50/50 via-purple-50/40 to-blue-50/50"> {/* Adjusted gradient */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Offer Details Badge */}
        <div className="flex justify-center mb-8"> {/* Increased margin */}
          <div className="relative inline-flex items-center">
            <span className="absolute left-0 top-1/2 w-8 h-px bg-indigo-300 -translate-y-1/2 -translate-x-full"></span>
            <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase px-4 py-1.5 rounded-md">
              Offer Details
            </span>
            <span className="absolute right-0 top-1/2 w-8 h-px bg-indigo-300 -translate-y-1/2 translate-x-full"></span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font- text-gray-900 text-center mb-5"> {/* Adjusted size, color, margin */}
          Exclusive <span className="text-blue-600">Bundle Offer</span> Details
        </h2>
        <p className="text-gray-500 text-sm md:text-base text-center mb-12 md:mb-20 max-w-xl mx-auto"> {/* Adjusted color, margin */}
          We're launching 400 bundles (5 devices per bundle at a special price for early community members in India.
        </p>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-0 lg:gap-0.5 mb-16 md:mb-24">
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
        <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-indigo-500 rounded-2xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row justify-between items-center"> {/* Adjusted gradient, padding */}
          <div className="text-black mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Ready To Secure Your Bundle?</h3> {/* Adjusted size, weight */}
            <p className="text-sm text-black-100 mt-1.5"> {/* Adjusted margin */}
              Lock In Your 5-Device Bundle Now Before They're Gone
            </p>
          </div>
          {/* Assuming Button component forwards className and handles styling */}
          <Button 
            onClick={handleReserveCTA} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 rounded-lg shadow-md text-base transition-colors duration-150"
          >
            Reserve Your Bundle Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferDetailsSection;