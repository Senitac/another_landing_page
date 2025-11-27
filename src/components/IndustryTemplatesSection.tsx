// IndustryTemplatesSection
// Ramp-inspired approach: Focus on industry-specific outcomes and challenges, not "templates"

export const IndustryTemplatesSection = () => {
  const industries = [
    {
      name: "E-Commerce & DTC",
      headline: "Real-time visibility across channels. Automated COGS. Multi-state tax compliance.",
      description: "Managing high transaction volumes across Shopify, Amazon, wholesale, and marketplaces creates reconciliation chaos. Our agents consolidate sales data, automate inventory accounting, handle returns processing, and maintain sales tax compliance across 45+ states—so you can focus on growth, not bookkeeping.",
      outcomes: [
        "Multichannel revenue consolidated in real-time",
        "COGS calculated automatically as inventory moves",
        "Sales tax nexus tracking and automated filing",
        "Returns and refunds reconciled within hours"
      ]
    },
    {
      name: "SaaS & Subscription",
      headline: "Deferred revenue automation. MRR tracking. Subscription billing at scale.",
      description: "ASC 606 revenue recognition for subscriptions is complex. Upgrades, downgrades, prorations, multi-element arrangements—all require precise accounting. Our agents automate deferred revenue schedules, calculate MRR/ARR metrics, handle subscription billing workflows, and ensure compliance without manual spreadsheets.",
      outcomes: [
        "Deferred revenue recognized automatically per ASC 606",
        "MRR and ARR calculated and tracked in real-time",
        "Subscription changes (upgrades, downgrades) handled instantly",
        "SaaS metrics dashboard for investors and board reporting"
      ]
    },
    {
      name: "Construction & Contracting",
      headline: "Project-level profitability. Progress billing. Retainage management.",
      description: "Long-term contracts require WIP schedules, progress billing, percentage-of-completion revenue recognition, and retainage tracking. Our agents monitor job costs by project, generate AIA-format progress bills, track retainage across contracts, and automate change order accounting—giving you real-time project margins.",
      outcomes: [
        "Job costs tracked by project with real-time profitability",
        "Progress billing (AIA G702/G703) generated automatically",
        "Retainage tracked across all active contracts",
        "Change orders accounted for without manual adjustments"
      ]
    },
    {
      name: "Professional Services",
      headline: "Time-to-revenue automation. Project margins. Utilization visibility.",
      description: "Converting billable hours to revenue shouldn't require manual timesheet exports and invoice generation. Our agents transform timesheets into invoices, track project profitability against budgets, manage retainer draw-downs, and monitor team utilization—so you can see which clients and projects are actually profitable.",
      outcomes: [
        "Timesheets automatically converted to client invoices",
        "Project profitability tracked against budgets in real-time",
        "Retainer balances managed and reconciled automatically",
        "Utilization rates calculated by team member and project"
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 relative bg-gradient-to-b from-transparent to-white/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight tracking-tight">
            Finance Operations Built for <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Your Industry</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed">
            We understand the unique workflows, compliance requirements, and operational challenges in your industry. Our agents adapt to how you work.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-normal text-white mb-3 leading-tight">
                  {industry.name}
                </h3>
                <p className="text-base md:text-lg text-orange-400 font-normal leading-relaxed">
                  {industry.headline}
                </p>
              </div>

              {/* Description */}
              <p className="text-base font-light text-white/70 leading-relaxed mb-6">
                {industry.description}
              </p>

              {/* Outcomes */}
              <div className="space-y-2">
                {industry.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                    <span className="text-sm font-light text-white/70 leading-relaxed">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-base md:text-lg font-light text-white/60 max-w-2xl mx-auto">
            Don't see your industry? We custom-build agent workflows for any vertical.
            <span className="block mt-2 text-orange-400 font-normal">Manufacturing, Healthcare, Real Estate, Nonprofits—we've got you covered.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
