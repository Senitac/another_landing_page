import { Calendar } from "lucide-react";
import { useImagePreloader } from "../hooks/useImagePreloader";

const imageUrl = "/founder_pic.JPG";

export const AboutSection = () => {
  const isImageLoaded = useImagePreloader(imageUrl);

  return (
    <section className="relative min-h-screen w-full bg-gradient-hero animate-gradient-slow overflow-hidden font-satoshi flex flex-col justify-start" style={{ minHeight: '100vh' }}>
      {/* Background glow effects for consistency */}
      {/* Removed or reduced top-left glow */}
      {/* <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-[180px] pointer-events-none"></div> */}
      {/* Main glow moved to bottom right, larger and darker */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-orange-700/30 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      {/* New dark swirls for depth */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-black/40 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-neutral-900/30 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-orange-900/30 rounded-full blur-[140px] pointer-events-none"></div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMCAwJSAxMCUgLyAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4K')] opacity-20 pointer-events-none"></div>
      {/* Main content grid container with top padding for nav */}
      <div className="container max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-12 pt-24 md:pt-28 px-6 md:px-12">
        <div className="col-span-1 md:col-span-11 flex flex-col gap-2">
          <h2 className="text-white font-satoshi font-semibold text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight drop-shadow-xl text-left mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="mb-6">
           {isImageLoaded ? (
              <img
                src={imageUrl}
                alt="Senitac Founders"
                className="w-full max-w-2xl rounded-xl shadow-2xl object-cover border-2 border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-orange-500/25 animate-fade-in"
                style={{ aspectRatio: '16/7', objectPosition: 'center left' }}
              />
            ) : (
              <div className="w-full max-w-2xl rounded-xl bg-neutral-800/50 animate-pulse" style={{ aspectRatio: '16/7' }} />
            )}
          </div>
          <p className="text-white/90 text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed drop-shadow-lg mb-4" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
            We're Nitanshu and Sebastian, the founders of <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">Senitac</span>.
          </p>

          <div className="space-y-5 mb-8">
            <div>
              <h3 className="text-white font-semibold text-xl mb-2" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent">The spark</span>
              </h3>
              <p className="text-white/80 text-[clamp(0.95rem,1.15vw,1.05rem)] leading-relaxed" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                We met on day one of our MSc in Machine Learning at UCL. Between classes, we'd spend hours building AI projects together — from evolutionary algorithms creating AI agents to experimenting with autonomous systems.
                But the real turning point came when we watched a friend at a Big 4 accounting firm waste an entire afternoon chasing missing receipts and re-typing invoices across legacy systems.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-xl mb-2" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent">Going deeper</span>
              </h3>
              <p className="text-white/80 text-[clamp(0.95rem,1.15vw,1.05rem)] leading-relaxed" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                To truly understand the problem, Nitanshu went undercover at Fuse Energy and saw it firsthand: 60% of staff time spent on repetitive data entry.
                We talked to 30+ accountants and finance teams. The pattern was clear — a global shortage of accountants, yet mountains of manual work that shouldn't exist.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-xl mb-2" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent">The solution</span>
              </h3>
              <p className="text-white/80 text-[clamp(0.95rem,1.15vw,1.05rem)] leading-relaxed" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                Most firms layer automation after messy data has already hit the ledger. We saw a different path: start at the source.
                Our AI agents plug directly into raw data feeds — bank transactions, invoices, emails, spreadsheets — and maintain continuously-reconciled, audit-ready ledgers.
                No more re-typing. No more month-long reconciliations. No more isolated bookkeeping, tax, and audit projects.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-xl mb-2" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent">Our commitment</span>
              </h3>
              <p className="text-white/80 text-[clamp(0.95rem,1.15vw,1.05rem)] leading-relaxed" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
                We're not just building software. We have an in-house accountant who serves our clients and helps ground every agent workflow in real accounting standards.
                Our goal: enable a single accountant to handle 20× more clients. We're chasing this problem for the next decade — transforming accounting from a bottleneck into a real-time advantage.
              </p>
            </div>
          </div>
          <a
              href="https://calendly.com/nitanshu15/30min" // Replace with your actual Calendly link
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-8 py-4 mb-8 text-base shadow-glow font-semibold whitespace-nowrap w-fit bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transform hover:scale-105"
              style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}
            >
              Talk to us
              <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};