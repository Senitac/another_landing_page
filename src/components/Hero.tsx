import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Calculator, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary-glow/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Pushing the frontier of LLM research
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            The Future of
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Accounting
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered full-stack accountancy firm automating mundane tasks to create{" "}
            <span className="text-primary font-semibold">10x auditors and accountants</span>.
            The ultimate AI teammate for precision, quality, and advisory excellence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="premium" size="lg" className="group">
              Join the Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">10x</div>
              <div className="text-sm text-muted-foreground">Efficiency Boost</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-3">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">85%</div>
              <div className="text-sm text-muted-foreground">Tasks Automated</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-3">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">AI-Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};