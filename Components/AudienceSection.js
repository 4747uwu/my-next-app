// src/components/AudienceSection.js
import React from 'react';
import TestimonialCard from './TestimonialCard'; 

const testimonialsData = [
  {
    id: 1,
    avatarUrl: 'https://source.unsplash.com/random/100x100/?portrait,man,coding', 
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
    avatarUrl: 'https://source.unsplash.com/random/100x100/?portrait,man,suit',
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
    avatarUrl: 'https://source.unsplash.com/random/100x100/?portrait,woman,tech',
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
    avatarUrl: 'https://source.unsplash.com/random/100x100/?abstract,logo',
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
    avatarUrl: 'https://source.unsplash.com/random/100x100/?robot,future',
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
    avatarUrl: 'https://source.unsplash.com/random/100x100/?pixel,art,man',
    avatarBgClass: 'bg-rose-100',
    name: 'Sergeant Sol',
    isVerified: true,
    role: 'Cofounder @Colosseum',
    twitterHandle: '@Colosseum', // Assuming same as Mattytay for example
    ratingValue: 4.2,
    testimonialText: [
        "The Folks At @DeCharge__ Are Some Of The Most Cracked Builders I Know With An Insanely Exciting Vision For The Future Of Decentralized Energy",
        " ",
        "Hear More About Their Plans In Their Chat With @Dylangbane Below"
    ],
    highlightTerm: '@DeCharge__',
  },
];

// Add this to your global CSS or a <style jsx global> tag if using Next.js
/*

*/

const AudienceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 md:gap-y-20">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;