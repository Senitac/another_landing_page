import { useImagePreloader } from "../hooks/useImagePreloader";

const platformImageUrl = "/senitac_platform.png"; // You can replace with actual screenshot

export const ProblemSection = () => {
  const isImageLoaded = useImagePreloader(platformImageUrl);

  return (
    <section className="relative min-h-screen w-full bg-gradient-hero animate-gradient-slow overflow-hidden font-satoshi flex flex-col justify-center py-24">
      {/* Background glow effects for consistency */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-orange-700/30 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-black/40 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-neutral-900/30 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-orange-900/30 rounded-full blur-[140px] pointer-events-none"></div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMCAwJSAxMCUgLyAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4K')] opacity-20 pointer-events-none"></div>

      <div className="container max-w-6xl mx-auto w-full px-6 md:px-12 relative z-10">
        {/* Problem Statement */}
        <div className="mb-16">
          <h2 className="text-white font-satoshi font-semibold text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight drop-shadow-xl mb-4">
            Your finance team is drowning in <span className="bg-gradient-primary bg-clip-text text-transparent">manual work</span>
          </h2>
          <p className="text-white/70 text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed mb-12 max-w-3xl">
            Re-typing invoices. Chasing receipts. Reconciling transactions across legacy systems. This is the reality for finance teams today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Pain Point 1 */}
            <div className="flex flex-col gap-3">
              <div className="text-orange-500 text-5xl font-bold">60%</div>
              <p className="text-white/90 text-base leading-relaxed font-medium">
                of staff time wasted on data entry
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Instead of strategic work, teams manually move data between systems
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="flex flex-col gap-3">
              <div className="text-orange-500 text-5xl font-bold">Months</div>
              <p className="text-white/90 text-base leading-relaxed font-medium">
                to close books and prepare for audit
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Back-and-forth emails hunting for evidence that should already exist
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="flex flex-col gap-3">
              <div className="text-orange-500 text-5xl font-bold">340K</div>
              <p className="text-white/90 text-base leading-relaxed font-medium">
                accountant shortage by 2025
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Yet the manual work keeps piling up with no end in sight
              </p>
            </div>
          </div>
        </div>

        {/* Platform Showcase */}
        <div className="mb-12">
          <h3 className="text-white font-satoshi font-semibold text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight tracking-tight drop-shadow-xl mb-6">
            What if your books <span className="bg-gradient-primary bg-clip-text text-transparent">closed themselves?</span>
          </h3>

          <p className="text-white/80 text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed mb-8 max-w-3xl">
            Our AI agents connect directly to your data sources — bank accounts, email, invoices, spreadsheets, ERPs — and maintain a continuously-reconciled ledger.
            Every transaction is matched, every receipt is filed, every payment is chased. Automatically.
          </p>

          {/* Video Embed - Clean, no overlays */}
          <div className="w-full aspect-video max-w-5xl rounded-xl overflow-hidden shadow-2xl border-2 border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/80s7QQzwSyo?rel=0&modestbranding=1&vq=hd1080"
              title="Senitac Platform Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </div>
        </div>

        {/* The Difference */}
        <div className="mt-16">
          <h3 className="text-white font-satoshi font-semibold text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight tracking-tight drop-shadow-xl mb-8">
            The <span className="bg-gradient-primary bg-clip-text text-transparent">Senitac</span> difference
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Approach */}
            <div className="bg-neutral-900/20 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-white/90 font-semibold text-lg mb-3">Traditional Firms</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>→ Layer automation <em>after</em> messy data hits the ledger</li>
                <li>→ Manual data entry creates errors at the source</li>
                <li>→ Months of reconciliation before audit</li>
                <li>→ Bookkeeping, tax, and audit are isolated projects</li>
              </ul>
            </div>

            {/* Senitac Approach */}
            <div className="bg-gradient-to-br from-orange-500/15 to-orange-600/5 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-white font-semibold text-lg mb-3">Senitac</h4>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>✓ Start at the source — agents ingest raw data directly</li>
                <li>✓ Continuously reconciled, verifiable from day one</li>
                <li>✓ Instant books, audit trails on demand</li>
                <li>✓ Bookkeeping, tax, audit: simple outputs of one system</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise Grade */}
        <div className="mt-16 text-center pb-12">
          <p className="text-white/60 text-sm font-medium tracking-wider uppercase mb-4">
            Enterprise-grade security
          </p>
          <p className="text-white/80 text-base max-w-2xl mx-auto">
            Bank-level encryption, SOC 2 compliant infrastructure, and full audit trails for every action your AI agents take.
          </p>
        </div>
      </div>

      {/* Seamless gradient transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[hsl(24,30%,8%)] pointer-events-none"></div>
    </section>
  );
};
