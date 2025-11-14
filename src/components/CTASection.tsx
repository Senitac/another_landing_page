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
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-5">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">automate</span> your accounting?
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-6 max-w-2xl mx-auto">
            Save on accounting costs and close books instantly
          </p>

          <a
            href="https://calendly.com/nitanshu15/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/20 hover:border-orange-500/50 text-white font-medium rounded-lg transition-all duration-300"
          >
            Schedule a Call
          </a>
      
        </div>
      </div>
    </section>
  );
};
