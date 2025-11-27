import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, Users, FileCheck, TrendingUp } from "lucide-react";
import { InvoiceProcessingMockup } from "@/components/mockups/InvoiceProcessingMockup";
import { MonthEndCloseMockup } from "@/components/mockups/MonthEndCloseMockup";

const ProfessionalServices = () => {
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
                <span className="text-sm font-normal text-orange-400">For Professional Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
                Finance Operations for
                <span className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Client-Centric Businesses
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-light text-white/70 max-w-2xl mx-auto">
                Track billable time, manage client expenses, and maintain project profitability with automation built for consulting, legal, accounting, and other professional services firms.
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
                Built for Project-Based Billing
              </h2>
              <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                Automate the unique financial workflows of professional services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Time & Expense Tracking
                </h3>
                <p className="font-light text-white/60">
                  Seamlessly capture billable hours and expenses, automatically sync to client invoices.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Project Profitability
                </h3>
                <p className="font-light text-white/60">
                  Track revenue, costs, and margins by client, project, and engagement in real-time.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Automated Invoicing
                </h3>
                <p className="font-light text-white/60">
                  Generate client invoices automatically from time entries, expenses, and retainers.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Utilization Tracking
                </h3>
                <p className="font-light text-white/60">
                  Monitor billable utilization rates by team member, practice area, and service line.
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
                Streamline Client Billing & Collections
              </h2>
              <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                Get paid faster and track project performance
              </p>
            </div>

            <div className="space-y-24">
              {/* Client Billing */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-sm font-normal text-orange-400">Billing Automation</span>
                  </div>
                  <h3 className="text-3xl font-normal text-white">
                    From Time Entry to Invoice
                  </h3>
                  <p className="text-lg font-light text-white/60">
                    Automatically generate accurate client invoices from billable time, expenses, and milestone completions—no manual data entry required.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Sync with time tracking tools (Harvest, Toggl, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Support for hourly, fixed-fee, and retainer billing</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Customizable invoice templates by client</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <InvoiceProcessingMockup />
                </div>
              </div>

              {/* Project Tracking */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <MonthEndCloseMockup />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-sm font-normal text-orange-400">Project Management</span>
                  </div>
                  <h3 className="text-3xl font-normal text-white">
                    Project Budgets & Burn Rates
                  </h3>
                  <p className="text-lg font-light text-white/60">
                    Track time and expenses against project budgets in real-time. Identify scope creep and budget overruns before they impact profitability.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Budget vs. actual tracking by project phase</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Burn rate alerts and forecast-to-complete</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Real-time project margin analysis</span>
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
                How Professional Services Firms Use Senitac
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Consulting Firms
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Track engagement profitability, manage T&E reimbursements, and automate client billing cycles.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Project-based revenue recognition</li>
                  <li>• Consultant utilization tracking</li>
                  <li>• Multi-phase project billing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Law Firms
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Handle trust accounting, matter-based tracking, and complex billing arrangements with ease.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Matter/case tracking</li>
                  <li>• IOLTA/trust account management</li>
                  <li>• Billable hour optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Agencies & Creative Shops
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Manage retainers, track project profitability, and automate recurring client billing.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Retainer management & drawdown</li>
                  <li>• Campaign/project profitability</li>
                  <li>• Recurring monthly billing</li>
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
                Senitac reduced our billing cycle from 10 days to 2 days. Our consultants love it, our clients get invoices faster, and we improved DSO by 40%.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                <div className="text-left">
                  <div className="text-white font-normal">Lisa Thompson</div>
                  <div className="text-white/50 text-sm">Managing Partner, Strategic Advisors LLC</div>
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
                  Which time tracking tools does Senitac integrate with?
                </h3>
                <p className="font-light text-white/60">
                  Senitac integrates with Harvest, Toggl, Clockify, TimeCamp, and other popular time tracking platforms. Billable hours sync automatically to generate accurate invoices.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  Can you handle different billing methods?
                </h3>
                <p className="font-light text-white/60">
                  Yes. Senitac supports hourly billing, fixed-fee projects, milestone-based billing, retainers, and blended/mixed billing arrangements—all on the same platform.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  How do you track project profitability?
                </h3>
                <p className="font-light text-white/60">
                  Senitac tracks all project revenue and costs (billable time, contractor fees, expenses) in real-time, giving you instant visibility into project margins and utilization rates.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  What about trust accounting for law firms?
                </h3>
                <p className="font-light text-white/60">
                  Senitac provides compliant trust account management with proper IOLTA handling, matter-based tracking, and automated three-way reconciliation to meet ethics requirements.
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
                Ready to Streamline Your Professional Services Finance?
              </h2>
              <p className="text-lg font-light text-white/70 mb-8 max-w-2xl mx-auto">
                Join professional services firms using Senitac to bill faster, track profitability, and get paid on time.
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

export default ProfessionalServices;
