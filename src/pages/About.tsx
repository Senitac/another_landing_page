import { useEffect } from "react";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Optimized gradient background - matches homepage */}
      <div className="fixed inset-0 w-full h-full bg-gradient-hero gradient-optimized -z-10" />

      {/* Content */}
      <div className="relative">
        <Navigation />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
};

export default About; 
