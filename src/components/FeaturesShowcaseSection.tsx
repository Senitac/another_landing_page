// HowItWorksSection (formerly FeaturesShowcaseSection)
// Rewritten to show the 3-step forward-deployed implementation process

export const FeaturesShowcaseSection = () => {
  const steps = [
    {
      step: "01",
      title: "Assess Your Operations",
      description: "We start by understanding your current workflows, pain points, systems, and team structure. Our finance operations specialists map your processes and identify where AI agents can deliver the highest impact.",
      highlights: [
        "Deep-dive workshops with your finance team",
        "System integration assessment (ERP, banking, tools)",
        "Workflow mapping and bottleneck identification",
        "Custom agent recommendations by department"
      ]
    },
    {
      step: "02",
      title: "Build Your Agent Stack",
      description: "Our engineers embed with your team to implement and configure agents. We connect directly to your data sources, train models on your historical patterns, and set up approval workflows that match your controls.",
      highlights: [
        "Direct integration with banks, ERPs, and operational systems",
        "Custom GL coding rules trained on your chart of accounts",
        "Approval hierarchies and compliance guardrails",
        "Testing and validation with your team before go-live"
      ]
    },
    {
      step: "03",
      title: "Deploy & Scale",
      description: "Agents go live under supervision. We monitor performance, refine accuracy, and expand capabilities based on results. Your team maintains full visibility and control while automation handles the repetitive work.",
      highlights: [
        "Phased rollout with human-in-the-loop oversight",
        "Continuous monitoring and accuracy improvements",
        "Regular reviews and expansion planning",
        "Ongoing support and agent updates"
      ]
    }
  ];

  return (
    <section id="how-it-works" aria-label="How It Works" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight tracking-tight">
            We Build It <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">With You</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed">
            This isn't software you configure yourself. Our team implements, integrates, and deploys AI agents directly into your finance operations.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connecting line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-16 top-32 bottom-0 w-px bg-gradient-to-b from-orange-500/50 to-transparent" aria-hidden="true"></div>
              )}

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Step number column */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 flex items-center justify-center">
                      <span className="text-3xl font-normal bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        {item.step}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content column */}
                <div className="lg:col-span-10">
                  <div className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                    <h3 className="text-2xl md:text-3xl font-normal text-white mb-4 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-base md:text-lg font-light text-white/70 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                          <span className="text-sm md:text-base font-light text-white/60 leading-relaxed">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
