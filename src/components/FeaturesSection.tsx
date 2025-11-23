import { Receipt, ArrowLeftRight, FileCheck, Vault, Brain, Zap } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Receipt,
      title: "Accounts Payable Automation",
      description: "AI agents automatically code, approve, and process invoices. Eliminate manual data entry and reduce payment processing time by 90%."
    },
    {
      icon: ArrowLeftRight,
      title: "Accounts Receivable Intelligence",
      description: "Automated payment tracking, reconciliation, and follow-ups. Know exactly who owes what, when, and get paid faster."
    },
    {
      icon: FileCheck,
      title: "Continuous Reconciliation",
      description: "Real-time ledger reconciliation from bank transactions, invoices, and receipts. Always audit-ready with complete evidence trails."
    },
    {
      icon: Vault,
      title: "Treasury Management",
      description: "Intelligent cash flow optimization. Automatic classification, forecasting, and insights for better financial decisions."
    },
    {
      icon: Brain,
      title: "AI-Powered Accounting",
      description: "Multi-agent system that learns your business rules, handles exceptions, and continuously improves accuracy."
    },
    {
      icon: Zap,
      title: "Instant Financial Reporting",
      description: "From raw transactions to financial statements in real-time. No month-end close delays, no manual consolidation."
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-hero animate-gradient-slow overflow-hidden font-satoshi flex flex-col justify-start py-24">
      {/* Background glow effects for consistency */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-orange-700/30 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-black/40 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-neutral-900/30 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-orange-900/30 rounded-full blur-[140px] pointer-events-none"></div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMCAwJSAxMCUgLyAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4K')] opacity-20 pointer-events-none"></div>

      <div className="container max-w-6xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-satoshi font-semibold text-[clamp(2rem,4vw,3rem)] text-white leading-tight tracking-tight drop-shadow-xl mb-4">
            Complete Financial Operations
          </h2>
          <p className="text-white/80 text-[clamp(1rem,1.2vw,1.2rem)] max-w-3xl mx-auto" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
            End-to-end automation powered by specialized AI agents that handle the entire financial workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-600/20 transition-all duration-300">
                  <Icon className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
