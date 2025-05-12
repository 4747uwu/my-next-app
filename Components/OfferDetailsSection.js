// src/components/OfferDetailsSection.js
import React from 'react';
import OfferDetailCard from './OfferDetailCard'; // Adjust path

// --- Import your actual icons ---
// Fallback local definitions for this example:
const UserPlusIconLocal = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>);
const CubeIconLocal = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>);
const StarIconSolidLocal = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>);
const ClockIconSolidLocal = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" /></svg>);
const PercentageIconLocal = ({ className }) => (<svg className={className} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5674 4.81564L5.31737 16.0656C5.2001 16.1829 5.04104 16.2488 4.87518 16.2488C4.70933 16.2488 4.55027 16.1829 4.433 16.0656C4.31572 15.9484 4.24984 15.7893 4.24984 15.6234C4.24984 15.4576 4.31572 15.2985 4.433 15.1813L15.683 3.93126C15.8002 3.81399 15.9591 3.74806 16.1249 3.74799C16.2907 3.74791 16.4497 3.8137 16.567 3.93087C16.6843 4.04804 16.7502 4.207 16.7503 4.37278C16.7503 4.53856 16.6845 4.69758 16.5674 4.81486V4.81564ZM4.44862 7.92501C3.92119 7.39748 3.62493 6.68203 3.625 5.93606C3.62507 5.19009 3.92148 4.47471 4.44901 3.94728C4.97654 3.41985 5.69199 3.12358 6.43796 3.12366C7.18393 3.12373 7.89932 3.42014 8.42675 3.94767C8.95417 4.4752 9.25044 5.19065 9.25037 5.93662C9.25029 6.68259 8.95389 7.39797 8.42635 7.9254C7.89882 8.45283 7.18338 8.7491 6.43741 8.74902C5.69144 8.74895 4.97605 8.45254 4.44862 7.92501ZM4.87518 5.93751C4.87539 6.19442 4.93893 6.44732 5.0602 6.67381C5.18147 6.90031 5.35672 7.0934 5.57042 7.236C5.78412 7.3786 6.02969 7.4663 6.28538 7.49134C6.54107 7.51638 6.79899 7.47799 7.0363 7.37956C7.27361 7.28114 7.48299 7.12571 7.6459 6.92705C7.8088 6.72839 7.92021 6.49263 7.97025 6.24064C8.0203 5.98865 8.00743 5.7282 7.9328 5.48237C7.85816 5.23654 7.72406 5.0129 7.54237 4.83126C7.32376 4.61272 7.04523 4.46392 6.74204 4.40371C6.43884 4.3435 6.1246 4.37457 5.83906 4.493C5.55353 4.61143 5.30954 4.81189 5.13797 5.06902C4.96639 5.32615 4.87494 5.62839 4.87518 5.93751ZM17.3752 14.0625C17.375 14.7132 17.1493 15.3437 16.7364 15.8466C16.3235 16.3495 15.749 16.6936 15.1108 16.8204C14.4726 16.9472 13.8102 16.8488 13.2364 16.542C12.6626 16.2351 12.2129 15.7388 11.9641 15.1376C11.7152 14.5365 11.6824 13.8676 11.8714 13.2449C12.0604 12.6223 12.4595 12.0845 13.0006 11.7231C13.5416 11.3617 14.1913 11.1991 14.8388 11.263C15.4864 11.3268 16.0917 11.6133 16.5517 12.0734C16.8137 12.3341 17.0214 12.6441 17.1627 12.9855C17.3041 13.3269 17.3763 13.693 17.3752 14.0625ZM16.1252 14.0625C16.1253 13.701 16 13.3507 15.7707 13.0712C15.5414 12.7917 15.2224 12.6004 14.8678 12.5298C14.5133 12.4592 14.1452 12.5137 13.8264 12.684C13.5075 12.8544 13.2576 13.13 13.1192 13.464C12.9808 13.7979 12.9625 14.1695 13.0674 14.5155C13.1723 14.8614 13.3938 15.1603 13.6944 15.3612C13.9949 15.5621 14.3558 15.6526 14.7156 15.6172C15.0754 15.5818 15.4117 15.4228 15.6674 15.1672C15.8129 15.0225 15.9283 14.8503 16.0069 14.6607C16.0855 14.4711 16.1257 14.2678 16.1252 14.0625Z" fill="#34B2F6"/></svg>);
const CurrencyRupeeIconLocal = ({ className }) => (<svg className={className} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 6.25C16.75 6.41576 16.6842 6.57473 16.5669 6.69194C16.4497 6.80915 16.2908 6.875 16.125 6.875H13.6133C13.6203 6.97813 13.625 7.08203 13.625 7.1875C13.6236 8.43026 13.1292 9.6217 12.2505 10.5005C11.3717 11.3792 10.1803 11.8736 8.9375 11.875H7.74141L13.4203 17.0375C13.4822 17.0924 13.5325 17.159 13.5685 17.2335C13.6044 17.308 13.6252 17.3889 13.6296 17.4715C13.6341 17.5541 13.6221 17.6367 13.5944 17.7146C13.5666 17.7925 13.5237 17.8642 13.4681 17.9254C13.4125 17.9866 13.3452 18.0361 13.2703 18.0712C13.1954 18.1062 13.1143 18.126 13.0316 18.1295C12.949 18.1329 12.8665 18.12 12.7889 18.0913C12.7113 18.0626 12.6402 18.0189 12.5797 17.9625L5.70469 11.7125C5.61134 11.6277 5.54585 11.5165 5.51683 11.3938C5.48781 11.271 5.49662 11.1423 5.54209 11.0247C5.58757 10.907 5.66759 10.8059 5.77163 10.7345C5.87566 10.6632 5.99885 10.625 6.125 10.625H8.9375C9.84886 10.624 10.7226 10.2615 11.367 9.61704C12.0115 8.97261 12.374 8.09886 12.375 7.1875C12.375 7.08203 12.3695 6.97813 12.3602 6.875H6.125C5.95924 6.875 5.80027 6.80915 5.68306 6.69194C5.56585 6.57473 5.5 6.41576 5.5 6.25C5.5 6.08424 5.56585 5.92527 5.68306 5.80806C5.80027 5.69085 5.95924 5.625 6.125 5.625H11.9977C11.7098 5.06091 11.2717 4.5873 10.7317 4.25644C10.1917 3.92557 9.5708 3.75031 8.9375 3.75H6.125C5.95924 3.75 5.80027 3.68415 5.68306 3.56694C5.56585 3.44973 5.5 3.29076 5.5 3.125C5.5 2.95924 5.56585 2.80027 5.68306 2.68306C5.80027 2.56585 5.95924 2.5 6.125 2.5H16.125C16.2908 2.5 16.4497 2.56585 16.5669 2.68306C16.6842 2.80027 16.75 2.95924 16.75 3.125C16.75 3.29076 16.6842 3.44973 16.5669 3.56694C16.4497 3.68415 16.2908 3.75 16.125 3.75H12.1203C12.6778 4.26589 13.1019 4.90927 13.3562 5.625H16.125C16.2908 5.625 16.4497 5.69085 16.5669 5.80806C16.6842 5.92527 16.75 6.08424 16.75 6.25Z" fill="#34B2F6"/></svg>);
const LightningBoltIconLocal = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>);
const CalendarDaysIconLocal = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3.75v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" /></svg>);
// ---

const OfferDetailsSection = () => {
  const offerData = [
    {
      id: 'bundle',
      mainIcon: <UserPlusIconLocal />,
      title: "Bundle Package",
      description: "Each bundle includes 5 Decharge Mini (3.3Kw) Ev chargers with all necessary installation hardware.",
      detailsList: [
        { icon: <CubeIconLocal />, text: "5 DeCharge Mini Units" },
      ],
      iconBgClass: "bg-sky-100",
      iconColorClass: "text-sky-500",
    },
    {
      id: 'pricing',
      mainIcon: <StarIconSolidLocal />,
      title: "Special Pricing",
      description: "Exclusive bundle price with limited-time promotional discount for early adopters.",
      detailsList: [
        { icon: <PercentageIconLocal />, text: "10% Launch Discount" },
        { icon: <CurrencyRupeeIconLocal />, text: "Only $100 Per Charger" }, // Assuming $ is placeholder for Rupee
      ],
      iconBgClass: "bg-blue-100", // Different color scheme
      iconColorClass: "text-blue-500",
    },
    {
      id: 'availability',
      mainIcon: <ClockIconSolidLocal />,
      title: "Limited Availability",
      description: "Our exclusive community launch is available for a limited time and quantity.",
      detailsList: [
        { icon: <LightningBoltIconLocal />, text: "Only 400 Bundles Available" },
        { icon: <CalendarDaysIconLocal />, text: "Pre-Order Now For Priority" },
      ],
      iconBgClass: "bg-indigo-100", // Different color scheme
      iconColorClass: "text-indigo-500",
    }
  ];

  // Determine a common min-height for cards in this section for visual consistency
  // This can be adjusted or made responsive
  const cardMinHeight = "min-h-[300px] md:min-h-[320px]"; // Example min-height

  return (
    <section className="py-16 md:py-24 bg-blue-50/90"> {/* Example section background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
        <div className="relative inline-flex items-center mb-6">
            <div className="h-px w-8  bg-indigo-300/80 gradient-div"></div>
            <span className="mx-3 text-[9px] font-bold uppercase text-indigo-700 bg-indigo-200/80 px-4  p-2 rounded-md tracking-wider">Offer Details</span>
            <div className="h-px w-8 bg-gray-700 gradient-div"></div> {/* Consider consistent bg color for lines */}
          </div>
          <h2 className="text-4xl text-black md:text-5xl font-medium text-center mb-5">
          Exclusive <span className="text-blue-600">Bundle Offer</span> Details
        </h2>
        <p className="text-gray-500 text-sm md:text-base text-center mb-12 md:mb-16 max-w-xl mx-auto">
          We're launching 400 bundles (5 devices per bundle at a special price for early community members in India.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-[90%] justify-items-center justify-center mx-auto">
          {offerData.map((offer) => (
            <OfferDetailCard
              key={offer.id}
              mainIcon={offer.mainIcon}
              title={offer.title}
              description={offer.description}
              detailsList={offer.detailsList}
              iconBgClass={offer.iconBgClass}
              iconColorClass={offer.iconColorClass}
              cardMinHeight={cardMinHeight} // Pass the common min-height
              cardMaxWidth="max-w-sm" // Slightly smaller max-width for 3-column
            />
          ))}
        </div>

        {/* "Ready to Secure" CTA Section */}
        <div className="mt-16 md:mt-20 max-w-6xl mx-auto">
        <div 
            className="p-8 md:p-10 rounded-2xl shadow-xl text-white flex flex-col md:flex-row items-center justify-between"
            style={{ background: 'linear-gradient(115.78deg, #D8DDFF 61.9%, #3852FF 87.39%)' }}
          >
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl text-black md:text-3xl font-bold mb-1.5">
                Ready To Secure Your Bundle?
              </h2>
              <p className="text-black text-sm md:text-base">
                Lock In Your 5-Device Bundle Now Before They're Gone
              </p>
            </div>
            <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-indigo-50 transition-colors duration-300 whitespace-nowrap">
              Reserve Your Bundle Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OfferDetailsSection;