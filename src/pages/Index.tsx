import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { WhyItMattersSection } from "@/components/WhyItMattersSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesShowcaseSection } from "@/components/FeaturesShowcaseSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TransactionMatchingGame } from "@/components/TransactionMatchingGame";
import { StatsTickerSection } from "@/components/StatsTickerSection";
import { TrustSection } from "@/components/TrustSection";
import { EnterpriseTickerSection } from "@/components/EnterpriseTickerSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
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
        <ProblemSection />
        <WhyItMattersSection />
        <SolutionSection />
        <FeaturesShowcaseSection />
        <HowItWorksSection />
        <TransactionMatchingGame />
        <StatsTickerSection />
        <TrustSection />
        <EnterpriseTickerSection />
        <CTASection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;