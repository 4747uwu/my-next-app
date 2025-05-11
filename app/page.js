import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import OfferDetailsSection from "../Components/OfferDetailsSection";
import DechargeMiniSection from "../Components/DechargerMiniSection";
import MarketGrowthSection from "../Components/MarketGrowSection";
import EarningSection from "../Components/Earning";
import AudienceSection from "../Components/AudienceSection";
import JoinCommunityCTA from "../Components/JointheCommunity";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <Hero />
      <OfferDetailsSection />
      <DechargeMiniSection />
      <MarketGrowthSection />
      <EarningSection />
      <AudienceSection />
      <div className="relative bg-blue-50"> {/* Dark background for the footer area continuity */}
        <div className="container mx-auto px-4 relative z-10">
          
          <div className="pb-2 md:pb-24 lg:pb-0"> {/* Adjust as needed for visual alignment */}
            <JoinCommunityCTA />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}