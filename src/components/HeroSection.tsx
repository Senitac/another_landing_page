import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 pt-28 pb-16 lg:pt-36 lg:pb-20 flex items-center hero-full-viewport">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-normal text-white leading-[1.08] tracking-tight">
            Your Finance Operations. <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Automated</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl font-light text-white/70 leading-relaxed max-w-3xl mx-auto">
            We engineer and implement a custom stack of AI agents tailored to your specific needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://calendly.com/nitanshu15/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-normal rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow text-base md:text-lg"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-normal rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-base md:text-lg"
            >
              See How It Works
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
