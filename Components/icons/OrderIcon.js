// src/components/icons/OrderIcon.js (Example)
const OrderIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 7H4C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7ZM19 15H5V9H19V15Z" />
      <path d="M7 11H10V13H7V11Z" />
    </svg>
  );
  
  // src/components/icons/LocationIcon.js (Example)
  const LocationIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" />
    </svg>
  );
  
  // src/components/icons/RupeeIcon.js (Example - for cards)
  const RupeeIconSmall = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8H13.67L15.04 4.94C15.18 4.58 14.96 4.18 14.59 4.04C14.23 3.91 13.83 4.12 13.69 4.48L12 9H8V11H11.7L9.16 19.38C9.04 19.76 9.29 20.15 9.66 20.26C9.76 20.29 9.86 20.3 9.96 20.3C10.26 20.3 10.54 20.13 10.65 19.84L13.3 11H18V9H13.2L14.84 4.62C14.96 4.24 14.71 3.85 14.34 3.74C13.98 3.62 13.57 3.83 13.44 4.19L12 8H6V18H8V13H12L10.67 17.06C10.53 17.42 10.75 17.82 11.12 17.96C11.48 18.09 11.88 17.88 12.02 17.52L14 13H18V11H14.3L16.84 2.62C16.96 2.24 16.71 1.85 16.34 1.74C15.98 1.62 15.57 1.83 15.44 2.19L14 6H6V4H18V6H12L13.67 1.94C13.81 1.58 14.21 1.36 14.58 1.5C14.94 1.63 15.16 2.03 15.02 2.39L13 6H18V8Z" />
    </svg>
  );
  
  // src/components/icons/RupeeIconLarge.js (Example - for Earning Potential title)
  const RupeeIconLarge = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Same path as RupeeIconSmall or a more detailed one */}
      <path d="M18 8H13.67L15.04 4.94C15.18 4.58 14.96 4.18 14.59 4.04C14.23 3.91 13.83 4.12 13.69 4.48L12 9H8V11H11.7L9.16 19.38C9.04 19.76 9.29 20.15 9.66 20.26C9.76 20.29 9.86 20.3 9.96 20.3C10.26 20.3 10.54 20.13 10.65 19.84L13.3 11H18V9H13.2L14.84 4.62C14.96 4.24 14.71 3.85 14.34 3.74C13.98 3.62 13.57 3.83 13.44 4.19L12 8H6V18H8V13H12L10.67 17.06C10.53 17.42 10.75 17.82 11.12 17.96C11.48 18.09 11.88 17.88 12.02 17.52L14 13H18V11H14.3L16.84 2.62C16.96 2.24 16.71 1.85 16.34 1.74C15.98 1.62 15.57 1.83 15.44 2.19L14 6H6V4H18V6H12L13.67 1.94C13.81 1.58 14.21 1.36 14.58 1.5C14.94 1.63 15.16 2.03 15.02 2.39L13 6H18V8Z" />
    </svg>
  );

  export { OrderIcon, LocationIcon, RupeeIconSmall, RupeeIconLarge };