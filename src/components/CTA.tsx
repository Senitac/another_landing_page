import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Join the Revolution
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Accounting Practice?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Be among the first to experience the future of AI-powered accounting. 
            Join our exclusive waitlist and get early access to Senitac.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary"
                  required
                />
              </div>
              <Button type="submit" variant="premium" size="lg" className="group">
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="outline" size="lg" className="group">
              <MessageCircle className="w-4 h-4" />
              Chat with Us
            </Button>
            <Button variant="ghost" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
            <p className="text-sm text-muted-foreground mb-4">
              Building the future of accounting, one AI agent at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
              <span>• AI-Powered Auditing</span>
              <span>• Automated Tax Preparation</span>
              <span>• Real-time Financial Analysis</span>
              <span>• Expert Advisory Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};