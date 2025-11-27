// ModularAgentsSection (formerly SolutionSection)
// Rewritten to showcase the 6 core finance department modules

import {
  InvoiceProcessingMockup,
  PaymentMatchingMockup,
  CashForecastMockup,
  BudgetVarianceMockup,
  TaxComplianceMockup,
  MonthEndCloseMockup
} from './mockups';

export const SolutionSection = () => {
  const departments = [
    {
      name: "Procure-to-Pay",
      shortName: "P2P",
      description: "Invoice processing on autopilot. PO matching in seconds. Fraud caught before it happens.",
      agents: ["Invoice Ingestion", "PO Matching", "GL Coding", "Fraud Detection"],
      mockup: InvoiceProcessingMockup
    },
    {
      name: "Order-to-Cash",
      shortName: "O2C",
      description: "Payments matched automatically. Collections prioritized by AI. Cash flow optimized.",
      agents: ["Invoice Generation", "Payment Application", "Collections", "Credit Management"],
      mockup: PaymentMatchingMockup
    },
    {
      name: "Treasury",
      shortName: "Treasury",
      description: "Real-time cash visibility. 90-day forecasts. Bank reconciliation in hours, not days.",
      agents: ["Cash Positioning", "Cash Forecasting", "Bank Reconciliation", "FX Management"],
      mockup: CashForecastMockup
    },
    {
      name: "FP&A",
      shortName: "FP&A",
      description: "Budgets build themselves. Variance analysis instant. Forecasts always up to date.",
      agents: ["Budget Builder", "Variance Analysis", "Rolling Forecast", "KPI Dashboards"],
      mockup: BudgetVarianceMockup
    },
    {
      name: "Tax & Compliance",
      shortName: "Tax",
      description: "Sales tax calculated automatically. Multi-jurisdiction compliance. Full audit trails.",
      agents: ["Sales Tax", "VAT/GST", "Tax Forms", "Audit Trails"],
      mockup: TaxComplianceMockup
    },
    {
      name: "Record-to-Report",
      shortName: "R2R",
      description: "Journal entries automated. Close in days, not weeks. Multi-entity consolidation simplified.",
      agents: ["Journal Entry", "Month-End Close", "Financial Statements", "Consolidation"],
      mockup: MonthEndCloseMockup
    }
  ];

  return (
    <section id="solution" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 leading-tight tracking-tight">
            Pick the Agents <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Your Team Needs</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed">
            Six core finance departments. 20+ specialized AI agents. Compose them like building blocks to match your operations.
          </p>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const MockupComponent = dept.mockup;
            return (
              <div
                key={index}
                className="group relative rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                {/* Mockup Preview */}
                <div className="w-full aspect-[16/10] bg-white/[0.02] overflow-hidden">
                  <MockupComponent />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Department name */}
                  <h3 className="text-xl md:text-2xl font-normal text-white mb-3 leading-tight">
                    {dept.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base font-light text-white/70 leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA message */}
        <div className="mt-12 text-center">
          <p className="text-base md:text-lg font-light text-white/60 max-w-2xl mx-auto">
            Each agent integrates with your existing ERP, banking, and operational systems.
            <span className="text-orange-400 font-normal"> All custom built.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
