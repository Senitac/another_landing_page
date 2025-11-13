import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero animate-gradient-slow">
      <Navigation />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About; 