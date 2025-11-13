import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Add email capture logic here
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-hero animate-gradient-slow overflow-hidden font-satoshi flex items-center">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-orange-700/30 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-black/40 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-neutral-900/30 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-orange-900/30 rounded-full blur-[140px] pointer-events-none"></div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMCAwJSAxMCUgLyAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4K')] opacity-20 pointer-events-none"></div>

      {/* Main content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              YC F25 • AI Accounting
            </div>

            {/* Headline */}
            <h1 className="font-semibold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight text-white">
              The Full-Stack
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Accountancy
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
              AI agents that pull raw data from your systems and turn it into continuously-reconciled books. Automatically.
            </p>

            {/* Email Capture Form */}
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 px-4 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-orange-500"
                />
                <Button
                  type="submit"
                  className="h-12 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                No credit card required • Free demo available
              </p>
            </form>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                ✓ <span>99%+ accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                ✓ <span>Real-time reconciliation</span>
              </div>
              <div className="flex items-center gap-2">
                ✓ <span>SOC 2 certified</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:block hidden">
            {/* Placeholder for dashboard mockup */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-black p-6">
              <div className="space-y-4">
                {/* Mock terminal header */}
                <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-400 ml-2">Senitac Dashboard</span>
                </div>

                {/* Mock content - Transaction flow */}
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Live Transactions</span>
                      <span className="text-xs text-green-400">● Processing</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Bank Transfer • Chase</span>
                        <span className="text-white">$2,450.00</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Invoice #1234 • Stripe</span>
                        <span className="text-white">$890.00</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Expense • AWS</span>
                        <span className="text-white">-$245.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                      <span className="text-sm text-orange-300">AI Agent Activity</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Categorized 247 transactions • Matched 99.6% • Flagged 1 for review
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-400 mb-1">Reconciliation</div>
                      <div className="text-lg font-semibold text-white">99.8%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-400 mb-1">Processing</div>
                      <div className="text-lg font-semibold text-white">Real-time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};