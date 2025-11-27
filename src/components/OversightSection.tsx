// OversightSection - Built-In Oversight
// Addresses control and trust concerns for AI agents

export const OversightSection = () => {
  const trustCards = [
    {
      headline: "Human-in-the-Loop",
      description: "AI proposes. Your team approves. Set thresholds for what needs review and what can auto-process.",
      benefit: "Full control, zero surprises"
    },
    {
      headline: "Full Audit Trail",
      description: "Every action logged. Every decision explained. Complete visibility into what agents do and why.",
      benefit: "Audit-ready from day one"
    },
    {
      headline: "Your Policies Enforced",
      description: "Custom approval workflows. Spend limits. Vendor rules. Agents follow your playbook, not ours.",
      benefit: "Your rules, automated"
    }
  ];

  return (
    <section className="py-16 md:py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight tracking-tight">
            Built-In <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Oversight</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed">
            Automation doesn't mean losing control. Every agent operates with guardrails, transparency, and human oversight.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustCards.map((card, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300"
            >
              {/* Icon placeholder - using simple shapes instead of icons */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400/20 to-blue-500/20 border border-teal-400/30 flex items-center justify-center">
                  <div className="w-6 h-6 rounded border-2 border-teal-400"></div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-normal text-white mb-4 leading-tight">
                {card.headline}
              </h3>

              <p className="text-base md:text-lg font-light text-white/70 leading-relaxed mb-6">
                {card.description}
              </p>

              <div className="flex items-center gap-2 text-teal-400 font-normal">
                <span>→</span>
                <span>{card.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 text-center">
          <p className="text-base md:text-lg font-light text-white/60 max-w-2xl mx-auto">
            Built for finance teams who need speed
            <span className="text-teal-400 font-normal"> and </span>
            compliance.
          </p>
        </div>
      </div>
    </section>
  );
};
