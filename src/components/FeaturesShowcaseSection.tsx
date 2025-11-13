import { DataIngestionMockup } from "./mockups/DataIngestionMockup";
import { ReconciliationMockup } from "./mockups/ReconciliationMockup";
import { AuditTrailMockup } from "./mockups/AuditTrailMockup";

export const FeaturesShowcaseSection = () => {
  const features = [
    {
      badge: "FORWARD-DEPLOYED INGESTION",
      title: "Start at the source, not the spreadsheet",
      description:
        "Competitors ask you to upload files. Our AI agents connect directly to banks, email, systems. Pull raw transactions automatically. Never touch a CSV again.",
      benefits: [
        "Direct bank connections via secure OAuth",
        "Email parsing for invoices and receipts",
        "ERP integrations (QuickBooks, Xero, NetSuite)",
        "Automatic data sync every 15 minutes",
      ],
      mockup: DataIngestionMockup,
    },
    {
      badge: "CONTINUOUS AI RECONCILIATION",
      title: "Real-time reconciliation, not month-end panic",
      description:
        "AI doesn't wait until month-end. Continuously matches transactions, categorizes expenses, flags discrepancies in real-time. 3 days becomes 3 hours.",
      benefits: [
        "99.8% automatic matching accuracy",
        "Smart categorization learns your business",
        "Instant anomaly detection",
        "Zero manual data entry",
      ],
      mockup: ReconciliationMockup,
    },
    {
      badge: "AUDIT-READY EVIDENCE GRAPH",
      title: "Every transaction has a provable chain",
      description:
        "We don't just categorize—we build evidence graphs. Each entry links to the original source: bank statement, invoice PDF, approval email. Audit-ready by default.",
      benefits: [
        "Complete audit trail for every transaction",
        "One-click evidence retrieval",
        "Automatic documentation linking",
        "SOC 2 Type II certified infrastructure",
      ],
      mockup: AuditTrailMockup,
    },
  ];

  return (
    <>
      {features.map((feature, index) => {
        const isReversed = index % 2 === 1;

        return (
          <section key={index} id={index === 0 ? "features" : undefined} className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                {/* Text Content */}
                <div
                  className={`lg:col-span-1 space-y-6 ${
                    isReversed ? "order-1 lg:order-2" : "order-1"
                  }`}
                >
                  {/* Badge */}
                  <div className="inline-block">
                    <div className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300 font-semibold uppercase tracking-wider">
                      {feature.badge}
                    </div>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                    {feature.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-white/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-white/60"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot/Visual */}
                <div
                  className={`lg:col-span-2 relative ${
                    isReversed ? "order-2 lg:order-1" : "order-2"
                  }`}
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
                    {/* Browser Chrome */}
                    <div className="bg-gray-800 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-xs text-white/40 font-medium">
                          Senitac Platform
                        </span>
                      </div>
                    </div>

                    {/* Mockup Screenshot */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <feature.mockup />
                    </div>
                  </div>

                  {/* Decorative blur effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/5 to-purple-500/5 blur-3xl -z-10 opacity-50"></div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};
