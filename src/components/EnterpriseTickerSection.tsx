export const EnterpriseTickerSection = () => {
  const stats = [
    { label: "UPTIME", value: "99.99%", status: "LIVE" },
    { label: "ENCRYPTION", value: "AES-256", status: "ACTIVE" },
    { label: "SOC2", value: "TYPE II", status: "CERTIFIED" },
    { label: "TRANSACTIONS", value: "1.2M/day", status: "+15%" },
    { label: "ACCURACY", value: "99.8%", status: "MATCH" },
    { label: "ACCOUNTANTS", value: "LICENSED", status: "IN-LOOP" },
    { label: "INTEGRATIONS", value: "50+", status: "ACTIVE" },
    { label: "SUPPORT", value: "24/7", status: "LIVE" },
  ];

  return (
    <section className="py-10 sm:py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#222224] rounded-2xl px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16 overflow-hidden">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-white">
              Enterprise-grade security.
              <br />
              CPA-backed accuracy.
            </h2>
          </div>

          {/* Scrolling Ticker */}
          <div className="relative h-16 sm:h-20 mb-12 sm:mb-16 -mx-6 sm:-mx-10 lg:-mx-16 overflow-hidden bg-zinc-900/50 border-y border-zinc-800">
            <div className="absolute inset-0 flex items-center">
              {/* First set */}
              <div className="flex animate-scroll-left whitespace-nowrap">
                {[...stats, ...stats].map((stat, index) => (
                  <div key={index} className="flex items-center px-8">
                    <div className="flex items-center space-x-3 mr-12">
                      <span className="font-mono text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                        {stat.label}
                      </span>
                      <span className="font-mono text-sm sm:text-base text-white font-medium">
                        {stat.value}
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-emerald-400">
                        {stat.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-medium text-white">
              Why businesses trust Senitac
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: "🏛️",
                title: "Licensed CPAs review every close",
                desc: "AI handles automation. Expert accountants ensure accuracy.",
              },
              {
                icon: "🔒",
                title: "Bank-level 256-bit encryption",
                desc: "SOC 2 Type II certified. Your data is always protected.",
              },
              {
                icon: "⚡",
                title: "Real-time reconciliation",
                desc: "Continuous matching and categorization, not month-end panic.",
              },
              {
                icon: "🔗",
                title: "Connect to any system",
                desc: "QuickBooks, Xero, NetSuite—we integrate where you work.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-6 rounded-xl p-5 sm:p-6 transition-all hover:brightness-110 bg-[#2A2A2C]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-300 -tracking-[0.02em]">
                  <span className="font-semibold text-white">{feature.title}.</span>{" "}
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
};
