import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhyLeadersChooseSection } from "@/components/WhyLeadersChooseSection"; // NEW
import { WhyItMattersSection } from "@/components/WhyItMattersSection"; // Pain Points
import { SolutionSection } from "@/components/SolutionSection"; // Modular Agents
import { OversightSection } from "@/components/OversightSection"; // Built-In Oversight
import { FeaturesShowcaseSection } from "@/components/FeaturesShowcaseSection"; // How It Works
import { IndustryTemplatesSection } from "@/components/IndustryTemplatesSection";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#features") {
      const target = document.getElementById("features");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="relative w-full">
      {/*
        Optimized gradient background:
        - Fixed positioning = single paint layer, no reflow
        - Static gradient = zero CPU/animation cost
        - GPU-accelerated with transform: translateZ(0)
        - Will-change: auto = browser manages optimization
      */}
      <div className="fixed inset-0 w-full h-full bg-gradient-hero gradient-optimized -z-10" />

      {/* Content */}
      <div className="relative">
        <Navigation />
        <HeroSection />
        
        <WhyItMattersSection /> {/* Pain Points */}
        <SolutionSection /> {/* Modular Agents */}
        
        <FeaturesShowcaseSection /> {/* How It Works */}
        <TrustSection /> {/* Metrics & Compliance */}
        <CTASection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
