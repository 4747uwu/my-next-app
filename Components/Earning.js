import React from 'react';

// Simple icon components
const OrderIcon = () => (
  <div className="w-7 h-7 flex items-center justify-center text-blue-400">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  </div>
);

const LocationIcon = () => (
  <div className="w-7 h-7 flex items-center justify-center text-blue-400">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  </div>
);

const RupeeIcon = () => (
  <div className="w-7 h-7 flex items-center justify-center text-blue-400">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.667 0 6.667-10 0-10" />
    </svg>
  </div>
);

const RupeeIconLarge = () => (
  <div className="w-10 h-10 flex items-center justify-center text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.667 0 6.667-10 0-10" />
    </svg>
  </div>
);

// Step card component
const StepCard = ({ icon, title, description }) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden p-5 border border-gray-800">
    <div className="bg-gray-800 p-2 rounded-lg inline-flex mb-4">
      {icon}
    </div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

// Earning potential card component
const EarningPotentialCard = ({ amount, title, description, textColor = "text-blue-400" }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden p-5 h-[150%] ">
    <div className={`${textColor} text-xl font-bold mb-2`}>{amount}</div>
    <h4 className="text-white text-lg font-semibold mb-1">{title}</h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const EarningSection = () => {
  return (
    <div className=" text-white py-16 px-6  bg-blue-50/90">
    <div className="bg-black text-white py-16 px-6 rounded-xl">
      <div className="max-w-6xl mx-auto">
        {/* "How It Works?" Badge */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex items-center">
            <span className="absolute left-0 top-1/2 w-8 h-px bg-gray-700"></span>
            <span className="bg-gray-800 text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-md uppercase tracking-wide">
              How It Works?
            </span>
            <span className="absolute right-0 top-1/2 w-8 h-px bg-gray-700"></span>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Start Earning, Within <span className="text-blue-400">4 Days</span>
        </h2>
        
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
          Getting started with DeCharge is simple - we handle the 
          technical details while you earn
        </p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <StepCard
            icon={<OrderIcon />}
            title="Order Your Bundle"
            description="Secure Your 5-Charger Bundle With A Pre-Order Deposit And Join The DeCharger India Community."
          />
          <StepCard
            icon={<LocationIcon />}
            title="Location Assessment & Installation"
            description="Our Team Will Work With You To Identify Optimal Installation Location & Installation."
          />
          <StepCard
            icon={<RupeeIcon />}
            title="Start Earning"
            description="As EVs Charge At Your Locations, You Earn Passive Income Automatically Deposited To Your Bank Account."
          />
        </div>

        {/* Earning Potential Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 rounded-full bg-gray-800 mb-4">
            <RupeeIconLarge />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Earning Potential</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-10">
            Based on current EV charging patterns in India's urban centres:
          </p>
        </div>

        {/* Earning Potential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <EarningPotentialCard
            amount="₹ 8,000/m"
            title="Low Usage"
            description="2 Hours/Day Per 5-Charge Bundle"
            textColor="text-blue-400"
          />
          <EarningPotentialCard
            amount="₹ 15,000/m"
            title="Average Usage"
            description="4 Hours/Day Per 5-Charge Bundle"
            textColor="text-yellow-400"
          />
          <EarningPotentialCard
            amount="₹ 22,000/m"
            title="High Usage"
            description="6+ Hours/Day Per 5-Charge Bundle"
            textColor="text-green-400"
          />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
            Reserve Your Bundle Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EarningSection;