import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Mail } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-hero animate-gradient-slow overflow-hidden font-satoshi flex flex-col justify-start" style={{ minHeight: '100vh' }}>
      {/* Enhanced background glow effects */}
      {/* Background glow effects for consistency */}
      {/* Removed or reduced top-left glow */}
      {/* <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-[180px] pointer-events-none"></div> */}
      {/* Main glow moved to bottom right, larger and darker */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-orange-700/30 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      {/* New dark swirls for depth */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-black/40 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-neutral-900/30 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-orange-900/30 rounded-full blur-[140px] pointer-events-none"></div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMCAwJSAxMCUgLyAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4K')] opacity-20 pointer-events-none"></div>
      {/* Main content grid container with top padding for nav */}
      <div className="container max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-12 pt-24 md:pt-28 px-6 md:px-12">
        {/* Demo card and headline stacked with tight gap */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-2">
          <div className="rounded-2xl bg-white/20 backdrop-blur-md shadow-elegant px-5 py-2 flex items-center gap-3 border border-white/30 w-fit">
            <span className="font-medium text-sm text-white/80">Watch Demo</span>
            <span className="w-7 h-4 bg-gray-200/60 rounded-lg flex items-center justify-center text-xs text-gray-700">🎬</span>
          </div>
          {/* Headline split into multiple lines/blocks, even tighter line height */}
          <div className="col-span-1 md:col-span-8 flex flex-col gap-1">
            <span className="font-semibold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight drop-shadow-xl text-left">
              The <span className="bg-gradient-primary bg-clip-text text-transparent">Full-stack</span>
            </span>
            <span className="font-semibold text-[clamp(2rem,5vw,3.5rem)] text-foreground leading-tight tracking-tight drop-shadow-xl text-left" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif', fontWeight: 600 }}>
              AI Accountancy 
            </span>
            
            {/* Paragraph and CTA vertically stacked below headline */}
            <div className="flex flex-col gap-6 mt-6">
              <p className="text-white text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed drop-shadow-lg text-left max-w-md md:max-w-lg lg:max-w-xl" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                Building a new ecosystem for AI agents to do accounting.  
              </p>
            <a
              href="https://calendly.com/nitanshu15/30min" // Replace with your actual Calendly link
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-8 py-4 text-base shadow-glow font-semibold whitespace-nowrap w-fit bg-primary text-primary-foreground flex items-center hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}
            >
              Chat with us
              <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};