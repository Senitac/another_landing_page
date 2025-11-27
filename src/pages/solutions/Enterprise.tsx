import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Globe, Lock, Network, Workflow } from "lucide-react";
import { MonthEndCloseMockup } from "@/components/mockups/MonthEndCloseMockup";
import { BudgetVarianceMockup } from "@/components/mockups/BudgetVarianceMockup";

const Enterprise = () => {
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
                <span className="text-sm font-normal text-orange-400">For Enterprise</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
                Finance Automation at
                <span className="block mt-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Enterprise Scale
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-light text-white/70 max-w-2xl mx-auto">
                Drive efficiency across global operations with AI-powered automation, enterprise-grade security, and seamless ERP integration. Transform finance from cost center to strategic advantage.
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
                Built for Global Finance Teams
              </h2>
              <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                The platform trusted by Fortune 1000 finance organizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Global Operations
                </h3>
                <p className="font-light text-white/60">
                  Support 100+ countries, multi-currency, multi-GAAP, and complex international structures.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Enterprise Security
                </h3>
                <p className="font-light text-white/60">
                  SOC 2 Type II, ISO 27001, GDPR compliant. SSO, advanced encryption, and granular access controls.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Deep Integrations
                </h3>
                <p className="font-light text-white/60">
                  Native connections to SAP, Oracle, Workday, and 200+ enterprise systems via API.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">
                  Infinite Scalability
                </h3>
                <p className="font-light text-white/60">
                  Process millions of transactions, support thousands of users, scale without performance degradation.
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
                Enterprise-Grade Capabilities
              </h2>
              <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
                Transform complex processes with AI and automation
              </p>
            </div>

            <div className="space-y-24">
              {/* Consolidated Close */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-sm font-normal text-orange-400">Financial Close</span>
                  </div>
                  <h3 className="text-3xl font-normal text-white">
                    Consolidated Close Automation
                  </h3>
                  <p className="text-lg font-light text-white/60">
                    Close multiple entities across regions faster with automated consolidation, intercompany eliminations, and variance analysis.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Multi-entity consolidation with automated eliminations</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Real-time close status tracking across all entities</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Reduce close time by 50% or more</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <MonthEndCloseMockup />
                </div>
              </div>

              {/* Budget Performance */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <BudgetVarianceMockup />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                    <span className="text-sm font-normal text-orange-400">Performance Management</span>
                  </div>
                  <h3 className="text-3xl font-normal text-white">
                    Executive Performance Insights
                  </h3>
                  <p className="text-lg font-light text-white/60">
                    Real-time dashboards and AI-powered analytics give leadership instant visibility into performance across the organization.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Board-ready executive dashboards</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Predictive analytics and scenario modeling</span>
                    </li>
                    <li className="flex items-start gap-3 font-light text-white/70">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span>Drill-down from summary to transaction detail</span>
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
                How Enterprises Use Senitac
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Global Shared Services
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Centralize and standardize finance operations across regions for maximum efficiency.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Global process standardization</li>
                  <li>• Centralized AP/AR hubs</li>
                  <li>• Multi-language & multi-currency</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  Digital Transformation
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Modernize legacy finance processes as part of enterprise-wide transformation initiatives.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Replace manual processes</li>
                  <li>• ERP enhancement layer</li>
                  <li>• Change management support</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-normal text-white mb-3">
                  M&A Integration
                </h3>
                <p className="font-light text-white/60 mb-4">
                  Rapidly integrate acquired companies and standardize processes post-merger.
                </p>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>• Fast acquisition onboarding</li>
                  <li>• Multi-system data aggregation</li>
                  <li>• Consolidated reporting</li>
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
                Senitac processes over 50,000 invoices monthly across 35 countries with 99.8% accuracy. Our finance team now focuses on strategy instead of data entry.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                <div className="text-left">
                  <div className="text-white font-normal">David Martinez</div>
                  <div className="text-white/50 text-sm">SVP of Finance, GlobalCorp</div>
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
                  How does Senitac integrate with our existing ERP?
                </h3>
                <p className="font-light text-white/60">
                  We offer native integrations with SAP, Oracle, Workday, Microsoft Dynamics, and other enterprise systems. Our API-first architecture enables custom integrations for proprietary systems.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  What is the typical implementation timeline?
                </h3>
                <p className="font-light text-white/60">
                  Enterprise implementations range from 3-6 months depending on scope and complexity. We use a phased approach to deliver value incrementally while minimizing disruption.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  How do you ensure data security and compliance?
                </h3>
                <p className="font-light text-white/60">
                  We offer private cloud deployment, SSO/SAML integration, field-level encryption, and comprehensive audit trails for SOX compliance.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-normal text-white mb-2">
                  What level of support do enterprise customers receive?
                </h3>
                <p className="font-light text-white/60">
                  Enterprise customers receive dedicated account teams, 24/7 priority support, custom SLAs, quarterly business reviews, and access to our product roadmap input process.
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
                Ready to Transform Enterprise Finance?
              </h2>
              <p className="text-lg font-light text-white/70 mb-8 max-w-2xl mx-auto">
                Join leading global organizations using Senitac to drive efficiency and strategic value.
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
                  Contact Sales
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

export default Enterprise;
