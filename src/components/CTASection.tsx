import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

export const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display font-bold text-foreground mb-6">
            Ready to Transform{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Your Practice?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the waiting list and be among the first to experience the future 
            of AI-powered accounting. Let's build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
            <Button variant="outline" size="xl" className="group">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card/50 backdrop-blur-sm border-border"
                  required
                />
              </div>
              <Button type="submit" variant="cta">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-3">
              No spam, just updates on our progress and early access opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};