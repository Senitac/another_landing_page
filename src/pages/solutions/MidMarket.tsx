import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, BarChart3, Shield, Zap, Building2 } from "lucide-react";
import { BudgetVarianceMockup } from "@/components/mockups/BudgetVarianceMockup";
import { TaxComplianceMockup } from "@/components/mockups/TaxComplianceMockup";

const MidMarket = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-hero gradient-optimized -z-10" />

      {/* Content */}
      <div className="relative">
        <Navigation />

        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full">
                <span className="text-sm font-normal text-orange-400">For Mid-Market Companies</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
                Enterprise Capabilities
                <span className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Without Enterprise Complexity
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-light text-white/70 max-w-2xl mx-auto">
                Scale your finance operations to match your growth. Get the automation, controls, and insights you need—deployable in weeks, not months.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="https://calendly.com/nitanshu15/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-base font-normal flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-glow hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://calendly.com/nitanshu15/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-base font-normal text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
                Built for Growing Organizations
              </h2>
              <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                The sophistication you need, the agility you demand
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Multi-Entity Management
                </h3>
                <p className="font-light text-white/60">
                  Manage multiple entities, subsidiaries, and departments with centralized visibility and control.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Advanced Analytics
                </h3>
                <p className="font-light text-white/60">
                  Executive dashboards, variance analysis, and predictive forecasting for strategic decisions.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Rapid Deployment
                </h3>
                <p className="font-light text-white/60">
                  Go live in weeks, not quarters. Modular implementation lets you start fast and scale gradually.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Enterprise-Grade Security
                </h3>
                <p className="font-light text-white/60">
                  SOC 2 Type II, role-based access, audit trails, and compliance-ready reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase Section */}
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
                Designed for Complexity at Scale
              </h2>
              <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                Handle sophisticated finance operations without adding headcount
              </p>
            </div>

            <div className="space-y-24">
              {/* Budget Variance */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-sm font-normal text-orange-400">FP&A</span>
                  </div>
                  <h3 className="text-3xl font-normal text-white">
                    Budget vs. Actuals in Real-Time
                  </h3>
                  <p className="text-lg font-light text-white/60">
                    Track performance against budget with real-time variance analysis. Identify issues early and course-correct before quarter-end.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Department, project, and cost center-level tracking</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Automated variance explanations and root cause analysis</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Rolling forecasts updated with latest actuals</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <BudgetVarianceMockup />
                </div>
              </div>

              {/* Tax Compliance */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <TaxComplianceMockup />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-sm font-normal text-orange-400">Compliance</span>
                  </div>
                  <h3 className="text-3xl font-normal text-white">
                    Audit-Ready Compliance
                  </h3>
                  <p className="text-lg font-light text-white/60">
                    Stay compliant across jurisdictions with automated tax tracking, complete audit trails, and one-click reporting packages.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Multi-jurisdiction tax calculations and reporting</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Immutable audit logs for all transactions</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Automated controls testing and SOX compliance support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
                How Mid-Market Companies Use Senitac
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Private Equity Backed
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Meet board reporting requirements and roll-up consolidations with enterprise-grade accuracy.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Monthly board packages</li>
                  <li>• Multi-entity consolidation</li>
                  <li>• KPI tracking & dashboards</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  High-Growth Companies
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Scale finance operations to support 100%+ annual growth without proportional team expansion.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Automated scaling workflows</li>
                  <li>• Multi-subsidiary support</li>
                  <li>• Acquisition integration tools</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Pre-IPO Companies
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Build public-company-ready processes and controls years before you need them.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• SOX-compliant controls</li>
                  <li>• Revenue recognition automation</li>
                  <li>• Investor-grade reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-12">
              <div className="text-5xl mb-6">"</div>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                We grew from $50M to $200M in revenue without adding a single FP&A analyst. Senitac's automation handled the complexity while our team focused on strategy.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                <div className="text-left">
                  <div className="text-white font-normal">Jennifer Wu</div>
                  <div className="text-white/50 text-sm">VP of Finance, GrowthCo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  Can Senitac handle our complex structure?
                </h3>
                <p className="font-light text-white/60">
                  Yes. We support multi-entity consolidations, intercompany eliminations, multi-currency, and complex approval hierarchies out of the box.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  How does implementation work for larger organizations?
                </h3>
                <p className="font-light text-white/60">
                  We assign a dedicated implementation team, conduct process workshops, and use a phased rollout approach. Typical mid-market deployment is 8-12 weeks.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  What ERP systems do you integrate with?
                </h3>
                <p className="font-light text-white/60">
                  We integrate with NetSuite, Sage Intacct, Microsoft Dynamics, SAP Business One, and other mid-market ERPs. Custom integrations available for proprietary systems.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  Do you support our compliance requirements?
                </h3>
                <p className="font-light text-white/60">
                  Senitac is SOC 2 Type II certified and supports SOX, GDPR, and industry-specific compliance frameworks. We provide detailed audit logs and control documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-3xl p-12">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-6">
                Ready to Scale Your Finance Operations?
              </h2>
              <p className="text-lg font-light text-white/70 mb-8 max-w-2xl mx-auto">
                See how Senitac helps mid-market companies achieve enterprise capabilities without enterprise overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://calendly.com/nitanshu15/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-base font-normal flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-glow hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://calendly.com/nitanshu15/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-base font-normal text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default MidMarket;
