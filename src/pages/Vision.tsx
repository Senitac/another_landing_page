import { VisionSection } from "../components/VisionSection";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const Vision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Vision; 