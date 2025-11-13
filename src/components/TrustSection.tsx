import { Shield, Lock, Plug, Headphones } from "lucide-react";

export const TrustSection = () => {
  const trustItems = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level 256-bit encryption and SOC 2 Type II certified infrastructure.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "GDPR compliant. Your data stays yours and is never used to train public models.",
    },
    {
      icon: Plug,
      title: "Easy Integrations",
      description: "Works with QuickBooks, Xero, NetSuite, and direct connections to major banks.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "White-glove onboarding and 24/7 support for enterprise customers.",
    },
  ];

  return (
    <section className="py-20 bg-card/30 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Enterprise-grade security.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Startup-friendly pricing.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for scale, designed for trust
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="mb-4 w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {/* Placeholder for company logos */}
            <div className="text-xs text-muted-foreground uppercase tracking-wider">
              [CLIENT LOGOS]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
