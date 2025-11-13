import { Link2, Brain, CheckCircle } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Link2,
      title: "Connect Your Systems",
      description:
        "Link bank accounts, email, and accounting software with secure OAuth connections. One-time setup, no credentials stored.",
      details: [
        "Major banks supported",
        "QuickBooks, Xero, NetSuite",
        "Gmail, Outlook integration",
        "Spreadsheet imports",
      ],
    },
    {
      number: "02",
      icon: Brain,
      title: "AI Agents Process Everything",
      description:
        "Our agents continuously pull, categorize, and reconcile transactions. They learn your chart of accounts and business logic automatically.",
      details: [
        "Real-time data sync",
        "Auto-categorization",
        "Smart matching",
        "Continuous learning",
      ],
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Review & Approve",
      description:
        "Access your real-time dashboard to review anomalies and approve suggestions. Close books with one click.",
      details: [
        "Live dashboard",
        "Flagged items for review",
        "One-click approvals",
        "Instant reports",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300 mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Raw data to <span className="bg-gradient-primary bg-clip-text text-transparent">clean books</span> in 3 steps
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Get started in minutes. Our AI handles the complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step card */}
              <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 group">
                {/* Step number */}
                <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mt-4 mb-4 w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <step.icon className="w-6 h-6 text-orange-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              {/* Arrow connector (desktop only, not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-4 text-orange-500/30">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://calendly.com/nitanshu15/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow"
          >
            Get Started Today
            <CheckCircle className="w-5 h-5" />
          </a>
          <p className="text-sm text-muted-foreground mt-3">
            Setup takes less than 15 minutes
          </p>
        </div>
      </div>
    </section>
  );
};
