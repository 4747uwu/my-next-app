// src/components/Button.js
import React from 'react';

const Button = ({ children, onClick, type = "button", className = '', ...props }) => {
  const baseClasses = `
    relative
    inline-flex items-center justify-center // Ensures text is centered
    rounded-full
    py-3 px-7 
    text-white
    text-base font-semibold // Text style from image
    
    bg-indigo-600 // A vibrant blue, similar to the image
    
    // Shadow for glassy effect: 
    // 1. Inner top highlight
    // 2. Subtle inner bottom shadow
    // 3. Soft, light outer "border" created with outset shadow
    shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_2px_rgba(0,0,0,0.1),0px_0px_0px_1.5px_rgba(255,255,255,0.35)]
    
    transition-all duration-150 ease-in-out

    // Hover state: slightly lighter background, enhanced shadows
    hover:bg-indigo-500 
    hover:shadow-[inset_0_2px_5px_rgba(255,255,255,0.6),inset_0_-2px_3px_rgba(0,0,0,0.15),0px_0px_0px_1.5px_rgba(255,255,255,0.45)]

    // Active state: simulates button being pressed
    active:bg-indigo-700
    active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(0,0,0,0.1)] // Deeper inset shadow
    transform active:scale-[0.98] // Slight shrink on press

    focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-white
    // Added ring-offset-white for better focus visibility, assuming a light page background, adjust if needed
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`.trim()} // Combine base classes with custom ones, trim whitespace
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;