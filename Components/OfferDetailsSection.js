// src/components/OfferDetailsSection.js
import React from 'react';
import OfferDetailCard from './OfferDetailCard'; // Adjust path

// --- Import your actual icons ---
// Fallback local definitions for this example:
const UserPlusIconLocal = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>);
const CubeIconLocal = ({ className }) => (<svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>);
const StarIconSolidLocal = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>);
const ClockIconSolidLocal = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" /></svg>);
const PercentageIconLocal = ({ className }) => (<svg className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M15.28 4.72a.75.75 0 00-1.06 1.06L15.19 6.75H13.5a.75.75 0 000 1.5h1.69l-1.57 1.57a.75.75 0 101.06 1.06l1.57-1.57v1.69a.75.75 0 001.5 0V8.25h.06l.97.97a.75.75 0 101.06-1.06L17.25 6l1.06-1.06a.75.75 0 00-1.06-1.06L16.5 4.69V3a.75.75 0 00-1.5 0v1.69l-1.22-1.22zM4.72 15.28a.75.75 0 001.06-1.06L4.81 13.25H6.5a.75.75 0 000-1.5H4.81l1.57-1.57a.75.75 0 10-1.06-1.06l-1.57 1.57V8.25a.75.75 0 00-1.5 0v1.69L1.03 8.88a.75.75 0 00-1.06 1.06L2.75 14l-1.06 1.06a.75.75 0 101.06 1.06l1.06-1.06v1.69a.75.75 0 001.5 0v-1.69l1.22 1.22z" /></svg>);
const CurrencyRupeeIconLocal = ({ className }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 14.25a4.482 4.482 0 004.051-2.489.75.75 0 10-1.342-.735 3.002 3.002 0 01-2.709 1.664H12A2.25 2.25 0 009.75 10.5V7.5a.75.75 0 00-1.5 0v3a3.75 3.75 0 003.75 3.75h.051ZM12 7.5A2.25 2.25 0 009.75 5.25v-.75a.75.75 0 00-1.5 0v.75A3.75 3.75 0 0012 8.25h3a.75.75 0 000-1.5H12V5.25A2.25 2.25 0 009.75 3v-.75a.75.75 0 00-1.5 0v.75A3.75 3.75 0 0012 6.75h3.75a.75.75 0 000-1.5H12V3.75A2.25 2.25 0 009.75 1.5v-.75a.75.75 0 00-1.5 0V1.5A3.75 3.75 0 0012 5.25h4.5a.75.75 0 000-1.5H12V2.25A.75.75 0 0011.25 1.5H4.75a.75.75 0 000 1.5h5.011A4.485 4.485 0 0012 6.75h.051a4.482 4.482 0 004.051-2.489.75.75 0 10-1.342-.735A3.002 3.002 0 0112.051 5.16H12a2.25 2.25 0 00-2.25 2.25V9h1.5V7.5A.75.75 0 0112 6.75h.051A4.482 4.482 0 0016.102 4.26.75.75 0 0017.444 5a3.002 3.002 0 01-2.709 1.664H12A2.25 2.25 0 009.75 8.25V9h-3a.75.75 0 000 1.5h3v.75A2.25 2.25 0 0012 12.75h.051a4.482 4.482 0 004.051-2.489.75.75 0 00-1.342-.735 3.002 3.002 0 01-2.709 1.664H12a.75.75 0 01-.75-.75V9.75A2.25 2.25 0 009 7.5H4.5a.75.75 0 000 1.5H9V10.5A3.75 3.75 0 0012.75 14.25H18a.75.75 0 000-1.5h-5.25A2.25 2.25 0 0010.5 11.25v-.75a.75.75 0 00-1.5 0v.75a3.75 3.75 0 003.75 3.75h.75a.75.75 0 000-1.5h-.75a2.25 2.25 0 01-2.25-2.25v-.75a.75.75 0 00-1.5 0v.75A3.75 3.75 0 0011.25 15h6a.75.75 0 000-1.5h-5.25A2.25 2.25 0 009.75 12V9.75a.75.75 0 00-1.5 0V12A3.75 3.75 0 0011.25 15.75h6a.75.75 0 000-1.5h-5.25a.75.75 0 01-.75-.75v-1.5A2.25 2.25 0 009 10.5H3.75a.75.75 0 000 1.5h4.5A3.75 3.75 0 0015.75 15.75H19.5a.75.75 0 000-1.5h-3A2.25 2.25 0 0014.25 12v-1.5a.75.75 0 00-1.5 0V12A3.75 3.75 0 0016.5 15.75H21a.75.75 0 000-1.5h-3.75A2.25 2.25 0 0015 12.75V12a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v.75A2.25 2.25 0 0012.75 14.25H12zM12 21.75A9.75 9.75 0 1012 2.25a9.75 9.75 0 000 19.5z"/></svg>);
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
        <div className="relative inline-flex items-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-[76%] justify-items-center justify-center mx-auto">
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