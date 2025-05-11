import React from 'react';
import TestimonialCard from './TestimonialCard'; // Adjust path as needed

const testimonialsData = [ // Make sure you have all 6 items as in previous examples
  {
    id: 1,
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    avatarBgClass: 'bg-blue-50/90',
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
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    avatarBgClass: 'bg-blue-50/90',
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
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    avatarBgClass: 'bg-blue-50/90',
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
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    avatarBgClass: 'bg-blue-50/90',
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
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    avatarBgClass: 'bg-blue-50/90',
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
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    avatarBgClass: 'bg-blue-50/90',
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
  const sectionBgColor = 'bg-slate-50';

  // Helper function to distribute items into columns
  const distributeToColumns = (data, numColumns) => {
    const columns = Array.from({ length: numColumns }, () => []);
    data.forEach((item, index) => {
      columns[index % numColumns].push(item); // Distribute items round-robin
    });
    return columns;
  };

  // Component to render a set of columns
  const ColumnsLayout = ({ numColumns }) => {
    const columnsData = distributeToColumns(testimonialsData, numColumns);

    return (
      <>
        {columnsData.map((columnItems, colIndex) => (

          <div key={colIndex} className="flex flex-col flex-1 bg-blue-50/90">
            {columnItems.map((testimonialItem, itemIndexInColumn) => {
              let cardOuterClass = "";

              if (numColumns === 3 && colIndex === 1) {
                cardOuterClass = "lg:min-h-[32rem]";
              } else if (numColumns === 3) {
                cardOuterClass = "lg:min-h-[26rem]";
              }


              return (

                <div
                  key={testimonialItem.id}
                  className={itemIndexInColumn > 0 ? 'mt-6 md:mt-8 bg-blue-50/90' : 'bg-blue-50/90'}
                >
                  <TestimonialCard
                    testimonial={testimonialItem}
                    outerCardClassName={cardOuterClass}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </>
    );
  };

  return (
    <section className={`py-16 md:py-24  bg-blue-50/90`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-15 md:mb-16">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="h-px w-8  bg-indigo-300/80 gradient-div"></div>
            <span className="mx-3 text-[9px] font-bold uppercase text-indigo-700 bg-indigo-200/80 px-4  p-2 rounded-md tracking-wider">Why Trust Us</span>
            <div className="h-px w-8 bg-gray-700 gradient-div"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
            Hear From{' '}
            <span className="text-gradient-blue-purple">Our Global Audience</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto ">
            Real stories from real DeCharge Hosts across globe
          </p>
        </div>

        <div className="relative">
          {/* Small screens: Single column layout */}
          <div className="md:hidden space-y-6"> {/* space-y handles vertical gaps */}
            {testimonialsData.map(testimonial => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}

              />
            ))}
          </div>

          {/* Medium screens: 2 columns */}
          <div className="hidden md:flex lg:hidden gap-x-6">
            <ColumnsLayout numColumns={2} />
          </div>

          {/* Large screens: 3 columns */}
          <div className="hidden lg:flex gap-x-6">
            <ColumnsLayout numColumns={3} />
          </div>

          {/* Fade overlay */}
          {/* Show if there's enough content to potentially be cut off or scroll */}
          {testimonialsData.length > 3 && (
            <div
              className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b from-transparent to-blue-50/90 pointer-events-none"
            ></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;