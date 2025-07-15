import { Card, CardContent } from "@/components/ui/card";
import { 
  Bot, 
  FileText, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  Clock,
  Target,
  Lightbulb
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Automate repetitive accounting tasks with advanced AI agents that learn and adapt to your workflows."
  },
  {
    icon: FileText,
    title: "Intelligent Auditing",
    description: "AI performs comprehensive audits with 99.9% accuracy, generating detailed reports in minutes."
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Built-in compliance monitoring and enterprise-grade security for all financial data."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Instant financial analysis and reporting with live data processing capabilities."
  },
  {
    icon: Users,
    title: "Expert Partnership",
    description: "AI enhances human expertise, allowing accountants to focus on advisory and strategic work."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights and predictive analytics to drive better business decisions."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Revolutionary Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Next Generation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of AI-driven accounting that transforms how financial professionals work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">90%</div>
            <div className="text-sm text-muted-foreground">Time Saved</div>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">AI Support</div>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Scalability</div>
          </div>
        </div>
      </div>
    </section>
  );
};