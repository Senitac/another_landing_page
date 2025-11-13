import { Database, RefreshCw, Shield } from "lucide-react";

export const SolutionSection = () => {
  const capabilities = [
    {
      icon: Database,
      title: "Automated Data Ingestion",
      description:
        "Connect bank accounts, email, invoices, and spreadsheets. Our AI pulls everything automatically—no manual data entry, ever.",
      features: ["Direct bank connections", "Invoice OCR", "Email parsing", "Spreadsheet sync"],
    },
    {
      icon: RefreshCw,
      title: "Continuous Reconciliation",
      description:
        "AI reconciles transactions in real-time, not monthly. Your books are always current, and month-end becomes a one-click review.",
      features: ["99%+ auto-matching", "Real-time updates", "Discrepancy detection", "Instant ledger sync"],
    },
    {
      icon: Shield,
      title: "Audit-Ready Evidence",
      description:
        "Every transaction has full context and evidence trails. Receipts, emails, and confirmations are automatically attached and organized.",
      features: ["Auto evidence capture", "Tax classification", "Compliance checks", "One-click exports"],
    },
  ];

  return (
    <section id="features" className="py-20 bg-background relative">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Meet your <span className="bg-gradient-primary bg-clip-text text-transparent">AI accounting team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Senitac's AI agents work 24/7 to keep your books clean, current, and audit-ready.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-glow"
            >
              {/* Icon */}
              <div className="mb-4 w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                <capability.icon className="w-6 h-6 text-orange-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {capability.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {capability.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
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
