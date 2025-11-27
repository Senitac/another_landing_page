import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Add email capture logic
  };

  return (
    <section className="py-14 lg:py-16 relative overflow-hidden">
      {/* Background effects - subtle overlays only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-6">
            Ready to Transform <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Your Finance Operations?</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a demo to see how custom AI agents can automate your finance workflows. No generic pitch—we'll map your specific operations and show you exactly what's possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/nitanshu15/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-normal rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow text-base md:text-lg"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
