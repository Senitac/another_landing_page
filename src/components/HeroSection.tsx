import { Calendar } from "lucide-react";

export const HeroSection = () => {

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-sm font-medium text-white">YC F25</span>
              <span className="text-white/60">•</span>
              <span className="text-sm text-white/80">AI Accounting</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              The <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Full-Stack</span><br />
              AI Accountancy
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/70 leading-relaxed max-w-xl">
              Building a new ecosystem for AI agents to do accounting.
            </p>

            {/* CTA Button */}
            <a
              href="https://calendly.com/nitanshu15/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow"
            >
              Chat with us
              <Calendar className="w-5 h-5" />
            </a>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-white/60 pt-4">
              <div className="flex items-center gap-2">
                ✓ <span>99%+ accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                ✓ <span>Real-time reconciliation</span>
              </div>
            </div>
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

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl">
              <div className="text-xs text-white/60 mb-1">Accuracy</div>
              <div className="text-2xl font-bold text-green-400">99.8%</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-xl">
              <div className="text-xs text-white/60 mb-1">Time Saved</div>
              <div className="text-2xl font-bold text-orange-400">80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
