export const StatsTickerSection = () => {
  const stats = [
    { label: "UPTIME", value: "99.99%", status: "LIVE" },
    { label: "ENCRYPTION", value: "AES-256", status: "ACTIVE" },
    { label: "TRANSACTIONS", value: "10K+/mo", status: "GROWING" },
    { label: "ACCURACY", value: "99.8%", status: "MATCH" },
    { label: "RECONCILIATION", value: "REAL-TIME", status: "CONTINUOUS" },
    { label: "AI AGENTS", value: "24/7", status: "ACTIVE" },
    { label: "INTEGRATIONS", value: "15+", status: "SYSTEMS" },
    { label: "SUPPORT", value: "24/7", status: "AVAILABLE" },
  ];

  // Duplicate stats for seamless infinite scroll
  const duplicatedStats = [...stats, ...stats];

  return (
    <section className="py-12 border-y border-white/10 relative overflow-hidden">
      {/* Animated ticker */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none z-10"></div>

        <div className="flex animate-slide-left">
          <div className="flex items-center gap-12 px-6 whitespace-nowrap">
            {duplicatedStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="font-mono text-sm sm:text-base text-white font-normal">
                  {stat.value}
                </span>
                <span className="font-mono text-xs sm:text-sm text-green-400">
                  {stat.status}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-12 px-6 whitespace-nowrap">
            {duplicatedStats.map((stat, index) => (
              <div key={`duplicate-${index}`} className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="font-mono text-sm sm:text-base text-white font-normal">
                  {stat.value}
                </span>
                <span className="font-mono text-xs sm:text-sm text-green-400">
                  {stat.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-slide-left {
          animation: slide-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
};
