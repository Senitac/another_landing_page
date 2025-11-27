import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, HardHat, FileText, DollarSign, BarChart3 } from "lucide-react";
import { InvoiceProcessingMockup } from "@/components/mockups/InvoiceProcessingMockup";
import { BudgetVarianceMockup } from "@/components/mockups/BudgetVarianceMockup";

const Construction = () => {
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
                <span className="text-sm font-normal text-orange-400">For Construction</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
                Finance Operations Built for
                <span className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Construction & Contractors
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-light text-white/70 max-w-2xl mx-auto">
                Track project costs, manage subcontractor payments, and maintain job profitability with finance automation designed for the construction industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="https://calendly.com/nitanshu15/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-base font-normal flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-glow hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://calendly.com/nitanshu15/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-base font-normal text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  Book a Demo
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
                Built for Job Costing & Project Accounting
              </h2>
              <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                The specialized tools construction businesses need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <HardHat className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Job-Level Tracking
                </h3>
                <p className="font-light text-white/60">
                  Track costs, revenue, and profitability by project with real-time job costing down to the cost code level.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Subcontractor Management
                </h3>
                <p className="font-light text-white/60">
                  Automate lien waiver collection, track retention, and process subcontractor invoices efficiently.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Change Order Tracking
                </h3>
                <p className="font-light text-white/60">
                  Manage change orders, track budget impacts, and maintain accurate project forecasts.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  WIP Reporting
                </h3>
                <p className="font-light text-white/60">
                  Automated work-in-progress schedules, over/underbilling calculations, and percentage-of-completion tracking.
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
                Project-Based Finance Automation
              </h2>
              <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                Stay on budget and profitable on every job
              </p>
            </div>

            <div className="space-y-24">
              {/* Cost Tracking */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-sm font-normal text-orange-400">Project Accounting</span>
                  </div>
                  <h3 className="text-3xl font-normal text-white">
                    Real-Time Job Cost Tracking
                  </h3>
                  <p className="text-lg font-light text-white/60">
                    See actual costs vs. budget by cost code in real-time. Catch overruns early and protect your margins on every project.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Automated cost code assignment from invoices</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Track committed costs from subcontracts and POs</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Project manager dashboards with budget alerts</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <InvoiceProcessingMockup />
                </div>
              </div>

              {/* Budget Management */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <BudgetVarianceMockup />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-sm font-normal text-orange-400">Budget Control</span>
                  </div>
                  <h3 className="text-3xl font-normal text-white">
                    Budget vs. Actual Analysis
                  </h3>
                  <p className="text-lg font-light text-white/60">
                    Compare estimated costs to actuals at the job, phase, and cost code level. Update forecasts dynamically as work progresses.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Variance reporting by cost code and phase</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Forecast-to-complete calculations</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Projected final cost and margin analysis</span>
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
                How Construction Companies Use Senitac
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  General Contractors
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Manage complex projects with multiple subs, track retention, and maintain accurate WIP schedules.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Multi-tier subcontractor management</li>
                  <li>• Retention tracking & release</li>
                  <li>• Percentage-of-completion revenue</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Specialty Contractors
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Track profitability by job type, manage equipment costs, and streamline billing processes.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Job-type profitability analysis</li>
                  <li>• Equipment cost allocation</li>
                  <li>• Time & materials billing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Commercial Builders
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Handle large-scale projects with complex change order management and draw requisitions.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Draw/progress billing automation</li>
                  <li>• Change order impact tracking</li>
                  <li>• Multi-project portfolio view</li>
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
                We run 30+ jobs simultaneously. Senitac gives us real-time visibility into every project's profitability so we can make better bidding and resource decisions.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                <div className="text-left">
                  <div className="text-white font-normal">Robert Martinez</div>
                  <div className="text-white/50 text-sm">CFO, Summit Builders Group</div>
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
                  Can Senitac handle construction-specific accounting?
                </h3>
                <p className="font-light text-white/60">
                  Yes. Senitac supports job costing, WIP schedules, percentage-of-completion revenue recognition, retention tracking, and AIA billing formats commonly used in construction.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  Does it integrate with construction management software?
                </h3>
                <p className="font-light text-white/60">
                  Senitac integrates with Procore, Buildertrend, CoConstruct, and other construction management platforms to sync project data, budgets, and cost information.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  How do you handle retainage?
                </h3>
                <p className="font-light text-white/60">
                  Senitac automatically tracks retainage (retention) on both AR and AP, schedules releases based on contract terms, and maintains accurate retainage balances across all projects.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  What about lien waivers and compliance?
                </h3>
                <p className="font-light text-white/60">
                  Senitac can automate lien waiver collection from subcontractors, track compliance documents, and ensure proper documentation before releasing payments.
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
                Ready to Improve Project Profitability?
              </h2>
              <p className="text-lg font-light text-white/70 mb-8 max-w-2xl mx-auto">
                Join construction companies using Senitac to track costs and protect margins on every job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://calendly.com/nitanshu15/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-base font-normal flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-glow hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  Get Started Free
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

export default Construction;
