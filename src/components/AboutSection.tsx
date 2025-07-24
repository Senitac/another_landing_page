import { Calendar} from "lucide-react";



export const AboutSection = () => {
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
            <img
              src={"/random.jpeg"}
              alt="Senitac Founders"
              className="w-full max-w-2xl rounded-xl shadow-lg object-cover"
              style={{ aspectRatio: '16/7', objectPosition: 'center left' }}
            />
          </div>
          <p className="text-white text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed drop-shadow-lg" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
            Hi,
          </p>
          <p className="text-white text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed drop-shadow-lg mb-1" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
            We're the founders of <span className="bg-gradient-primary bg-clip-text text-transparent">Senitac</span>, a full-stack, AI accountancy. Our team of AI agents books entries, reconciles across systems, runs the general ledger, chases down missing data + missing payments, and produces evidence trails that external auditors can query in <span className="bg-gradient-primary bg-clip-text text-transparent">minutes</span>, not months. And that is just the <span className="bg-gradient-primary bg-clip-text text-transparent">beginning</span>.   
          </p>
          <p className="text-white text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed drop-shadow-lg mb-1" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
            Ultimately what we are solving is an data problem. <span className="bg-gradient-primary bg-clip-text text-transparent">Data is king</span>. It is what individuals, businesses, and industries run on - yet a lot of it is still re-typed, re-emailed, re-checked manually or is simply just missing. It is a huge, messy and high-friction problem that is costing time, money and, worst, our confidence 
            (There's literally a $243 billion audit industry, to make sure we have the right information.) <span className="bg-gradient-primary bg-clip-text text-transparent">Why not solve it directly at the root? </span> Making all downstream tasks a simple click of a button.
          </p>
          <p className="text-white text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed drop-shadow-lg mb-1" style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}>
            And that is why we are reimagining accounting by creating a system that understands your business processes and proactively ensures <span className="bg-gradient-primary bg-clip-text text-transparent"> accurate, transparent, and free-flowing data.</span>
          </p>
          <a
              href="https://calendly.com/nitanshu15/30min" // Replace with your actual Calendly link
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-8 py-4 mb-8 text-base shadow-glow font-semibold whitespace-nowrap w-fit bg-primary text-primary-foreground flex items-center hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}
            >
              Get to know more
              <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}