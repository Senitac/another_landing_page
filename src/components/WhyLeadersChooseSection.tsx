// WhyLeadersChooseSection - NEW
// Top-down outcome-focused cards showing CFO-level benefits

export const WhyLeadersChooseSection = () => {
  const outcomes = [
    {
      headline: "Scale operations. Not headcount.",
      description: "3x the transaction volume. Same team size. Agents process invoices and reconcile accounts 24/7.",
      stat: "3x output, same team"
    },
    {
      headline: "Real-time visibility across operations.",
      description: "One dashboard. Everything from cash position to month-end progress. No more chasing data.",
      stat: "Single source of truth"
    },
    {
      headline: "We build it with you.",
      description: "Forward-deployed implementation. We integrate with your ERP and deploy agents in 3-4 weeks.",
      stat: "Operational in weeks, not months"
    }
  ];

  return (
    <section className="py-16 md:py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-normal text-white mb-4 leading-tight">
                {outcome.headline}
              </h3>

              <p className="text-base md:text-lg font-light text-white/70 leading-relaxed mb-6">
                {outcome.description}
              </p>

              <div className="flex items-center gap-2 text-orange-400 font-normal">
                <span>→</span>
                <span>{outcome.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
