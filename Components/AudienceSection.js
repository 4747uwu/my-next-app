// src/components/AudienceSection.js
import React from 'react';
import TestimonialCard from './TestimonialCard'; // Adjust path

// Assume testimonialsData is the same as in the previous correct version
const testimonialsData = [
  {
    id: 1,
    avatarUrl: 'https://source.unsplash.com/random/100x100/?portrait,man,coding,lines',
    avatarBgClass: 'bg-sky-100',
    name: 'Phil Hedayatnia',
    isVerified: true,
    role: 'Running A Founder-Friendly Design Firm @Airfoilstudio',
    twitterHandle: '@Airfoilstudio',
    ratingValue: 4.2,
    testimonialText: "EV Infrastructure Needs To Get Way Better. Solutions Like @DeCharge__ That Provide Token Incentives To Build Out EV Infrastructure Are Very Needed.",
    highlightTerm: '@DeCharge__',
  },
  {
    id: 2,
    avatarUrl: 'https://source.unsplash.com/random/100x100/?portrait,man,suit,outdoor',
    avatarBgClass: 'bg-slate-100',
    name: 'Pratik',
    isVerified: true,
    role: 'GP@Levitate_labs Accelerating @Base Builders',
    twitterHandle: '@BaseBuilders',
    ratingValue: 4.2,
    testimonialText: [
      "@DeCharge__ Is Delivering The Future Of Fully Autonomous, AI-Powered Energy Network For Electric Vehicles.",
      "- 150+ Locations",
      "- 500+ Paying Customers",
      "- 630k+ Charging Minutes",
      " ",
      "Join Us To Learn More From @DoctorPrkabout Their Grand Vision In Revolutionising DePin Space"
    ],
    highlightTerm: '@DeCharge__',
  },
  {
    id: 3,
    avatarUrl: 'https://source.unsplash.com/random/100x100/?portrait,woman,tech,neon',
    avatarBgClass: 'bg-teal-50',
    name: 'Mattytay',
    isVerified: true,
    role: 'Cofounder @Colosseum',
    twitterHandle: '@Colosseum',
    ratingValue: 4.2,
    testimonialText: "I Do Think DePIN Can Play A Key Role In Ameliorating Energy Grid Issues In Many Countries.\nStarting In Southeast Asia Most Likely,",
    highlightTerm: 'DePIN',
  },
  {
    id: 4,
    avatarUrl: 'https://source.unsplash.com/random/100x100/?abstract,logo,dark',
    avatarBgClass: 'bg-neutral-800',
    name: 'DePHY',
    isVerified: true,
    isAvatarDark: true,
    role: '@Dephynetwork',
    twitterHandle: '@Dephynetwork',
    ratingValue: 4.2,
    testimonialText: [
      "OSEM Is More Than A Chip, It's The Foundation For Decentralized Energy.",
      " ",
      "Deployed In The @DeCharge__",
      "Beast With 300+ Locations And 1M+ Minutes Of Charging, OSEM Ensures Seamless IoT-To-Blockchain Data Flow Using DePHY's Messaging Layer."
    ],
    highlightTerm: '@DeCharge__',
  },
   {
    id: 5,
    avatarUrl: 'https://source.unsplash.com/random/100x100/?robot,future,blue',
    avatarBgClass: 'bg-indigo-100',
    name: 'Flux | Decentralized Cloud',
    isVerified: true,
    role: '@RunOnFlux',
    twitterHandle: '@RunOnFlux',
    ratingValue: 4.2,
    testimonialText: "DeCharge Is Turning EV Chargers Into Earning Opportunities With Real-World Impact!",
    highlightTerm: 'DeCharge',
  },
  {
    id: 6,
    avatarUrl: 'https://source.unsplash.com/random/100x100/?pixel,art,man,sunglasses',
    avatarBgClass: 'bg-rose-100',
    name: 'Sergeant Sol',
    isVerified: true,
    role: 'Cofounder @Colosseum',
    twitterHandle: '@Colosseum',
    ratingValue: 4.2,
    testimonialText: [
        "The Folks At @DeCharge__ Are Some Of The Most Cracked Builders I Know With An Insanely Exciting Vision For The Future Of Decentralized Energy",
        " ",
        "Hear More About Their Plans In Their Chat With @Dylangbane Below"
    ],
    highlightTerm: '@DeCharge__',
  },
];


const AudienceSection = () => {
  const sectionBgColor = 'bg-slate-50'; // Define section background color for the gradient

  return (
    <section className={`py-16 md:py-24 ${sectionBgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12"> {/* Increased bottom margin for title section */}
          <span className="inline-block bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
            Why Trust Us?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
            Hear From{' '}
            <span className="text-gradient-blue-purple">Our Global Audience</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Real stories from real DeCharge Hosts across globe
          </p>
        </div>

        {/* Wrapper for the grid and the fade overlay */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 md:gap-y-20 lg:items-start">
            {testimonialsData.map((testimonial, index) => {
              let cardOuterClass = "";
              if (index % 3 === 1) {
                cardOuterClass = "lg:min-h-[32rem]";
              } else {
                cardOuterClass = "lg:min-h-[26rem]";
              }
             


              return (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  outerCardClassName={cardOuterClass}
                />
              );
            })}
          </div>

          {/* Fade overlay: Only show if there's enough content to scroll (e.g. more than 1 row for lg) */}
          {/* This condition is a simple proxy; a more robust check might involve JS or more specific CSS based on content height */}
          {testimonialsData.length > 3 && ( // Assuming 3 columns for lg
            <div
              className={`absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none`}
              // The `from-slate-50` should match `sectionBgColor`
              // `via-slate-50/80` helps smooth the gradient if the section bg is not pure white/black
            ></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;