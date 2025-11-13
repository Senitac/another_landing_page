import { Database, RefreshCw, Shield } from "lucide-react";

export const SolutionSection = () => {
  const capabilities = [
    {
      icon: Database,
      title: "Forward-Deployed Data Ingestion",
      description:
        "We don't wait for messy data to hit your ledger. Our platform plugs directly into every raw data feed—bank accounts, email, invoices, contracts, ERPs—and pulls everything automatically.",
      features: ["Direct bank connections", "Email & invoice parsing", "ERP system sync", "Spreadsheet imports"],
    },
    {
      icon: RefreshCw,
      title: "Continuous AI Reconciliation",
      description:
        "Our agents reconcile transactions in real-time as they happen, not at month-end. Your books stay current, and agents learn your chart of accounts and business logic automatically.",
      features: ["99%+ auto-matching", "Real-time processing", "Intelligent categorization", "Anomaly detection"],
    },
    {
      icon: Shield,
      title: "Audit-Ready Evidence Graph",
      description:
        "Every line item in your accounts has full evidence trails—receipts, emails, confirmations, and logs of all agent actions. One click to export everything auditors need.",
      features: ["Complete audit trails", "Auto evidence capture", "Tax classifications", "Compliance checks"],
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            AI-POWERED SOLUTION
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Where competitors optimize workflows, <span className="bg-gradient-primary bg-clip-text text-transparent">we eliminate the manual chain</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Most automation layers on top of messy, manually-entered data. We start at the source—ensuring your foundation is always trustworthy.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-glow"
            >
              {/* Icon */}
              <div className="mb-4 w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                <capability.icon className="w-6 h-6 text-orange-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                {capability.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {capability.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-white/60">
                    <div className="w-1 h-1 rounded-full bg-orange-500"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
