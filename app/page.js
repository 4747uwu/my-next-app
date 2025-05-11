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
import CardComonent from "../Components/CardComponent";

export default function Home() {
  const estimatedCtaHeightForOverlapCalcLg = 380; // pixels
  const ctaOverlapPercentage = 0.40; // 40% of CTA height should overlap the footer

  // Calculate the actual pixel amount of overlap for large screens
  const overlapAmountInPixelsLg = estimatedCtaHeightForOverlapCalcLg * ctaOverlapPercentage;

  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <Hero />
      <CardComonent />

      <OfferDetailsSection />
      <DechargeMiniSection />

      <MarketGrowthSection />
      <EarningSection />
      <AudienceSection />
      <div className="container mx-auto px-4 relative z-10">
          {/*
            The JoinCommunityCTA is rendered here. It will take up its natural space.
            Its container has z-10 to ensure it's visually above the footer's background
            but below any potential higher z-index elements (like modals).
            The product image inside CTA might have its own z-index if it needs to be above footer lines.
          */}
          <JoinCommunityCTA />
        </div>
        {/*
          The Footer component is rendered next.
          The `ctaOverlapAmount` prop tells it how much negative margin-top to apply,
          effectively pulling it up underneath the JoinCommunityCTA.
        */}
        <Footer ctaOverlapAmount={overlapAmountInPixelsLg} />
      </div>

      
    
  );
}