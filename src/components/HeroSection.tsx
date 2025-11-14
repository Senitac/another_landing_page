import { Calendar } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden px-6 pt-28 pb-16 lg:pt-36 lg:pb-20 flex items-center hero-full-viewport">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-5">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.08]">
              The <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Full-Stack</span><br />
              AI Accounting Firm
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              AI agents ingest data from source, reconcile continuously.<br />
              One accountant. 20x more output.
            </p>

            {/* CTA Button */}
            <a
              href="https://calendly.com/nitanshu15/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow"
            >
              Chat with us
              <Calendar className="w-5 h-5" />
            </a>
          </div>

          {/* Right Column - Video */}
          <div className="relative lg:block">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/80s7QQzwSyo?rel=0&modestbranding=1&vq=hd1080"
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
