import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Zap, TrendingUp, Shield, DollarSign } from "lucide-react";
import { InvoiceProcessingMockup } from "@/components/mockups/InvoiceProcessingMockup";
import { CashForecastMockup } from "@/components/mockups/CashForecastMockup";

const Startups = () => {
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
                <span className="text-sm font-normal text-orange-400">For Startups</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
                Scale Your Finance
                <span className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Without Scaling Your Team
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-light text-white/70 max-w-2xl mx-auto">
                Automate finance operations from day one. Give your lean team enterprise-grade tools to manage expenses, invoices, and cash flow—so you can focus on growth.
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
                Built for Startup Speed
              </h2>
              <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                Move fast without breaking your finance operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Deploy in Minutes
                </h3>
                <p className="font-light text-white/60">
                  Get up and running in under 30 minutes. No complex setup or IT resources required.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Startup-Friendly Pricing
                </h3>
                <p className="font-light text-white/60">
                  Flexible pricing that scales with you. Start free and upgrade as you grow.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Scale Without Friction
                </h3>
                <p className="font-light text-white/60">
                  Automation handles increased volume. No need to hire more finance staff as you grow.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Investor-Ready Reports
                </h3>
                <p className="font-light text-white/60">
                  Generate clean, accurate reports for board meetings and investor updates instantly.
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
                Everything You Need to Run Finance
              </h2>
              <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                Powerful tools that replace multiple point solutions
              </p>
            </div>

            <div className="space-y-24">
              {/* Invoice Processing */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-sm font-normal text-orange-400">Accounts Payable</span>
                  </div>
                  <h3 className="text-3xl font-normal text-white">
                    Automate Invoice Processing
                  </h3>
                  <p className="text-lg font-light text-white/60">
                    AI agents extract data, match to POs, route for approval, and schedule payments—eliminating manual data entry and reducing errors.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Automatically extract invoice data with 99%+ accuracy</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Smart routing based on amount, vendor, and approval rules</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Reduce processing time from hours to minutes</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <InvoiceProcessingMockup />
                </div>
              </div>

              {/* Cash Forecasting */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <CashForecastMockup />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-sm font-normal text-orange-400">Cash Management</span>
                  </div>
                  <h3 className="text-3xl font-normal text-white">
                    Never Run Out of Runway
                  </h3>
                  <p className="text-lg font-light text-white/60">
                    Real-time cash forecasting helps you make informed decisions about hiring, spending, and fundraising before it's too late.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>13-week rolling cash forecast updated daily</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Scenario modeling for burn rate planning</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Alerts when runway drops below thresholds</span>
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
                How Startups Use Senitac
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Pre-Seed to Series A
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Set up proper finance processes from day one without hiring a full-time controller.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Track burn rate automatically</li>
                  <li>• Monthly investor reports</li>
                  <li>• Expense policy enforcement</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Scaling Teams
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Handle 10x growth in transactions without adding finance headcount.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Automated vendor payments</li>
                  <li>• Employee expense reimbursements</li>
                  <li>• Multi-entity accounting</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Fundraising Ready
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Clean books and investor-ready reporting for due diligence.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Automated reconciliations</li>
                  <li>• Audit trail for all transactions</li>
                  <li>• Real-time financial dashboards</li>
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
                Senitac gave us enterprise-grade finance operations with a team of two. We closed our Series A with clean books and zero fire drills.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                <div className="text-left">
                  <div className="text-white font-normal">Sarah Chen</div>
                  <div className="text-white/50 text-sm">Head of Finance, TechStart Inc.</div>
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
                  How quickly can we get started?
                </h3>
                <p className="font-light text-white/60">
                  Most startups are fully operational within 24 hours. Connect your bank account, set approval rules, and start processing invoices the same day.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  Do we need a dedicated finance person?
                </h3>
                <p className="font-light text-white/60">
                  No. Senitac is designed for lean teams. Your founder or office manager can oversee finance operations with minimal time investment.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  Will this work with our accounting software?
                </h3>
                <p className="font-light text-white/60">
                  Yes. Senitac integrates with QuickBooks, Xero, NetSuite, and other popular accounting platforms to keep your books synchronized.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  Is our data secure?
                </h3>
                <p className="font-light text-white/60">
                  Absolutely. Bank-level encryption, SOC 2 Type II certified, and role-based access controls protect your financial data.
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
                Ready to Automate Your Finance Operations?
              </h2>
              <p className="text-lg font-light text-white/70 mb-8 max-w-2xl mx-auto">
                Join hundreds of startups using Senitac to scale efficiently. Start free, no credit card required.
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

export default Startups;
