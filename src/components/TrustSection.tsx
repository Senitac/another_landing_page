// TrustSection
// Displays metrics, social proof, and trust signals (no icons)

export const TrustSection = () => {
  const metrics = [
    {
      value: "75%",
      label: "Faster Month-End Close",
      description: "Average time reduction from manual reconciliation to automated close"
    },
    {
      value: "99.2%",
      label: "Auto-Match Rate",
      description: "Transactions matched automatically without manual intervention"
    },
    {
      value: "3-4 weeks",
      label: "Implementation Time",
      description: "From kickoff to first agents live in production"
    },
    {
      value: "24/7",
      label: "Continuous Processing",
      description: "Agents work around the clock, not just at month-end"
    }
  ];

  const complianceItems = [
    "GDPR Ready",
    "Bank-Grade Encryption",
    "Audit-Ready Evidence Trails"
  ];

  return (
    <section id="trust" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
            >
              <div className="text-3xl md:text-4xl font-normal bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-base md:text-lg font-normal text-white mb-2">
                {metric.label}
              </div>
              <div className="text-sm font-light text-white/60 leading-relaxed">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 bg-black text-sm text-white/50 uppercase tracking-wide font-normal">
              Security & Compliance
            </span>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-normal text-white mb-6">
            Enterprise-Grade Security
          </h3>
          <p className="text-base md:text-lg font-light text-white/70 leading-relaxed mb-8">
            Your financial data is your most sensitive asset. We maintain the highest security standards and provide complete audit trails for every transaction.
          </p>

          {/* Compliance badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {complianceItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-normal text-white/80"
              >
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                {item}
              </div>
            ))}
          </div>

          {/* Additional trust signals */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-lg font-normal text-white mb-2">Data Ownership</h4>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Your data stays in your control. We never train models on your proprietary information or share it with third parties.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-lg font-normal text-white mb-2">Immutable Audit Trails</h4>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Every agent action is logged with full evidence chains. Export complete audit packages with one click.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-lg font-normal text-white mb-2">Human Oversight</h4>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Chartered accountants (ACA/ACCA) review agent actions, maintain controls, and provide sign-off where required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
